import { CheckCircle2 } from "lucide-react";
import type { Receipt } from "@/domain/types";
import { StatusBadge } from "../atoms/StatusBadge";
import { receiptTone } from "../atoms/statusStyles";

type ReceiptSummaryProps = {
  receipt: Receipt;
};

export function ReceiptSummary({ receipt }: ReceiptSummaryProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--green)]" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-bold">{receipt.title}</h3>
            <StatusBadge label={receipt.status} tone={receiptTone(receipt.status)} />
          </div>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">{receipt.summary}</p>
          <p className="mt-3 text-xs text-[var(--ink-soft)]">
            {receipt.answeredAt ? `answered ${receipt.answeredAt}` : receipt.deliveredAt ? `delivered ${receipt.deliveredAt}` : "pending"}
          </p>
        </div>
      </div>
    </article>
  );
}
