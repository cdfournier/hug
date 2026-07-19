import type { LucideIcon } from "lucide-react";
import { StatusBadge } from "../atoms/StatusBadge";

type LaunchTone = "blue" | "green" | "amber" | "red" | "violet" | "neutral";

type LaunchTileProps = {
  title: string;
  eyebrow: string;
  summary: string;
  statusLabel: string;
  statusTone: LaunchTone;
  Icon: LucideIcon;
};

export function LaunchTile({
  title,
  eyebrow,
  summary,
  statusLabel,
  statusTone,
  Icon
}: LaunchTileProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm transition hover:border-[var(--blue)]">
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
        </div>
      </div>
    </article>
  );
}
