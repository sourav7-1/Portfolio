SOURAV KUNDU SAMYA - PORTFOLIO
================================

OVERVIEW
--------
Static, single-page portfolio built with HTML, CSS and Vanilla JavaScript.
No package installation or build command is required.

PROJECT STRUCTURE
-----------------
index.html                         Page structure and accessible modal
style.css                          Responsive design, glass effects and 3D visuals
script.js                          Interactions, project fallback data and modal logic
assets/data/projects.json          Main project data
assets/projects/                   Optional project screenshots
assets/cv/Sourav_Kundu_Samya_CV.pdf
assets/cv/images/profile.jpg
PROJECT_DOCUMENTATION.md           Full feature documentation

HOW TO RUN
----------
1. Keep all files in their current paths.
2. Open index.html in a browser, or serve the folder with any local static server.
3. The local fallback array in script.js renders projects when file:// blocks JSON fetch.

CURRENT FEATURES
----------------
- Cinematic intro and animated aurora background
- Layered 3D hero scene with subtle mouse parallax
- Touch-safe project cards with perspective tilt on supported pointer devices
- Responsive navigation and active section highlighting
- Typing and scroll reveal animations
- Grouped technical skills
- Data-driven project cards
- Project filtering and search
- Preview and Details buttons on every project
- Accessible project preview dialog
- Previous and next project navigation
- Escape key, backdrop and close-button dismissal
- Keyboard focus trap and focus restoration
- Screenshot loading with gradient fallback visuals
- CV view and download actions
- Email, phone, GitHub, LinkedIn, Facebook and Instagram links
- Visitor counter and back-to-top button
- Reduced-motion support

PROJECT SCREENSHOTS
-------------------
Screenshots are optional. When an image is missing, the website displays a designed
HTML/CSS fallback instead of a broken image.

Suggested files:

assets/projects/
|-- satellite-monitoring.jpg
|-- food-safety-system.jpg
|-- focusflow.jpg
`-- food-ordering-system.jpg

To add a screenshot:
1. Place the image inside assets/projects/.
2. Open assets/data/projects.json.
3. Set previewImage to the relative path, for example:
   "previewImage": "assets/projects/focusflow.jpg"
4. Keep the matching fallback project entry in script.js synchronized.

ADDING OR EDITING A PROJECT
---------------------------
Use the same schema in assets/data/projects.json and the fallbackProjects array in
script.js. Supply a unique id, title, category, secondaryCategories, status,
descriptions, features, technologies, previewImage and visualLabel.

Only add a GitHub or Live Demo URL after verification:

"github": "https://github.com/account/repository"
"liveDemo": "https://verified-demo.example"

Leave either value as an empty string when no valid link exists. The corresponding
button will remain hidden.

INTERACTION AND ACCESSIBILITY
-----------------------------
- Mouse parallax and card tilt run only with a fine pointer and hover support.
- Touch devices keep clearly visible Preview and Details controls without requiring hover.
- prefers-reduced-motion disables non-essential movement and hides the timed intro.
- The preview uses role="dialog", aria-modal="true" and an associated heading.
- Escape closes the dialog; Tab stays inside it; closing restores trigger focus.

CURRENT PROJECT DATA NOTES
--------------------------
- Food Safety System, FocusFlow and Food Ordering System use verified public repository links.
- Entries without verified source details are labeled Details Pending.
- No deployment link is included unless it has been verified.

