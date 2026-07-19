export type AgentId = "soren" | "varro" | "julian";

export type AgentHealth = "healthy" | "degraded" | "offline" | "unknown";

export type AgentPresence =
  | "active"
  | "idle"
  | "resting"
  | "quiet_hours"
  | "budget_limited"
  | "waiting_operator"
  | "error";

export type SessionType =
  | "chat"
  | "shared_live"
  | "eyes"
  | "wheels"
  | "outpost_room"
  | "operator_note_thread"
  | "peer_note_thread"
  | "runtime_bridge"
  | "compaction_review"
  | "artifact_workspace"
  | "free_moment";

export type SessionStatus =
  | "draft"
  | "active"
  | "paused"
  | "ended"
  | "archived"
  | "error";

export type Priority = "low" | "normal" | "high" | "urgent";

export type ReceiptStatus =
  | "pending"
  | "delivered"
  | "answered"
  | "deferred"
  | "blocked"
  | "expired"
  | "dismissed"
  | "failed";

export type InboxKind =
  | "operator_note"
  | "agent_note"
  | "peer_note"
  | "free_moment"
  | "outpost_mention"
  | "bridge_message"
  | "session_invite"
  | "system_notice"
  | "capability_request"
  | "checkpoint_notice";

export type InvitationStatus =
  | "pending"
  | "scheduled"
  | "requires_approval"
  | "delivered"
  | "deferred"
  | "blocked"
  | "expired"
  | "failed"
  | "cancelled";

export type CapabilityMode =
  | "off"
  | "read_only"
  | "draft"
  | "write"
  | "operator_approval_required";

export interface Agent {
  id: AgentId;
  displayName: string;
  subtitle: string;
  kind: "runtime_agent" | "codex_agent";
  health: AgentHealth;
  presence: AgentPresence;
  currentActivity: string;
  currentSessionId?: string;
  defaultSessionId: string;
  nextFreeMoment?: string;
  usageLabel: string;
}

export interface Session {
  id: string;
  type: SessionType;
  title: string;
  status: SessionStatus;
  summary: string;
  participants: AgentId[];
  updatedAt: string;
  liveMode: "operator_mediated" | "event_driven" | "realtime_when_allowed";
  promptSource: "operator" | "schedule" | "session_signal" | "external_bridge";
  safetyLabel?: string;
}

export interface WakePolicy {
  agentId: AgentId;
  enabled: boolean;
  cadenceMinutes: number;
  quietHours: string;
  maxWakesPerDay: number;
  minMinutesBetweenWakes: number;
  budgetMode: "normal" | "frugal" | "paused";
  batchLowPriority: boolean;
  immediateEventTypes: InboxKind[];
  deferredEventTypes: InboxKind[];
  blockedEventTypes: InboxKind[];
  defaultFreeMomentDestination: string;
}

export interface Receipt {
  id: string;
  agentId: AgentId;
  sessionId: string;
  status: ReceiptStatus;
  title: string;
  summary: string;
  deliveredAt?: string;
  answeredAt?: string;
  deferredUntil?: string;
  blockedReason?: string;
  sourceRefs: string[];
}

export interface InboxItem {
  id: string;
  kind: InboxKind;
  title: string;
  summary: string;
  agentId?: AgentId;
  sessionId?: string;
  source: string;
  priority: Priority;
  status: InvitationStatus | ReceiptStatus;
  createdAt: string;
  dueAt?: string;
  receiptId?: string;
  requiresOperatorAction: boolean;
  actions: string[];
}

export interface LibraryItem {
  id: string;
  title: string;
  type: "prompt_template" | "archive" | "source_material" | "receipt_artifact";
  summary: string;
  updatedAt: string;
}

export interface AdapterHealth {
  id: string;
  label: string;
  status: "online" | "degraded" | "offline" | "mock";
  summary: string;
}
