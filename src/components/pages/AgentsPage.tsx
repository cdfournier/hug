import { getWakePolicy, listAgents } from "@/domain/services/mockHugService";
import { AgentStatusCard } from "../molecules/AgentStatusCard";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function AgentsPage() {
  const agents = listAgents();

  return (
    <AppShell active="agents">
      <SectionHeader eyebrow="Agents" title="People and posture" />

      <section className="grid gap-3">
        {agents.map((agent) => (
          <AgentStatusCard agent={agent} key={agent.id} policy={getWakePolicy(agent.id)} />
        ))}
      </section>
    </AppShell>
  );
}
