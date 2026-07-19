import { MessageSquare, Moon, NotebookText, Sparkles } from "lucide-react";
import type { Agent, WakePolicy } from "@/domain/types";
import { ActionButton } from "../atoms/ActionButton";
import { Meter } from "../atoms/Meter";
import { StatusBadge } from "../atoms/StatusBadge";

type AgentQuickPanelProps = {
  agent: Agent;
  policy?: WakePolicy;
};

export function AgentQuickPanel({ agent, policy }: AgentQuickPanelProps) {
  return (
    <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm xl:sticky xl:top-5 xl:self-start">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Quick Panel</p>
          <h2 className="mt-1 text-2xl font-black">{agent.displayName}</h2>
        </div>
        <StatusBadge label={agent.presence.replace("_", " ")} tone="blue" />
      </div>

      <p className="mt-3 text-sm text-[var(--ink-soft)]">{agent.currentActivity}</p>

      <div className="mt-5 rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
        <Meter label={`Window pressure · ${agent.windowPressureLevel}`} value={agent.windowPressure} tone="blue" />
      </div>

      <div className="mt-5 grid gap-2">
        <ActionButton variant="primary">
          <MessageSquare className="size-4" />
          Open Chat
        </ActionButton>
        <ActionButton>
          <NotebookText className="size-4" />
          Send Note
        </ActionButton>
        <ActionButton>
          <Sparkles className="size-4" />
          Offer Free Moment
        </ActionButton>
      </div>

      <div className="mt-5 rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Moon className="size-4 text-[var(--ink-soft)]" />
            <span className="text-sm font-semibold">Quiet Hours</span>
          </div>
          <StatusBadge label={policy?.enabled ? "on" : "off"} tone={policy?.enabled ? "green" : "neutral"} />
        </div>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">{policy?.quietHours ?? "No policy loaded."}</p>
      </div>
    </aside>
  );
}
