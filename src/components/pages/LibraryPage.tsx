import { listLibraryItems } from "@/domain/services/mockHugService";
import { StatusBadge } from "../atoms/StatusBadge";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

export function LibraryPage() {
  const items = listLibraryItems();

  return (
    <AppShell active="library">
      <SectionHeader eyebrow="Library" title="Artifacts and records" />
      <section className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => (
          <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5" key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-black">{item.title}</h2>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">{item.summary}</p>
              </div>
              <StatusBadge label={item.type.replaceAll("_", " ")} tone="violet" />
            </div>
            <p className="mt-4 text-xs text-[var(--ink-soft)]">Updated {item.updatedAt}</p>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
