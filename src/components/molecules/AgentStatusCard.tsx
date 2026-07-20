import { MessageSquare, NotebookText, Settings, Sparkles } from "lucide-react";
import type { Agent, WakePolicy, WindowPressureLevel } from "@/domain/types";
import { ActionButton } from "../atoms/ActionButton";
import { Meter } from "../atoms/Meter";
import { StatusBadge } from "../atoms/StatusBadge";
import { healthTone, presenceTone } from "../atoms/statusStyles";
import { ToggleRow } from "./ToggleRow";

type AgentStatusCardProps = {
  agent: Agent;
  policy?: WakePolicy;
};

function pressureTone(level: WindowPressureLevel) {
  if (level === "critical") return "red";
  if (level === "high") return "amber";
  if (level === "medium") return "blue";
  return "green";
}

export function AgentStatusCard({ agent, policy }: AgentStatusCardProps) {
  const windowPressureLabel = `Window pressure · ${agent.windowPressureLevel}`;

  return (
    <details className="group rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
      <summary className="grid cursor-pointer list-none gap-3 p-4 marker:hidden sm:grid-cols-[minmax(0,1fr)_auto_180px] sm:items-center [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="truncate text-lg font-bold">{agent.displayName}</h3>
            <StatusBadge label={agent.health} tone={healthTone(agent.health)} />
          </div>
          <p className="mt-1 truncate text-sm text-[var(--ink-soft)]">{agent.currentActivity}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StatusBadge label={agent.presence.replace("_", " ")} tone={presenceTone(agent.presence)} />
          <StatusBadge label={agent.kind.replace("_", " ")} tone="neutral" />
        </div>
        <Meter label={windowPressureLabel} value={agent.windowPressure} tone={pressureTone(agent.windowPressureLevel)} />
      </summary>

      <div className="border-t border-[var(--line)] px-4 pb-4 pt-3">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
          <div>
            <dl className="grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
                <dt className="text-xs font-bold uppercase text-[var(--ink-soft)]">Next Moment</dt>
                <dd className="mt-1 font-semibold">{agent.nextFreeMoment ?? "not scheduled"}</dd>
              </div>
              <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
                <dt className="text-xs font-bold uppercase text-[var(--ink-soft)]">Cadence</dt>
                <dd className="mt-1 font-semibold">{policy ? `${policy.cadenceMinutes} min` : "not set"}</dd>
              </div>
              <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
                <dt className="text-xs font-bold uppercase text-[var(--ink-soft)]">Budget</dt>
                <dd className="mt-1 font-semibold">{policy?.budgetMode ?? agent.usageLabel}</dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-2">
              <ActionButton variant="primary">
                <MessageSquare className="size-4" />
                Chat
              </ActionButton>
              <ActionButton>
                <NotebookText className="size-4" />
                Note
              </ActionButton>
              <ActionButton>
                <Sparkles className="size-4" />
                Free Moment
              </ActionButton>
              <ActionButton variant="ghost">
                <Settings className="size-4" />
                Admin
              </ActionButton>
            </div>
          </div>

          <div className="space-y-2">
            <ToggleRow checked={Boolean(policy?.enabled)} label="All Routine Wakes" description="Master switch for scheduled agent activity." />
            <ToggleRow checked={Boolean(policy?.enabled)} label="Free Time" description={policy?.quietHours ?? "Uses current wake policy."} />
            <ToggleRow checked label="Operator Notes" description="Allow queued notes from the Operator." />
            <ToggleRow checked={false} label="External Mentions" description="Paused until bridge rules are approved." disabled />
          </div>
        </div>
      </div>
    </details>
  );
}
