import { getWakePolicy, listAgents } from "@/domain/services/mockHugService";
import { Meter } from "../atoms/Meter";
import { StatusBadge } from "../atoms/StatusBadge";
import { AgentStatusCard } from "../molecules/AgentStatusCard";
import { AgentQuickPanel } from "../organisms/AgentQuickPanel";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function AgentsPage() {
  const agents = listAgents();
  const selectedAgent = agents[0];

  return (
    <AppShell active="agents">
      <SectionHeader eyebrow="Agents" title="People and posture" />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="grid gap-4">
          {agents.map((agent) => (
            <AgentStatusCard agent={agent} key={agent.id} />
          ))}
        </section>
        <AgentQuickPanel agent={selectedAgent} policy={getWakePolicy(selectedAgent.id)} />
      </div>

      <section className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5">
        <h2 className="text-xl font-black">Wake Policy Summary</h2>
          <div className="mt-4 space-y-4">
            {agents.map((agent, index) => {
              const policy = getWakePolicy(agent.id);

              if (!policy) return null;

              return (
                <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-4" key={agent.id}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold">{agent.displayName}</h3>
                      <p className="text-sm text-[var(--ink-soft)]">{policy.quietHours}</p>
                    </div>
                    <StatusBadge label={policy.enabled ? "enabled" : "off"} tone={policy.enabled ? "green" : "neutral"} />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <Meter label="Daily wakes" value={Math.min(100, (policy.maxWakesPerDay / 12) * 100)} />
                    <Meter label="Cadence" value={Math.max(20, 100 - policy.cadenceMinutes / 2)} />
                    <Meter label="Budget" value={policy.budgetMode === "frugal" ? 45 : 72 + index * 6} />
                  </div>
                </article>
              );
            })}
          </div>
      </section>
    </AppShell>
  );
}
