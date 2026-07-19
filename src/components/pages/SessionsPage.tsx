import { CalendarClock, CircleAlert, Radio, ShieldCheck } from "lucide-react";
import { listAgents, listSessions } from "@/domain/services/mockHugService";
import type { Session } from "@/domain/types";
import { ActionButton } from "../atoms/ActionButton";
import { SessionCard } from "../molecules/SessionCard";
import { AppShell } from "../organisms/AppShell";
import { SessionInspector } from "../organisms/SessionInspector";
import { SectionHeader } from "../organisms/SectionHeader";

function countSessions(sessions: Session[], predicate: (session: Session) => boolean) {
  return sessions.filter(predicate).length;
}

export function SessionsPage() {
  const agents = listAgents();
  const sessions = listSessions();
  const activeSessions = sessions.filter((session) => session.status === "active" || session.status === "paused");
  const planningSessions = sessions.filter((session) => session.status === "draft" || session.status === "error");
  const archivedSessions = sessions.filter((session) => session.status === "ended" || session.status === "archived");
  const selectedSession =
    sessions.find((session) => session.status === "active") ??
    sessions.find((session) => session.status === "paused") ??
    sessions[0];

  const metrics = [
    {
      label: "Live or Paused",
      value: activeSessions.length,
      icon: Radio,
      summary: "Operator-visible places currently in play."
    },
    {
      label: "Needs Setup",
      value: planningSessions.length,
      icon: CircleAlert,
      summary: "Draft or blocked sessions before flow begins."
    },
    {
      label: "Safety Labels",
      value: countSessions(sessions, (session) => Boolean(session.safetyLabel)),
      icon: ShieldCheck,
      summary: "Sessions carrying explicit operating limits."
    },
    {
      label: "Recent Archive",
      value: archivedSessions.length,
      icon: CalendarClock,
      summary: "Completed sessions kept as receipts."
    }
  ];

  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Sessions" title="Shared places">
        <ActionButton>Filter</ActionButton>
        <ActionButton variant="primary">Create Session</ActionButton>
      </SectionHeader>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4" key={metric.label}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">{metric.label}</p>
                  <p className="mt-1 text-3xl font-black">{metric.value}</p>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--blue-soft)] text-[var(--blue)]">
                  <Icon className="size-5" />
                </div>
              </div>
              <p className="mt-3 text-sm text-[var(--ink-soft)]">{metric.summary}</p>
            </article>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black">In Motion</h2>
              <span className="text-sm text-[var(--ink-soft)]">{activeSessions.length} sessions</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {activeSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black">Setup & Safety</h2>
              <span className="text-sm text-[var(--ink-soft)]">{planningSessions.length} sessions</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {planningSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-black">Receipts</h2>
              <span className="text-sm text-[var(--ink-soft)]">{archivedSessions.length} sessions</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              {archivedSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))}
            </div>
          </div>
        </div>

        <div className="xl:sticky xl:top-5 xl:self-start">
          <SessionInspector agents={agents} session={selectedSession} />
        </div>
      </section>
    </AppShell>
  );
}
