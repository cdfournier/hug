import type { AgentHealth } from "@/domain/types";

type HealthDotProps = {
  health: AgentHealth;
};

const healthCopy: Record<AgentHealth, string> = {
  degraded: "Degraded",
  healthy: "Healthy",
  offline: "Offline",
  unknown: "Unknown"
};

const healthClass: Record<AgentHealth, string> = {
  degraded: "bg-[var(--amber)]",
  healthy: "bg-[var(--green)]",
  offline: "bg-[var(--red)]",
  unknown: "bg-[var(--ink-soft)]"
};

export function HealthDot({ health }: HealthDotProps) {
  return (
    <span
      aria-label={`Health: ${healthCopy[health]}`}
      className={`inline-block size-2.5 shrink-0 rounded-full ${healthClass[health]}`}
      title={`Health: ${healthCopy[health]}`}
    />
  );
}
