import { listAdapterHealth, listWakePolicies } from "@/domain/services/mockHugService";
import { StatusBadge } from "../atoms/StatusBadge";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function AdminPage() {
  const adapters = listAdapterHealth();
  const policies = listWakePolicies();

  return (
    <AppShell active="admin">
      <SectionHeader eyebrow="Admin" title="Configuration surfaces" />
      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5">
          <h2 className="text-xl font-black">Adapter Health</h2>
          <div className="mt-4 space-y-3">
            {adapters.map((adapter) => (
              <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-4" key={adapter.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold">{adapter.label}</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">{adapter.summary}</p>
                  </div>
                  <StatusBadge label={adapter.status} tone={adapter.status === "offline" ? "red" : adapter.status === "degraded" ? "amber" : "blue"} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5">
          <h2 className="text-xl font-black">Wake Policies</h2>
          <div className="mt-4 space-y-3">
            {policies.map((policy) => (
              <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-4" key={policy.agentId}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold capitalize">{policy.agentId}</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                      {policy.cadenceMinutes} min cadence · {policy.maxWakesPerDay} max wakes · {policy.budgetMode}
                    </p>
                  </div>
                  <StatusBadge label={policy.enabled ? "enabled" : "off"} tone={policy.enabled ? "green" : "neutral"} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
