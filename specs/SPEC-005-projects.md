# SPEC-005 Projects

**Status** Shipped. Content incomplete by design, see Open.

## Intent

A portfolio page describing what has actually been built, in the builder's own
words, with the verifiable facts separated from the voice so that neither can
contaminate the other.

## Behaviour

A page listing each project with its title, period, stack, prose, a list of
verified facts, and any links. Same shell and rhythm as the rest of the site.

## Mechanism

`projectRegistry.js` holds one object per project. `Projects.js` renders them.
Adding a project is adding an object; reordering is moving it.

Fields split into two kinds:

- **Verified** `facts`, `stack`, `period`, `links`. Read out of each project's own
  repository and checkable.
- **Voice** `blurb`, `approach`, `prompt`, `lesson`. Kenny's words, nobody else's.

An empty voice field renders nothing at all.

## Decisions

**The voice fields are never ghost-written.** Agents supply only facts sourced from
each repo and leave the voice slots empty. The registry header says so, at the top
of the file where it will be read before the fields are filled. This is the single
most important rule on this page: a portfolio written by the thing it is claiming
credit for directing is worthless.

**An empty slot renders nothing, not a placeholder.** It used to render a loud
orange box. That was right while the page was empty and wrong once the facts were
written, because the page became a list of warnings rather than a portfolio. Which
fields are still empty is tracked in the registry, not shown to visitors.

**Projects shares About and Contact's composition.** It briefly had its own
one-column layout to cut the page length, which worked but broke the alignment
between tabs. Dropping the empty placeholders bought back more height than the
layout change did, so the shared shape won.

**Artifact counts are not accomplishments.** Table counts, function counts, screen
counts and lines of code do not belong in `facts`. On agent-built work the artifact
volume is the agent's output, not the builder's contribution. Integration breadth,
such as a count of distinct data ingestions, is the exception, because it reflects
real sourcing work.

**One project is deliberately not listed.** A telephony experiment is held back: its
retry logic is an unbounded auto-redialer aimed at a third party's line, which
breaks the carrier's acceptable use policy. The architecture is demonstrable, the
public write-up is a liability. The registry carries a comment saying this at the
point where the entry would go, so it is not silently re-added. It goes up only if
reframed as calling the author's own number.

## Constraints

- Never write a voice field. Ask.
- Never pad `facts` with volume metrics.
- Do not re-add the omitted project without the reframing.

## Open

- `blurb` is written for one project only. `approach`, `prompt` and `lesson` are
  empty across all of them.
- The page hero is still the shared contact photograph. A projects-specific
  photograph has not been taken. `Projects.js` carries the `TODO`.
