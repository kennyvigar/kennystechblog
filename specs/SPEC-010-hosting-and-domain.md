# SPEC-010 Hosting, domain and deploy

**Status** Shipped.

## Intent

Serve the site from its own domain, over HTTPS, with a deploy that is one command.

## Behaviour

`vigar.net` and `www.vigar.net` both resolve to the site. The apex redirects to
`www`, which is the canonical host. HTTPS is forced and the certificate covers both
names. The host's own preview address redirects to the canonical host.

## Mechanism

Static build, deployed as a directory of files to a static host via its CLI. No
server, no build hooks, no CI. The build output directory is gitignored; the host
receives it directly rather than building from the repository.

DNS stays with the registrar rather than being delegated to the host. Two records:
a `CNAME` on `www` pointing at the host's address for this site, and an `A` on the
apex pointing at the host's load balancer, because a `CNAME` is not legal at a zone
apex and this registrar does not offer `ALIAS` records.

The certificate is issued automatically by the host once DNS resolves.

## Decisions

**`www` is canonical, apex redirects to it.** Chosen rather than the reverse.

**External DNS, not delegated DNS.** Delegating the zone to the host would handle
the apex without a hardcoded load balancer address, which is the one real weakness
of this setup. It was rejected because it moves DNS hosting off the registrar for a
domain with nothing else on it. Revisit if email or other records are ever added.

**SPA rewrite is a host-level rule, not a router trick.** See SPEC-002.

## Operational notes

These are written down because they each cost real time once.

**Forced HTTPS before a certificate exists takes the site down.** During setup the
host enabled forced HTTPS while the certificate was still being issued, so every
visitor was redirected to an HTTPS endpoint that had nothing to answer with. The fix
is to disable forced HTTPS, let the certificate issue, verify it, then re-enable.
Check the certificate exists before forcing the redirect.

**Resolvers lie, including the one on the machine you are working from.** During the
cutover the development machine's resolver still held the registrar's parking record
with several minutes left to live, which produced a convincing false positive: the
parking page returned HTTP 200 and was briefly mistaken for the site being live. The
giveaway was in the response headers, which named the registrar's server rather than
the host's.

The habit that follows: when verifying a domain change, query several public
resolvers directly, and fetch with the resolution forced to the expected address so
the request cannot be answered by a stale cache. Compare the `Server` header against
what the host should be sending. Do not declare a domain live on the strength of a
200 alone.

**Certificate propagation across edges is not instant.** A single failed request
immediately after issuance is not necessarily a fault. Repeat it before diagnosing.

## Constraints

- Build must compile clean before deploy.
- Never commit host IDs, tokens or account identifiers. See `../AGENT.md`.
- Keep the host's state directory gitignored.

## Open

None.
