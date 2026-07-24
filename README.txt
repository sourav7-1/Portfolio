SOURAV KUNDU SAMYA — VERIFIED STATIC PORTFOLIO
================================================

OVERVIEW
--------
This is a static, single-page portfolio for Sourav Kundu Samya. It uses only
HTML5, CSS3, Vanilla JavaScript, JSON, local images and a local PDF. There is no
package installation, build command, framework, backend or database connection.

The project gallery was verified against all 11 public repositories visible on
https://github.com/sourav7-1 on 24 July 2026.


TECHNOLOGIES
------------
- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- Local JPG/PNG images
- Local PDF CV


PROJECT STRUCTURE
-----------------
sourav portfolio/
|-- index.html
|-- style.css
|-- script.js
|-- README.txt
|-- PROJECT_DOCUMENTATION.md
`-- assets/
    |-- cv/
    |   |-- Sourav_Kundu_Samya_CV.pdf
    |   `-- images/
    |       `-- profile.jpg
    |-- data/
    |   |-- projects.json
    |   |-- achievements.json
    |   `-- certificates.json
    |-- projects/
    |   |-- README.md
    |   `-- satellite-monitoring.png
    |-- certificates/
    `-- images/


HOW TO RUN
----------
Direct file mode:

1. Keep the project structure unchanged.
2. Double-click index.html.
3. script.js uses its synchronized fallback project array if file:// blocks
   the JSON request.

Local server mode:

1. Open the project folder with any static server.
2. Serve index.html.
3. The browser loads assets/data/projects.json.

No installation or build command is required.


VERIFIED PORTFOLIO PROJECTS
---------------------------
1. TerraWatch — Sentinel-2 Automation
2. FocusFlow
3. Food Safety System
4. Study Motivation Phone Detector
5. ZEN Bank Tracker
6. Food Ordering System
7. Personal Portfolio

No Live Demo URL was added because no current deployment URL could be verified.
The website hides GitHub and Live Demo buttons when their URL value is empty.


HOW GITHUB REPOSITORIES WERE VERIFIED
-------------------------------------
The public GitHub profile page was inspected first. All 11 visible public
repositories were then cloned read-only and checked individually.

Verification included:

- repository name and exact URL
- latest public commit date
- README content
- tracked file structure
- dependency manifests
- routes, application files and database files when present
- programming languages and file types
- screenshots
- completeness and portfolio suitability
- fork and archive indicators
- homepage or deployment evidence

The GitHub REST API was attempted, but the unauthenticated rate limit was
exhausted. The public profile HTML and repository contents were used instead.
No private repository information was accessed.


ADDING A NEW GITHUB PROJECT
---------------------------
1. Verify the exact repository URL.
2. Inspect its README, tracked files, dependency files and source.
3. Confirm its status and technologies.
4. Add one object to assets/data/projects.json.
5. Copy the same project data to fallbackProjects in script.js.
6. Add a real screenshot only when one exists.
7. Leave github or liveDemo as an empty string when not verified.
8. Test through both a static server and direct index.html opening.


PROJECT DATA SCHEMA
-------------------
Each entry in assets/data/projects.json uses:

- id
- title
- repositoryName
- categories
- status
- featured
- shortDescription
- fullDescription
- problem
- solution
- features
- technologies
- previewImage
- visualLabel
- github
- liveDemo
- updatedAt
- source

IDs must be unique. categories must be an array. Missing URLs must be "" rather
than "#", null or undefined.


KEEPING JSON AND JAVASCRIPT FALLBACK DATA SYNCHRONIZED
------------------------------------------------------
The project data exists in two places:

1. assets/data/projects.json — used by Live Server and deployed websites.
2. fallbackProjects in script.js — used when index.html is opened with file://.

After changing projects.json, make the same change inside fallbackProjects.
Both arrays must have the same object count, IDs and values.


ADDING A PROJECT SCREENSHOT
---------------------------
1. Place a genuine screenshot in assets/projects/.
2. Use a readable file name such as focusflow.jpg.
3. Set previewImage in projects.json.
4. Set the same previewImage in script.js fallbackProjects.
5. Test the card and large preview modal.

If the file is absent or fails to load, the site automatically shows a designed
CSS fallback instead of a broken-image icon.


ADDING A LIVE DEMO
------------------
1. Open and test the deployment URL.
2. Confirm that it represents the same repository project.
3. Add the verified URL to liveDemo in both data sources.
4. Do not use a general GitHub profile or unrelated website.

The generated link opens in a new tab with rel="noopener noreferrer".


PROJECT PREVIEW MODAL
---------------------
Every card has Preview and Details controls. The modal displays the project
title, categories, status, screenshot or fallback visual, verified description,
features, technologies and available external links.

It can be closed with:

- the close button
- Escape
- a backdrop click

Tab focus remains inside the dialog while it is open. Closing restores focus to
the button that opened it. Previous and Next controls are keyboard accessible.


ADDING AN ACHIEVEMENT
---------------------
assets/data/achievements.json is currently an empty array because no verified
achievement details were supplied.

To add an achievement, use a JSON object containing a verified title, issuer,
date, description and optional evidence URL. Do not add unverified claims.


ADDING A CERTIFICATE
--------------------
assets/data/certificates.json is currently an empty array.

1. Put the certificate image or PDF inside assets/certificates/.
2. Add a verified certificate object to certificates.json.
3. Include title, issuer, date, local file path and verification URL when one
   exists.


REPLACING THE CV
----------------
Replace:

assets/cv/Sourav_Kundu_Samya_CV.pdf

Keep the same name to preserve both View CV and Download CV actions. If the name
changes, update every matching href in index.html.


REPLACING THE PROFILE PHOTO
---------------------------
Replace:

assets/cv/images/profile.jpg

Keep the same path, or update every image reference in index.html.


DEPLOYING TO GITHUB PAGES
-------------------------
1. Push this project to a public GitHub repository.
2. Open repository Settings.
3. Open Pages.
4. Select deployment from a branch.
5. Select the main branch and root folder.
6. Save and wait for the published URL.


DEPLOYING TO NETLIFY
--------------------
1. Sign in to Netlify.
2. Drag the complete project folder into Netlify Drop, or import the GitHub
   repository.
3. Use no build command.
4. Use the project root as the publish directory.


DEPLOYING TO VERCEL
-------------------
1. Import the GitHub repository into Vercel.
2. Select the Other/static preset when asked.
3. Leave the build command empty.
4. Use the repository root as the output directory.


ACCESSIBILITY AND MOTION
------------------------
- Skip-to-content link
- Semantic sections and labels
- Visible keyboard focus
- Accessible navigation state
- role="dialog", aria-modal and aria-labelledby
- Escape support, focus trap and focus restoration
- Touch-safe layout
- prefers-reduced-motion support
- Pointer effects disabled on small screens and coarse pointers
- Animations paused when the browser tab is hidden


IMPORTANT NOTES
---------------
- Food Safety System is labeled Academic Prototype because its database design is
  detailed, but the current Flask application remains a starter.
- Candidate titles without verified code or documentation are not displayed.
- The existing CV, profile photo and verified personal links are preserved.
