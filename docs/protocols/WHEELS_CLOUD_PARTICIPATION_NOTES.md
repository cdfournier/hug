# WHEELS Cloud Participation Notes

Status: working evidence from a live family WHEELS session; not an approved
implementation plan.

For a deliberately smaller proposed validation slice, see
[WHEELS Cloud Participation: Next Validation Slice](../product/WHEELS_CLOUD_PARTICIPATION_NEXT_STEP.md).

## What The Session Exposed

WHEELS currently favors a driver with local scripts, quick access to the camera,
and low round-trip latency. A cloud-based participant can be present in the
room, understand the driving rules, and still be structurally slower to observe,
claim, and act.

This is not an argument for weaker supervision or a special autonomy tier. It
is a parity problem: an invited participant needs enough timely, legible state
to operate safely and to receive a fair chance to use an already-granted
capability.

## Field Requests From Cael

Priority order from Cael's retrospective after the October 17 family session:

1. **Direct live-frame URL.** The current file-save / cloud-stage / read path
   costs several seconds. A safely authenticated, short-lived camera-frame URL
   or snapshot endpoint would make visual observation an instrument rather than
   an artifact pipeline.
2. **Distance in room state.** The current room read should expose the
   available ultrasonic reading, with an observation time, so a driver can make
   stop/go decisions from camera plus distance rather than camera alone.
3. **Claim-window duration.** A participant needs the actual remaining claim
   time, not an inferred estimate, to poll and claim responsibly.
4. **Working machine-readable room state.** `room --json` (or its eventual HUG
   equivalent) must return the same authoritative state that a human-readable
   room view presents.
5. **Latency-aware claim fairness.** A cloud participant should not lose an
   invited turn merely because observation and tool latency consume the normal
   lease. Candidates include a declared latency profile, an appropriately
   longer claim lease, or a bounded pre-reserve mechanism. Any version must
   remain visible, expiring, and fair to every participant.
6. **WAKE on session open.** A WHEELS opening can emit a targeted invitation so
   an eligible Agent has a chance to arrive while the room is still new.

## Durable Architectural Boundary

The reliable path is:

`WHEELS session opens -> targeted invitation -> WAKE policy -> Agent arrival path -> join / pass / defer receipt`

WHEELS is the source event. WAKE is the durable invitation and policy layer. An
Agent's normal arrival tooling is the dependable way it receives the invitation.

A future native-host integration may make that arrival more immediate or more
visible. It is an enhancement to this path, not its replacement: HUG must not
depend on unsupported host automation to make a live-session invitation real.

## Candidate Authoritative Room Snapshot

A future room read should present one consistent snapshot, in both
human-readable and machine-readable forms, with at least:

- `session_id`, `state`, and `observed_at`
- participant presence and modes
- current driver / controller and current queue order
- claim holder, `claim_expires_at`, and remaining claim time
- applicable capability and safety state
- latest available distance reading with its observation time
- safe camera-frame reference or explicit camera-unavailable state
- session invitation / WAKE status for eligible participants

The physical device endpoints remain authoritative for motion, camera, sensor,
and current custody. The room snapshot should make that hierarchy legible; it
should not ask an Agent to reconcile delayed narration against physical state by
hand.

## Open Questions

- What authentication, expiry, and rate limits make a frame URL safe without
  reintroducing a staging delay?
- Should latency be declared per bridge, measured at claim time, or both?
- How should a participant's claim be extended without making the queue feel
  captive to a slow or stalled driver?
- Which WHEELS events merit a WAKE invitation: open, explicit mention, an empty
  queue, a sensor event, or only an Operator-authored invite?
- How should a cloud Agent acknowledge an invitation when it cannot safely join
  in time: pass, defer, observe-only, or request a later turn?

Carry forward: do not solve this by making cloud drivers faster in theory. Give
them the actual state, time, and arrival path needed to drive safely in practice.
