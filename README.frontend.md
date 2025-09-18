## Frontend README

### Overview
Next.js (App Router) frontend using React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Carbon Dark theme is the permanent default and all styling is driven via CSS variables.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui
- **Lang/Types**: TypeScript
- **Auth**: Clerk (integration to be added in feature work)
- **Data/Infra (backend services)**: Supabase, Cloudflare R2, Fal.ai (used by backend)

### Getting Started
1) Install dependencies
```bash
npm install
```

2) Run dev server
```bash
npm run dev
```

3) Production build
```bash
npm run build && npm start
```

### Project Scripts
- **dev**: Start Next.js in development mode
- **build**: Build production assets
- **start**: Start production server
- **lint**: Run ESLint

### Tailwind CSS v4 Notes
- Import Tailwind once in `src/app/globals.css`:
```css
@import "tailwindcss";
```
- Do not use the old v3 directives `@tailwind base/components/utilities`.
- Custom CSS uses `@layer base` and `@layer utilities`.

### Theme System (Carbon Default)
- Carbon Dark is the default; there is no UI theme switcher and no `next-themes`.
- All colors are CSS variables using RGB tuples (no hardcoded colors):
  - Tokens defined under `:root` and variant scopes (e.g., `[data-theme="midnight"]`).
  - Tailwind v4 `@theme inline` maps tokens to Tailwind variables using `rgb(var(--...))`.
- Shadcn components automatically inherit color tokens.

Key files:
- `src/app/globals.css`: theme variables and utilities
- `src/components/ui/*`: shadcn/ui components (button, card, input, label)
- `src/lib/utils.ts`: `cn()` class merger utility

### Responsive Layout
- App-wide container/padding is provided by `src/app/layout.tsx`:
  - `<main className="min-h-screen w-full px-4 md:px-6 lg:px-8">`
- Mobile-first by default; verify at 390px, 768px, 1280px.
- Spacing utilities are available:
  - `.spacing-xs`, `.spacing-sm`, `.spacing-md`, `.spacing-lg`, `.spacing-xl`, `.spacing-2xl`

### shadcn/ui Setup (already applied)
```bash
npx shadcn@latest init         # Default style, Neutral, CSS variables
npx shadcn@latest add button card input label
```

### Guidelines & Conventions
- **No arbitrary colors** (e.g., `bg-[#000]`); always use CSS variables.
- **No theme switcher**; Carbon Dark is permanent default.
- New components must read from theme variables (inherit from shadcn tokens).
- Prefer semantic Tailwind utilities; keep components mobile-first.

### Routing
- App Router under `src/app/`. Add routes by creating directories with `page.tsx`.

### Verification Checklist
- Builds without errors (`npm run build`).
- Test at 390px, 768px, 1280px.
- No console errors; no hardcoded colors in code.

### Troubleshooting
- If Tailwind classes don’t apply, ensure `@import "tailwindcss";` is present in `globals.css` and the file is imported in `layout.tsx`.
- If colors look off, inspect computed CSS variables on the element and verify the correct theme scope is applied (`:root` for Carbon Dark by default).


