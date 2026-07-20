import type { Agent, WindowPressureLevel } from "@/domain/types";
import { HealthDot } from "../atoms/HealthDot";
import { Meter } from "../atoms/Meter";
import { StatusBadge } from "../atoms/StatusBadge";
import { presenceTone } from "../atoms/statusStyles";

type HomeAgentCardProps = {
  agent: Agent;
};

function pressureTone(level: WindowPressureLevel) {
  if (level === "critical") return "red";
  if (level === "high") return "amber";
  if (level === "medium") return "blue";
  return "green";
}

export function HomeAgentCard({ agent }: HomeAgentCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <HealthDot health={agent.health} />
            <h3 className="truncate text-lg font-bold">{agent.displayName}</h3>
          </div>
          <p className="mt-1 truncate text-sm text-[var(--ink-soft)]">
            {agent.kind === "runtime_agent" ? "runtime" : "codex"}
          </p>
        </div>
        <StatusBadge label={agent.presence.replace("_", " ")} tone={presenceTone(agent.presence)} />
      </div>

      <div className="mt-4">
        <Meter
          label={`Window pressure · ${agent.windowPressureLevel}`}
          tone={pressureTone(agent.windowPressureLevel)}
          value={agent.windowPressure}
        />
      </div>

      <div className="mt-4 border-t border-[var(--line)] pt-3 text-sm">
        <p className="line-clamp-2 font-medium">{agent.currentActivity}</p>
        <p className="mt-1 text-[var(--ink-soft)]">Next: {agent.nextFreeMoment ?? "not scheduled"}</p>
      </div>
    </article>
  );
}
