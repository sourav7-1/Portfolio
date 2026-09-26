# Sourav Kundu Samya — Portfolio

A cinematic, responsive developer portfolio showcasing Sourav Kundu Samya's work in artificial intelligence, full-stack development, computer vision, geospatial automation, and distributed systems.

The current version is built with React, TypeScript, and Vite. It combines GSAP-powered motion, Lenis smooth scrolling, accessible interactions, project case studies, and a lightweight on-site portfolio assistant.

## Highlights

- Cinematic hero section with animated preloader and custom cursor
- Responsive navigation with a keyboard-friendly mobile menu
- About, capabilities, journey, selected work, and contact sections
- Horizontal, scroll-driven project showcase on desktop
- Touch-friendly stacked project layout on smaller screens
- Project detail modals with verified GitHub links where available
- Rule-based portfolio assistant for projects, skills, education, resume, and contact details
- One-click email copying and downloadable resume
- GitHub, LinkedIn, Facebook, Instagram, and WhatsApp links
- Reduced-motion and coarse-pointer fallbacks
- Open Graph, Twitter Card, favicon, and responsive metadata
- SPA fallback support for OpenAI Sites/Cloudflare-style hosting
- Vercel configuration with security and immutable-asset cache headers

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 18, TypeScript |
| Build tooling | Vite 6 |
| Animation | GSAP, ScrollTrigger |
| Smooth scrolling | Lenis |
| Icons | Lucide React |
| Styling | CSS3 |
| Deployment | OpenAI Sites-compatible worker output, Vercel |

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/sourav7-1/Portfolio.git
cd Portfolio
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The optimized site is generated in `dist/`. The build also creates `dist/server/index.js`, which serves static assets and falls back to `index.html` for client-side routes.

### Preview the production build

```bash
npm run preview
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the production site |
| `npm run lint` | Run the TypeScript project checks |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── .openai/
│   └── hosting.json          # OpenAI Sites project configuration
├── assets/
│   ├── certificates/         # Certificate images and PDFs
│   ├── cv/                   # Resume and profile image
│   ├── data/                 # Legacy structured portfolio data
│   ├── images/               # Portraits and social preview images
│   └── projects/             # Project screenshots
├── src/
│   ├── App.tsx               # Main UI, interactions, and animation logic
│   ├── data.ts               # Active profile, capability, and project content
│   ├── main.tsx              # React entry point
│   ├── styles.css            # Current application styles
│   └── vite-env.d.ts         # Vite TypeScript declarations
├── index.html                # HTML shell and social metadata
├── package.json              # Dependencies and npm scripts
├── tsconfig*.json            # TypeScript configuration
├── vercel.json               # Vercel build, routing, and headers
└── vite.config.ts            # Vite and hosting-worker configuration
```

The root-level `style.css`, `script.js`, `README.txt`, and JSON files under `assets/data/` belong to the earlier framework-free version. The active Vite application uses the files under `src/`.

## Editing portfolio content

Most visible portfolio data is centralized in `src/data.ts`:

- Profile name, role, email, phone, location, and social links
- Resume, portrait, and hero image imports
- Project titles, descriptions, technology tags, screenshots, and repository links
- Capability headings and descriptions

Section copy, journey entries, navigation labels, assistant responses, and interactive UI live in `src/App.tsx`. Global visuals, breakpoints, animations, and accessibility states are defined in `src/styles.css`.

When replacing an imported asset, keep it inside `assets/` and update the matching import in `src/data.ts`.

## Accessibility and motion

The interface includes semantic sections, accessible labels, keyboard-operable project cards, focus management for the mobile menu, Escape-key support, and modal semantics. Users who prefer reduced motion skip smooth scrolling and most scroll animation. Custom cursor behavior is disabled on coarse-pointer devices and for reduced-motion users.

## Environment variables

No environment variables are required. This is a client-side portfolio and must not contain private tokens or secrets. The included `.env.example` documents that policy.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Keep the detected framework as **Vite**.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy.

`vercel.json` already defines the build settings, clean URLs, security headers, and long-lived caching for generated assets.

### OpenAI Sites-compatible hosting

The repository includes `.openai/hosting.json`. During `npm run build`, the custom Vite plugin writes a Cloudflare Worker-compatible entry at `dist/server/index.js` and provides an `index.html` fallback for single-page navigation.

### Other static hosts

Upload the contents of `dist/` and configure the host to rewrite unknown routes to `/index.html`.

## Featured work

- Sentinel Map Automation
- HealthIO
- VisionScribe AI
- Distributed Campus AI Compute
- Street Food Safety Platform
- FocusFlow

Repository links for public projects are available from their project dialogs on the site.

## Author

**Sourav Kundu Samya**  
AI & Full-Stack Developer · CSE Undergraduate at Daffodil International University

- [GitHub](https://github.com/sourav7-1)
- [LinkedIn](https://www.linkedin.com/in/sourav-kundu-samya-387496367/)
- [Email](mailto:souravku0416@gmail.com)

## License

No license has been specified for this repository. Unless a license is added, the source code and included assets remain protected by default copyright rules.
