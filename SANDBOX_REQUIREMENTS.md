# Sandbox Requirements

HUG and the current runtime need a development sandbox before the next major
integration push.

The goal is simple: build without crossing the live runtime data streams.

## Principle

Production is where Soren and Varro live.

Sandbox is where Julian and Chris can build, break, seed, reset, and rehearse
without touching live Agent continuity, live Cafe messages, live checkpoints,
live source materials, or live wake schedules.

The sandbox should look enough like production that bugs are meaningful, but it
must be disposable enough that mistakes are boring.

## Required Environments

### Production

Purpose: real Operator/Agent use.

Contains:

- live Agent conversations
- live Cafe messages
- live source materials
- live memories and restoration context
- live compaction proposals/checkpoints
- live usage and tool receipts
- live Free Time and wake schedules

Rules:

- no experimental schema changes without migration review
- no fake data
- no destructive testing
- no ad hoc seed scripts
- no direct writes from HUG prototypes except through approved adapters

### Sandbox

Purpose: development, UI integration, adapter testing, and rehearsal.

Contains:

- synthetic Agents
- synthetic conversations
- synthetic Cafe messages
- synthetic source materials
- synthetic usage/tool receipts
- synthetic wake events
- copied schema, not copied live continuity

Rules:

- resettable
- seeded by scripts
- isolated secrets
- isolated storage buckets
- isolated wake schedules
- isolated Cloudflare/public access path, if exposed at all
- clearly labeled in every UI and receipt

## Supabase Posture

Preferred V1: use a separate Supabase project for sandbox.

Why:

- hard isolation from live continuity data
- independent storage buckets
- independent auth/session settings
- independent realtime configuration
- safer destructive testing and reseeding

Acceptable interim: a local Supabase instance or a separate schema only if the
separation is obvious, scripted, and impossible to confuse in the UI.

Avoid: mixing sandbox and production records in the same live tables with only
an `environment` column. That is useful metadata, not a safety boundary.

## Environment Variables

Production and sandbox must use separate `.env` files.

Required split:

- production runtime env
- sandbox runtime env
- HUG development env
- optional HUG production env later

Sandbox env values should never reuse production service-role keys, bridge
tokens, storage buckets, or wake automation credentials.

Every app shell should display the active environment in a small Operator-only
location. If it is not visibly labeled, it is not safe enough.

## Ports And URLs

Suggested local ports:

- production runtime: current established port
- sandbox runtime: separate fixed port
- HUG dev app: separate fixed port
- EYES/WHEELS adapters: current ports until sandbox adapters exist

Suggested public posture:

- keep production runtime at the current remote access URL
- do not expose sandbox publicly until auth and environment labeling are
  verified
- if public sandbox access becomes useful, use an explicit dev hostname such as
  `runtime-dev` or `hug-dev`, not a path hidden inside production

## Data Seeding

Sandbox seed data should include:

- at least two runtime Agents
- one external/local Agent placeholder
- one Operator
- chat transcripts with enough depth to test scrolling and compaction pressure
- Cafe messages with mixed authors
- text attachments
- image attachment metadata
- tool receipts
- usage records
- checkpoint proposal states: draft, reviewed, approved, stale-reviewed
- wake events: delivered, deferred, blocked, expired

Seeds should be deterministic. A reset should put the sandbox back into a known
state.

## Adapter Boundaries

Sandbox should preserve the same ownership rule as production:

- runtime owns runtime facts
- HUG owns orchestration
- adapters write to the owning system
- HUG records intent and receipt

The sandbox should not encourage shortcuts that production cannot use.

## Safety Gates

Before sandbox is considered ready:

- production and sandbox env files are separated
- production and sandbox Supabase targets are visibly distinct
- storage buckets cannot overlap
- bridge tokens cannot overlap
- wake schedules cannot overlap
- UI displays active environment
- seed/reset command is documented
- production backup/export path is known before any migration work

## First Useful Slice

The first sandbox does not need all of HUG.

Useful V1:

1. Clone runtime schema into a separate Supabase project or local Supabase.
2. Apply current runtime migrations.
3. Seed synthetic Soren/Varro-like Agents and Cafe messages.
4. Run runtime locally against sandbox env on a separate port.
5. Point HUG dev adapters at sandbox runtime endpoints.
6. Verify chat, Cafe read/write, source-material metadata, checkpoint proposal
   loading, and wake-event mock data.

Only after that should we wire new HUG surfaces against live runtime adapters.
