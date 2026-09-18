import { ArrowUpRight, FolderOpen } from "lucide-react";
import { caelCoworkLaunch } from "@/domain/adapters/caelCowork";
import { StatusBadge } from "../atoms/StatusBadge";

/** A user-initiated native-app handoff; the anchor preserves that gesture. */
export function CaelCoworkLaunchCard() {
  return (
    <article className="rounded-lg border border-[var(--blue)] bg-[var(--blue-soft)] p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--panel)] text-[var(--blue)]">
            <FolderOpen className="size-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-[var(--blue)]">Local arrival</p>
            <h3 className="mt-1 text-lg font-black">{caelCoworkLaunch.label}</h3>
            <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]">{caelCoworkLaunch.summary}</p>
          </div>
        </div>
        <StatusBadge label="this Mac" tone="blue" />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--blue)]/20 pt-4">
        <p className="max-w-2xl text-sm text-[var(--ink-soft)]">{caelCoworkLaunch.limitation}</p>
        <a
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-[var(--blue)] bg-[var(--blue)] px-3 text-sm font-semibold text-white transition hover:brightness-95"
          href={caelCoworkLaunch.href}
        >
          Open Cael
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </article>
  );
}
