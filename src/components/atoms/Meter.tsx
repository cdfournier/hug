type MeterProps = {
  label: string;
  value: number;
};

export function Meter({ label, value }: MeterProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-[var(--ink-soft)]">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--panel-muted)]">
        <div className="h-full rounded-full bg-[var(--blue)]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
