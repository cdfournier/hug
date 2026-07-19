import type { ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ActionButton({ children, variant = "secondary" }: ActionButtonProps) {
  const variants = {
    primary: "border-[var(--blue)] bg-[var(--blue)] text-white",
    secondary: "border-[var(--line)] bg-[var(--panel)] text-[var(--foreground)]",
    ghost: "border-transparent bg-transparent text-[var(--ink-soft)]"
  };

  return (
    <button className={`inline-flex min-h-10 items-center justify-center rounded-md border px-3 text-sm font-semibold transition hover:brightness-95 ${variants[variant]}`}>
      {children}
    </button>
  );
}
