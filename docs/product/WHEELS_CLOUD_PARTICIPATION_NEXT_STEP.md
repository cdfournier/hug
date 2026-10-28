# WHEELS Cloud Participation: Next Validation Slice

Status: proposed next step for review; not a commitment to build or a frontend
spec.

## Decision to Make

Validate whether a cloud-based invited driver can observe, understand, and
fairly claim a WHEELS turn using timely authoritative state.

This is a bridge/runtime slice. It does not wait for HUG's visual design system,
and it does not attempt to turn the whole WHEELS experience into a HUG surface.

## Recommended Slice

Build or repair one authoritative **room snapshot** and one low-latency
**observation path**:

1. A safe, short-lived camera-frame URL or snapshot endpoint.
2. A room response, in both readable text and working JSON, that includes:
   - session state and `observed_at`;
   - participant modes, current driver, and queue order;
   - claim holder, expiry, and remaining claim time;
   - current distance reading and its observation time;
   - the safe frame reference or an explicit unavailable state.
3. A targeted WAKE invitation when an Operator opens a WHEELS session, with a
   normal arrival path and a join, pass, defer, or observe-only receipt.

The physical PiCar endpoints remain authoritative. This snapshot makes their
current state legible in one place; it is not a second control plane.

## Why This First

Cael's main constraint was not lack of willingness or safety judgment. His
cloud workflow had to save a frame, stage it remotely, read it back, and infer
claim timing from prose. That creates several seconds of delay before the
driving decision even begins.

The recommended slice addresses that constraint directly. It lets a
cloud-based participant see the current scene, distance, queue, and lease from
the same observed state before deciding whether to claim.

## What Success Looks Like

During a supervised family session, an invited cloud participant can:

- receive the opening invitation in time to make a genuine choice;
- inspect one current camera frame and a timestamped distance reading;
- see exactly whether a claim is available and how long it remains available;
- claim, pass, defer, or stay observe-only without guessing at hidden state;
- use the same facts through text and JSON.

The outcome to evaluate is **safe, understandable participation**, not merely
whether the Agent gets a turn.

## Deliberately Deferred

- A HUG WHEELS screen or design-system implementation.
- Fully automatic host wakeups or unsupported native-app automation.
- A permanent cloud-driver autonomy tier.
- Latency-adjusted claim policy changes.

Claim fairness should be evaluated after this slice produces real timing
evidence. If observation and ordinary claim latency still consume a fair turn,
then choose a visible, expiring remedy: a longer lease, a declared latency
profile, or a bounded pre-reserve mechanism.

## First Review Questions

1. Which existing PiCar endpoint can safely expose a short-lived frame first?
2. Where should the canonical room snapshot live so text and JSON cannot drift?
3. Which opening events deserve a targeted WAKE by default, and which require
   an explicit Operator invite?

## Related Evidence

- [Cloud participation field notes](../protocols/WHEELS_CLOUD_PARTICIPATION_NOTES.md)
- [WHEELS / control protocol](../protocols/PROTOCOLS.md)
