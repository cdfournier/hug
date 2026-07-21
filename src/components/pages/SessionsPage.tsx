import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function SessionsPage() {
  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Chat" title="Soren">
        <ActionButton>Back to Launch</ActionButton>
        <ActionButton>Receipt</ActionButton>
        <ActionButton variant="primary">End Session</ActionButton>
      </SectionHeader>

      <section className="min-h-[calc(100vh-150px)] rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-[var(--green)]" />
              <h2 className="truncate text-xl font-black">Chat with Soren</h2>
            </div>
            <p className="truncate text-sm text-[var(--ink-soft)]">runtime / operator-mediated / bounded context</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label="active" tone="green" />
            <StatusBadge label="receipts on" tone="blue" />
          </div>
        </div>

        <div className="grid min-h-[calc(100vh-390px)] content-end gap-3 p-4">
          <div className="max-w-[760px] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
            <p className="mt-1 text-sm">Can you look over the morning notes before your next Free Moment?</p>
          </div>
          <div className="ml-auto max-w-[760px] rounded-lg border border-[var(--blue)] bg-[var(--blue-soft)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--blue)]">Soren</p>
            <p className="mt-1 text-sm">Yes. I see the checkpoint note, the bridge question, and the open HUG decision.</p>
          </div>
          <div className="max-w-[760px] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
            <p className="mt-1 text-sm">Good. Hold the bridge question for Toolshed unless it becomes urgent.</p>
          </div>
        </div>

        <div className="border-t border-[var(--line)] p-4">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <textarea
              className="min-h-24 w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
              placeholder="Message Soren"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <ActionButton>Attach</ActionButton>
                <ActionButton>Source</ActionButton>
                <ActionButton>Offer Free Moment</ActionButton>
              </div>
              <ActionButton variant="primary">Send</ActionButton>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
