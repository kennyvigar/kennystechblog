# SPEC-004 Blog

**Status** Shipped.

## Intent

One post per URL, so a post can be linked to, with a sidebar index that makes the
archive visible. Replaces an endless scroll where every post lived at one address.

## Behaviour

A sidebar lists every post, newest first, with its title and date. Selecting one
loads it at its own URL, `/blog/<slug>`. A slug that does not exist renders a short
message and a link to the latest post rather than a blank page. On a phone the
sidebar moves above the post.

Legacy mode keeps the original endless scroll, deliberately.

## Mechanism

`postRegistry.js` holds one entry per post: `slug`, `title`, `date`, and the
`Component` that renders its body. Each post is an ordinary React component in its
own file. The registry exports the posts sorted newest first, a lookup by slug, and
a date formatter.

`Blog.js` renders the sidebar from the registry and routes `/blog/:slug` to the
matching component.

## Decisions

**Order is derived, not authored.** Sorting is done from the real `date` field
rather than from the order of the array, so adding a post out of sequence cannot
produce a wrong order, and the ordinals stop being hand-typed.

**Adding a post is two steps.** Write the component, add a line to the registry.
Nothing else to touch. This is the same shape as the projects registry on purpose,
so there is one pattern to learn rather than two.

**A post can be staged without being published.** An entry commented out in the
registry keeps its component file intact and untouched while staying off the site.
This is currently in use for one unfinished post.

**An unknown slug is handled.** It renders a message and a route to the latest post.
The alternative, a blank page, looks like a broken site rather than a wrong address.

## Constraints

- Do not sort by array position. The `date` field is the source of truth.
- Legacy keeps the endless scroll. Do not unify the two.
- A post's body component must not know about the registry. The registry knows about
  the post, not the reverse.

## Open

None.
