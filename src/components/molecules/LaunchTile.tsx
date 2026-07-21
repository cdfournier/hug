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
  onOpen?: () => void;
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
  onOpen,
  selected = false
}: LaunchTileProps) {
  const isInteractive = Boolean(onOpen);

  if (compact) {
    return (
      <button
        className={`w-full rounded-md border bg-[var(--panel)] p-3 text-left transition ${
          selected ? "border-[var(--blue)] ring-2 ring-[var(--blue-soft)]" : "border-[var(--line)]"
        } ${isInteractive ? "hover:border-[var(--blue)]" : "cursor-default opacity-75"}`}
        disabled={!isInteractive}
        onClick={onOpen}
        type="button"
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
      </button>
    );
  }

  return (
    <button
      className={`w-full rounded-lg border bg-[var(--panel)] p-4 text-left shadow-sm transition ${
        selected ? "border-[var(--blue)] ring-2 ring-[var(--blue-soft)]" : "border-[var(--line)]"
      } ${isInteractive ? "hover:border-[var(--blue)]" : "cursor-default opacity-75"}`}
      disabled={!isInteractive}
      onClick={onOpen}
      type="button"
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
            {isInteractive ? "Open path" : "Not wired"}
            {isInteractive ? <ArrowRight className="size-4" /> : null}
          </div>
        </div>
      </div>
    </button>
  );
}
