# Contributing (Two-Lane Workflow)

We use a **content lane** (fast) and a **product lane** (structured).

## Lane A: Content publishing (low friction)
Use this for routine blog publishing.

Examples:
- New posts in `src/content/blog/**`
- Post-specific images/assets
- Small copy fixes in existing posts

Process:
1. Commit directly to `main` (or PR if you prefer)
2. Ensure `npm run build` passes
3. Verify Pages deploy is green

---

## Lane B: Website/product changes (issue -> branch -> PR)
Use this for features, layout/system changes, and major design work.

Examples:
- `src/pages/**`
- `src/components/**`
- `src/styles/**`
- Build/deploy/config/workflows
- Any major design overhaul

Process:
1. Start with a GitHub issue (goal + acceptance criteria)
2. Create short-lived branch: `feat/<issue>-slug`, `fix/<issue>-slug`, `chore/<issue>-slug`
3. Open PR early, link issue (`Closes #<issue>`)
4. Include desktop/mobile screenshots for UI changes
5. Merge when CI is green

---

## Branch protection intent

`main` keeps lightweight safety:
- Required CI build check
- Linear history
- No force push / no branch deletion

Review is optional by default (to reduce friction), but strongly recommended for larger changes.

---

## Practical rule of thumb

- **If it changes what users read** (post content): Lane A
- **If it changes how the site works/looks** (features/design/system): Lane B
