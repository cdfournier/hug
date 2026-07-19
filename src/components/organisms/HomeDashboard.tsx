import {
  listActiveSessions,
  listAgents,
  listHomeAttentionItems,
  listRecentReceipts
} from "@/domain/services/mockHugService";
import { ActionButton } from "../atoms/ActionButton";
import { AgentStatusCard } from "../molecules/AgentStatusCard";
import { InboxItemRow } from "../molecules/InboxItemRow";
import { ReceiptSummary } from "../molecules/ReceiptSummary";
import { SessionCard } from "../molecules/SessionCard";
import { SectionHeader } from "./SectionHeader";

export function HomeDashboard() {
  const agents = listAgents();
  const attentionItems = listHomeAttentionItems();
  const activeSessions = listActiveSessions();
  const receipts = listRecentReceipts();

  return (
    <>
      <SectionHeader eyebrow="Home" title="Where everyone is">
        <ActionButton>Open Inbox</ActionButton>
        <ActionButton variant="primary">New Note</ActionButton>
      </SectionHeader>

      <section className="grid gap-4 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentStatusCard agent={agent} key={agent.id} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black">Needs Attention</h2>
              <span className="text-sm text-[var(--ink-soft)]">{attentionItems.length} items</span>
            </div>
            <div className="space-y-3">
              {attentionItems.map((item) => (
                <InboxItemRow item={item} key={item.id} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black">Active Sessions</h2>
              <span className="text-sm text-[var(--ink-soft)]">mock adapters</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {activeSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">Latest Receipts</h2>
            <span className="text-sm text-[var(--ink-soft)]">what happened</span>
          </div>
          <div className="space-y-3">
            {receipts.map((receipt) => (
              <ReceiptSummary key={receipt.id} receipt={receipt} />
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
