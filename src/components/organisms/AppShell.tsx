import {
  Archive,
  Bot,
  Home,
  Inbox,
  LayoutDashboard,
  Settings
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  active: "home" | "agents" | "sessions" | "inbox" | "library" | "admin";
  children: ReactNode;
};

const navItems = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "agents", label: "Agents", href: "/agents", icon: Bot },
  { id: "sessions", label: "Sessions", href: "/sessions", icon: LayoutDashboard },
  { id: "inbox", label: "Inbox", href: "/inbox", icon: Inbox },
  { id: "library", label: "Library", href: "/library", icon: Archive },
  { id: "admin", label: "Admin", href: "/admin", icon: Settings }
] as const;

export function AppShell({ active, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-[var(--line)] bg-[var(--panel)] px-4 py-5 md:block">
        <div>
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">HUG</p>
          <h1 className="mt-1 text-2xl font-black">Session Home</h1>
        </div>
        <nav className="mt-8 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === active;

            return (
              <Link
                className={`flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold ${
                  isActive
                    ? "bg-[var(--blue-soft)] text-[var(--blue)]"
                    : "text-[var(--ink-soft)] hover:bg-[var(--panel-muted)]"
                }`}
                href={item.href}
                key={item.id}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-5 left-4 right-4 rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Mock mode</p>
          <p className="mt-1 text-sm">No live runtime adapters are connected.</p>
        </div>
      </aside>

      <main className="pb-24 md:ml-64 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">{children}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-[var(--line)] bg-[var(--panel)] md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === active;

          return (
            <Link
              className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold ${
                isActive ? "text-[var(--blue)]" : "text-[var(--ink-soft)]"
              }`}
              href={item.href}
              key={item.id}
            >
              <Icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
