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

- Live public contact details now used in the site:
  - `mailto:AdamSisouphanh5@gmail.com`
  - `tel:+18014040798`
- No form, map, scheduling tool, or third-party integration has been added.
- The primary site logo now uses:
  `/workspace/public/brand/hitmen-primary-logo.png`
- The separate competition/swag brand asset is preserved at:
  `/workspace/public/brand/hitmen-competition-swag-logo.pdf`
- The favicon treatment can also be updated later in:
  `/workspace/src/app/icon.svg`
