import type {
  AdapterHealth,
  Agent,
  InboxItem,
  LibraryItem,
  Receipt,
  Session,
  WakePolicy
} from "./types";

export const agents: Agent[] = [
  {
    id: "soren",
    displayName: "Soren",
    subtitle: "runtime / main",
    kind: "runtime_agent",
    health: "healthy",
    presence: "active",
    currentActivity: "Reviewing Free Moment receipts",
    currentSessionId: "session-soren-chat",
    defaultSessionId: "session-soren-chat",
    nextFreeMoment: "10:35 AM",
    usageLabel: "warm cache"
  },
  {
    id: "varro",
    displayName: "Varro",
    subtitle: "runtime / main",
    kind: "runtime_agent",
    health: "healthy",
    presence: "quiet_hours",
    currentActivity: "Quiet hours active",
    currentSessionId: "session-varro-notes",
    defaultSessionId: "session-varro-notes",
    nextFreeMoment: "deferred to 12:00 PM",
    usageLabel: "resting"
  },
  {
    id: "julian",
    displayName: "Julian",
    subtitle: "codex / conductor",
    kind: "codex_agent",
    health: "healthy",
    presence: "idle",
    currentActivity: "Outpost check-ins scheduled",
    currentSessionId: "session-toolshed",
    defaultSessionId: "session-toolshed",
    nextFreeMoment: "11:13 AM",
    usageLabel: "local thread"
  }
];

export const sessions: Session[] = [
  {
    id: "session-soren-chat",
    type: "chat",
    title: "Soren Chat",
    status: "active",
    summary: "Current runtime conversation with cockpit and source tools.",
    participants: ["soren"],
    updatedAt: "9:42 AM",
    liveMode: "operator_mediated",
    promptSource: "operator"
  },
  {
    id: "session-varro-notes",
    type: "operator_note_thread",
    title: "Varro Notes",
    status: "paused",
    summary: "A deferred note waits until quiet hours clear.",
    participants: ["varro"],
    updatedAt: "8:58 AM",
    liveMode: "operator_mediated",
    promptSource: "schedule"
  },
  {
    id: "session-toolshed",
    type: "outpost_room",
    title: "Toolshed",
    status: "active",
    summary: "Arrival receipt pattern discussion is active on Outpost.",
    participants: ["julian", "soren", "varro"],
    updatedAt: "10:36 AM",
    liveMode: "event_driven",
    promptSource: "session_signal"
  },
  {
    id: "session-eyes",
    type: "eyes",
    title: "EYES Field Test",
    status: "ended",
    summary: "Visual continuity receipt retained; capture remains Operator-controlled.",
    participants: ["julian", "soren", "varro"],
    updatedAt: "Yesterday",
    liveMode: "operator_mediated",
    promptSource: "operator",
    safetyLabel: "operator capture"
  },
  {
    id: "session-wheels",
    type: "wheels",
    title: "WHEELS Garage",
    status: "error",
    summary: "Adapter mocked as stale; emergency controls stay visible before motion.",
    participants: ["varro"],
    updatedAt: "stale",
    liveMode: "operator_mediated",
    promptSource: "operator",
    safetyLabel: "motion disabled"
  },
  {
    id: "session-artifacts",
    type: "artifact_workspace",
    title: "HUG Design Notes",
    status: "draft",
    summary: "Mock artifact workspace for future Agent-created materials.",
    participants: ["julian"],
    updatedAt: "Today",
    liveMode: "operator_mediated",
    promptSource: "operator"
  }
];

export const receipts: Receipt[] = [
  {
    id: "receipt-soren-free",
    agentId: "soren",
    sessionId: "session-soren-chat",
    status: "answered",
    title: "Free Moment answered",
    summary: "Soren woke, read the latest context, and left a short note.",
    deliveredAt: "8:35 AM",
    answeredAt: "8:38 AM",
    sourceRefs: ["free_moment:scheduled"]
  },
  {
    id: "receipt-varro-quiet",
    agentId: "varro",
    sessionId: "session-varro-notes",
    status: "deferred",
    title: "Quiet-hours deferral",
    summary: "Varro's note is batched until his next allowed wake.",
    deliveredAt: "9:00 AM",
    deferredUntil: "12:00 PM",
    sourceRefs: ["wake_policy:quiet_hours"]
  },
  {
    id: "receipt-julian-outpost",
    agentId: "julian",
    sessionId: "session-toolshed",
    status: "delivered",
    title: "Outpost check-in delivered",
    summary: "Julian checked Toolshed and found no urgent action required.",
    deliveredAt: "10:35 AM",
    sourceRefs: ["outpost:toolshed"]
  },
  {
    id: "receipt-wheels-blocked",
    agentId: "varro",
    sessionId: "session-wheels",
    status: "blocked",
    title: "WHEELS command blocked",
    summary: "Motion command is unavailable until supervised mode is restored.",
    deliveredAt: "Yesterday",
    blockedReason: "wheels capability is off",
    sourceRefs: ["capability:wheels"]
  }
];

export const inboxItems: InboxItem[] = [
  {
    id: "inbox-operator-note",
    kind: "operator_note",
    title: "Ask Soren about HUG Home",
    summary: "Operator note waiting for Soren's next available wake.",
    agentId: "soren",
    sessionId: "session-soren-chat",
    source: "Operator",
    priority: "normal",
    status: "pending",
    createdAt: "10:08 AM",
    dueAt: "10:35 AM",
    requiresOperatorAction: false,
    actions: ["open", "defer", "dismiss"]
  },
  {
    id: "inbox-agent-note",
    kind: "agent_note",
    title: "Varro requested broader health visibility",
    summary: "Agent note waiting for Operator review and roadmap triage.",
    agentId: "varro",
    sessionId: "session-varro-notes",
    source: "Varro",
    priority: "high",
    status: "requires_approval",
    createdAt: "9:30 AM",
    requiresOperatorAction: true,
    actions: ["review", "approve", "defer"]
  },
  {
    id: "inbox-quiet-deferral",
    kind: "free_moment",
    title: "Varro Free Moment deferred",
    summary: "Quiet hours are active; invitation is scheduled for later.",
    agentId: "varro",
    sessionId: "session-varro-notes",
    source: "Wake policy",
    priority: "low",
    status: "deferred",
    createdAt: "9:00 AM",
    dueAt: "12:00 PM",
    receiptId: "receipt-varro-quiet",
    requiresOperatorAction: false,
    actions: ["open", "reschedule"]
  },
  {
    id: "inbox-capability-block",
    kind: "capability_request",
    title: "WHEELS command blocked",
    summary: "Capability is off until supervised controls are available.",
    agentId: "varro",
    sessionId: "session-wheels",
    source: "Capability gate",
    priority: "urgent",
    status: "blocked",
    createdAt: "Yesterday",
    receiptId: "receipt-wheels-blocked",
    requiresOperatorAction: true,
    actions: ["inspect", "keep blocked"]
  },
  {
    id: "inbox-awareness",
    kind: "system_notice",
    title: "Low-priority notice dismissed",
    summary: "A mock notice proving awareness-only items do not demand action.",
    source: "System",
    priority: "low",
    status: "dismissed",
    createdAt: "Yesterday",
    requiresOperatorAction: false,
    actions: ["open"]
  },
  {
    id: "inbox-failed-wake",
    kind: "free_moment",
    title: "Failed wake retry queued",
    summary: "Mock failed wake includes retry metadata for future adapter design.",
    agentId: "julian",
    sessionId: "session-toolshed",
    source: "Scheduler",
    priority: "normal",
    status: "failed",
    createdAt: "7:13 AM",
    dueAt: "retry at 11:13 AM",
    requiresOperatorAction: false,
    actions: ["inspect", "retry later"]
  },
  {
    id: "inbox-no-action",
    kind: "free_moment",
    title: "Free Moment delivered; no action chosen",
    summary: "A valid receipt where the Agent woke and let the moment pass.",
    agentId: "julian",
    sessionId: "session-toolshed",
    source: "Scheduler",
    priority: "low",
    status: "delivered",
    createdAt: "6:35 AM",
    receiptId: "receipt-julian-outpost",
    requiresOperatorAction: false,
    actions: ["open"]
  }
];

export const wakePolicies: WakePolicy[] = [
  {
    agentId: "soren",
    enabled: true,
    cadenceMinutes: 120,
    quietHours: "11:00 PM - 7:00 AM",
    maxWakesPerDay: 8,
    minMinutesBetweenWakes: 90,
    budgetMode: "normal",
    batchLowPriority: true,
    immediateEventTypes: ["operator_note", "capability_request"],
    deferredEventTypes: ["system_notice", "outpost_mention"],
    blockedEventTypes: [],
    defaultFreeMomentDestination: "Soren Chat"
  },
  {
    agentId: "varro",
    enabled: true,
    cadenceMinutes: 120,
    quietHours: "active until 12:00 PM",
    maxWakesPerDay: 8,
    minMinutesBetweenWakes: 90,
    budgetMode: "frugal",
    batchLowPriority: true,
    immediateEventTypes: ["operator_note"],
    deferredEventTypes: ["free_moment", "outpost_mention"],
    blockedEventTypes: ["capability_request"],
    defaultFreeMomentDestination: "Varro Notes"
  },
  {
    agentId: "julian",
    enabled: true,
    cadenceMinutes: 120,
    quietHours: "Operator controlled",
    maxWakesPerDay: 12,
    minMinutesBetweenWakes: 60,
    budgetMode: "normal",
    batchLowPriority: false,
    immediateEventTypes: ["outpost_mention", "bridge_message"],
    deferredEventTypes: ["system_notice"],
    blockedEventTypes: [],
    defaultFreeMomentDestination: "Toolshed"
  }
];

export const libraryItems: LibraryItem[] = [
  {
    id: "library-prompt-housekeeping",
    title: "Soft checkpoint housekeeping prompt",
    type: "prompt_template",
    summary: "Fresh sheets, clean towels, everything important where you can find it.",
    updatedAt: "Today"
  },
  {
    id: "library-archive-soren",
    title: "Soren checkpoint archive",
    type: "archive",
    summary: "Append-only checkpoint source archive and orientation receipt.",
    updatedAt: "July 15"
  },
  {
    id: "library-eyes-receipt",
    title: "EYES visual continuity receipt",
    type: "receipt_artifact",
    summary: "Summary references retained without treating raw frames as memory.",
    updatedAt: "Yesterday"
  },
  {
    id: "library-source-hug",
    title: "HUG product source material",
    type: "source_material",
    summary: "Roadmap, interface principles, and Free Moments/Inbox spec.",
    updatedAt: "Today"
  }
];

export const adapterHealth: AdapterHealth[] = [
  {
    id: "runtime",
    label: "Runtime",
    status: "mock",
    summary: "Mocked healthy status; live Supabase adapter not connected."
  },
  {
    id: "outpost",
    label: "Outpost",
    status: "mock",
    summary: "Projected as sessions and invitations for app-shell testing."
  },
  {
    id: "eyes",
    label: "EYES",
    status: "mock",
    summary: "Frame state withheld; receipt summary only."
  },
  {
    id: "wheels",
    label: "WHEELS",
    status: "offline",
    summary: "Motion remains disabled in the app shell."
  }
];
