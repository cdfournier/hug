# Spacing and Layout

**Status:** Draft v0.1 — first defined HUG foundation  
**Owns:** spacing scale, layout ownership, responsive composition, containers,
and the rules that keep components portable.

---

## 1. Purpose

Spacing and layout make HUG readable, calm, and responsive before color or
component styling enters the picture. The system uses a small reference scale
for local relationships and semantic layout roles for the parts of a page that
need to breathe differently as available space changes.

The goal is not pixel-perfect sameness at every viewport. It is a coherent
house whose hierarchy and relationships remain clear at every useful width.

## 2. Root sizing

HUG preserves the browser’s root sizing:

```css
html {
  font-size: 100%;
}
```

At a browser default of 16px, `1rem` equals 16px. A person who increases their
browser text size receives an interface that respects that choice. HUG must not
use the `62.5%` root-size convention or other pixel-reset technique that
undermines this behavior.

## 3. Reference spacing scale

The reference scale uses quarter-rem units. Token names represent the number of
quarter-rem units, not an incidental pixel value.

| Token | Value at a 16px browser default | Typical role |
| --- | --- | --- |
| `space.0` | `0` | deliberate reset only |
| `space.1` | `0.25rem` / 4px | tight icon or inline separation |
| `space.2` | `0.5rem` / 8px | compact related elements |
| `space.3` | `0.75rem` / 12px | compact control or card rhythm |
| `space.4` | `1rem` / 16px | default local relationship |
| `space.5` | `1.25rem` / 20px | relaxed local relationship |
| `space.6` | `1.5rem` / 24px | component or panel rhythm |
| `space.8` | `2rem` / 32px | section-adjacent separation |
| `space.10` | `2.5rem` / 40px | roomy separation |
| `space.12` | `3rem` / 48px | section separation |
| `space.16` | `4rem` / 64px | major page separation |

The scale may extend when evidence requires it. New intermediate values do not
enter merely to match a one-off mockup.

## 4. Layout ownership

### Components own internal spacing

A component defines spacing between its own parts: icon-to-label gap, title-to-
metadata gap, or the padding inside a surface.

### Containers own placement

The parent or composition positions components relative to one another using
Grid or Flexbox and `gap`. A shared component must not impose arbitrary
external margins on the next thing in the layout.

This keeps a primitive portable: it can be used in a dense row, a spacious
card, or a drawer without carrying its last context with it.

## 5. Semantic layout roles

Reference tokens are stable. Semantic layout roles may map to different
reference tokens when the available space genuinely changes.

Initial role vocabulary:

| Role | Job | Responsive? |
| --- | --- | --- |
| `layout.gutter.inline` | page or shell inline padding | yes |
| `layout.page.block` | page-level top/bottom rhythm | yes |
| `layout.section.block` | separation between major sections | yes |
| `layout.panel.padding` | interior padding for a major surface | sometimes |
| `layout.cluster.gap` | separation of related peer groups | sometimes |
| `layout.control.gap` | local relation between controls | normally no |

No mapping values are selected yet. When the application shell is ready to
consume them, each responsive role will map to existing `space.*` tokens—not
new ad hoc measurements.

## 6. Responsive composition

### Start fluid

- Prefer intrinsically sized content, Flexbox, Grid, `minmax()`, and `gap`.
- Use fluid containers with a deliberate readable maximum rather than fixed
  device canvases.
- Use logical properties such as `padding-inline` and `margin-block` when
  applicable.

### Adapt only when content asks

Responsive changes are triggered by a real compression or comprehension
problem: controls no longer fit, a reading measure becomes poor, or a pattern
needs a different arrangement to remain understandable. They are not triggered
merely because a device has a familiar name.

Use one of these techniques deliberately:

- `clamp()` for values that should grow smoothly, such as page gutters;
- media queries when a structural layout change has a clear threshold; or
- container queries when a component’s available space matters more than the
  viewport.

The exact thresholds are deferred until representative HUG content exists.

## 7. Implementation rules

- CSS custom properties will be the web adapter for reference and semantic
  spacing roles.
- Components consume semantic roles where they exist; local internal gaps may
  consume the reference scale directly.
- Do not use raw `px` for spacing, radii, type, or layout dimensions that need
  to respect the root size.
- Avoid `height` constraints that clip text growth. Prefer `min-height` for
  controls with an appropriate interactive target.
- Do not encode a viewport name in a component API.

## 8. Accessibility and validation

Spacing and layout must be checked with:

- browser text zoom and increased default font sizes;
- narrow, intermediate, and wide available space;
- long names, translated-length labels, empty states, and error states;
- keyboard focus rings that remain visible without causing layout shift; and
- touch targets whose usable area remains comfortable at every layout.

## 9. Completion criteria

This foundation is ready for implementation when:

- the reference scale is approved;
- initial semantic layout-role mappings are chosen for the app shell;
- the CSS custom-property naming convention is chosen; and
- one reference surface demonstrates the rules at narrow and wide widths.

