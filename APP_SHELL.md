# App Shell Foundation

The first HUG app shell is mock-first and responsive by default.

It proves navigation, information posture, shared status language, and adapter
boundaries before any live runtime data is connected.

## Structure

The shell uses a lightweight Atomic Design organization:

- `src/components/atoms`: buttons, badges, meters, and shared status styling.
- `src/components/molecules`: Agent cards, session cards, inbox rows, receipt
  summaries.
- `src/components/organisms`: app shell, section headers, Home dashboard.
- `src/components/pages`: route-level page compositions.
- `src/domain`: HUG-shaped types, fixtures, and mock services.

The root `app/` directory contains Next.js routes. Routes compose page
components from `src/components/pages`.

`OPERATOR_SURFACE_MAP.md` is the field guide for visible nouns and placement
rules. If a route feels confusing, use that document to decide whether an item
belongs on the current card, in a drawer, on its own screen, in a modal, or out
of the routine Operator view entirely.

## Responsive Rules

- Desktop uses a persistent left navigation rail.
- Mobile uses bottom navigation.
- Cards and panels stack on small screens.
- Desktop can use side-by-side list/detail patterns.
- Risky controls stay out of routine display surfaces.

## Mock-First Boundary

All UI reads through mock service functions in
`src/domain/services/mockHugService.ts`.

Future Supabase, EYES, WHEELS, Outpost, or bridge adapters should satisfy the
same HUG-shaped service contracts instead of leaking adapter-specific data into
components.

## Current Routes

- `/`: Home status and attention surface.
- `/agents`: Agent status and wake-policy summaries.
- `/sessions`: Launch surface for starting or entering experiences.
- `/inbox`: attention queue with desktop detail surface.
- `/library`: prompt, archive, source, and receipt artifacts.
- `/admin`: adapter health and wake-policy configuration summaries.
