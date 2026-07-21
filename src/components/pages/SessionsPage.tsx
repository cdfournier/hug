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
import { ExperienceFrame } from "../organisms/ExperienceFrame";
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
          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black">Active / Recent</h2>
              <span className="text-sm text-[var(--ink-soft)]">2 available</span>
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Continue</p>
                    <h3 className="mt-1 text-lg font-black">Chat with Soren</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">Last activity 4 minutes ago.</p>
                  </div>
                  <StatusBadge label="active" tone="green" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ActionButton variant="primary" onClick={() => setActiveExperience("chat")}>Open Chat</ActionButton>
                  <ActionButton>Receipt</ActionButton>
                </div>
              </article>

              <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Resume</p>
                    <h3 className="mt-1 text-lg font-black">Notes</h3>
                    <p className="mt-1 text-sm text-[var(--ink-soft)]">2 unread, 1 queued.</p>
                  </div>
                  <StatusBadge label="unread" tone="amber" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ActionButton variant="primary" onClick={() => setActiveExperience("notes")}>Open Notes</ActionButton>
                  <ActionButton>Mark Read</ActionButton>
                </div>
              </article>
            </div>
          </section>

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
        <ExperienceFrame
          actions={<ActionButton>Receipts</ActionButton>}
          badges={[
            { label: "ready", tone: "green" },
            { label: "2 unread", tone: "amber" }
          ]}
          eyebrow="Notes"
          heading="Notes"
          onBack={() => setActiveExperience("launch")}
          subtitle="operator notes / agent notes / wake policy applies"
          title="Operator Notes"
          primarySurface={
            <div className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <label className="mb-3 grid gap-1">
                <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Recipient</span>
                <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                  <option>All Agents</option>
                  <option>Soren</option>
                  <option>Varro</option>
                  <option>Julian</option>
                </select>
              </label>
              <textarea
                className="min-h-28 w-full resize-none rounded-md border border-[var(--line)] bg-[var(--panel)] p-3 text-sm outline-none placeholder:text-[var(--ink-soft)]"
                placeholder="Write a note"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <ActionButton>Attach Source</ActionButton>
                  <ActionButton>Schedule</ActionButton>
                </div>
                <ActionButton variant="primary">Queue Note</ActionButton>
              </div>
            </div>
          }
          utilityBar={
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <label className="grid gap-1">
                  <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Agent</span>
                  <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                    <option>All Agents</option>
                    <option>Soren</option>
                    <option>Varro</option>
                    <option>Julian</option>
                  </select>
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">Direction</span>
                  <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                    <option>All notes</option>
                    <option>From Agents</option>
                    <option>To Agents</option>
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
          }
        >

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
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">To All Agents</p>
                <StatusBadge label="next wake" tone="blue" />
              </div>
              <h3 className="mt-2 font-bold">Ask for HUG Home reactions</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">Queued for each Agent&apos;s next available wake.</p>
            </article>
            <article className="rounded-lg border border-[var(--line)] bg-[var(--background)] p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase text-[var(--ink-soft)]">Draft Note · Varro</p>
                <StatusBadge label="draft" tone="amber" />
              </div>
              <h3 className="mt-2 font-bold">Bridge question for Toolshed</h3>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">Held until the external-room rules are clearer.</p>
            </article>
          </div>
        </ExperienceFrame>
      </AppShell>
    );
  }

  return (
    <AppShell active="sessions">
      <ExperienceFrame
        actions={
          <>
            <ActionButton>Receipt</ActionButton>
            <ActionButton variant="primary">End Session</ActionButton>
          </>
        }
        badges={[
          { label: "active", tone: "green" },
          { label: "receipts on", tone: "blue" }
        ]}
        eyebrow="Chat"
        heading="Soren"
        onBack={() => setActiveExperience("launch")}
        subtitle="runtime / operator-mediated / bounded context"
        title="Chat with Soren"
        primarySurface={
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
        }
      >

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
      </ExperienceFrame>
    </AppShell>
  );
}
