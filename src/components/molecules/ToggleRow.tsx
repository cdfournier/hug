type ToggleRowProps = {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
};

export function ToggleRow({ label, description, checked, disabled = false }: ToggleRowProps) {
  return (
    <label className={`flex items-center justify-between gap-4 rounded-md border border-[var(--line)] bg-[var(--background)] p-3 ${disabled ? "opacity-60" : ""}`}>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description ? <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">{description}</span> : null}
      </span>
      <span
        aria-hidden="true"
        className={`relative h-6 w-11 shrink-0 rounded-full border transition ${
          checked ? "border-[var(--green)] bg-[var(--green)]" : "border-[var(--line)] bg-[var(--panel-muted)]"
        }`}
      >
        <span
          className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition ${
            checked ? "left-5" : "left-0.5"
          }`}
        />
      </span>
      <input className="sr-only" disabled={disabled} readOnly type="checkbox" checked={checked} />
    </label>
  );
}
