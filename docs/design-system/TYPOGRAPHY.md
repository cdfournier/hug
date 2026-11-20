# Typography

**Status:** Draft v0.1 — role architecture defined; font families and exact
values intentionally open.  
**Owns:** typographic roles, semantic use, hierarchy, scale policy,
line-height bands, weight/tracking rules, readable measure, and web-adapter
behavior.

---

## 1. Purpose

Typography makes HUG legible, calm, and human without turning its interface
into a catalogue of display treatments. It separates what text *is* in the
document from how that text should look.

Semantic HTML carries document structure. Typography roles carry visual
presentation. Neither substitutes for the other.

## 2. Two registers, strict budget

HUG has two typographic registers:

1. **Functional interface register** — the primary family for nearly all
   interface text: headings, body, labels, metadata, and data.
2. **Display register** — a distinct family reserved for rare, meaningful
   human emphasis.

The display register has exactly two roles in v1:

- `type.page-title`
- `type.surfaced-sentence`

No other use earns the display register without an explicit decision record.

## 3. Semantic HTML first

Use native elements according to the content’s meaning and hierarchy:

- `h1`–`h6` express heading rank;
- `p` expresses a paragraph;
- `time` expresses a timestamp;
- `button`, `a`, `label`, `input`, lists, and tables retain their native jobs.

A visual role does not determine the element. An `h2` can receive
`type.section-title`; a meaningful display sentence that is not a heading can
be a paragraph using `type.surfaced-sentence`.

Use native heading elements rather than ARIA heading roles except where native
markup is genuinely impossible. Do not use generic containers as typographic
substitutes for semantic elements.

`small` is reserved for actual side comments, qualifiers, and fine-print-like
content. It is not a generic request to make unrelated copy smaller.

## 4. Role inventory

| Role | Register | Intended job |
| --- | --- | --- |
| `type.page-title` | display | the primary title of a page or major place |
| `type.surfaced-sentence` | display | one rare human-facing statement of meaning |
| `type.section-title` | functional | a true content or control-panel section heading |
| `type.body` | functional | ordinary prose, descriptions, and supporting copy |
| `type.label` | functional | controls, navigation, field labels, and compact categories |
| `type.metadata` | functional | timestamps, bylines, secondary status context, and supporting facts |
| `type.data` | functional | counts, durations, percentages, dates, and compact measurements |

### Deliberately absent in v1

- No `subsection-title`, `panel-title`, `lead`, `body-small`, or global label
  family.
- No separate link type role.
- No `type.mono` until a technical surface proves a recurring need.

Body emphasis uses semantic markup such as `strong` and `em`; it does not
require a new body role. Supporting prose begins as `type.body` with a semantic
color such as `text.secondary` rather than a smaller type treatment.

Buttons, navigation items, and field labels begin with `type.label`. A future
Button-specific compact treatment belongs first to the Button contract, not to
a global label variant.

## 5. Scale policy

The **1.20 Minor Third** scale is HUG’s reference rhythm. It begins from the
root-relative base and supplies relationships, not a rigid list of mandatory
measurements.

```text
1.00 → 1.20 → 1.44 → 1.73 → 2.07 → 2.49 → 2.99 → 3.58
```

Each role begins by mapping to that scale. A nearby practical value is allowed
when the selected font, content, or implementation requires it; the exception
must preserve the hierarchy and have a stated reason.

## 6. Root-relative and responsive typography

All typography uses `rem` sizing and preserves browser root sizing:

```css
html {
  font-size: 100%;
}
```

At a common browser default, `1rem` is 16px; user text-size preferences remain
effective throughout the system.

Typography is stable by default. Fluid sizing through `clamp()` or a
content-driven breakpoint is an explicit role-level exception, never a global
rule. Layout carries most responsive adaptation.

Any future fluid rule must use accessible root-relative lower and upper bounds,
prove its behavior under browser text resizing, and improve a real HUG surface.

## 7. Line height, weight, and tracking

### Line-height bands

Line height uses named bands before exact values are selected:

- **tight** — display roles;
- **standard** — section titles;
- **relaxed** — body content;
- **compact** — labels and data.

Use unitless line-height so the relationship scales with the font size. Lists
inherit their content role by default. A dense operational list may opt into a
tighter treatment through its own pattern contract; global `li` styling must
not make wrapping content hard to read.

### Weight

Each typography role defines one default weight appropriate to its job. Use
only real weights supported by the selected font; do not synthesize boldness or
offer a free-form weight menu.

### Tracking

Tracking is normal by default. A deliberate role-level adjustment may be added
later for a proven need, such as an eyebrow or a compact button label. It is
not an ordinary component option.

## 8. Measure and text behavior

Prose-rich regions get a readable measure guardrail. A starting reference is
approximately `65ch`, validated with real font and copy rather than treated as
a guarantee.

The practical test is a marked sample: place markers near the 45th and 75th
characters of representative copy. If both markers repeatedly land on the same
line at a target width, narrow the reading region or increase the type size.

This guardrail applies to body-rich content, not to data panels, tables,
controls, or compact operational surfaces that legitimately use their available
width.

Long agent names, translations, labels, and error messages must be tested for
wrapping and truncation behavior as part of the component or pattern that owns
them.

## 9. Links and data

Links retain their underlying typography role: body links remain body, metadata
links remain metadata, and label links remain labels. Their distinction comes
from semantic color, decoration, and interaction states—not from a separate
`type.link` role.

`type.data` is visually distinct from metadata when needed for scanning and
comparison. It uses tabular figures when alignment matters. It is not a
monospaced code treatment.

## 10. Web adapter

The web adapter exposes namespaced role classes such as `.hug-type-body` and
`.hug-type-label`. These classes attach to the appropriate semantic element;
they do not force all text through a React `Text` abstraction.

The platform-neutral role names remain the source of intent. The exact web
class name is an adapter detail, selected to avoid collision with application
or third-party styles.

## 11. Deferred decisions

- Functional and display font families, fallback stacks, and licenses.
- Variable-font use, based on the selected families and delivery behavior.
- Exact role mappings for size, line height, weight, and tracking.
- Font loading strategy and performance budget.
- A monospaced technical role, if a real HUG surface needs one.

## 12. Completion criteria

This foundation is ready for implementation when:

- functional and display families are selected;
- role-level values are mapped to the reference scale;
- color pairings make each role readable in its intended context;
- the web adapter’s class and token convention is chosen; and
- one reference surface demonstrates semantics, text zoom, narrow/wide
  behavior, links, metadata, and aligned data.

