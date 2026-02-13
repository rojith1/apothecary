# The Apothecary - Premium Healthcare Landing Page

## Overview
A premium, investor-grade landing page for The Apothecary (theapothecary.co.in), a healthcare technology company focused on emergency medicine, pre-hospital care, and smart ambulance solutions. Features a modern medical-tech design with blue-to-violet gradients, clean typography, and generous whitespace.

## Current State
- Pure React frontend application (no backend/database)
- Dark mode by default with light/dark theme toggle
- Premium design with deep navy palette, blue-violet gradients, Inter typography
- AI-generated images for all use cases and hero section (user plans to replace with originals)
- Smooth scroll-triggered animations using framer-motion

## Project Architecture
- **Frontend only**: React + Vite + TailwindCSS + shadcn/ui components
- **No backend or database** - static marketing site
- `server/index.ts` is a minimal Vite dev server launcher (not an Express backend)

### Key Files
- `client/src/pages/home.tsx` - Main landing page with all sections
- `client/src/components/theme-provider.tsx` - Dark/light theme toggle
- `client/src/App.tsx` - Root app with routing and providers
- `client/src/index.css` - CSS variables for theming
- `client/public/images/` - AI-generated futuristic images
- `server/index.ts` - Minimal Vite dev server launcher

### Sections
1. Hero with APOC ambulance image and dark wash
2. Stats bar (5G, AR, 24/7, Certifications)
3. Use Cases (Road/Air/Water Ambulances, Smart Emergency, Tele ICU, Smart Clinics)
4. APOC Products (Lite, Go, Cart, OPD)
5. Key Features with interactive tabbed display
6. Device Integration (8 integrated devices)
7. Video walkthrough (YouTube embed)
8. Team section with gradient avatars
9. Contact information
10. Footer

## User Preferences
- Modern, aesthetic design appealing to potential investors
- Dark mode as default theme
- Premium medical-tech aesthetic (not cyberpunk)
- User will replace AI-generated images with originals later

## Recent Changes
- Feb 13, 2026: Removed all backend/database code (Express, Drizzle, Passport, etc.)
- Feb 13, 2026: Converted to pure React frontend with Vite dev server
- Feb 13, 2026: Removed QueryClientProvider, queryClient utilities, shared schema
- Feb 13, 2026: Design refinements - replaced text-primary with theme-compatible colors
- Feb 11, 2026: Initial build with ThemeProvider, accessibility attributes
