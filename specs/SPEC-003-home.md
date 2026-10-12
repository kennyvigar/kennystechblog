# SPEC-003 Home and the polaroid device

**Status** Shipped.

## Intent

A short, quiet landing page carrying exactly one playful gesture. The personality of
this site comes from the content and the voice, not from the chrome, so the frame
stays plain and one device does all the work.

## Behaviour

A large display heading, a short lede, and a tilted polaroid of a photograph
captioned with its own filename in handwriting. The polaroid straightens on hover.
On a phone it floats to the right of the lede. On desktop it sits in the right
column.

## Mechanism

`Home.js` renders three direct children of `.home`: the `h1.display`, the
`div.home-art` holding `figure.polaroid`, and the `p.lede`. In that source order.

The polaroid is pure CSS. A white frame, `padding: 14px 14px 0`, a soft shadow,
`transform: rotate(-3deg)`, and a `figcaption` in a handwriting face. The photograph
itself is untouched.

## Decisions

**Exactly one playful device, never two.** The reference sites this was modelled on
each pair a severely quiet page with a single gesture: cut-out flowers behind huge
serif type, a tilted polaroid captioned in handwriting, a hand-drawn scribble
through one word. The restraint everywhere else is what makes the one gesture land.

> **Superseded.** The rule as written meant one device on one page. The polaroid is
> now the treatment for every hero photo on the site, see SPEC-006. The spirit
> survives, because there is still only one device and it is still the only
> flourish anywhere. What changed is that it became a motif rather than a one-off,
> so the pages read as one site. The original rule is left here rather than
> rewritten, because a decision that got overturned is more useful than a decision
> that looks like it was always obvious.

**Polaroid won on merit and on cost.** All three candidates were built as live
switchable variants and chosen on a real device. The losers were deleted from the
code rather than left as dead options. Polaroid was the only one that used an
existing photograph with no image editing, and the deadpan filename caption is
already the site's register.

**Source order is dictated by the phone layout.** A float only affects content that
comes after it in the flow, so the polaroid must sit between the heading and the
lede in the DOM. The `.home-text` wrapper that used to group the heading and lede
was removed to make all three siblings. Desktop therefore cannot rely on source
order and places each child by explicit `grid-column` and `grid-row`.

**`row-gap: 0` on the home grid.** The heading's own 24px bottom margin was always
the real gap between it and the lede. A grid `gap` shorthand applied a second one.

**Display type must jump hard.** The references drop from roughly 90px display
straight to 18px body with nothing in between. A timid 26px heading is what made the
first pass read as unfinished rather than restrained.

## Constraints

- Do not add a second playful device to this page.
- Do not reorder the three children of `.home`. The phone float depends on it.
- The caption is the photograph's filename. That is the joke. Do not make it a
  description.

## Open

The hover straighten is dead on a touch screen. Every phone visitor sees the tilt
and never the payoff. Either trade it for a tap state or accept it as desktop-only
garnish. Not decided.
