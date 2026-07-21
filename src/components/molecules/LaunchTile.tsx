import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "../atoms/StatusBadge";

type LaunchTone = "blue" | "green" | "amber" | "red" | "violet" | "neutral";

type LaunchTileProps = {
  title: string;
  eyebrow: string;
  summary: string;
  statusLabel: string;
  statusTone: LaunchTone;
  Icon: LucideIcon;
  compact?: boolean;
  selected?: boolean;
};

export function LaunchTile({
  title,
  eyebrow,
  summary,
  statusLabel,
  statusTone,
  Icon,
  compact = false,
  selected = false
}: LaunchTileProps) {
  if (compact) {
    return (
      <article
        className={`rounded-md border bg-[var(--panel)] p-3 transition hover:border-[var(--blue)] ${
          selected ? "border-[var(--blue)] ring-2 ring-[var(--blue-soft)]" : "border-[var(--line)]"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--blue-soft)] text-[var(--blue)]">
            <Icon className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="truncate text-sm font-black">{title}</h4>
              <StatusBadge label={statusLabel} tone={statusTone} />
            </div>
            <p className="mt-0.5 truncate text-xs text-[var(--ink-soft)]">{eyebrow}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`rounded-lg border bg-[var(--panel)] p-4 shadow-sm transition hover:border-[var(--blue)] ${
        selected ? "border-[var(--blue)] ring-2 ring-[var(--blue-soft)]" : "border-[var(--line)]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--blue-soft)] text-[var(--blue)]">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">{eyebrow}</p>
              <h3 className="mt-1 text-lg font-black">{title}</h3>
            </div>
            <StatusBadge label={statusLabel} tone={statusTone} />
          </div>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">{summary}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)]">
            Open path
            <ArrowRight className="size-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
