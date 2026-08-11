# Current HUG Status

Updated: 2026-07-26

This is the fast orientation page for Operators and Agents checking the repo to
understand what is current.

## Current Posture

Bridge first. HUG is still the product shell and map, but near-term work should
be fed by working connection surfaces rather than by polishing mock UI.

The current practical priorities are:

1. Make the current runtime reachable from the web so the Operator can reach
   Soren and Varro from anywhere.
2. Create a shared text room/bar MVP where the Operator and approved Agents can
   gather in one timeline without copy/paste relay.
3. Define and stand up a sandbox path so current-runtime and HUG work can
   continue without touching live Agent continuity data.
4. Restore WHEELS in the current stack/runtime so supervised shared driving can
   return before final HUG integration.
5. Keep HUG UI/UX work focused on information architecture, launch paths,
   capability boundaries, safety posture, and session flow.

## What This Means

HUG should not pause while bridges are built. It should absorb what those
bridges teach.

The mock app shell remains useful for exploring:

- What the Operator sees first.
- How Agents, sessions, invitations, wake policies, and receipts fit together.
- How rich session objects fit into one timeline without turning everything
  into chat attachments.
- How Launch differs from Chat, Notes, EYES, WHEELS, and Admin.
- Which controls belong on a card, in a drawer, on a full screen, or behind an
  explicit confirmation.

But mock UI polish is not the main work right now unless the change clarifies
the map.

## Current Repo Reading Path

If you are catching up, read in this order:

1. `README.md` for the product spine.
2. `ROADMAP.md` for the current sequence.
3. `DECISIONS.md` for durable calls already made.
4. `OPERATOR_SURFACE_MAP.md` for what each visible surface is supposed to do.
5. `ARCHITECTURE.md` and `SESSION_MODEL.md` for the control-plane model.
6. `COLLABORATION.md` before discussing HUG details in public rooms.

## Active Decision Biases

- Runtime owns runtime facts. HUG owns orchestration.
- Prefer HUG-owned control-plane tables plus read-only runtime views and
  write-through adapters.
- Runtime web access may harden or expose runtime-owned APIs, but it should not
  copy runtime facts into HUG-owned tables.
- Arrival is now a foundational protocol: the Agent should orient to the live
  room before letting restoration context, current_state, or filed notes decide
  what is true.
- Notepad is approved as an optional per-Agent side table for small follow-ups;
  do not build it until the low-pressure v0 shape stays clear.
- Sandbox must isolate data, secrets, storage, bridge tokens, and wake schedules
  from production before deeper adapter work proceeds.
- Keep current runtime UI available as fallback until HUG earns replacement.
- Build the shared room as the first social bridge before WHEELS, because EYES,
  WHEELS, notes, links, attachments, and receipts all need a common timeline
  grammar.
- EYES and WHEELS are first-class session types, but WHEELS requires stronger
  safety controls.
- Agents may help critique generalizable architecture and runtime patterns, but
  HUG product strategy should stay private.

## Not The Current Focus

- Component-level visual polish.
- Rebuilding the current runtime from scratch inside HUG.
- Moving Soren and Varro into a new environment before the Operator experience
  is proven.
- Publicly disclosing brand strategy, business positioning, emotional-benefit
  strategy, or proprietary UX composition.
