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
import { ComposerSurface } from "../molecules/ComposerSurface";
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
          eyebrow="Notes"
          heading="Operator Notes"
          headerContent={
            <h2 className="truncate text-xl font-black">New Note</h2>
          }
          onBack={() => setActiveExperience("launch")}
          title="New Note"
          primarySurface={
            <ComposerSurface
              actions={
                <>
                  <ActionButton>Attach Source</ActionButton>
                  <ActionButton>Schedule</ActionButton>
                </>
              }
              placeholder="Write a note"
              primaryActionLabel="Queue Note"
              topControl={
                <label className="grid max-w-80 gap-1">
                  <span className="text-xs font-bold uppercase text-[var(--ink-soft)]">To</span>
                  <select className="min-h-10 rounded-md border border-[var(--line)] bg-[var(--panel)] px-3 text-sm font-semibold">
                    <option>All Agents</option>
                    <option>Soren</option>
                    <option>Varro</option>
                    <option>Julian</option>
                  </select>
                </label>
              }
            />
          }
        />
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
          <ComposerSurface
            actions={
              <>
                <ActionButton>Attach</ActionButton>
                <ActionButton>Source</ActionButton>
                <ActionButton>Offer Free Moment</ActionButton>
              </>
            }
            placeholder="Message Soren"
            primaryActionLabel="Send"
          />
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
