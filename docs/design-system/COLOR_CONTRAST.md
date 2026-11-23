# Color Contrast Checks

**Status:** Active for every provisional color pair introduced so far.

HUG checks contrast when it creates a color relationship, rather than treating
accessibility as a late review. The executable check reads the current
exploration values from `design/tokens/color.contract.json`:

```sh
npm run tokens:contrast
```

It fails if any required pair falls below the WCAG AA normal-text threshold of
4.5:1.

| Pair | Light | Dark | Requirement |
| --- | ---: | ---: | ---: |
| `content.primary` on `surface.0` | 17.43:1 | 17.43:1 | 4.5:1 |
| `content.primary` on `surface.1` | 18.79:1 | 16.23:1 | 4.5:1 |
| `content.secondary` on `surface.0` | 5.89:1 | 10.46:1 | 4.5:1 |
| `content.inverse` on `action.primary.default` | 7.74:1 | 7.49:1 | 4.5:1 |

These checks do not substitute for reviewing a real component in context.
They ensure the baseline text pairs cannot quietly regress while we iterate.
