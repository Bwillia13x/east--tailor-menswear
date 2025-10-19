# Repository Guidelines

## Project Structure & Module Organization
- `src/app` contains the App Router entrypoints (`layout.tsx`, `page.tsx`, `globals.css`); keep route-specific logic in nested segments.
- `src/components` groups marketing sections and the `ui/` atoms exposed via `@/components/...`; reuse these primitives before introducing new ones.
- `src/lib/utils.ts` holds shared helpers such as `cn`; extend it instead of redefining utilities.
- `src/visual-edits` bundles the deployed visual editing bridge—treat it as an integration boundary and document upstream changes.
- `public/` stores static assets served with root-relative paths (e.g. `/images/logo.svg`).

## Build, Test, and Development Commands
- `npm install` (or `bun install`) syncs dependencies; commit the updated `package-lock.json` and `bun.lock` together.
- `npm run dev` starts the Turbopack dev server at `http://localhost:3000`.
- `npm run build` compiles the production bundle; follow with `npm run start` for release smoke-testing.
- `npm run lint` runs the Next.js ESLint suite; gate merges on a clean run.

## Coding Style & Naming Conventions
TypeScript strict mode is enabled, so avoid `any` and prefer typed props. Use functional React components, `PascalCase` filenames for exported components, and `camelCase` helpers. Keep two-space indentation and double quotes to match the existing formatting. Compose Tailwind classes declaratively and route conditional styles through `cn` from `@/lib/utils`. Add shared UI pieces under `src/components/ui` so imports preserve the aliases defined in `components.json`.

## Testing Guidelines
Automated tests are not yet configured; when adding them, colocate specs beside the feature using the `*.test.tsx` suffix or a nearby `__tests__` folder. Prefer React Testing Library for components and Playwright for end-to-end flows. Record manual verification steps in the PR when no automated test exists, and rerun `npm run build` after touching `src/visual-edits` to catch runtime issues.

## Commit & Pull Request Guidelines
Use Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) as seen in history. Scope each PR narrowly, link tickets, and note behavioural risks. Provide UI screenshots or clips for visual updates, and confirm `npm run lint` (plus any new tests) in the description. Request design review when modifying shared components or theme tokens.

## Visual Edit & UI Toolkit Notes
The shadcn/Tailwind design system lives in `src/components/ui` and `src/app/globals.css`. Adjust tokens there and regenerate primitives rather than editing compiled CSS. Keep `src/visual-edits` backwards compatible with the hosted editor; flag API changes early so deployers can coordinate rollouts.
