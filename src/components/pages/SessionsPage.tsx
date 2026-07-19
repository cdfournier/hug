import { listSessions } from "@/domain/services/mockHugService";
import { ActionButton } from "../atoms/ActionButton";
import { SessionCard } from "../molecules/SessionCard";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function SessionsPage() {
  const sessions = listSessions();

  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Sessions" title="Shared places">
        <ActionButton>Filter</ActionButton>
        <ActionButton variant="primary">Create Session</ActionButton>
      </SectionHeader>
      <section className="grid gap-4 lg:grid-cols-2">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </section>
    </AppShell>
  );
}
