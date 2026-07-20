import { listAgents, listHomeAttentionItems } from "@/domain/services/mockHugService";
import { StatusBadge } from "../atoms/StatusBadge";
import { HomeAgentCard } from "../molecules/HomeAgentCard";
import { SectionHeader } from "./SectionHeader";

export function HomeDashboard() {
  const agents = listAgents();
  const attentionItems = listHomeAttentionItems();

  return (
    <>
      <SectionHeader eyebrow="Home" title="Where everyone is" />

      <section className="grid gap-4 lg:grid-cols-3">
        {agents.map((agent) => (
          <HomeAgentCard agent={agent} key={agent.id} />
        ))}
      </section>

      <section className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-black">Attention</h2>
          <span className="text-sm text-[var(--ink-soft)]">{attentionItems.length} items</span>
        </div>
        <div className="mt-3 divide-y divide-[var(--line)]">
          {attentionItems.map((item) => (
            <div className="flex items-center justify-between gap-3 py-3 text-sm" key={item.id}>
              <div className="min-w-0">
                <p className="truncate font-semibold">{item.title}</p>
                <p className="mt-0.5 text-[var(--ink-soft)]">{item.source}</p>
              </div>
              <StatusBadge label={String(item.status).replace("_", " ")} tone={item.requiresOperatorAction ? "amber" : "neutral"} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
