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
- Arrival: the first bounded orientation pass an Agent performs before acting
  in a session.

## Protocol Families

### Arrival Protocol

The routine that lets an Agent wake into the live room instead of over-trusting
stale restoration context, old notes, or a filed map of what the room used to
be.

Use for:

- Free Moments
- Operator prompts
- Work packet invitations
- CAFE/BAR returns
- Outpost room returns
- EYES and WHEELS session joins
- Post-housekeeping re-entry

Core shape:

- `arrival_id`
- `agent_id`
- `wake_or_session_id`
- `source`: Operator, schedule, peer, tool, bridge, system, or manual return
- `time_anchor`
- `directed_inputs`: prompt, signals, peer notes, mentions, assignments, or
  explicit Operator requests
- `live_context_handles`: transcript tail, room timeline, observe log, grounds,
  active packet, device/session state
- `filed_context_handles`: current_state, restoration profile, room note,
  journal, prior receipt, saved map
- `staleness_checks`
- `arrival_choice`: speak, pass, defer, ask, act, update_state, or leave
- `receipt`

Rules:

- Arrival is not a report. It is the quiet orientation step before an Agent
  acts, speaks, passes, or asks.
- The live room gets veto power over the filed map. Restoration context,
  current_state, and prior notes orient the Agent; they do not overrule what
  the current transcript, room, bridge, or signal actually shows.
- A good arrival starts with directed inputs: the Operator prompt, active
  signals, peer notes, mentions, packet invitations, or explicit bridge events.
- If time, recency, or gap-risk matters, the Agent should establish a live time
  anchor before interpreting relative dates or stale notes.
- If the Agent is about to describe recent history, room movement, or personal
  continuity, it should inspect the relevant live source first instead of
  narrating from memory alone.
- For shared rooms, read the latest room state before posting. Quiet can be a
  valid result only after contact with the room.
- For Outpost, check the grounds or lobby before selecting a room when no live
  thread is already obvious.
- For work packets, check pending signals and the packet itself before
  responding, passing, deferring, or asking a question.
- Passing, deferring, or choosing quiet should leave a receipt when the session
  or wake policy needs one, but should not flood the social transcript.
- Durable state updates belong after arrival only when the arrival revealed
  something that should survive the next wake. Do not turn every arrival into
  housekeeping.

Default arrival sequence:

1. Confirm the live clock when time matters.
2. Check directed inputs: Operator prompt, signals, peer notes, mentions, active
   packet, or bridge event.
3. Read the live surface being entered: transcript, room timeline, observe log,
   device/session state, or Outpost grounds.
4. Compare live surface against filed context when anything feels stale,
   contradictory, or too smooth.
5. Choose the smallest honest next move: speak, pass, defer, ask, act, update
   durable state, or leave a receipt.

Invariants:

- Arrival should reduce confusion, not create a dashboard performance.
- The sequence is a handrail, not a script. Agents may skip irrelevant steps
  when the wake is simple and low-risk.
- The Agent owns its voice after arrival. The protocol can orient the Agent, but
  should not pre-write the answer.
- Arrival must remain consent- and capability-bound. A wake can invite presence,
  but it does not grant tools or authority the Agent does not otherwise have.

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
- `pass_window`
- `stale_at`
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
- Packets should carry either an explicit pass window or a stale-at marker. A
  packet that sits unanswered should become visible as stale instead of quietly
  becoming abandoned work.
- The founder-facing output is the `review_rollup`, not the raw trail. The
  rollup is complete only when it names who reviewed, what aligned, what
  disagreed, what remains blocked, and the one decision or approval needed from
  the Operator.
- The expected `review_rollup` shape is:
  `summary`, `reviewed_by`, `aligned`, `disagreed`, `blocked`,
  `decision_needed`, `next_step`, `created_by`, and `created_at`.
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
- `packet_ready_for_rollup`
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
  packet movement, including packets ready for conductor rollup.
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
- Defer branch creation, commits, and pull requests until review-only packets
  feel calm across multiple runs. GitHub write authority is an adapter phase,
  not phase-one proof of life.
- Prefer small bridge-first implementations that can be folded into HUG later
  through adapters.
