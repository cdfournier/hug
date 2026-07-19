import {
  Archive,
  Binoculars,
  Car,
  MessageSquare,
  NotebookText,
  Radio,
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
        primaryAction: "Open Chat",
        secondaryAction: "Choose Agent",
        Icon: MessageSquare
      },
      {
        title: "Notes",
        eyebrow: "Send",
        summary: "Leave an Operator note or queue a reply.",
        statusLabel: "ready",
        statusTone: "green",
        primaryAction: "New Note",
        secondaryAction: "Delivery Rules",
        Icon: NotebookText
      },
      {
        title: "Free Moment",
        eyebrow: "Invite",
        summary: "Offer scheduled time without a required task.",
        statusLabel: "scheduled",
        statusTone: "blue",
        primaryAction: "Review Cadence",
        secondaryAction: "Start Now",
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
        primaryAction: "Prepare Tunnel",
        secondaryAction: "View Receipts",
        Icon: Binoculars
      },
      {
        title: "WHEELS",
        eyebrow: "Move",
        summary: "Enter supervised vehicle mode with override controls.",
        statusLabel: "offline",
        statusTone: "red",
        primaryAction: "Inspect Setup",
        secondaryAction: "Safety Rules",
        Icon: Car
      },
      {
        title: "Live Room",
        eyebrow: "Gather",
        summary: "Create or enter a shared multi-participant place.",
        statusLabel: "planned",
        statusTone: "violet",
        primaryAction: "Draft Room",
        secondaryAction: "Bridge Notes",
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
        primaryAction: "Open Receipts",
        secondaryAction: "Filter",
        Icon: Archive
      },
      {
        title: "Artifacts",
        eyebrow: "Create",
        summary: "Open shared materials, drafts, and source workspaces.",
        statusLabel: "draft",
        statusTone: "amber",
        primaryAction: "Open Workspace",
        secondaryAction: "Library",
        Icon: NotebookText
      }
    ]
  }
] as const;

export function SessionsPage() {
  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Launch" title="Start or enter">
        <ActionButton>Recent</ActionButton>
        <ActionButton variant="primary">New Note</ActionButton>
      </SectionHeader>

      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Ready Paths</p>
              <h2 className="mt-1 text-2xl font-black">What do you want to do?</h2>
            </div>
            <StatusBadge label="mock-first" tone="neutral" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <ActionButton variant="primary">
              <MessageSquare className="size-4" />
              Chat
            </ActionButton>
            <ActionButton>
              <NotebookText className="size-4" />
              Note
            </ActionButton>
            <ActionButton>
              <Sparkles className="size-4" />
              Free Moment
            </ActionButton>
          </div>
        </div>

        <aside className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
          <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Availability</p>
          <div className="mt-3 space-y-3 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span>Chat and notes</span>
              <StatusBadge label="ready" tone="green" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>EYES tunnel</span>
              <StatusBadge label="mock" tone="amber" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span>WHEELS tunnel</span>
              <StatusBadge label="offline" tone="red" />
            </div>
          </div>
        </aside>
      </section>

      <div className="mt-6 space-y-8">
        {launchGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-black">{group.title}</h2>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">{group.summary}</p>
              </div>
              <span className="text-sm text-[var(--ink-soft)]">{group.options.length} paths</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {group.options.map((option) => (
                <LaunchTile key={option.title} {...option} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
