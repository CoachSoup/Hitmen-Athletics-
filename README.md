# Hitmen Athletics Phase 1

Phase 1 is a responsive Next.js App Router site for Hitmen Athletics built with
TypeScript and Tailwind CSS.

## Implemented routes

- `/`
- `/about`
- `/contact`
- `/programs/7v7`
- `/programs/speed-lab`
- `/programs/position-lab`

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
```

## Notes for review

- Contact details are intentionally placeholder-only in this phase.
- No form, map, scheduling tool, or third-party integration has been added.
- The logo asset is a placeholder and should be replaced before launch:
  `/workspace/public/brand/hitmen-placeholder-mark.svg`
- The favicon treatment can also be updated later in:
  `/workspace/src/app/icon.svg`
