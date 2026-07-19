import { toneClass } from "./statusStyles";

type StatusBadgeProps = {
  label: string;
  tone?: "blue" | "green" | "amber" | "red" | "violet" | "neutral";
};

export function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClass(tone)}`}>
      {label}
    </span>
  );
}
