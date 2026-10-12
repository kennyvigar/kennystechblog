# AGENT.md

Guardrails for any agent working on this site. Read this before touching anything.

## What this repo is

`vigar.net`. A personal blog and portfolio. Create React App, React 18,
`react-router-dom`, no backend, no CMS, no database. Deployed as static files to
Netlify.

It carries a deliberate second design. `data-design="legacy"` renders the original
pre-AI site; `data-design="ai"` renders the current one. That is a feature, not
leftover code. See `specs/SPEC-001-pre-ai-toggle.md` before changing anything that
touches both.

## Hard rules

1. **Never improve legacy.** `data-design="legacy"` is a historical record. It keeps
   its bugs on purpose: the `class`-instead-of-`className` that renders the word
   "bolt", the absolutely positioned footer, the endless-scroll blog. If you "fix"
   one you have destroyed the only evidence the site is offering. When new markup
   cannot branch, hide it in legacy rather than restyling it.

2. **Every rule in `ai.css` is scoped to `[data-design='ai']`.** One unscoped rule
   leaks into legacy and breaks the premise. No exceptions.

3. **Kenny writes the prose.** Every word of copy on this site is his. Agents supply
   layout, mechanism and verifiable facts. Where a voice slot is empty it renders a
   visible `TODO` placeholder, so nothing ghost-written can ship by accident. Do not
   fill one in with something plausible. Leave it empty and ask.

4. **Surgical changes.** Touch what was asked for. Do not restructure, reorder,
   reformat or tidy anything that was not named in the request. If a change needs a
   markup change, say so out loud rather than quietly widening the blast radius.

5. **No em dashes.** Anywhere, prose or comments. Use a period, a comma, or
   restructure. En dashes in date ranges are fine.

6. **No invented facts.** No metrics that cannot be traced to the repo, no claimed
   capabilities, no made-up prompts. If a number is needed and not knowable, ask.

7. **Nothing secret in this repo.** See the sanitization rule below.

## Sanitization rule

The contents of this repo are public, and `specs/` and this file are written with
the assumption that they will be published and read by strangers.

Never commit:

- API keys, tokens, deploy keys, webhook URLs, session cookies
- Netlify site IDs, project IDs or personal access tokens
- Account email addresses, including the registrar and host accounts
- Anything from `.netlify/` (it is gitignored, keep it that way)
- Screenshots that show a logged-in dashboard, an account menu or a billing page
- The local `prompts/` directory. It is gitignored and stays unpublished.

Fine to include, because they are already public: the domain, the GitHub handle, the
site's own published contact links. When a spec needs to refer to the host or the
registrar, name the service, not the account.

## Writing style for specs and comments

Comments in this repo explain **why**, and they carry the history that would
otherwise be lost. A comment that says what the next line does is noise. A comment
that says "this is the third footer and here is how the first two broke" is the
reason the fourth one will not.

- Short declarative sentences.
- Name the mechanism, not the vibe. "the float has to count towards the section's
  own height or the footer rides up over it", not "fixes layout issues".
- Record rejected options and why they lost. A decision without its alternatives is
  not reviewable.
- When something is kept deliberately broken, say so at the site of the break.

## Verification

- `npm run build` must compile clean before any deploy.
- Check both designs. Flip the revert button and look at the page you changed.
- Check phone width. Most of this site's bugs have been mobile-only, because the
  desktop layout was written first and the mobile query inherited stale values.
- Do not claim something is live without fetching it. DNS caches lie, including the
  resolver on the machine you are working from.

## Deploy

Static build to Netlify via CLI. Build first, deploy the `build` directory, then
commit. Commits go straight to `main`. Push only when asked.
