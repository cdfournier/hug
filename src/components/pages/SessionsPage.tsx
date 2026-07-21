import {
  Archive,
  ArrowRight,
  Binoculars,
  Car,
  Clock3,
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
      <SectionHeader eyebrow="Launch" title="Choose a path" />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-7">
          {launchGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-3 flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black">{group.title}</h2>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">{group.summary}</p>
                </div>
                <span className="text-sm text-[var(--ink-soft)]">{group.options.length} paths</span>
              </div>
              <div className="grid gap-3 lg:grid-cols-2">
                {group.options.map((option) => (
                  <LaunchTile key={option.title} {...option} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm xl:sticky xl:top-5 xl:self-start">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Selected Path</p>
              <h2 className="mt-2 text-2xl font-black">{selectedPath.title}</h2>
            </div>
            <StatusBadge label={selectedPath.statusLabel} tone={selectedPath.statusTone} />
          </div>

          <div className="mt-5 grid gap-3 text-sm">
            <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex items-center gap-2 font-bold">
                <Clock3 className="size-4 text-[var(--blue)]" />
                Destination
              </div>
              <p className="mt-1 text-[var(--ink-soft)]">Direct agent conversation</p>
            </div>
            <div className="rounded-md border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex items-center gap-2 font-bold">
                <Shield className="size-4 text-[var(--green)]" />
                Guardrail
              </div>
              <p className="mt-1 text-[var(--ink-soft)]">Operator-mediated turn with current wake policy applied.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <ActionButton variant="primary">
              Start Chat
              <ArrowRight className="size-4" />
            </ActionButton>
            <ActionButton>Choose Agent</ActionButton>
          </div>

          <div className="mt-5 border-t border-[var(--line)] pt-4">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Open State</p>
            <div className="mt-3 space-y-2 text-sm">
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
        </aside>
      </div>
    </AppShell>
  );
}
