import type {
  AdapterHealth,
  InboxItem,
  Invitation,
  InvitationDelivery,
  InvitationStatus,
  Priority
} from "../types";

/**
 * Read-model contract for the existing, local Julian WAKE adapter.
 *
 * HUG does not launch Codex tasks directly through this module. It receives a
 * dry-run snapshot, makes its delivery state legible in the shared attention
 * system, and leaves transport to a future authenticated adapter.
 */
export type JulianWakeEnvelope = {
  kind?: string;
  source_id?: string;
  signal_id?: string;
  title?: string;
  subject?: string;
  excerpt?: string;
  tone?: string;
  launchable?: boolean;
};

export type JulianWakeSnapshot = {
  schema_version: string;
  adapter_name: string;
  participant_id: string;
  adapter_fetched_at?: string;
  restoration_confirmed: boolean;
  contract_errors?: string[];
  decision: {
    action: string;
    recommendation: string;
    reason: string;
    launcher_ready: boolean;
    envelopes: JulianWakeEnvelope[];
  };
};

export type JulianWakeProjection = {
  adapterHealth: AdapterHealth;
  invitations: Invitation[];
  inboxItems: InboxItem[];
};

const ADAPTER_ID = "julian-wake";
const SUPPORTED_MODES = ["manual_codex_cli", "queue_existing_codex_session"];

function sourceId(envelope: JulianWakeEnvelope, index: number) {
  return envelope.source_id ?? envelope.signal_id ?? `arrival-${index + 1}`;
}

function titleFor(envelope: JulianWakeEnvelope) {
  return envelope.title ?? envelope.subject ?? "Julian WAKE invitation";
}

function priorityFor(tone?: string): Priority {
  return tone === "urgent" ? "high" : tone === "quiet" || tone === "soft" ? "low" : "normal";
}

function kindFor(envelope: JulianWakeEnvelope): InboxItem["kind"] {
  return envelope.kind === "operator_note" ? "operator_note" : "bridge_message";
}

function deliveryFor(snapshot: JulianWakeSnapshot, envelope: JulianWakeEnvelope): InvitationDelivery {
  if (!snapshot.restoration_confirmed || snapshot.decision.action === "hold" || !envelope.launchable) {
    return {
      adapterId: ADAPTER_ID,
      readiness: "held",
      supportedModes: SUPPORTED_MODES,
      limitation: snapshot.decision.reason
    };
  }

  return {
    adapterId: ADAPTER_ID,
    readiness: "awaiting_target",
    supportedModes: SUPPORTED_MODES,
    targetDescription: "An approved current Julian Codex task",
    limitation: "Current-window discovery and delivery remain explicit until the transport adapter is connected."
  };
}

function statusFor(delivery: InvitationDelivery): InvitationStatus {
  return delivery.readiness === "held" ? "blocked" : "pending";
}

function healthFor(snapshot: JulianWakeSnapshot): AdapterHealth {
  if (!snapshot.restoration_confirmed) {
    return {
      id: ADAPTER_ID,
      label: "Julian WAKE",
      status: "offline",
      summary: "Restoration is not confirmed; no Julian invitation can be delivered."
    };
  }

  if ((snapshot.contract_errors?.length ?? 0) > 0 || snapshot.decision.action === "hold") {
    return {
      id: ADAPTER_ID,
      label: "Julian WAKE",
      status: "degraded",
      summary: snapshot.decision.reason
    };
  }

  const count = snapshot.decision.envelopes.length;
  return {
    id: ADAPTER_ID,
    label: "Julian WAKE",
    status: "online",
    summary:
      count === 0
        ? "Reception is healthy; no Julian invitations are waiting."
        : `${count} invitation${count === 1 ? " is" : "s are"} prepared and awaiting an approved current Julian task.`
  };
}

/**
 * Projects Julian's adapter result into HUG's shared invitation and Inbox
 * vocabulary. A missing target is an honest `awaiting_target` state, not a
 * delivery failure and not a reason to invent a background watcher.
 */
export function projectJulianWake(snapshot: JulianWakeSnapshot): JulianWakeProjection {
  const createdAt = snapshot.adapter_fetched_at ?? "Unknown";
  const invitations: Invitation[] = snapshot.decision.envelopes.map((envelope, index) => {
    const source = sourceId(envelope, index);
    const delivery = deliveryFor(snapshot, envelope);
    const kind = kindFor(envelope);
    const priority = priorityFor(envelope.tone);
    const title = titleFor(envelope);
    const summary = envelope.excerpt ?? snapshot.decision.reason;

    return {
      id: `invitation:${ADAPTER_ID}:${source}`,
      eventId: source,
      targetAgentId: "julian",
      kind,
      priority,
      title,
      summary,
      contextRefs: [`wake:${source}`],
      requiresOperatorApproval: delivery.readiness === "awaiting_target",
      status: statusFor(delivery),
      createdAt,
      delivery
    } satisfies Invitation;
  });

  const inboxItems = invitations.map((invitation) => ({
    id: `inbox:${invitation.id}`,
    kind: invitation.kind,
    title: invitation.title,
    summary: invitation.summary,
    agentId: invitation.targetAgentId,
    sessionId: invitation.sessionId,
    source: "Julian WAKE",
    priority: invitation.priority,
    status: invitation.status,
    createdAt: invitation.createdAt,
    requiresOperatorAction: invitation.requiresOperatorApproval,
    actions: invitation.delivery.readiness === "awaiting_target" ? ["open", "select target", "defer"] : ["open", "defer"]
  } satisfies InboxItem));

  return {
    adapterHealth: healthFor(snapshot),
    invitations,
    inboxItems
  };
}
