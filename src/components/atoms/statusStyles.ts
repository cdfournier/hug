import type {
  AgentHealth,
  AgentPresence,
  InvitationStatus,
  Priority,
  ReceiptStatus,
  SessionStatus
} from "@/domain/types";

type Tone = "blue" | "green" | "amber" | "red" | "violet" | "neutral";

const toneClasses: Record<Tone, string> = {
  blue: "border-[var(--blue)] bg-[var(--blue-soft)] text-[var(--blue)]",
  green: "border-[var(--green)] bg-[var(--green-soft)] text-[var(--green)]",
  amber: "border-[var(--amber)] bg-[var(--amber-soft)] text-[var(--amber)]",
  red: "border-[var(--red)] bg-[var(--red-soft)] text-[var(--red)]",
  violet: "border-[var(--violet)] bg-[var(--violet-soft)] text-[var(--violet)]",
  neutral: "border-[var(--line)] bg-[var(--panel-muted)] text-[var(--ink-soft)]"
};

export function toneClass(tone: Tone) {
  return toneClasses[tone];
}

export function healthTone(health: AgentHealth): Tone {
  if (health === "healthy") return "green";
  if (health === "degraded") return "amber";
  if (health === "offline") return "red";
  return "neutral";
}

export function presenceTone(presence: AgentPresence): Tone {
  if (presence === "active") return "green";
  if (presence === "quiet_hours" || presence === "resting") return "blue";
  if (presence === "budget_limited" || presence === "waiting_operator") return "amber";
  if (presence === "error") return "red";
  return "neutral";
}

export function sessionTone(status: SessionStatus): Tone {
  if (status === "active") return "green";
  if (status === "paused" || status === "draft") return "amber";
  if (status === "error") return "red";
  if (status === "archived" || status === "ended") return "neutral";
  return "blue";
}

export function priorityTone(priority: Priority): Tone {
  if (priority === "urgent") return "red";
  if (priority === "high") return "amber";
  if (priority === "normal") return "blue";
  return "neutral";
}

export function receiptTone(status: ReceiptStatus | InvitationStatus): Tone {
  if (status === "answered" || status === "delivered") return "green";
  if (status === "deferred" || status === "requires_approval" || status === "scheduled") return "amber";
  if (status === "blocked" || status === "failed") return "red";
  if (status === "pending") return "blue";
  return "neutral";
}
