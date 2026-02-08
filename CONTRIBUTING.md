# Contributing (Trunk-Based Workflow)

We use **issue -> branch -> PR -> merge to main**.

## 1) Start with an issue
- Open or pick a GitHub issue.
- Clarify acceptance criteria before coding.

## 2) Create a short-lived branch
- Naming: `feat/<issue>-slug`, `fix/<issue>-slug`, `chore/<issue>-slug`
- Example:
  - `feat/42-hero-redesign`

## 3) Develop in small increments
- Keep branch lifetime short.
- Rebase frequently on `main`.

## 4) Open a PR early
- Use the PR template.
- Link the issue: `Closes #<issue>`.
- Include screenshots for UI changes (desktop + mobile).

## 5) Merge policy
- No direct commits to `main`.
- PR must pass CI.
- At least 1 review approval.
- Squash merge preferred to keep history clean.

## 6) After merge
- Verify GitHub Pages deploy run is green.
