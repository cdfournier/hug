import { Eye, MessageSquare, Radio, Shield, Wrench } from "lucide-react";
import type { Session } from "@/domain/types";
import { StatusBadge } from "../atoms/StatusBadge";
import { sessionTone } from "../atoms/statusStyles";

const sessionIcons = {
  chat: MessageSquare,
  shared_live: Radio,
  eyes: Eye,
  wheels: Shield,
  outpost_room: Wrench,
  operator_note_thread: MessageSquare,
  peer_note_thread: MessageSquare,
  runtime_bridge: Radio,
  compaction_review: Shield,
  artifact_workspace: Wrench,
  free_moment: Radio
};

type SessionCardProps = {
  session: Session;
};

export function SessionCard({ session }: SessionCardProps) {
  const Icon = sessionIcons[session.type];

  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--blue-soft)] text-[var(--blue)]">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-bold">{session.title}</h3>
            <StatusBadge label={session.status} tone={sessionTone(session.status)} />
          </div>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">{session.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--ink-soft)]">
            <span>{session.type.replaceAll("_", " ")}</span>
            <span>·</span>
            <span>{session.liveMode.replaceAll("_", " ")}</span>
            <span>·</span>
            <span>{session.updatedAt}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
