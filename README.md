# Sourav Kundu Samya — Portfolio

A premium, framework-free portfolio for Sourav Kundu Samya, a CSE student and
AI/software developer at Daffodil International University. The redesign uses
an original editorial visual system and preserves verified projects,
credentials, education, contact details and repository links.

## Design

- Near-black editorial interface with one restrained acid-lime accent
- Large fluid typography, consistent spacing and fine technical grid
- Lightweight canvas visualization for compute, AI and satellite-data themes
- Varied project hierarchy: one lead case study followed by compact work cards
- Fast 650 ms identity loader with reduced-motion bypass
- No stock media, animation framework, icon package or copied reference assets

## Features

- Seven repository-backed project case studies
- Search and multi-category filtering
- Accessible project and certificate dialogs
- Three verified certificates and three verified achievements
- Evidence-based skill groups and current-focus roadmap
- Live public GitHub repository metadata with six-hour local cache
- Honest GitHub API rate-limit/error fallback
- Copy-email interaction with accessible status feedback
- Responsive navigation, active-section state and scroll progress
- Dynamic footer year
- Canonical metadata, Open Graph/Twitter cards, Person schema, manifest,
  `robots.txt` and `sitemap.xml`
- Vercel security and immutable-asset cache headers

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas 2D
- JSON
- GitHub public REST API

No npm packages, framework, build tool or private token are required.

## Structure

```text
.
├── index.html
├── style.css
├── script.js
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── vercel.json
├── .env.example
├── PROJECT_DOCUMENTATION.md
└── assets/
    ├── cv/
    ├── certificates/
    ├── images/
    │   └── social-preview.png
    ├── projects/
    └── data/
        ├── site-data.js
        ├── projects.json
        ├── achievements.json
        └── certificates.json
```

## Run locally

No installation is needed.

```powershell
cd "sourav portfolio"
python -m http.server 8767
```

Open `http://127.0.0.1:8767/`.

Directly opening `index.html` also works. Project, achievement and certificate
fallback data in `script.js` is retained for browsers that block local JSON
requests under `file://`.

## Environment variables

None are required. `.env.example` documents that the frontend must not contain
a GitHub token or another secret. The GitHub integration uses the unauthenticated
public API and gracefully falls back to locally verified content.

## Validation / production build

There is no compilation step; the source directory is the production artifact.

```powershell
node --check script.js
node ..\validate_portfolio.js .
```

## Content editing

- Profile, navigation, skills, education, social links and current focus:
  `assets/data/site-data.js`
- Projects: `assets/data/projects.json`
- Certificates: `assets/data/certificates.json`
- Achievements: `assets/data/achievements.json`

When project or credential JSON changes, update the matching fallback arrays in
`script.js` so direct-file mode remains functional. Do not add a project result,
award, status, technology or metric without a verifiable source.

## GitHub integration

The page requests:

```text
https://api.github.com/users/sourav7-1/repos?per_page=100&sort=updated
```

Only public repository metadata is used. The response is cached in browser
storage for six hours. A failed request, unavailable storage or API rate limit
does not hide the local project selection. No token is used or exposed.

The Personal Portfolio live URL was verified from the public GitHub repository
homepage metadata:

```text
https://portfolio-six-sage-au5s0ebxhw.vercel.app
```

## Performance

- Zero runtime dependencies
- No webfont or third-party statistics widget
- Canvas uses a capped device-pixel ratio and pauses in hidden tabs
- Scroll UI updates are coalesced with `requestAnimationFrame`
- Credential images below the fold use lazy loading
- Asset caching is configured in `vercel.json`
- Reduced-motion users bypass the loader and animated canvas

## Accessibility

- Semantic landmarks and one page-level `h1`
- Skip link and visible focus indicators
- Accessible mobile menu state
- Keyboard-operable filters, project controls and certificate controls
- Modal Escape support, focus trap and focus restoration
- Descriptive image alternative text
- WCAG-oriented contrast and touch targets
- `prefers-reduced-motion` support

## Deployment

### Vercel (detected current provider)

1. Import `sourav7-1/Portfolio` into Vercel.
2. Select **Other** as the framework preset.
3. Leave the build command empty.
4. Use `.` as the output directory.
5. Deploy. Vercel reads `vercel.json` for headers and clean URLs.

### GitHub Pages

Enable Pages for the repository’s `main` branch and root directory. If the
production URL changes, update the canonical, Open Graph URL, sitemap and JSON-LD
URL in `index.html`/`sitemap.xml`.

## Screenshot assets

- `assets/projects/satellite-monitoring.png`
- `assets/projects/focusflow-dashboard.png`
- `assets/images/social-preview.png`

## Credits and licence

Design and implementation are original. The supplied Midu Studio link was used
only as a general quality reference; no branding, graphics, copy, source code or
exact layout was copied. No licence file existed in the audited repository, so
no licence has been invented.
