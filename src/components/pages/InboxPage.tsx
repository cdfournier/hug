import { listInboxItems } from "@/domain/services/mockHugService";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { InboxItemRow } from "../molecules/InboxItemRow";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function InboxPage() {
  const items = listInboxItems();
  const selected = items.find((item) => item.requiresOperatorAction) ?? items[0];

  return (
    <AppShell active="inbox">
      <SectionHeader eyebrow="Inbox" title="Attention queue">
        <ActionButton>Needs Action</ActionButton>
        <ActionButton>Deferred</ActionButton>
      </SectionHeader>
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <section className="space-y-3">
          {items.map((item) => (
            <InboxItemRow item={item} key={item.id} />
          ))}
        </section>
        <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 xl:sticky xl:top-5 xl:self-start">
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Detail drawer</p>
          {selected ? (
            <>
              <h2 className="mt-2 text-2xl font-black">{selected.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-soft)]">{selected.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatusBadge label={selected.priority} tone={selected.priority === "urgent" ? "red" : selected.priority === "high" ? "amber" : "blue"} />
                <StatusBadge label={String(selected.status).replace("_", " ")} tone="neutral" />
              </div>
              <div className="mt-5 grid gap-2">
                {selected.actions.map((action) => (
                  <ActionButton key={action}>{action}</ActionButton>
                ))}
              </div>
            </>
          ) : null}
        </aside>
      </div>
    </AppShell>
  );
}
