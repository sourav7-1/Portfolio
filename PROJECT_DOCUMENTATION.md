# Sourav Kundu Samya — Portfolio Documentation

## Final implementation

This is the verified implementation of Sourav Kundu Samya's existing static portfolio. It remains framework-free and works through direct `index.html` opening, a local static server, GitHub Pages, Netlify and Vercel static hosting.

The website uses only:

- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- local images
- a local PDF CV

No React, Vue, Angular, Bootstrap, Tailwind, jQuery, npm project, backend, database or build system was added to the portfolio.

## Owner information

| Field | Verified value |
|---|---|
| Name | Sourav Kundu Samya |
| GitHub | [sourav7-1](https://github.com/sourav7-1) |
| LinkedIn | [Sourav Kundu Samya](https://www.linkedin.com/in/sourav-kundu-samya-387496367/) |
| Email | `souravku0416@gmail.com` |
| University | Daffodil International University |
| Degree | Bachelor of Science in Computer Science and Engineering |
| Duration | 27 June 2024 — Expected 30 June 2028 |

## Project structure

```text
sourav portfolio/
├── index.html
├── style.css
├── script.js
├── README.txt
├── PROJECT_DOCUMENTATION.md
└── assets/
    ├── cv/
    │   ├── Sourav_Kundu_Samya_CV.pdf
    │   └── images/
    │       └── profile.jpg
    ├── data/
    │   ├── projects.json
    │   ├── achievements.json
    │   └── certificates.json
    ├── projects/
    │   ├── README.md
    │   └── satellite-monitoring.png
    ├── certificates/
    └── images/
```

## GitHub verification method

Last verified: **24 July 2026**

1. The public profile at `https://github.com/sourav7-1` was inspected.
2. Eleven visible public repositories were enumerated from the public profile page.
3. Every public repository was cloned read-only.
4. Tracked files, READMEs, dependency manifests, routes, source files, database files, screenshots, latest commit dates, fork/archive indicators and project completeness were reviewed.
5. The unauthenticated REST API was attempted but returned a rate-limit response. Public HTML and repository contents were used instead.
6. No private repository information was accessed.

## GitHub audit summary

| Repository | Exact URL | Verified technologies/content | Portfolio decision | Reason |
|---|---|---|---|---|
| `sourav7-1` | <https://github.com/sourav7-1/sourav7-1> | Markdown, PNG, GitHub Actions workflow | Excluded as project | GitHub profile README repository, not a standalone software project |
| `satellite-project` | <https://github.com/sourav7-1/satellite-project> | Python, Flask, Earth Engine API, Sentinel-2, Leaflet, JavaScript, HTML, CSS | Included and featured | Strongest unique project; documented workflow and real dashboard screenshot |
| `Portfolio` | <https://github.com/sourav7-1/Portfolio> | HTML, CSS, Vanilla JavaScript, JSON | Included | Demonstrates responsive frontend, accessibility and data-driven UI |
| `focusflow` | <https://github.com/sourav7-1/focusflow> | Laravel 13, PHP 8.3, Blade, Tailwind CSS, Alpine.js, Vite, SQL migrations, Socialite | Included and featured | Substantial routes, models, migrations and authenticated productivity workflows |
| `Food-Safety-System` | <https://github.com/sourav7-1/Food-Safety-System> | Python, Flask, Flask-SQLAlchemy, MySQL, PyMySQL, Jinja2, HTML, CSS, detailed SQL schema | Included as Academic Prototype | Strong database design, but application routes and modules are still starter-level |
| `Demo-Laravel` | <https://github.com/sourav7-1/Demo-Laravel> | Laravel 13 starter, PHP, Tailwind CSS, Vite, basic post migration/view files | Excluded | Practice/starter repository is weaker than FocusFlow |
| `Python-mini-project` | <https://github.com/sourav7-1/Python-mini-project> | Python, OpenCV, YOLOv3-tiny, TensorFlow.js, JavaScript, HTML, CSS, PWA files | Included and featured | Distinct computer-vision prototype with desktop and mobile modes |
| `AI-Voice-Assistant-Demo` | <https://github.com/sourav7-1/AI-Voice-Assistant-Demo> | README only; claimed Python voice assistant but no tracked implementation | Excluded | Source code and implementation could not be verified |
| `Bakirkhata` | <https://github.com/sourav7-1/Bakirkhata> | Python, Flask, SQLite, JSON migration logic, Jinja2, HTML, CSS, Gunicorn configuration | Included and featured as ZEN Bank Tracker | Functional routes, templates and transaction/friend-access workflows |
| `FoodOrderingSystem` | <https://github.com/sourav7-1/FoodOrderingSystem> | Java, object-oriented classes for food items, customers, orders and order items | Included as Academic Project | Clear Java/OOP learning project with source and documentation |

All eleven public repositories were non-fork and non-archived in the verified public profile listing.
One user-excluded repository is intentionally omitted from the visible audit table and every portfolio-facing file.

## Selected portfolio projects

### 1. TerraWatch — Sentinel-2 Automation

- Repository: <https://github.com/sourav7-1/satellite-project>
- Status: In Development
- Verified stack: Python, Flask, Google Earth Engine, Sentinel-2, Leaflet, JavaScript, HTML, CSS
- Verified functions:
  - polygon and rectangle selection
  - date and cloud filtering
  - least-cloudy image selection
  - RGB B4/B3/B2 GeoTIFF preparation
  - Drive export and task polling
- Screenshot: copied from the repository's real `docs/screenshots/terrawatch-dashboard-landscape.png`
- Live demo: none verified

The portfolio does not claim that an ML model currently runs in this repository. Its verified strength is remote-sensing automation.

### 2. FocusFlow

- Repository: <https://github.com/sourav7-1/focusflow>
- Status: In Development
- Verified stack: Laravel 13, PHP 8.3, Blade, Tailwind CSS, Alpine.js, Vite, SQL
- Verified functions:
  - study-session start/stop
  - task creation, completion and deletion
  - goal creation, pause, resume and deletion
  - login, registration and password recovery
  - email verification
  - profile management
  - Google OAuth routes
- Live demo: none verified

### 3. Food Safety System

- Repository: <https://github.com/sourav7-1/Food-Safety-System>
- Status: Academic Prototype
- Verified stack: Python, Flask, Flask-SQLAlchemy, MySQL, PyMySQL, Jinja2, HTML, CSS
- Verified content:
  - fifteen-table normalized schema
  - role, user, vendor, inspector, area and stall relationships
  - inspection criteria and scores
  - complaints, reviews and corrective actions
  - environment-based MySQL configuration
  - starter Flask/Jinja interface
- Live demo: none verified

The repository includes a tracked local environment and an environment file. Their contents are not used or exposed by the portfolio; repository cleanup should be handled separately.

### 4. Study Motivation Phone Detector

- Repository: <https://github.com/sourav7-1/Python-mini-project>
- Status: Prototype
- Verified stack: Python, OpenCV, YOLOv3-tiny, TensorFlow.js, JavaScript, HTML, CSS, PWA
- Verified functions:
  - desktop webcam detection
  - cell-phone classification
  - audible alert
  - mobile browser-camera mode
  - local-network server
  - manifest and service worker
- Live demo: none verified

### 5. ZEN Bank Tracker

- Repository: <https://github.com/sourav7-1/Bakirkhata>
- Status: Prototype
- Verified stack: Python, Flask, SQLite, Jinja2, HTML, CSS
- Verified functions:
  - account registration and login
  - isolated friend records
  - balance-changing transactions
  - code-based friend portal
  - reminder and balance-message links
  - legacy JSON migration
- Live demo: none verified

The repository contains Render-ready configuration, but no deployment URL was verified.

### 6. Food Ordering System

- Repository: <https://github.com/sourav7-1/FoodOrderingSystem>
- Status: Academic Project
- Verified stack: Java, object-oriented programming
- Verified functions:
  - food-item classes
  - customer and order models
  - menu selection
  - ordering and total calculation
  - ordered-item output
- Live demo: none verified

### 7. Personal Portfolio

- Repository: <https://github.com/sourav7-1/Portfolio>
- Status: Completed
- Verified stack: HTML5, CSS3, Vanilla JavaScript, JSON
- Verified functions:
  - responsive layout
  - project data loading with direct-file fallback
  - search and multi-category filtering
  - accessible preview dialog
  - CSS screenshot fallbacks
  - reduced-motion support
- Live demo: none verified; the conventional GitHub Pages URL returned 404 during verification

## Candidate projects not displayed

The following supplied titles were not found among the 11 public repositories and had no reliable implementation documentation in the current portfolio:

- Digital Combination Lock
- Student360 AI
- Human Following Robot
- DIU Hall Portal Management System

They should be added only after source files, a report, screenshots or other reliable documentation is supplied.

## Skills section

The visible skills are grouped without percentage bars:

- Programming Languages: C, Python, Java, PHP
- Frontend: HTML, CSS, JavaScript
- Backend and Framework: Laravel, PHP
- Database: MySQL, SQL, DBMS
- AI and Technical Interests: Artificial Intelligence, Machine Learning, Remote Sensing, Satellite Data
- Development Tools: Git, GitHub, MySQL Workbench

## Project data system

Primary data:

```text
assets/data/projects.json
```

Direct-file fallback:

```text
fallbackProjects in script.js
```

The two arrays use the same seven objects and the same values. Search includes:

- title
- repository name
- short and full descriptions
- problem and solution
- technologies
- categories
- status

Filters:

- All
- AI
- Web
- Python
- Database
- Hardware

Projects may belong to multiple categories. The Hardware filter correctly shows the empty state because no hardware project had enough verified information.

## Project card system

Each card includes:

- real screenshot or CSS fallback
- categories
- status
- title
- concise description
- verified technology tags
- Featured badge when applicable
- Preview button
- Details button
- GitHub link only when valid
- Live Demo link only when valid

Cards use a responsive grid and subtle glass depth. They do not depend on hover to expose essential actions.

## Project preview modal

The large browser-style dialog contains:

- three browser dots and title bar
- screenshot or fallback visual
- title
- categories
- status
- verified description
- features
- technologies
- valid external actions
- Previous and Next controls
- Close button

Accessibility:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- Escape closes
- backdrop click closes
- focus trap
- focus restoration
- keyboard-accessible navigation
- body scrolling disabled while open

## Professional 3D system

The existing design was retained and refined with:

- perspective environments
- `transform-style: preserve-3d`
- restrained `rotateX`/`rotateY`
- layered shadows and glass highlights
- hero depth layers and floating information cards
- project-card shine
- verified GitHub glass panel

Pointer rotation is limited to approximately four degrees. It is disabled on small screens, touch/coarse pointers and reduced-motion preferences. CSS animations pause when the browser tab is hidden.

## Accessibility implementation

- Skip-to-content link
- Semantic headings and sections
- Visible keyboard focus
- Menu `aria-controls` and `aria-expanded`
- Keyboard-accessible project controls
- Accessible preview dialog
- Alternative text for real images
- Designed fallback visuals
- Adequate contrast
- Reduced-motion handling
- Direct-file fallback

## Achievements and certificates

The following files were created:

```text
assets/data/achievements.json
assets/data/certificates.json
```

Both contain empty arrays because no verified achievement or certificate records were provided. `assets/certificates/` and `assets/images/` are available for future verified assets.

## Screenshot status

Available project screenshots:

- `assets/projects/satellite-monitoring.png`
- `assets/projects/focusflow-dashboard.png`

Still needed:

- Food Safety System
- Study Motivation Phone Detector
- ZEN Bank Tracker
- Food Ordering System
- Personal Portfolio

Until supplied, those projects use professional CSS fallback visuals.

## Deployment information

The project is static. Deployment requires no build command.

### GitHub Pages

Publish the repository root from the main branch through repository Settings → Pages.

### Netlify

Drag the complete folder into Netlify Drop or import the GitHub repository. Use the project root as the publish directory.

### Vercel

Import the repository as a static project. Use no build command and keep the repository root as the output directory.

## Remaining information needed

- verified details or source files for the four omitted candidate projects
- authentic screenshots for six projects
- verified live deployment URLs
- achievement records
- certificate files and metadata
- CGPA, only if Sourav wants it displayed
