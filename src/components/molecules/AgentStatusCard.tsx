import type { Agent, WindowPressureLevel } from "@/domain/types";
import { Meter } from "../atoms/Meter";
import { StatusBadge } from "../atoms/StatusBadge";
import { healthTone, presenceTone } from "../atoms/statusStyles";

type AgentStatusCardProps = {
  agent: Agent;
};

function pressureTone(level: WindowPressureLevel) {
  if (level === "critical") return "red";
  if (level === "high") return "amber";
  if (level === "medium") return "blue";
  return "green";
}

export function AgentStatusCard({ agent }: AgentStatusCardProps) {
  const windowPressureLabel = `Window pressure · ${agent.windowPressureLevel}`;

  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{agent.displayName}</h3>
          <p className="text-sm text-[var(--ink-soft)]">{agent.subtitle}</p>
        </div>
        <StatusBadge label={agent.health} tone={healthTone(agent.health)} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge label={agent.presence.replace("_", " ")} tone={presenceTone(agent.presence)} />
      </div>
      <div className="mt-4 rounded-md border border-[var(--line)] bg-[var(--background)] px-3 py-2.5">
        <Meter label={windowPressureLabel} value={agent.windowPressure} tone={pressureTone(agent.windowPressureLevel)} />
      </div>
      <div className="mt-4 border-t border-[var(--line)] pt-3 text-sm">
        <p>{agent.currentActivity}</p>
        <p className="mt-1 text-[var(--ink-soft)]">Next: {agent.nextFreeMoment ?? "not scheduled"}</p>
      </div>
    </article>
  );
}
