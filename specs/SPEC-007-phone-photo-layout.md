# SPEC-007 Phone photo layout

**Status** Shipped.

## Intent

Stop photographs dominating the first screen on a phone, and give them a
relationship with the text beside them rather than stacking everything.

## The bug this fixes

The mobile query collapsed every grid to one column and left the photographs at
their desktop size. The page photo is capped at 320px wide because that is how wide
the narrow column of an 1180px shell is. On a 412px phone the content box is 380px,
so the same photograph became 89% of the width and 400px tall. On About that pushed
the title, the photograph and a gap to roughly 490px before the first list item, out
of about 630px of visible viewport, so the tech list, which is the point of the
page, started below the fold.

The photograph never changed size. The column did.

## Behaviour

**Home** The polaroid floats right at 165px and the lede wraps around it. Five short
lines, then the float clears and the last line runs the full width underneath.

**About, Contact, Projects** The photograph joins the title row, 104x130, sitting on
the same baseline as the page title, with the hairline running under the pair. The
content begins at roughly 352px instead of 715px.

**Projects additionally** The hero is a four-up collage, so a thumbnail of the whole
thing is four unreadable photographs. `.pic-frame` is a window: the image renders at
twice the window's height and is pulled left, so what shows is the top-left quadrant
alone, at the size a single photograph wants to be. The full collage still shows on
desktop.

## Mechanism

Everything lives in the `@media (max-width: 760px)` block of `ai.css`, scoped to
`[data-design='ai']`.

The title row is grid only: `.page-head` takes column 1 row 1, the photo takes
column 2 row 1, `.Blurb` spans both in row 2 and carries the hairline on its top
edge. The grid item in column 2 is the hero polaroid figure, see SPEC-006, and its
caption is hidden at this size.

Home needs `display: flow-root` on `.home`, not `block`. The float has to count
towards the section's own height or the footer rides up over it.

## Decisions

**Float on Home, title row everywhere else.** This looks inconsistent and is not.
The float works on Home because the lede is about 90 characters of prose with
nothing after it, so the narrow measure costs only five short lines and then
releases. On About the same float runs straight into a bordered list: the items get
about 200px of measure and wrap three deep, and the hairline rules run full width
behind the photograph so they appear to stop and restart. The rule is: float where
the copy is short prose with nothing after it, title row where a list follows. Home
is the only page that meets the first condition.

**The float was initially argued against, and the argument was wrong.** The
objection was that a narrow measure would look cramped. Rendering it showed the
opposite, because the lede is short enough that the squeeze produces a composition
rather than a column. The decision was made by looking at a mockup on the real
device, not by reasoning about it.

**Both sizes were built as a live switcher and chosen on a phone.** `tight` and
`roomy`, plus `stock` to compare against what was live. Tight won. The switch was
then removed and the winning values written in plainly. The same method picked the
playful device in SPEC-003.

**`object-position` moves to the top on the small crop.** At 104x130 a centred crop
of a portrait takes the chin and leaves the forehead out.

**The collage is windowed, not re-cropped into a second image file.** A second file
would need keeping in sync and would double the download, and cropping the original
would change the desktop hero too.

## Constraints

- These values belong inside the mobile query. The desktop layout must not move.
- `.home` needs `flow-root`, not `block`.
- Do not reorder the children of `.home`. The float depends on source order.

## Open

None.
