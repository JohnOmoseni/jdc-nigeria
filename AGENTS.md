<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Architectural Decisions

## Content Management
- **Strict Separation of Concerns:** All static copy, navigational links, and structured data for the landing page are centralized in `src/constants/data.tsx`. Do not hardcode copy directly in `page.tsx` or component files.

## Asset Management
- **Local Imagery:** Images are stored locally in `public/images/` and mapped centrally in `src/constants/images.ts`. All components should reference `IMAGES.*` rather than hardcoding paths. 

## Component Architecture
- **Modular Sections:** The landing page (`src/app/page.tsx`) is structured as a series of semantic `<section>` blocks.
- **Reusable UI Components:** Complex visual structures (like the `TwoPanelFeatureCard`) are extracted to `src/components/` to maintain clean page layouts and ensure reusability. 
- **Design System:** The UI strictly adheres to a deep navy (`brand-navy`), electric cyan (`brand-cyan`), and signal teal (`brand-teal`) color palette. Rely on Tailwind CSS utility classes and `lucide-react` for icon-driven grids.
