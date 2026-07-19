import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";

type LaunchTone = "blue" | "green" | "amber" | "red" | "violet" | "neutral";

type LaunchTileProps = {
  title: string;
  eyebrow: string;
  summary: string;
  statusLabel: string;
  statusTone: LaunchTone;
  primaryAction: string;
  secondaryAction?: string;
  Icon: LucideIcon;
};

export function LaunchTile({
  title,
  eyebrow,
  summary,
  statusLabel,
  statusTone,
  primaryAction,
  secondaryAction,
  Icon
}: LaunchTileProps) {
  return (
    <article className="flex min-h-56 flex-col justify-between rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[var(--blue-soft)] text-[var(--blue)]">
            <Icon className="size-5" />
          </div>
          <StatusBadge label={statusLabel} tone={statusTone} />
        </div>
        <p className="mt-4 text-xs font-bold uppercase text-[var(--ink-soft)]">{eyebrow}</p>
        <h3 className="mt-1 text-xl font-black">{title}</h3>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">{summary}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <ActionButton variant="primary">
          {primaryAction}
          <ArrowRight className="size-4" />
        </ActionButton>
        {secondaryAction ? <ActionButton variant="ghost">{secondaryAction}</ActionButton> : null}
      </div>
    </article>
  );
}
