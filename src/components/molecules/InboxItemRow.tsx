import { ArrowRight, Bell } from "lucide-react";
import type { InboxItem } from "@/domain/types";
import { StatusBadge } from "../atoms/StatusBadge";
import { priorityTone, receiptTone } from "../atoms/statusStyles";

type InboxItemRowProps = {
  item: InboxItem;
};

export function InboxItemRow({ item }: InboxItemRowProps) {
  return (
    <article className="flex gap-3 rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[var(--panel-muted)] text-[var(--blue)]">
        <Bell className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-1 text-sm text-[var(--ink-soft)]">{item.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label={item.priority} tone={priorityTone(item.priority)} />
            <StatusBadge label={String(item.status).replace("_", " ")} tone={receiptTone(item.status)} />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--ink-soft)]">
          <span>{item.source}</span>
          <span>·</span>
          <span>{item.createdAt}</span>
          {item.dueAt ? (
            <>
              <span>·</span>
              <span>due {item.dueAt}</span>
            </>
          ) : null}
        </div>
      </div>
      <ArrowRight className="mt-1 size-4 shrink-0 text-[var(--ink-soft)]" />
    </article>
  );
}
