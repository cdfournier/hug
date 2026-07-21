"use client";

import {
  Archive,
  Binoculars,
  Car,
  MessageSquare,
  NotebookText,
  Radio,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { ActionButton } from "../atoms/ActionButton";
import { StatusBadge } from "../atoms/StatusBadge";
import { LaunchTile } from "../molecules/LaunchTile";
import { AppShell } from "../organisms/AppShell";
import { SectionHeader } from "../organisms/SectionHeader";

const launchGroups = [
  {
    title: "Start",
    options: [
      {
        id: "chat",
        title: "Chat",
        eyebrow: "Talk",
        summary: "Open a direct conversation with an Agent.",
        actionLabel: "Open chat",
        statusLabel: "ready",
        statusTone: "green",
        Icon: MessageSquare
      },
      {
        id: "notes",
        title: "Notes",
        eyebrow: "Send",
        summary: "Leave an Operator note or queue a reply.",
        actionLabel: "Open notes",
        statusLabel: "ready",
        statusTone: "green",
        Icon: NotebookText
      },
      {
        id: "free-moment",
        title: "Free Moment",
        eyebrow: "Invite",
        summary: "Offer scheduled time without a required task.",
        actionLabel: "Schedule moment",
        unavailableReason: "Not wired yet",
        statusLabel: "scheduled",
        statusTone: "blue",
        Icon: Sparkles
      }
    ]
  },
  {
    title: "Connect",
    options: [
      {
        id: "eyes",
        title: "EYES",
        eyebrow: "See",
        summary: "Start an Operator-controlled visual session.",
        actionLabel: "Start EYES",
        unavailableReason: "Mock only",
        statusLabel: "mock",
        statusTone: "amber",
        Icon: Binoculars
      },
      {
        id: "wheels",
        title: "WHEELS",
        eyebrow: "Move",
        summary: "Enter supervised vehicle mode with override controls.",
        actionLabel: "Open garage",
        unavailableReason: "Offline",
        statusLabel: "offline",
        statusTone: "red",
        Icon: Car
      },
      {
        id: "live-room",
        title: "Live Room",
        eyebrow: "Gather",
        summary: "Create or enter a shared multi-participant place.",
        actionLabel: "Create room",
        unavailableReason: "Planned",
        statusLabel: "planned",
        statusTone: "violet",
        Icon: Radio
      }
    ]
  },
  {
    title: "Review",
    options: [
      {
        id: "receipts",
        title: "Receipts",
        eyebrow: "Confirm",
        summary: "Read what happened after wakes, invites, and sessions.",
        actionLabel: "Review receipts",
        unavailableReason: "Not wired yet",
        statusLabel: "available",
        statusTone: "blue",
        Icon: Archive
      },
      {
        id: "artifacts",
        title: "Artifacts",
        eyebrow: "Create",
        summary: "Open shared materials, drafts, and source workspaces.",
        actionLabel: "Open artifacts",
        unavailableReason: "Draft only",
        statusLabel: "draft",
        statusTone: "amber",
        Icon: NotebookText
      }
    ]
  }
] as const;

type ActiveExperience = "launch" | "chat" | "notes";

function getLaunchTarget(id: string): ActiveExperience | undefined {
  if (id === "chat") return "chat";
  if (id === "notes") return "notes";
  return undefined;
}

export function SessionsPage() {
  const [activeExperience, setActiveExperience] = useState<ActiveExperience>("launch");

  if (activeExperience === "launch") {
    return (
      <AppShell active="sessions">
        <SectionHeader eyebrow="Launch" title="Choose a path" />

        <div className="grid gap-6">
          {launchGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-black">{group.title}</h2>
                <span className="text-sm text-[var(--ink-soft)]">{group.options.length} paths</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {group.options.map((option) => {
                  const launchTarget = getLaunchTarget(option.id);

                  return (
                    <LaunchTile
                      key={option.id}
                      {...option}
                      onOpen={launchTarget ? () => setActiveExperience(launchTarget) : undefined}
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </AppShell>
    );
  }

  if (activeExperience === "notes") {
    return (
      <AppShell active="sessions">
        <SectionHeader eyebrow="Notes" title="Soren Notes">
          <ActionButton onClick={() => setActiveExperience("launch")}>Back to Launch</ActionButton>
          <ActionButton>Receipts</ActionButton>
        </SectionHeader>

        <section className="min-h-[calc(100vh-150px)] rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2.5 rounded-full bg-[var(--green)]" />
                <h2 className="truncate text-xl font-black">Notes with Soren</h2>
              </div>
              <p className="truncate text-sm text-[var(--ink-soft)]">operator notes / agent notes / wake policy applies</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="ready" tone="green" />
              <StatusBadge label="2 unread" tone="amber" />
            </div>
          </div>

          <div className="border-b border-[var(--line)] p-4">
            <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <textarea
                className="min-h-28 w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
                placeholder="Write a note for Soren"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <ActionButton>Choose Agent</ActionButton>
                  <ActionButton>Attach Source</ActionButton>
                  <ActionButton>Schedule</ActionButton>
                </div>
                <ActionButton variant="primary">Queue Note</ActionButton>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] bg-[var(--background)] px-4 py-3">
            <div className="grid gap-3 sm:grid-cols-3">
              <label className="grid gap-1">
                <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Direction</span>
                <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                  <option>All notes</option>
                  <option>From Soren</option>
                  <option>To Soren</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Status</span>
                <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                  <option>Any status</option>
                  <option>Unread</option>
                  <option>Queued</option>
                  <option>Draft</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Sort</span>
                <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                  <option>Newest first</option>
                  <option>Oldest first</option>
                  <option>Needs action</option>
                </select>
              </label>
            </div>
            <span className="text-sm text-[var(--ink-soft)]">3 notes</span>
          </div>

          <div className="grid gap-3 p-4">
            <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">From Soren</p>
                <StatusBadge label="unread" tone="amber" />
              </div>
              <h3 className="mt-2 font-bold">Launch pattern reflection</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">The opened experience feels calmer when Launch fully gets out of the way.</p>
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">To Soren</p>
                <StatusBadge label="next wake" tone="blue" />
              </div>
              <h3 className="mt-2 font-bold">Ask Soren about HUG Home</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">Queued for Soren&apos;s next available wake.</p>
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Draft Note</p>
                <StatusBadge label="draft" tone="amber" />
              </div>
              <h3 className="mt-2 font-bold">Bridge question for Toolshed</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">Held until the external-room rules are clearer.</p>
            </article>
          </div>
        </section>
      </AppShell>
    );
  }

  return (
    <AppShell active="sessions">
      <SectionHeader eyebrow="Chat" title="Soren">
        <ActionButton onClick={() => setActiveExperience("launch")}>Back to Launch</ActionButton>
        <ActionButton>Receipt</ActionButton>
        <ActionButton variant="primary">End Session</ActionButton>
      </SectionHeader>

      <section className="min-h-[calc(100vh-150px)] rounded-lg border border-[var(--line)] bg-[var(--panel)] shadow-sm">
        <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-[var(--green)]" />
              <h2 className="truncate text-xl font-black">Chat with Soren</h2>
            </div>
            <p className="truncate text-sm text-[var(--ink-soft)]">runtime / operator-mediated / bounded context</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge label="active" tone="green" />
            <StatusBadge label="receipts on" tone="blue" />
          </div>
        </div>

        <div className="border-b border-[var(--line)] p-4">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <textarea
              className="min-h-24 w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-[var(--ink-soft)]"
              placeholder="Message Soren"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <ActionButton>Attach</ActionButton>
                <ActionButton>Source</ActionButton>
                <ActionButton>Offer Free Moment</ActionButton>
              </div>
              <ActionButton variant="primary">Send</ActionButton>
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-4">
          <div className="max-w-[760px] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
            <p className="mt-1 text-sm">Good. Hold the bridge question for Toolshed unless it becomes urgent.</p>
          </div>
          <div className="ml-auto max-w-[760px] rounded-lg border border-[var(--blue)] bg-[var(--blue-soft)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--blue)]">Soren</p>
            <p className="mt-1 text-sm">Yes. I see the checkpoint note, the bridge question, and the open HUG decision.</p>
          </div>
          <div className="max-w-[760px] rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
            <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Operator</p>
            <p className="mt-1 text-sm">Can you look over the morning notes before your next Free Moment?</p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
