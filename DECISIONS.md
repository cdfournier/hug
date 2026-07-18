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

## Open Decisions

- First prototype fidelity.
- Session schema ownership: HUG-owned tables vs. views over existing runtime
  tables.
- Visual receipt retention policy.
- Authentication and multi-Operator model.
- Specific component/styling system.
