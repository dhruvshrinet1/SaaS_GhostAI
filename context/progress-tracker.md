# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Design System (`context/feature-specs/01-design-system.md`)

## Current Goal

- Install and configure shadcn/ui, add the Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea primitives, install lucide-react, and wire the dark theme from `context/ui-context.md` into `globals.css`.

## Completed

- None yet.

## In Progress

- `01-design-system.md` — shadcn/ui installed (`base-nova` style), `components/ui/{button,card,dialog,input,tabs,textarea,scroll-area}.tsx` generated, `lucide-react` installed, `lib/utils.ts` created with `cn()`, and `globals.css` rewired to the dark palette from `ui-context.md` (no light mode).

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- shadcn/ui initialized with the `base-nova` style (Base UI primitives, not Radix) and `neutral` base color — components use `render`/`data-slot` props (e.g. `<DialogTrigger render={<Button />} />`) rather than Radix's `asChild`.
- App is dark-only: `<html>` always carries the `dark` class and `globals.css` defines a single `:root` palette (no `prefers-color-scheme` or light `:root` block) sourced from the `ui-context.md` token table.
- Added a parallel set of app-level Tailwind tokens (`bg-base`, `bg-surface`, `text-copy-primary`, `border-surface-border`, `text-brand`, `bg-accent-dim`, etc.) via `@theme inline`, alongside the standard shadcn tokens (`background`, `card`, `primary`, ...) so both the shadcn primitives and bespoke app UI share the same underlying palette.

## Session Notes

- `context/project-overview.md` and `context/ai-workflow-rules.md` both contain a large stray block of unrelated "Install Liveblocks" prompt text pasted in near the top of the file — left untouched since removing it wasn't part of this task; flagged to the user, worth cleaning up in a dedicated pass.
