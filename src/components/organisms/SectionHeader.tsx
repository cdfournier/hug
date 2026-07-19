import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, children }: SectionHeaderProps) {
  return (
    <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">{eyebrow}</p>
        ) : null}
        <h2 className="mt-1 text-3xl font-black sm:text-4xl">{title}</h2>
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </header>
  );
}
