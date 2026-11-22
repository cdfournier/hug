# Chris Things

**Status:** Living working preferences
**Purpose:** Keep durable, practical preferences visible while we build.

This is not a substitute for the charter or an excuse to skip a design
decision. It is a compact record of the defaults Chris prefers when no stronger
product, accessibility, or technical reason points elsewhere. Each entry may
be challenged by evidence; none should be quietly forgotten.

## CSS starts intentionally

- Begin from an intentional reset. Browser defaults are not the design system.
- Reset margins globally, then add margin only when its behavior is explicitly
  wanted.
- Treat margin like a bomb: rare, targeted, and never accidental.

The web reset begins from this posture:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
```

The complete reset will be defined with the web foundation so that lists,
forms, media, and browser accessibility behavior are handled deliberately.

## Spacing is owned

- Components own their internal spacing.
- Containers own placement of their children.
- Use `gap` for sibling relationships and padding for containment.
- Shared components do not export arbitrary external margins.
- Preserve browser root sizing and use root-relative `rem` values.

## Markup carries meaning

- Start with semantic HTML; presentation classes describe appearance, not
  structure.
- Native controls and elements come before generic containers or ARIA
  substitutes.
- Typography classes can style the appropriate semantic element without
  replacing it.

## Layout serves content

- Prefer fluid, intrinsic layouts before device-specific patches.
- Use Grid, Flexbox, `gap`, and content-driven thresholds.
- Prefer `min-height` to fixed height where text can grow.
- Build one house that breathes differently at different widths—not separate
  products for phone and desktop.

## System debt is real debt

- Fewer named options are better; variants earn their existence through real
  use.
- Tokens express intent rather than incidental visual values.
- A reusable abstraction needs a stable job, not merely an attractive name.
- Accessibility is part of the normal path, not a future cleanup task.
