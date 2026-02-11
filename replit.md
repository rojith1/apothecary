# The Apothecary - Futuristic Healthcare Landing Page

## Overview
A futuristic, visually stunning landing page for The Apothecary (theapothecary.co.in), a healthcare technology company focused on emergency medicine, pre-hospital care, and smart ambulance solutions. Content scraped from the original website and reimagined with a cyberpunk/futuristic aesthetic.

## Current State
- Fully functional single-page application with all sections
- Dark mode by default with light/dark theme toggle
- Futuristic design with cyan/teal color palette, glow effects, grid patterns
- AI-generated images for all use cases and hero section
- Smooth scroll-triggered animations using framer-motion

## Project Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui components
- **Backend**: Express (minimal - only serves the frontend)
- **No database needed** - static marketing site

### Key Files
- `client/src/pages/home.tsx` - Main landing page with all sections
- `client/src/components/theme-provider.tsx` - Dark/light theme toggle
- `client/src/App.tsx` - Root app with routing and providers
- `client/src/index.css` - CSS variables for theming
- `client/public/images/` - AI-generated futuristic images

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
- Futuristic/cyberpunk aesthetic preferred
- Dark mode as default theme

## Recent Changes
- Initial build: Feb 11, 2026
- Implemented ThemeProvider with localStorage sync
- Added accessibility attributes (aria-expanded, role="tablist", aria-selected)
- Used text-foreground for proper light/dark mode compatibility
