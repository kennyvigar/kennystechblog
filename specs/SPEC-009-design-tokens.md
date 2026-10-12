# SPEC-009 Design tokens and type

**Status** Shipped.

## Intent

A minimal shell whose whole palette and type scale can be swapped in one edit, so
the look is a decision in one place rather than a property of two hundred rules.

## Behaviour

A warm off-white page, near-black text, hairline rules, and a single accent that
appears only on interactive state. One typeface family for everything except nav
and small labels, which are letterspaced uppercase mono.

## Mechanism

Every colour, measure and face is a custom property declared in one block at the top
of `ai.css` under `[data-design='ai']`. Nothing downstream hardcodes a colour.

Tokens: a warm paper ground, a near-black ink, a softer ink for dates and captions,
a hairline rule colour, one accent, a prose measure, a shell width, a body size, and
one shared page-top offset.

## Decisions

**Light, not dark.** The original intent was black and orange. All four reference
sites studied were light, none was dark, so the dark ground was dropped and the
orange survives only as the accent.

**The accent appears on interactive state only.** Active nav underline, link
underline, focus ring. Never as a background fill, never as body text. One accent
used sparingly is what makes a minimal palette read as deliberate rather than
unfinished.

**Ink is not pure black and paper is not pure white.** Both are warmed slightly.

**Hierarchy carries the design, not the typeface.** The family is a system stack:
zero network cost and genuinely neutral. The size jumps are large on purpose,
because the references drop from roughly 90px display to 18px body with nothing
between. Timid intermediate headings are what made the first pass read as
unfinished.

**Measure is capped for prose.** Long lines are the single most common reason a
hand-rolled blog looks amateur.

**Small nav and eyebrow labels are uppercase mono, letterspaced.** That one move
does most of the work of making a plain sans page look considered.

**One page-top token.** Home used to centre itself in the viewport while the other
pages started at the top, so the title jumped down the page when you clicked Home.
One shared offset fixed it.

**The type treatment was chosen with a live switcher and then removed.** Three
candidates, sans+mono, serif+mono and all sans, were switchable on the real site
while the choice was open. Sans+mono won. The switch came out and the serif face
was removed from both the stylesheet and the font request, since nothing referenced
it any more. The same method chose the playful device and the phone photo sizes.

## Constraints

- Do not hardcode a colour outside the token block.
- Do not use the accent as a background or as body text.
- Changing the look means editing the token block, not the rules below it.

## Open

None.
