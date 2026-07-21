import type { ReactNode } from "react";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { SectionHeader } from "./SectionHeader";

type ExperienceTone = "blue" | "green" | "amber" | "red" | "violet" | "neutral";

type ExperienceBadge = {
  label: string;
  tone?: ExperienceTone;
};

type ExperienceFrameProps = {
  actions?: ReactNode;
  badges?: ExperienceBadge[];
  children?: ReactNode;
  eyebrow: string;
  heading: string;
  headerContent?: ReactNode;
  onBack: () => void;
  presenceTone?: ExperienceTone;
  primarySurface?: ReactNode;
  subtitle?: string;
  title: string;
  utilityBar?: ReactNode;
};

export function ExperienceFrame({
  actions,
  badges = [],
  children,
  eyebrow,
  heading,
  headerContent,
  onBack,
  presenceTone = "green",
  primarySurface,
  subtitle,
  title,
  utilityBar
}: ExperienceFrameProps) {
  const presenceClass = {
    blue: "bg-[var(--blue)]",
    green: "bg-[var(--green)]",
    amber: "bg-[var(--amber)]",
    red: "bg-[var(--red)]",
    violet: "bg-[var(--violet)]",
    neutral: "bg-[var(--ink-soft)]"
  }[presenceTone];

  return (
    <>
      <SectionHeader eyebrow={eyebrow} title={heading}>
        <ActionButton onClick={onBack}>Back to Launch</ActionButton>
        {actions}
      </SectionHeader>

      <section className="min-h-[calc(100vh-150px)] rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4">
          <div className="min-w-0">
            {headerContent ?? (
              <>
                <div className="flex items-center gap-2">
                  <span className={`inline-block size-2.5 rounded-full ${presenceClass}`} />
                  <h2 className="truncate text-xl font-black">{title}</h2>
                </div>
                {subtitle ? <p className="truncate text-sm text-[var(--ink-soft)]">{subtitle}</p> : null}
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <StatusBadge key={badge.label} label={badge.label} tone={badge.tone} />
            ))}
          </div>
        </div>

        {primarySurface ? <div className="border-b border-[var(--line)] p-4">{primarySurface}</div> : null}
        {utilityBar ? <div className="border-b border-[var(--line)] bg-[var(--background)] px-4 py-3">{utilityBar}</div> : null}

        {children ? children : null}
      </section>
    </>
  );
}
