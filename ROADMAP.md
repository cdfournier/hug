# HUG Roadmap

HUG is at concept-seed stage.

## Current Priority

Capture the session-centered product shape before implementation pressure
narrows it too early.

## Phase 0: Product Seed

Status: active.

- Define product spine: Agent + Session + Capability + Receipt.
- Record repo boundaries.
- Draft session model.
- Draft native app information architecture.
- Identify reusable primitives from `supabase`, `eyes`, and `picar-vroom`.

## Phase 1: App Shell Prototype

Goal: prove the navigation model without changing the current runtime.

- Create a native-first or native-shaped app prototype.
- Top-level areas: Agents, Sessions, Inbox, Library, Admin.
- Render mock session cards and session detail screens.
- Include chat, EYES, and WHEELS as distinct session types.
- Use realistic sample data from current systems.

## Phase 2: Existing Chat As Session

Goal: bring current runtime chat into HUG as one session type.

- Connect to existing `supabase` runtime endpoints.
- Show Soren/Varro chat sessions.
- Show basic cockpit data and tool receipts.
- Keep current runtime UI as fallback.

## Phase 3: EYES Session Integration

Goal: make EYES first-class.

- Show EYES session status.
- Copy/share join prompts.
- Show participants and recent observations.
- Integrate frame/burst state from existing EYES service.
- Add visual continuity receipt flow.
- Keep capture Operator-controlled.

## Phase 4: Free Moments And Inbox

Goal: make scheduled and asynchronous communication legible.

- Show Free Moments as scheduled opportunities and recent session events.
- Add Operator Notes / Inbox shape.
- Preserve quiet Free Moments without over-notifying.

## Phase 5: WHEELS Supervised Session

Goal: bring WHEELS back with the right safety posture.

- Show WHEELS status and camera.
- Show driver/passenger/watcher roles.
- Show queue/claim state.
- Add always-visible emergency stop.
- Record command and observation receipts.

## Phase 6: Control Plane Contracts

Goal: formalize adapter boundaries.

- Session registry.
- Capability checks.
- Event/receipt schema.
- Adapter health.
- Operator override.
- Retention policies.

## Open Questions

- Should HUG start as native app, web app, or web-first prototype with native
  architecture?
- What is the smallest useful session table that can coexist with current
  runtime tables?
- Which receipts must be universal across all sessions?
- How much visual data should EYES retain by default?
- How does HUG support multiple Operators or households later?
- Which provider-specific runtime details belong behind adapters?
