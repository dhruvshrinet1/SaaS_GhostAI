# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor Chrome (`context/feature-specs/02-editor-chrome.md`)

## Current Goal

- Build the reusable editor shell: a fixed-height top navbar with a sidebar toggle, and a floating project sidebar with My Projects / Shared tabs and a New Project action. Confirm the existing shadcn Dialog primitive already satisfies the title/description/footer pattern needed for future dialogs.

## Completed

- `01-design-system.md` — shadcn/ui installed (`base-nova` style), `components/ui/{button,card,dialog,input,tabs,textarea,scroll-area}.tsx` generated, `lucide-react` installed, `lib/utils.ts` created with `cn()`, and `globals.css` rewired to the dark palette from `ui-context.md` (no light mode).

## In Progress

- `02-editor-chrome.md` — `components/editor/editor-navbar.tsx` (fixed `h-14` top navbar, left/center/right sections, `PanelLeftOpen`/`PanelLeftClose` toggle driven by an `isSidebarOpen` prop, right section intentionally empty) and `components/editor/project-sidebar.tsx` (absolutely positioned floating overlay, slides in via `translate-x` transition off an `isOpen` prop so it never pushes canvas content, `Projects` header with close button, shadcn `Tabs` for My Projects / Shared with empty placeholder states, full-width `New Project` button with `Plus` icon). Dialog pattern requirement is satisfied by the existing `components/ui/dialog.tsx` from phase 1 — it already sources colors from `globals.css` tokens (`popover`, `popover-foreground`, `muted`) and supports `DialogTitle` / `DialogDescription` / `DialogFooter`; no new dialog component was built per the spec ("do not build actual dialogs yet"). Both new components pass `tsc --noEmit` and `eslint` with zero errors/warnings.

## Next Up

- Compose `EditorNavbar` + `ProjectSidebar` into the actual editor workspace layout/page once that unit is scoped.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- shadcn/ui initialized with the `base-nova` style (Base UI primitives, not Radix) and `neutral` base color — components use `render`/`data-slot` props (e.g. `<DialogTrigger render={<Button />} />`) rather than Radix's `asChild`.
- App is dark-only: `<html>` always carries the `dark` class and `globals.css` defines a single `:root` palette (no `prefers-color-scheme` or light `:root` block) sourced from the `ui-context.md` token table.
- Added a parallel set of app-level Tailwind tokens (`bg-base`, `bg-surface`, `text-copy-primary`, `border-surface-border`, `text-brand`, `bg-accent-dim`, etc.) via `@theme inline`, alongside the standard shadcn tokens (`background`, `card`, `primary`, ...) so both the shadcn primitives and bespoke app UI share the same underlying palette.

## Session Notes

- `context/project-overview.md` previously contained a large stray block of unrelated "Install Liveblocks" prompt text pasted in near the top of the file; it has since been cleaned up (no longer present as of this session).
- `context/ai-workflow-rules.md` still contains that same stray "Install Liveblocks" block — left untouched since removing it isn't part of this task; flagged to the user, worth cleaning up in a dedicated pass.
