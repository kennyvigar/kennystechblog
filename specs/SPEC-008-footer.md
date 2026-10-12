# SPEC-008 Footer

**Status** Shipped.

## Intent

A footer that is always visible, on every page, with the scrolling happening in the
space above it.

## Behaviour

The footer is pinned to the bottom of the viewport. Content scrolls behind nothing:
the page is given real clearance underneath so its last line always sits above the
footer. Short pages gain no scrollbar they did not already have.

Legacy keeps the original absolutely positioned footer, bug included.

## Mechanism

`position: fixed` on `.footer`, with `.App` carrying
`padding-bottom: calc(var(--footer-h, 100px) + 24px)`.

`--footer-h` is published by `Footer.js`, which measures its own rendered height on
mount and through a `ResizeObserver`, and writes it to the document root. The 100px
in the fallback applies only in the frame before the first measurement lands, or if
`ResizeObserver` is unavailable.

`.App` uses the globally set `border-box`, so that padding sits inside the `100dvh`
minimum height rather than adding to it.

## Decisions

This is the fourth footer. The first three each failed differently, and the history
is the reason this one holds.

**First: `position: absolute` against `html { height: 100% }`.** This cut off the
last blog post. The mechanism was not the positioning, it was that content had no
clearance and ran on underneath. That distinction is the whole lesson.

**Second: `position: static`.** Parked the footer mid-page on short pages.

**Third: a proper sticky footer.** `.App` as a flex column at least a viewport tall
with `<main>` growing to fill, so the footer was pushed to the bottom on short pages
and followed content on long ones. This was correct and had no magic numbers. It was
replaced because it did not do what was wanted: on long pages the footer was below
the fold, and the requirement was that it always be visible.

**Fourth, current: fixed with measured clearance.** Fixed alone would reintroduce
the original truncation bug. What makes it safe is `--footer-h`, and what makes
`--footer-h` safe is that it is measured rather than guessed. A hardcoded
`padding-bottom` was rejected explicitly: the footer changes height between
breakpoints and with how its copy wraps, so any constant drifts out of date
silently.

## Constraints

- Never replace `--footer-h` with a constant.
- `.App` must keep `border-box`, or short pages gain a scrollbar.
- Any new fixed-position UI must clear the footer. The variant picker had to be
  lifted by `calc(var(--footer-h) + 10px)` when it existed.
- Legacy keeps its broken footer.

## Open

None.

**Resolved.** At phone width the footer was roughly 100px of a 900px screen,
permanently, for two lines of copy at default paragraph margins. Below 760px the
paragraphs now lose those margins and take a real gap instead, the padding halves,
and the type steps down. Roughly 62px. Desktop is untouched.

Nothing else needed adjusting, which is the payoff for measuring the height rather
than hardcoding it: `--footer-h` follows the new height and the content clearance
follows it down on its own. A constant would have needed finding and editing here.
