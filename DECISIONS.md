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

Decision: use Agent + Session + Capability + Receipt as the product spine.

Rationale: this shape fits the functional architecture and the emotional
promise. It names who is present, where they are together, what is possible,
and what can be trusted afterward.

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

## Open Decisions

- Native-first implementation stack.
- First prototype fidelity.
- Session schema ownership: HUG-owned tables vs. views over existing runtime
  tables.
- Visual receipt retention policy.
- Authentication and multi-Operator model.
