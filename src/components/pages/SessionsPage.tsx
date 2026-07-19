import {
  Archive,
  Binoculars,
  Car,
  MessageSquare,
  NotebookText,
  Radio,
  Sparkles
} from "lucide-react";
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
        Icon: MessageSquare
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
  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Launch" title="Start or enter" />

      <div className="space-y-8">
        {launchGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-black">{group.title}</h2>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">{group.summary}</p>
              </div>
              <span className="text-sm text-[var(--ink-soft)]">{group.options.length} paths</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
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
