import {
  Archive,
  Binoculars,
  Car,
  MessageSquare,
  NotebookText,
  Radio,
  Shield,
  Sparkles
} from "lucide-react";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { LaunchTile } from "../molecules/LaunchTile";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

const launchGroups = [
  {
    title: "Start",
    summary: "The fastest paths into Agent contact.",
    options: [
      {
        title: "Chat",
        eyebrow: "Talk",
        summary: "Open a direct conversation with an Agent.",
        statusLabel: "ready",
        statusTone: "green",
        Icon: MessageSquare,
        selected: true
      },
      {
        title: "Notes",
        eyebrow: "Send",
        summary: "Leave an Operator note or queue a reply.",
        statusLabel: "ready",
        statusTone: "green",
        Icon: NotebookText
      },
      {
        title: "Free Moment",
        eyebrow: "Invite",
        summary: "Offer scheduled time without a required task.",
        statusLabel: "scheduled",
        statusTone: "blue",
        Icon: Sparkles
      }
    ]
  },
  {
    title: "Connect",
    summary: "Shared experiences with stronger safety or adapter boundaries.",
    options: [
      {
        title: "EYES",
        eyebrow: "See",
        summary: "Start an Operator-controlled visual session.",
        statusLabel: "mock",
        statusTone: "amber",
        Icon: Binoculars
      },
      {
        title: "WHEELS",
        eyebrow: "Move",
        summary: "Enter supervised vehicle mode with override controls.",
        statusLabel: "offline",
        statusTone: "red",
        Icon: Car
      },
      {
        title: "Live Room",
        eyebrow: "Gather",
        summary: "Create or enter a shared multi-participant place.",
        statusLabel: "planned",
        statusTone: "violet",
        Icon: Radio
      }
    ]
  },
  {
    title: "Review",
    summary: "Durable records and slower workspaces.",
    options: [
      {
        title: "Receipts",
        eyebrow: "Confirm",
        summary: "Read what happened after wakes, invites, and sessions.",
        statusLabel: "available",
        statusTone: "blue",
        Icon: Archive
      },
      {
        title: "Artifacts",
        eyebrow: "Create",
        summary: "Open shared materials, drafts, and source workspaces.",
        statusLabel: "draft",
        statusTone: "amber",
        Icon: NotebookText
      }
    ]
  }
] as const;

export function SessionsPage() {
  const selectedPath = launchGroups[0].options[0];

  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Launch" title="Chat with Soren">
        <ActionButton>Switch Path</ActionButton>
        <ActionButton>Receipt</ActionButton>
        <ActionButton variant="primary">End Session</ActionButton>
      </SectionHeader>

      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
        <aside className="space-y-5 xl:sticky xl:top-5 xl:self-start">
          <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Selected Path</p>
                <h2 className="mt-1 text-xl font-black">{selectedPath.title}</h2>
              </div>
              <StatusBadge label={selectedPath.statusLabel} tone={selectedPath.statusTone} />
            </div>
            <div className="mt-4 grid gap-2">
              <ActionButton variant="primary">Change Agent</ActionButton>
            </div>
          </section>

          <section className="space-y-4">
            {launchGroups.map((group) => (
              <div key={group.title}>
                <div>
                  <h3 className="text-sm font-black uppercase text-[var(--ink-soft)]">{group.title}</h3>
                  <p className="mt-1 text-xs text-[var(--ink-soft)]">{group.summary}</p>
                </div>
                <div className="mt-2 grid gap-2">
                  {group.options.map((option) => (
                    <LaunchTile key={option.title} {...option} compact />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </aside>

        <section className="min-h-[680px] rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
          <div className="flex min-h-16 items-center justify-between gap-3 border-b border-[var(--line)] px-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2.5 rounded-full bg-[var(--green)]" />
                <h2 className="truncate text-xl font-black">Soren</h2>
              </div>
              <p className="truncate text-sm text-[var(--ink-soft)]">runtime / operator-mediated / bounded context</p>
            </div>
            <StatusBadge label="active" tone="green" />
          </div>

          <div className="grid min-h-[520px] content-end gap-3 p-4">
            <div className="max-w-[78%] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
              <p className="mt-1 text-sm">Can you look over the morning notes before your next Free Moment?</p>
            </div>
            <div className="ml-auto max-w-[78%] rounded-lg border border-[var(--blue)] bg-[var(--blue-soft)] p-3">
              <p className="text-xs font-bold uppercase text-[var(--blue)]">Soren</p>
              <p className="mt-1 text-sm">Yes. I see the checkpoint note, the bridge question, and the open HUG decision.</p>
            </div>
            <div className="max-w-[78%] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
              <p className="mt-1 text-sm">Good. Hold the bridge question for Toolshed unless it becomes urgent.</p>
            </div>
          </div>

          <div className="border-t border-[var(--line)] p-4">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <textarea
                className="min-h-24 w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
                placeholder="Message Soren"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <ActionButton>Attach</ActionButton>
                  <ActionButton>Source</ActionButton>
                </div>
                <ActionButton variant="primary">Send</ActionButton>
              </div>
            </div>
          </div>
        </section>

        <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm xl:sticky xl:top-5 xl:self-start">
          <div>
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Open State</p>
            <div className="mt-3 grid gap-3 text-sm">
              <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
                <div className="flex items-center gap-2 font-bold">
                  <Shield className="size-4 text-[var(--green)]" />
                  Guardrail
                </div>
                <p className="mt-1 text-[var(--ink-soft)]">Operator-mediated turn with current wake policy applied.</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[var(--ink-soft)]">Context</span>
                <span className="font-semibold">bounded</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[var(--ink-soft)]">Receipts</span>
                <span className="font-semibold">enabled</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[var(--ink-soft)]">Adapters</span>
                <span className="font-semibold">runtime</span>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-[var(--line)] pt-4">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Session Actions</p>
            <div className="mt-3 grid gap-2">
              <ActionButton>Offer Free Moment</ActionButton>
              <ActionButton>Queue Note</ActionButton>
              <ActionButton>Checkpoint</ActionButton>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
