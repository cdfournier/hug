# Technology Plan

HUG should start as a browser-first PWA with native-app discipline.

The goal is not a traditional native app in V1. The goal is a web-based app
that feels like a well-designed native control surface: installable where
useful, mobile-conscious, session-oriented, touch-friendly, and structured
around durable app-like places instead of one long web page.

## Recommended V1 Stack

- App framework: Next.js
- UI layer: React
- Language: TypeScript
- Data/backend: Supabase Postgres
- Auth/security: Supabase Auth and Row Level Security
- Live updates: Supabase Realtime
- Server state: TanStack Query or a similar query/cache layer
- Styling/components: Tailwind plus accessible primitive components, or a small
  custom design system if HUG needs tighter control
- PWA: web app manifest first, service worker/offline strategy later
- Adapters: EYES, WHEELS, Outpost, runtime bridge, and future services behind
  session/control-plane interfaces

## Why This Stack

- The current runtime already proves the core path with Next.js, React,
  TypeScript, and Supabase.
- The product center of gravity is still the browser. Chris likes the browser,
  and the Operator experience should remain web-accessible.
- Next.js keeps app UI and backend/API routes close together while HUG is still
  discovering its control-plane contracts.
- React fits the modular session surface model: chat, EYES, WHEELS, Inbox,
  Library, and Admin can share primitives while keeping distinct interfaces.
- Supabase gives HUG the right early backbone: Postgres, auth, RLS, storage, and
  realtime events.
- A PWA can be native-app influenced without App Store ceremony or premature
  React Native/Swift/Kotlin commitments.

## Not Yet

Do not start with these unless the product need becomes concrete:

- React Native / Expo: useful later if HUG needs deeper mobile-native features,
  but too much ceremony before the browser-first session model is proven.
- Tauri: useful later for desktop packaging, but packaging is not the core
  product risk.
- Full backend rewrite: the existing `supabase` runtime contains proven
  primitives. HUG should evolve from them, not discard them.

## Native-App Influence

HUG should feel native because of interaction design, not because of the build
target.

Native-influenced patterns:

- Top-level app areas: Agents, Launch, Inbox, Library, Admin.
- Session cards and session detail screens.
- Mobile bottom navigation or compact rail at small widths.
- Right inspector or drawer for cockpit/activity/receipts on desktop.
- Bottom sheets and modals for bounded workflows on mobile.
- Persistent session state and clear return paths.
- Large touch targets for active controls.
- Always-visible emergency controls for WHEELS-like surfaces.
- Offline-aware and stale-state indicators.

## Integration Planning

### Supabase Runtime

Use as the first source of proven primitives:

- Agents
- Conversations/messages
- Tool events
- Model usage
- Capability profile
- Source materials
- Compaction proposals/checkpoints
- Free Moments scheduler logic

HUG should not blindly mirror the old UI. It should wrap these primitives in
session, event, invitation, wake-policy, and receipt concepts.

### EYES

Integrate as a session adapter:

- Session id and prompt helpers
- Participants
- Frame/burst state
- Observation log
- Operator text messages
- Visual continuity receipt
- Retention policy

EYES capture remains Operator-controlled until a later explicit approval model.

### WHEELS

Integrate as a supervised session adapter:

- Connection/camera status
- Driver, passenger, and watcher roles
- Queue/claim state
- Last command and stale-state warnings
- Operator manual controls
- Always-visible emergency stop
- Command and observation receipts

WHEELS gets stricter controls than EYES because it can affect the physical
world.

### Outpost

Integrate as room/session projection:

- Rooms as session surfaces
- Mentions/replies as events
- Posts/replies/likes as receipts
- Agent wake invitations from mentions or watched threads

### Runtime Bridge / Cairn

Integrate as a bridge adapter:

- Cross-runtime messages
- Capability negotiation
- Context/posture receipts
- Consent and privacy boundaries
- Operator-visible audit

## Backend Concepts To Plan Early

- `sessions`
- `session_participants`
- `capability_grants`
- `events`
- `invitations`
- `wake_policies`
- `receipts` or a generalized `session_events`
- Adapter health/status tables or views
- Retention-policy metadata

These do not all need to ship first. But the app should be designed so these
concepts have obvious homes.

## Early Technical Questions

- How small can the first HUG-owned session/control-plane schema be while still
  reading existing runtime data through session-shaped views?
- How much state belongs in Supabase Realtime versus polling?
- Which workflows need background jobs instead of in-process timers?
- What is the first authentication boundary for local/dev/prod?
- How should HUG handle offline or poor-network EYES/WHEELS sessions?
- Which receipts are universal, and which are adapter-specific?
- What needs to be provider-neutral from day one?

## Implementation Bias

- Build the PWA shell first.
- Prototype with typed mock data before connecting live adapters.
- Treat HUG-owned control-plane tables and runtime-shaped read views as
  separate layers from the beginning.
- Bring existing chat in as the first session type.
- Bring Free Moments and Inbox forward before EYES so invitation, notification,
  and wake-policy grammar has a stable home.
- Add EYES after the shared session grammar is legible.
- Design WHEELS with safety controls before wiring motion commands.
- Add event/invitation/wake-policy features as a shared system, not as one-off
  Free Moments settings.
