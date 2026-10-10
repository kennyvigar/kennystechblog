# Design spec: vigar.net

Written 2026-10-09, before the CSS. Riff on this, then it gets built.

## Intent

Minimal shell. The personality comes from the content, not the chrome.

**Why this and not something more designed:** the assets already here are a moustache
photo, an unhooded Kenny McCormick and a coffee cup, and the copy is lowercase and
self-deprecating ("css (ugh..)", "dOnT fOrGeT tO lIeK aNd SuBsCrIbE"). That is already
the character. If the frame is *also* quirky, the two fight and both lose. A quiet,
confident frame lets the photos and the voice do the work. This is also the honest read
of the three references: they are plain containers for strong content.

## Pre-ai mode is stock, not a second design

Kenny's rule, 2026-10-09: "it should be just stock the way it was but with the
diary continuing to work."

Legacy is not a variant to be tastefully restrained. It is the original site.
The toggle is only honest evidence if the before state is genuinely the before
state, so nothing invented for the new design may reach it.

Rules that follow from that:

- New markup branches on `design`, it does not get restyled. `Home` and `Blog`
  both return the original JSX verbatim in the legacy branch.
- New markup that cannot branch (the `.page-head` on About and Contact) is
  removed in legacy with `html[data-design='legacy'] .page-head { display: none }`.
- The nav in legacy keeps the original four links in the original order
  (Home, About Me, Contact, Blog). Projects did not exist pre-ai so it is not
  advertised there.
- Every rule in `ai.css` is scoped to `[data-design='ai']`. One unscoped rule
  breaks the whole premise.
- The revert button itself is the single admitted exception. It appears in both
  modes, because hiding it in legacy would leave no way back.

What legacy keeps, deliberately: the `class` instead of `className` bug that
renders the word "bolt" in the header, the absolutely positioned footer, the
endless-scroll blog. The bugs are the before picture.

## Non-goals for v1

No dark-mode toggle (one toggle on the page is enough, and it is already spoken for).
No tags, no search, no comments, no CMS. Those are not problems this site has.

## Tokens

The whole palette is one block so the look can be swapped in one edit.

| token | light (default) | note |
|---|---|---|
| `--paper` | `#fbf7f2` | warm off-white, per Keerthi. Not grey, not pure white |
| `--ink` | `#17181a` | not pure black |
| `--ink-soft` | `#6b7076` | dates, captions, secondary |
| `--rule` | `#e4ded6` | hairlines only. No cards, no shadows, no boxes |
| `--accent` | `#fca311` | **your original orange**, the one that never rendered |

**Revised after reviewing the reference screenshots (2026-10-09).** Light is settled:
all four references are light, none is dark. The original black-and-orange intent is
dropped as a background and survives only as the accent.

Accent appears on interactive state only: active sidebar item, link underline, focus
ring. Never as a background fill, never as body text. One accent used sparingly is what
makes a minimal palette read as deliberate rather than unfinished.

## Type

One family, system stack (already in `index.css`, zero network cost, and genuinely
neutral). Hierarchy carries the design, not the typeface.

- display / identity statement `clamp(44px, 7vw, 86px) / 1.02 / 600`
- page title `40px / 1.1 / 600`
- post title `30px / 1.2 / 600`
- body `16px / 1.65 / 400`
- meta `13px / 1.4 / 400`, `--ink-soft`
- nav + sidebar `14px`
- eyebrow labels `12px`, uppercase, `0.08em` tracking, `--ink-soft`

Measure capped at `68ch` for prose. Long lines are the single most common reason a
hand-rolled blog feels amateur.

Small nav and eyebrow labels go **uppercase mono, letterspaced**, per Keerthi. That one
move does most of the work of making a plain sans page look considered.

**Hierarchy must jump hard.** The references drop from ~90px display straight to ~18px
body with nothing in between. Timid 26px headings are what made the first pass of
`ai.css` read as unfinished rather than restrained.

## Layout

Shell `max-width: 1100px`, centred, `24px` side padding, `16px` on phones.

- **Nav:** lowercase text links, left aligned, no bar, no logo lockup. Current page gets
  a 2px accent underline. The `bolt` icon stays, working, beside the name.
- **Home:** short lowercase intro, `kennymoustache.jpeg` beside it, not a giant hero.
- **About:** `Unhooded-KennyMcCormick.webp` plus the existing tech list, set as a real
  list with breathing room instead of a cramped `ul`.
- **Contact:** `kennycoffee.webp` plus the links. The obfuscated `*at*` / `*dot*` text
  stays unless you say otherwise, see open question below.
- **Blog:** sidebar of post titles and dates, one post per URL. Already built.
- **Footer:** static, not absolutely positioned. The current `position: absolute` is what
  cut off the last post.

## Assets

Everything existing gets used, nothing new is needed:
`kennymoustache.jpeg` home, `Unhooded-KennyMcCormick.webp` about,
`kennycoffee.webp` contact, `switch.jpeg` and `windows.jpg` stay in their posts.

The original masks every `.Pic` with a four-way gradient fade. Kept on the portrait
images where it reads as intentional, dropped inside posts where it just blurs content.

## Responsive

One breakpoint at `760px`: sidebar moves above the post, padding tightens, titles step
down. The original only had `max-width: 360px`, which is why every real phone got 320px
of margin on a 390px screen.

## Projects

A `Projects` page, same architecture as the blog so there is one pattern to learn:
one component per project, plus `projectRegistry.js` for metadata and ordering.

**Content rule: Kenny writes the prose.** Every project component is almost pure text
with no logic in it, so editing it is editing sentences. Claude supplies only verifiable
facts sourced from each repo (stack, what the thing does technically, links) and leaves
the voice slots marked `TODO (your words)`. Placeholder prose is written to be obviously
unusable rather than plausible, so nothing AI-sounding can ship by accident.

Planned entries:

| project | source | status |
|---|---|---|
| checkoutmy.garden | `code/checkoutmy` | flagship, 40 specs, 625 tests |
| AirPi | `code/airpi` | Pi Zero W voice assistant, pixel-creature face |
| CatBlog | built with his daughter | already referenced in a post and on the resume |
| Caller 92 | `code/92` | **see below, probably omit** |

### Caller 92

Twilio telephony: button to serverless function to outbound call, status-callback-driven
retry, concurrency guard, call bridging via TwiML. The architecture is demonstrable.

**Not published as a contest dialer.** `handle-status.js` redials on busy, failed and
no-answer at 300ms with no attempt ceiling, aimed at a third party's line. That breaks
Twilio's AUP and the station's contest rules, and a public admission under his own name
next to his resume is a liability. It also contradicts the security-judgment thread the
resume leans on. Either reframe as a telephony experiment calling his own number, or
leave it off and keep it as an interview story.

## The one playful device

Every reference is a severely quiet page plus **exactly one** playful gesture:

- Keerthi: cut-out lotus flowers and lily pads layered behind huge serif type
- Gowtham: a tilted polaroid captioned `me.jpeg` in handwriting, plus a yellow sticky note
- Vijay: a hand-drawn scribble struck through one word in the intro statement

Never two. The restraint everywhere else is what makes the one gesture land.

Kenny already owns the raw material: `kennymoustache.jpeg`, the unhooded Kenny McCormick
and `kennycoffee.webp`. Those are the lotus flowers. Pick one device and commit.

### Settled 2026-10-09: polaroid

All three were built as live switchable variants and Kenny picked polaroid. Scribble and
cut-out are removed from the code rather than left as dead options. Polaroid won on the
merits and on cost: it is the only one that uses the existing assets with no image
editing, and the deadpan `kennymoustache.jpeg` caption is already his register.

Implementation: white frame, `rotate(-3deg)`, straightens to `0deg` on hover, caption in
Caveat. The frame is CSS, the photo is untouched.

## Open questions

1. ~~Light or dark~~ **Settled: light.** All four references are light.
2. Type treatment. Still a live switcher in the corner: sans+mono, serif+mono, all sans.
3. Whether the obfuscated contact text becomes real `mailto:` and `https:` links.
   Obfuscation stops almost no scrapers and costs every human a copy and paste.
4. Whether `vigar.net` replaces or redirects from the netlify address.
