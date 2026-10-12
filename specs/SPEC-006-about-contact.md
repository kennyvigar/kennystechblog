# SPEC-006 About and Contact

**Status** Shipped.

## Intent

Two short pages, each a photograph and a list, sharing one composition so the site
has a single page shape rather than a different one per route.

## Behaviour

About shows a portrait and two lists: technologies, and things enjoyed outside work.
Contact shows a photograph and a list of links out. Both carry a page title above a
hairline.

## Mechanism

Both use `.Container`, a two-column grid with the photograph in the narrow column
and `.Blurb` in the wide one, and both carry a `.page-head`. List items are
separated by hairlines rather than bullets, with real padding.

The page head is new markup. Legacy never had one, so it is removed there rather
than restyled, keeping the original pages pixel-identical.

## Decisions

**Hero photos wear the polaroid.** Every hero photo on the site, here and on
Projects, carries the same white frame, tilt and filename caption as Home. This
supersedes the one-gesture-on-one-page rule in SPEC-003: the polaroid is the site's
photo treatment now, not a flourish belonging to the landing page, and the three
content pages read as one site rather than as pages that happen to share a grid.

The figure is the grid item, so the placement that used to live on the image moves
up to it. In legacy the figure is `display: contents` and the caption is hidden, so
the figure's box disappears entirely and the original pages stay pixel-identical,
the same approach `.page-head` uses.

Below 760px the caption is hidden. There is no room for a filename under a 100px
frame, and the frame and the tilt carry the device at that size on their own.

**One photo box, not two aspect ratios.** The two source images have different
shapes, one portrait and one square, and `height: auto` rendered them at visibly
different sizes on what is otherwise the same page shape. A single fixed box with
`object-fit: cover` makes them match. The ratio chosen is closest to the portrait,
so it barely crops that one and takes a small slice off the square.

**The obfuscated contact text stays, and the links were made real underneath.** The
spelled-out `*at*` and `*dot*` wording is the author's joke and reads as intended.
Underneath, the `href` is the real destination, so the joke survives and the link
works. The trade-off was stated and accepted: a real `href` means a scraper can read
the address, which the obfuscation alone was hiding. The conclusion was that
obfuscation stops almost no scrapers and costs every human a copy and paste.

**Lists get breathing room.** The original markup used a cramped `ul`. Real list
items with hairline separators and vertical padding read as considered; a default
bulleted list reads as unstyled.

## Constraints

- Do not rewrite the contact copy. The spelling-out is deliberate.
- Do not reformat either page's lists into prose.
- Keep both pages on the shared `.Container` composition. Diverging them is how the
  tabs stop aligning.

## Open

None.
