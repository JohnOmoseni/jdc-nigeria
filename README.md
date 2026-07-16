# JDC Nigeria Data Centres

A modern, high-performance landing page for JDC Nigeria Data Centres — a 55 MW, Tier III-targeted digital-infrastructure platform in Southern Nigeria, set to open in 2029.

This project is built to establish the public position of JDC Nigeria, focusing on attracting operating, technology, connectivity, and commercial partners for its phased campus activation.

## Tech Stack

This project is built using modern web development standards and optimized for performance:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) and [Base UI](https://base-ui.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **State Management (Mutations):** [TanStack Query](https://tanstack.com/query/latest)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Project Structure

The project follows a clean, modular architecture:

- `src/app/`: Next.js App Router files (`page.tsx`, `layout.tsx`, `globals.css`).
- `src/app/_sections/`: Extracted, reusable sections of the landing page (e.g., `contact.tsx`, `footer.tsx`).
- `src/components/`: Reusable UI components including base configurations for shadcn and context providers.
- `src/constants/`: Source of truth for all static copy, navigation links, and image paths (`data.tsx`, `images.ts`). This ensures tight control over public claims and brand messaging.
- `src/lib/`: Utility functions, schemas, and API mutation hooks.
- `public/images/`: Contains all essential branding assets and high-resolution renders (e.g., `jdc.png`, `logo.png`).

## Design System

The visual identity is driven by a bespoke color palette managed via CSS variables in `globals.css`:
- **Deep Navy** (`#061120`)
- **Electric Cyan** (`#00D2FF`)
- **Signal Teal** (`#00EBA8`)
- **Amber** (`#FFB340`)

These tokens enforce a strict, premium, and dynamic look consistent with enterprise digital-infrastructure standards.

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidelines

1. **Content Control:** All textual content and statistics (like the 55 MW facility load and 60 MW installed generation) are managed centrally in `src/constants/data.tsx`. Do not hardcode content into components.
2. **Form Architecture:** The contact form enforces strict type-safety through Zod schemas (`src/lib/schemas/contact.ts`) and handles submission state seamlessly via TanStack Query mutations (`src/lib/services/contactMutation.ts`).
3. **Styling:** Stick strictly to the defined Tailwind tokens. Avoid generic colors; heavily leverage the `brand-navy` and `brand-cyan` utility classes.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Running `pnpm build` will generate a highly optimized production bundle.
