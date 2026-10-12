# Specs

One file per feature of vigar.net. These are written to be published, so read
`../AGENT.md` for the sanitization rule before adding one.

## Why these exist

The site was built by directing coding agents against written specifications rather
than by prompting until something looked right. These files are the specifications.
They are kept after the fact rather than thrown away, because the useful part of a
spec is not the instruction, it is the record of what was decided and what was
rejected.

A spec here is not a plan for future work. It describes what is built, why it is
built that way, and which alternatives lost. Where something is unfinished it says
so under **Open**.

## Index

| Spec | Feature | Status |
|---|---|---|
| [SPEC-001](SPEC-001-pre-ai-toggle.md) | Pre-AI design toggle | Shipped |
| [SPEC-002](SPEC-002-shell-nav-routing.md) | Shell, nav and routing | Shipped |
| [SPEC-003](SPEC-003-home.md) | Home and the polaroid device | Shipped |
| [SPEC-004](SPEC-004-blog.md) | Blog | Shipped |
| [SPEC-005](SPEC-005-projects.md) | Projects | Shipped, content incomplete |
| [SPEC-006](SPEC-006-about-contact.md) | About and Contact | Shipped |
| [SPEC-007](SPEC-007-phone-photo-layout.md) | Phone photo layout | Shipped |
| [SPEC-008](SPEC-008-footer.md) | Footer | Shipped |
| [SPEC-009](SPEC-009-design-tokens.md) | Design tokens and type | Shipped |
| [SPEC-010](SPEC-010-hosting-and-domain.md) | Hosting, domain and deploy | Shipped |

## Conventions

Each spec carries these sections. Omit one only when it genuinely has no content.

- **Status** Shipped, partial, or planned. Partial says what is missing.
- **Intent** What this is for, in a sentence or two. Not the implementation.
- **Behaviour** What it actually does, observable from outside.
- **Mechanism** How, named precisely enough to find in the source.
- **Decisions** What was chosen, and what lost. This is the section that earns its
  keep later.
- **Constraints** Rules a change must not break.
- **Open** Known gaps, in this feature only.

## Numbering

Sequential, never reused, never renumbered. A retired feature keeps its number and
gains a `Status: retired` line, because the specs are a record and gaps in a record
are information.
