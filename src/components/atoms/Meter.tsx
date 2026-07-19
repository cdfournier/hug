type MeterProps = {
  label: string;
  value: number;
  tone?: "blue" | "green" | "amber" | "red" | "violet" | "neutral";
};

const meterToneClasses = {
  blue: "bg-[var(--blue)]",
  green: "bg-[var(--green)]",
  amber: "bg-[var(--amber)]",
  red: "bg-[var(--red)]",
  violet: "bg-[var(--violet)]",
  neutral: "bg-[var(--ink-soft)]"
};

export function Meter({ label, value, tone = "blue" }: MeterProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-[var(--ink-soft)]">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--panel-muted)]">
        <div className={`h-full rounded-full ${meterToneClasses[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
