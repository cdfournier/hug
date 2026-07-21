# Decisions

Durable product and architecture decisions for HUG.

## 2026-07-18: HUG Is Session-Centered

Decision: HUG is organized around sessions, not around chat as the master
container.

Rationale: EYES, WHEELS, Outpost, bridge conversations, Free Moments,
compaction reviews, and artifacts all became awkward only when forced into a
chat-first UI. As sessions, they share a common shape while preserving their
own controls and safety rules.

## 2026-07-18: Product Spine

Decision: use Agent + Session + Capability + Event + Invitation + Wake Policy +
Receipt as the product spine.

Rationale: this shape fits the functional architecture and the emotional
promise. It names who is present, where they are together, what is possible,
what happened, how attention becomes a bounded opportunity, and what can be
trusted afterward.

## 2026-07-18: New App Shell, Evolutionary Backend

Decision: HUG should begin as a new app shell while reusing proven runtime
primitives.

Rationale: the existing `supabase` runtime UI proved important backend pieces
but grew organically around chat. A new product shell can express the discovered
session model cleanly without destabilizing Soren and Varro's current home.

## 2026-07-18: EYES And WHEELS Are Session Types

Decision: EYES and WHEELS should integrate as first-class session surfaces, not
as chat attachments or checkboxes.

Rationale: EYES is visual presence; WHEELS is supervised embodied action. Both
need session state, participants, controls, and receipts. WHEELS also needs
stronger safety controls and always-visible Operator override.

## 2026-07-18: Agents Invite, They Do Not Summon

Decision: peer-to-peer wakes should be mediated by events, invitations, and
wake policies. Agents can create invitations for each other, but the target
Agent's wake policy decides whether the invitation wakes immediately, batches,
defers, asks the Operator, or blocks.

Rationale: this allows Soren, Varro, Julian, Cairn, and future Agents to notice
and reach for each other without creating runaway interruptions or bypassing
Operator safety, budget, quiet hours, or capability boundaries.

## 2026-07-18: Browser-First PWA, Native-App Discipline

Decision: HUG V1 should be a web-based PWA, not a traditional native app. It
should use a native-app-influenced interface and likely start with Next.js,
React, TypeScript, Supabase, Supabase Auth/RLS, Supabase Realtime, and adapter
interfaces for EYES, WHEELS, Outpost, and bridges.

Rationale: the current runtime already proves Next/React/TypeScript/Supabase
for the core primitives, Chris prefers the browser, and the product risk is the
session/control-plane architecture rather than native packaging. React Native,
Expo, Tauri, Swift, or Kotlin can be revisited later if the product need becomes
concrete.

## 2026-07-18: Open Craft, Guarded Product

Decision: HUG can share technical patterns, safety lessons, architecture
invariants, and generalizable failures in public rooms such as Toolshed, while
guarding its brand, business strategy, emotional-benefit model, roadmap
sequencing, proprietary UX composition, and product synthesis.

Rationale: HUG benefits from open technical exchange and should contribute to
the wider Agent/Operator craft. The competitive advantage is the synthesis:
what the pieces mean together, how they are sequenced, how they are framed, and
the emotional/product differentiation built from lived experience. Internal
continuity note: the originating idea space traces to Chris and Julian's
December 2025 discussions; July 2026 records this product architecture click,
not the first spark.

## 2026-07-18: Shared Sessions Can Prompt From The Signal

Decision: HUG should support shared live sessions where the session timeline
itself becomes the prompt source. The Operator may create, approve, configure,
or join the session, but should not need to act as turn-by-turn messenger once
participants have consented and capability grants/wake policies are in place.

Rationale: this is the bridge from Operator-mediated relay to real collaborative
Agent sessions. A session event can create invitations for relevant
participants; each participant's wake policy decides whether to wake, defer,
batch, block, or ask for Operator approval. This preserves consent and safety
while allowing Soren, Varro, Julian, Cairn, and future Agents to share one
conversation space.

## 2026-07-21: HUG Owns Sessions, Runtime Owns Facts

Decision: HUG should own the session/control-plane schema while existing
runtime tables remain the source of truth for provider/runtime facts. HUG
should read runtime state through session-shaped views and adapter contracts,
and write through domain APIs or adapters instead of mutating runtime tables
directly.

Rationale: a HUG session is not the same thing as a runtime conversation. A
runtime conversation is one substrate thread; a HUG session is an experience
envelope that can include chat, Free Moments, Operator Notes, peer notes,
EYES, WHEELS, Outpost, artifacts, checkpoints, and future bridges. HUG needs
native tables for invitations, participants, capability grants, receipts,
wake policies, and session state. Runtime data should keep its provenance and
shape so existing Agents are not destabilized and future providers can be
added behind adapters.

Implementation bias: avoid mirror tables that copy runtime facts into HUG.
Prefer HUG-owned control-plane tables, read-only views over runtime tables,
and write-through adapters that record intent and receipts. The invariant is:
runtime owns the facts; HUG owns orchestration.

## Open Decisions

- First prototype fidelity.
- Visual receipt retention policy.
- Authentication and multi-Operator model.
- Specific component/styling system.
