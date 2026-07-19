import { Pause, Play, Send, ShieldCheck } from "lucide-react";
import type { Agent, Session } from "@/domain/types";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { sessionTone } from "../atoms/statusStyles";

type SessionInspectorProps = {
  agents: Agent[];
  session: Session;
};

const liveModeLabels = {
  operator_mediated: "Operator mediated",
  event_driven: "Event driven",
  realtime_when_allowed: "Realtime when allowed"
};

const promptSourceLabels = {
  operator: "Operator",
  schedule: "Schedule",
  session_signal: "Session signal",
  external_bridge: "External bridge"
};

export function SessionInspector({ agents, session }: SessionInspectorProps) {
  const participants = session.participants
    .map((participantId) => agents.find((agent) => agent.id === participantId))
    .filter(Boolean) as Agent[];

  return (
    <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Selected Session</p>
          <h2 className="mt-1 text-xl font-black">{session.title}</h2>
        </div>
        <StatusBadge label={session.status} tone={sessionTone(session.status)} />
      </div>

      <p className="mt-3 text-sm text-[var(--ink-soft)]">{session.summary}</p>

      <div className="mt-5 grid gap-3 text-sm">
        <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Participants</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {participants.map((agent) => (
              <StatusBadge key={agent.id} label={agent.displayName} tone="neutral" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Mode</p>
            <p className="mt-1 font-semibold">{liveModeLabels[session.liveMode]}</p>
          </div>
          <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Wake Source</p>
            <p className="mt-1 font-semibold">{promptSourceLabels[session.promptSource]}</p>
          </div>
        </div>

        {session.safetyLabel ? (
          <div className="flex gap-2 rounded-md border border-[var(--amber)] bg-[var(--amber-soft)] p-3 text-sm text-[var(--amber)]">
            <ShieldCheck className="mt-0.5 size-4 shrink-0" />
            <span className="font-semibold">{session.safetyLabel}</span>
          </div>
        ) : null}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <ActionButton>
          <Play className="size-4" />
          Open
        </ActionButton>
        <ActionButton>
          <Send className="size-4" />
          Invite
        </ActionButton>
        <ActionButton variant="ghost">
          <Pause className="size-4" />
          Pause
        </ActionButton>
        <ActionButton variant="ghost">
          <ShieldCheck className="size-4" />
          Rules
        </ActionButton>
      </div>
    </aside>
  );
}
