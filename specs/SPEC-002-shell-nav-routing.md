# SPEC-002 Shell, nav and routing

**Status** Shipped.

## Intent

One page shell shared by every route, a nav that reads as text rather than as a
toolbar, and URLs that work when typed or refreshed rather than only when clicked.

## Behaviour

Wordmark top left, nav underneath as lowercase-rendered text links, current page
marked. Five routes in the new design: Home, About Me, Projects, Blog, Contact.
Four in legacy, without Projects. Any URL typed directly or refreshed loads the
right page.

## Mechanism

`App.js` composes the shell: `DesignToggle`, a `<header>`, `SiteNav`, a `<main
className="site-main">` holding the `<Routes>`, and `Footer`. `<nav>` and `<main>`
are new wrappers carrying no styling in `App.css`, so legacy renders identically
while the new design gets real layout hooks.

`public/_redirects` contains `/*  /index.html  200`. Without it the host looks for a
real file at `/about` or `/blog/<slug>`, finds none and serves its own 404.

Nav labels are letterspaced uppercase mono. Rendering, not content: the source
strings are mixed case and `text-transform` does the rest.

## Decisions

**The SPA rewrite was a real bug, not a precaution.** Before it existed, every route
other than `/` returned a 404 on a direct hit or a refresh. Only clicking through
from the home page worked. The comment in `_redirects` records this, because a bare
rewrite rule looks like boilerplate and would be deleted by someone tidying up.

**`width: 100%` on the shell children is load-bearing.** `.App` is a flex column, so
its direct children are flex items. A flex item with `margin: 0 auto` and no
explicit width shrink-wraps to its content, because auto cross-axis margins disable
`align-self: stretch`. Without the explicit width the header, nav and page
containers all collapsed to the width of their own text and centred. That was the
centred header and the squished middle column.

**`scrollbar-gutter: stable` on `<html>`.** Short pages have no scrollbar and tall
ones do, so the entire layout shifted sideways on every nav click. Reserving the
gutter stops it.

**Nav is text, not a bar.** No logo lockup, no background, no border. The current
page gets a 2px accent underline and nothing else.

## Constraints

- Adding a route means adding it to `SiteNav`'s new-design branch only, unless it
  genuinely existed pre-AI.
- Do not remove `_redirects`.
- Do not remove the `width: 100%` rule on the shell children.

## Open

None.
