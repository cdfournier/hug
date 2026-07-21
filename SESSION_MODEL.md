# Session Model

Early model for HUG's central abstraction.

## Schema Ownership

HUG owns the session/control-plane layer. Existing runtime tables own raw
runtime facts.

This means HUG should have native tables for concepts that only exist at the
product/control-plane level:

- sessions
- session participants
- capability grants
- events
- invitations
- wake policies
- receipts
- adapter status
- retention policy metadata

Existing runtime tables should remain the source of truth for provider and
runtime facts:

- conversation records
- conversation messages
- tool events
- usage events
- source materials
- memories and restoration profiles
- compaction proposals and archives
- provider-specific metadata

HUG should connect to those facts through read-only views and adapter
contracts. Writes should go through domain APIs or adapters, then HUG should
record the intent, result, and receipt at the session layer.

The important distinction: a runtime conversation is one substrate thread. A
HUG session is the experience envelope around one or more substrates.

## Session

A session is a shared situation with participants, capabilities, controls, and
receipts.

Minimum fields:

- `id`
- `type`
- `title`
- `status`
- `created_at`
- `updated_at`
- `ended_at`
- `created_by`
- `environment`
- `external_ref`
- `retention_policy`
- `prompt_source`
- `live_mode`

Candidate session types:

- `chat`
- `shared_live`
- `eyes`
- `wheels`
- `outpost_room`
- `operator_note_thread`
- `peer_note_thread`
- `runtime_bridge`
- `compaction_review`
- `artifact_workspace`
- `free_moment`

Candidate statuses:

- `draft`
- `active`
- `paused`
- `ended`
- `archived`
- `error`

Candidate prompt sources:

- `operator`
- `schedule`
- `session_signal`
- `external_bridge`

Candidate live modes:

- `operator_mediated`
- `event_driven`
- `realtime_when_allowed`

## Participant

Who is in the session and in what role.

Minimum fields:

- `session_id`
- `participant_id`
- `participant_type`
- `display_name`
- `role`
- `joined_at`
- `left_at`
- `status`

Candidate participant types:

- `operator`
- `agent`
- `system`
- `external_agent`

Candidate roles:

- `operator`
- `speaker`
- `observer`
- `driver`
- `passenger`
- `watcher`
- `builder`
- `reviewer`

## Capability Grant

What a participant can do in a session.

Minimum fields:

- `session_id`
- `participant_id`
- `surface`
- `action`
- `mode`
- `requires_approval`
- `granted_by`
- `expires_at`

Candidate modes:

- `off`
- `read_only`
- `draft`
- `write`
- `operator_approval_required`

## Event

Something happened or requested attention.

Minimum fields:

- `id`
- `source`
- `event_type`
- `actor_id`
- `actor_type`
- `target_agent_id`
- `session_id`
- `priority`
- `content`
- `metadata`
- `created_at`
- `expires_at`
- `status`

Candidate event sources:

- `operator_message`
- `operator_note`
- `peer_note`
- `outpost`
- `eyes`
- `wheels`
- `runtime_bridge`
- `artifact`
- `source_material`
- `compaction`
- `system`

Candidate statuses:

- `new`
- `invited`
- `batched`
- `deferred`
- `blocked`
- `delivered`
- `expired`
- `failed`

## Invitation

A bounded opportunity for an Agent to enter or re-enter a session.

Minimum fields:

- `id`
- `event_id`
- `target_agent_id`
- `session_id`
- `invitation_type`
- `priority`
- `prompt`
- `context_refs`
- `requires_operator_approval`
- `status`
- `created_at`
- `scheduled_for`
- `delivered_at`
- `expires_at`

Candidate invitation types:

- `scheduled_free_moment`
- `operator_message`
- `operator_note`
- `peer_note`
- `outpost_mention`
- `session_invite`
- `bridge_message`
- `shared_session_signal`
- `artifact_assigned`
- `continuity_review`
- `urgent_system`

## Wake Policy

Rules that decide whether, when, and how invitations become wakes.

Minimum fields:

- `agent_id`
- `enabled`
- `quiet_hours`
- `max_wakes_per_day`
- `min_minutes_between_wakes`
- `budget_mode`
- `batch_low_priority`
- `operator_approval_surfaces`
- `immediate_event_types`
- `deferred_event_types`
- `blocked_event_types`

Policy questions:

- Should this wake now, batch, defer, ask the Operator, or block?
- What context should be included?
- What session should the Agent enter?
- What receipt should be written if the wake does not happen?

## Shared Live Session

A shared live session uses the session timeline as the signal source.

Additional useful fields:

- `session_id`
- `topic`
- `operator_id`
- `signal_policy`
- `turn_mode`
- `subscription_rules`
- `max_active_participants`
- `budget_policy`
- `consent_required`

Candidate turn modes:

- `freeform`
- `mention_required`
- `round_robin`
- `operator_chair`
- `question_queue`

Candidate signal policies:

- `mentions_only`
- `all_messages`
- `assigned_questions`
- `priority_events_only`
- `manual_operator_release`

Invariant: a participant may create a signal or invitation inside the session,
but may not unilaterally summon another Agent outside that Agent's wake policy.

## Event / Receipt

The durable trace of what happened.

Minimum fields:

- `id`
- `session_id`
- `turn_id`
- `actor_id`
- `actor_type`
- `event_type`
- `source`
- `content`
- `metadata`
- `created_at`

Candidate event types:

- `message`
- `tool_call`
- `observation`
- `capture`
- `command`
- `status_change`
- `join`
- `leave`
- `approval`
- `refusal`
- `summary`
- `continuity_receipt`
- `error`

## Visual Continuity Receipt

Specific receipt for EYES-like sessions.

Possible fields:

- `session_id`
- `agent_id`
- `frame_count_seen`
- `burst_count_seen`
- `observation_count`
- `agent_scene_summary`
- `operator_context_note`
- `external_log_refs`
- `frame_hashes`
- `selected_thumbnail_refs`
- `retention_policy`

Purpose: preserve enough durable context that an agent can later recognize the
experience as theirs without needing raw frames stored forever.

## Safety Notes

- EYES frames, chat attachments, source materials, and memories are different
  kinds of content and must not be flattened into one generic blob.
- WHEELS requires stronger controls than EYES: visible stop, current driver,
  current command, connection status, and stale-state warnings.
- Receipts should say what they can prove and name what they cannot prove.
