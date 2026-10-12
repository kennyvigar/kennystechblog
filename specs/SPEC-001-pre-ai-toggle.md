# SPEC-001 Pre-AI design toggle

**Status** Shipped.

## Intent

Let a visitor see the site as it was before it was rebuilt with coding agents, and
flip back, in one tap. The claim "AI rebuilt this" is worth nothing without the
before picture, so the before picture is on the site rather than described.

## Behaviour

A button, fixed top right, reading `revert to pre-ai design`. Tapping it swaps the
whole site to the original design and the label becomes `back to new design`. The
choice survives a reload.

## Mechanism

`DesignContext.js` holds one value, `design`, either `ai` or `legacy`. It writes it
to `data-design` on `<html>` and mirrors it to `localStorage` under `ktb-design`.
Reads are wrapped in try/catch so blocked storage degrades to the default rather
than throwing.

`App.css` is the original stylesheet and is unscoped. `ai.css` is the new one and
**every rule in it is scoped to `[data-design='ai']`**. Legacy is therefore not a
restrained variant of the new design, it is the original stylesheet with nothing
layered on top.

Components with a legacy branch return the original JSX verbatim from a separate
early return rather than being restyled. `Home.js` and `Blog.js` both do this.

## Decisions

**Legacy is stock, not a tasteful reconstruction.** The rule, in Kenny's words:
"it should be just stock the way it was but with the diary continuing to work."
A reconstruction would make the toggle dishonest.

**The bugs are kept on purpose.** Legacy retains the `class` instead of `className`
on the header icon, which is why the word "bolt" renders instead of a glyph. It
retains the absolutely positioned footer that cut off the last blog post. It retains
the endless-scroll blog. These are the before picture. `App.js` carries a comment at
the site of the bolt bug saying so, because otherwise a future agent fixes it.

**New markup that cannot branch is hidden, not restyled.** The `.page-head` on
About, Contact and Projects did not exist pre-AI, so legacy removes it with
`html[data-design='legacy'] .page-head { display: none }`.

**The nav differs between modes.** Legacy keeps the original four links in the
original order and does not advertise Projects, which did not exist. The route still
resolves if typed.

**The button itself is the one admitted exception.** It appears in both designs,
because hiding it in legacy would leave no way back.

## Constraints

- One unscoped rule in `ai.css` breaks the whole premise. Scope everything.
- Never fix a legacy bug.
- Never add a new feature to the legacy branch.

## Open

None.
