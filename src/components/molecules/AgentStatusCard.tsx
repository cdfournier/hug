import { Activity, Clock, MessageSquare } from "lucide-react";
import type { Agent } from "@/domain/types";
import { StatusBadge } from "../atoms/StatusBadge";
import { healthTone, presenceTone } from "../atoms/statusStyles";

type AgentStatusCardProps = {
  agent: Agent;
};

export function AgentStatusCard({ agent }: AgentStatusCardProps) {
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
        <StatusBadge label={agent.usageLabel} tone="neutral" />
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex gap-2">
          <Activity className="mt-0.5 size-4 shrink-0 text-[var(--blue)]" />
          <span>{agent.currentActivity}</span>
        </div>
        <div className="flex gap-2 text-[var(--ink-soft)]">
          <Clock className="mt-0.5 size-4 shrink-0" />
          <span>Next Free Moment: {agent.nextFreeMoment ?? "not scheduled"}</span>
        </div>
        <div className="flex gap-2 text-[var(--ink-soft)]">
          <MessageSquare className="mt-0.5 size-4 shrink-0" />
          <span>{agent.defaultSessionId.replace("session-", "").replaceAll("-", " ")}</span>
        </div>
      </div>
    </article>
  );
}
