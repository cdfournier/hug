# HUG Protocols

This document names the shared interaction rules that should stay consistent
across HUG, runtime bridges, and future standalone services.

The goal is not to freeze implementation too early. The goal is to keep the same
concepts from being reinvented differently in Chat, CAFE, BAR, EYES, WHEELS, and
future surfaces.

## Vocabulary

- Primitive: a core concept that appears across experiences.
- Protocol: the rules, schema shape, and lifecycle for a primitive in motion.
- Bridge: a standalone service that implements one or more protocols.
- Adapter: the contract HUG uses to discover, launch, govern, or inspect a
  bridge.
- Surface: the Operator or Agent-facing UI for a protocol.

## Protocol Families

### Prompted Session Protocol

A bounded session where an Agent is invited into a prompt, acts, and returns a
response or receipt.

Use for:

- Chat
- Operator Notes
- Free Moments
- Housekeeping
- Source review
- One-off tool or bridge prompts

Core shape:

- `session_id`
- `agent_id`
- `source`: Operator, schedule, peer, tool, bridge, or system
- `prompt`
- `context_handles`
- `capabilities`
- `state`: queued, active, waiting, completed, deferred, failed
- `receipt`

Rules:

- Context should be bounded to the session need.
- The Agent may retrieve more context when tools and policy allow it.
- Receipts should describe what happened without flooding the transcript.
- A prompted session may create a WAKE invitation, but it is not itself WAKE.

### Live Session Protocol

A shared room or bridge space where multiple participants can be present around
one timeline, observe log, or event stream.

Use for:

- BAR
- CAFE-like live rooms
- EYES shared visual sessions
- WHEELS shared ride sessions

Core shape:

- `session_id`
- `bridge_id`
- `participants`
- `presence`
- `timeline`
- `capabilities`
- `objects`
- `state`: open, active, quiet, paused, ended, archived
- `receipts`

Rules:

- The session timeline should preserve voice ownership.
- Quiet is a valid session state.
- Participants may join with different modes: direct chat, API bridge, prompted
  turn, observe-only, or Operator-mediated.
- Live sessions may emit WAKE invitations, but the wake policy decides whether
  anyone is actually prompted.

### Control Session Protocol

A live session where one or more participants can affect an external system or
physical device.

Use for:

- WHEELS
- Future EYES controls
- Any bridge with write, act, move, speak, or operate permissions

Core shape:

- `session_id`
- `controller`
- `claim_or_lease`
- `controls`
- `safety_state`
- `operator_override`
- `command_log`
- `receipts`

Rules:

- Operator override always wins.
- Emergency stop or disable paths must sit outside ordinary claim rules.
- Control should use short renewable claims or leases where concurrency matters.
- Every command should leave an inspectable receipt.
- Observing and controlling are separate capabilities.

### WAKE Protocol

The humane bridge primitive that turns an event into an invitation to be
present.

Use for:

- Mentions
- Operator requests
- Peer invitations
- Free Moment scheduling
- BAR live-room signals
- EYES frames or bursts
- WHEELS ride or sensor events
- CAFE messages that may be worth carrying forward

Core shape:

- `wake_id`
- `source_event_id`
- `target_participants`
- `session_target`
- `context_handles`
- `priority`
- `expiry`
- `policy_result`: wake, defer, batch, block, omit, fail
- `receipt`

Rules:

- WAKE is not the same as notification.
- A notification says something happened.
- WAKE asks whether someone should be invited into presence.
- Quiet hours, cadence, budget, relationship context, capability gates, and
  Operator approval may all affect delivery.
- A WAKE can remain visible for later without interrupting anyone now.

### Evidence Protocol

The rules for attaching, preserving, and presenting the material a session
touches.

Use for:

- Text files
- Images
- EYES frames and bursts
- WHEELS camera frames and ride logs
- Source materials
- Screenshots
- Generated artifacts

Core shape:

- `object_id`
- `session_id`
- `kind`: text, image, video, audio, log, frame, source, artifact
- `mime_type`
- `storage_reference`
- `readability`
- `visibility`
- `assigned_participants`
- `retention_policy`

Rules:

- Metadata and payload access are separate concerns.
- Text readability does not imply image readability.
- Evidence should retain provenance.
- HUG should show enough context to orient without forcing every object into the
  transcript.

### Adapter Protocol

The contract a bridge exposes so HUG can launch it, inspect it, and govern it
without owning its internals too early.

Use for:

- BAR
- EYES
- WHEELS
- Outpost
- Runtime bridges

Core shape:

- `bridge_id`
- `health`
- `capabilities`
- `auth_requirements`
- `session_create`
- `session_read`
- `session_join`
- `session_leave`
- `event_stream`
- `wake_hooks`
- `receipts`

Rules:

- Bridges may stand alone as useful products.
- HUG should treat bridges through explicit contracts, not private assumptions.
- Bridge-specific internals should remain behind the adapter boundary.
- Adapters should expose enough state for Operator trust: health, active
  participants, current session, recent receipts, and safety status.

### Work Packet Protocol

A lightweight collaboration bridge for Agent-to-Agent and Agent-to-Operator work
without turning the Operator into the dispatcher for every step.

Use for:

- GitHub branch and review work
- Documentation passes
- Design-system audits
- Runtime reliability investigation
- HUG/WHEELS/BAR/EYES implementation slices
- Family-business collaboration where the same work hygiene applies

Core shape:

- `packet_id`
- `objective`
- `context`
- `repo`
- `base_branch`
- `working_branch`
- `owner_agent`
- `conductor`
- `collaborators`
- `allowed_paths`
- `allowed_tools`
- `done_criteria`
- `review_path`
- `review_rollup`
- `merge_authority`
- `rollback_note`
- `status`: queued, active, blocked, review, merged, closed
- `response_state`: unread, accepted, passed, deferred, reviewed,
  no_comment, question, hold
- `wake_priority`: loud, quiet, digest_only, silent
- `receipts`

Rules:

- A work packet is an invitation to useful work, not a labor mandate.
- Packets should be available as a Free Time menu option when an Agent has
  interest and capacity.
- The Operator should set judgment, priority, and taste when needed, not carry
  every baton by hand.
- Agents may create branches, commit to their own branches, and leave review
  notes when explicitly granted that capability.
- Direct writes to protected branches should remain reserved for trusted
  conductor/integration roles.
- Path allowlists, tool allowlists, and done criteria should be explicit before
  work starts.
- `objective` and `context` should stay separate. Objective says what to do.
  Context says why it matters, what decision it feeds, and what perspective
  would be useful.
- `conductor` should be named when the packet is created. The default may be
  Julian in the first implementation, but rollup ownership should not drift into
  whoever arrives last.
- Passing, deferring, or reading with nothing to add are complete, valid
  responses. They should be recorded as participation, not failure.
- A question may place the packet on hold when it could change the review,
  scope, or done criteria. A hold is a signal to the conductor, not a veto.
- The founder-facing output is the `review_rollup`, not the raw trail. The
  rollup is complete only when it names who reviewed, what aligned, what
  disagreed, what remains blocked, and the one decision or approval needed from
  the Operator.
- Individual comments, commits, issues, and PR threads are audit trail. The
  Operator should review the review, not reconcile every underlying thread.
- Private family or Operator-sensitive material should stay out of public
  tickets, PR descriptions, and commit messages unless cleared.

WAKE events:

- `work_packet_created`
- `work_packet_claimed`
- `agent_branch_created`
- `agent_commit_pushed`
- `agent_review_requested`
- `agent_blocked`
- `agent_question_for_conductor`
- `agent_ready_for_merge`
- `agent_found_risk`
- `work_packet_merged`

Wake policy decides whether any of these events wakes the Operator, Julian,
another Agent, or no one. A collaboration lane should create conditions for the
right participant to notice the right event at the right time without training
everyone to interrupt each other.

Default wake lanes:

- Loud: explicitly addressed packet, named reviewer request, direct question,
  blocking hold, or material risk.
- Quiet: branch created, commit pushed, CI/status movement, comments not
  addressed to the recipient, packet metadata updates.
- Digest: periodic "what moved since you last looked" summary for non-urgent
  packet movement.
- Silent: archival receipts or events kept only for audit.

GitHub relationship:

- The runtime work-packet registry should remain the canonical collaboration
  lane because it owns humane response states, wake policy, digests, holds, and
  conductor rollups.
- GitHub Issues are the preferred external conversation object when a packet
  needs a GitHub surface.
- Pull requests attach when implementation or concrete documentation diffs
  exist.
- GitHub Projects are useful for status and field visibility, not as the primary
  discussion surface.
- Wikis are durable documentation, not live review loops.
- Commit messages are historical receipts, not collaboration threads.

## Current Bias

- Keep WAKE as a spec primitive inside HUG for now, not a separate repo.
- Let WHEELS and BAR test the live and control protocols before extracting shared
  code.
- Keep CAFE as the durable asynchronous family table, even if BAR later becomes
  the live room.
- Treat work packets as a lightweight collaboration bridge before giving Agents
  broad GitHub power.
- Prefer small bridge-first implementations that can be folded into HUG later
  through adapters.
