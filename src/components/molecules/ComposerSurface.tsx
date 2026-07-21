import type { ReactNode } from "react";
import { ActionButton } from "../atoms/ActionButton";

type ComposerSurfaceProps = {
  actions: ReactNode;
  primaryActionLabel: string;
  placeholder: string;
  topControl?: ReactNode;
};

export function ComposerSurface({
  actions,
  primaryActionLabel,
  placeholder,
  topControl
}: ComposerSurfaceProps) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
      {topControl ? <div className="mb-3">{topControl}</div> : null}
      <textarea
        className="min-h-24 w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
        placeholder={placeholder}
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">{actions}</div>
        <ActionButton variant="primary">{primaryActionLabel}</ActionButton>
      </div>
    </div>
  );
}
