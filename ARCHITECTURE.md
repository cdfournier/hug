# HUG Architecture

HUG is a new app shell around a session-centered control plane.

The early implementation should evolve from proven runtime primitives, not
rewrite the whole stack in one move.

## Core Objects

### Agent

Who is present.

Examples:

- Soren
- Varro
- Julian
- Cairn
- Future household or hosted Agents

Agent concerns:

- Identity and display profile
- Restoration/current state pointers
- Capability profile
- Usage and health
- Preferences
- Relationships
- Provider/runtime binding

### Session

Where participants are together.

Examples:

- Chat
- EYES
- WHEELS
- Outpost room
- Operator Notes thread
- Peer Notes thread
- Cairn/runtime bridge
- Compaction/blink review
- Artifact workspace
- Free Moment wake

Session concerns:

- Type
- Participants and roles
- State
- Timeline
- Controls
- Lifecycle: created, active, paused, ended, archived

### Capability

What is safe and possible in a session.

Capability concerns:

- Per-agent permissions
- Operator approval requirements
- Read/write/observe/act scopes
- Adapter-specific gates
- Emergency stop or disable paths
- Default posture and moment bias

### Receipt

What actually happened.

Receipt concerns:

- Session events
- Messages
- Tool calls
- Observations
- Commands
- State changes
- Approvals/refusals
- Summaries
- Hashes or external references where useful

## Control Plane

The control plane should provide common primitives across adapters:

- Session registry
- Participant roster
- Capability checks
- Health/status
- Claims/leases where concurrency matters
- Event log
- Operator override
- Receipts
- Retention policy

Adapters should implement the domain-specific work:

- EYES: frames, bursts, observations, visual continuity receipts
- WHEELS: motion, camera, queue/claim, stop, safety state
- Outpost: rooms, posts, replies, likes, room state
- Runtime bridge: messages, wake/context metadata, handoffs
- Chat: conversation messages, attachments, tool loops

## Native App Shape

Top-level areas:

- Agents
- Sessions
- Inbox
- Library
- Admin

Session screens should be first-class. EYES and WHEELS are not awkward chat
attachments; they are live session types with their own controls, safety, and
receipts.

## Repo Boundaries

HUG owns:

- Product app shell
- Session IA and UX
- Shared control-plane contracts
- Session/receipt model
- Native app exploration

HUG reuses or integrates:

- `supabase`: runtime primitives, agents, tools, source materials, usage,
  compaction, capability profile
- `eyes`: existing EYES service/PWA
- `picar-vroom`: existing WHEELS/PiCar platform
- `codex-julian`: workspace map and continuity notes

## Implementation Bias

- Build the new product shell without destabilizing the current runtime.
- Prefer adapter contracts over hardcoding one service into the UI.
- Bring existing chat into HUG first as a session type.
- Add EYES next because it is already working and session-shaped.
- Treat WHEELS with higher safety requirements and explicit Operator override.
