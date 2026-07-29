/* Central profile, navigation, skill and social data. */
const siteData = window.PORTFOLIO_SITE || {};

function renderSiteData() {
    const navMenuElement = document.getElementById("navMenu");
    const skillsList = document.getElementById("skillsList");
    const focusList = document.getElementById("focusList");
    const socialLinks = document.getElementById("socialLinks");

    if (navMenuElement && Array.isArray(siteData.navigation)) {
        navMenuElement.innerHTML = siteData.navigation
            .map(([label, id], index) =>
                `<li><a href="#${id}" class="nav-link${index === 0 ? " active" : ""}">${label}</a></li>`
            )
            .join("");
    }

    if (skillsList && Array.isArray(siteData.skills)) {
        skillsList.innerHTML = siteData.skills
            .map(group => `
                <article class="skill-group">
                    <h3>${group.title}</h3>
                    <div class="skills-cloud">${group.items.map(item => `<span>${item}</span>`).join("")}</div>
                    <p>${group.evidence}</p>
                </article>`)
            .join("");
    }

    if (focusList && Array.isArray(siteData.focus)) {
        focusList.innerHTML = siteData.focus
            .map(([title, context], index) => `
                <article class="focus-item">
                    <span>0${index + 1}</span>
                    <strong>${title}</strong>
                    <small>${context}</small>
                </article>`)
            .join("");
    }

    if (socialLinks && Array.isArray(siteData.socials)) {
        socialLinks.innerHTML = siteData.socials
            .map(([label, url]) =>
                `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
            )
            .join("");
    }
}

renderSiteData();

/* Lightweight identity loader. */

const introScreen =
    document.getElementById("introScreen");


function hideIntro() {

    if (!introScreen) {
        return;
    }

    if (introScreen.classList.contains("hide")) {
        return;
    }

    introScreen.classList.add("hide");

    setTimeout(() => {

        introScreen.style.display = "none";

    }, 400);

}


window.addEventListener(
    "load",
    () => {
        setTimeout(
            hideIntro,
            650
        );
    }
);


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            const isOpen =
                navMenu.classList.toggle("show");

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* Close after clicking */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (navMenu) {

                    navMenu.classList.remove("show");
                    menuBtn?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================
   TYPING EFFECT
========================= */

const typingText =
    document.getElementById("typingText");


const words = [
    "AI & Software Developer",
    "Geospatial Automation Builder",
    "Computer Vision Explorer",
    "CSE Student"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    if (!typingText) {
        return;
    }

    /* Avoid spending animation work while this browser tab is hidden. */
    if (document.hidden) {
        setTimeout(typingEffect, 500);
        return;
    }

    const currentWord =
        words[wordIndex];


    if (deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

    }

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

    }


    let speed =
        deleting ? 55 : 95;


    /* Finished typing */

    if (
        !deleting &&
        charIndex === currentWord.length
    ) {

        speed = 1200;

        deleting = true;

    }


    /* Finished deleting */

    if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1)
            % words.length;

        speed = 250;

    }


    setTimeout(
        typingEffect,
        speed
    );

}


if (typingText) {

    typingEffect();

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(element);

    }
);


/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 130;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    current =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove("active");


                if (
                    link.getAttribute("href")
                    === "#" + current
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);


/* =========================
   SCROLL TOP BUTTON
========================= */

const topBtn =
    document.getElementById("topBtn");


if (topBtn) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                topBtn.style.display =
                    "block";

            }

            else {

                topBtn.style.display =
                    "none";

            }

        }
    );


    topBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// =========================
// PROJECT DATA FALLBACK
// =========================

// This matches assets/data/projects.json so the portfolio also works through file://.
const fallbackProjects = [
    {
        "id": "terrawatch-sentinel-automation",
        "title": "TerraWatch — Sentinel-2 Automation",
        "repositoryName": "satellite-project",
        "categories": [
            "Web",
            "Python"
        ],
        "status": "In Development",
        "featured": true,
        "shortDescription": "A Flask and Earth Engine workflow for selecting a map area, finding low-cloud Sentinel-2 imagery and preparing RGB GeoTIFF exports.",
        "fullDescription": "The verified repository provides a Leaflet map interface backed by Flask and Google Earth Engine. It validates a selected polygon, filters the COPERNICUS/S2_SR_HARMONIZED collection by date and cloud percentage, selects the least-cloudy image and prepares B4/B3/B2 GeoTIFF exports.",
        "problem": "Finding and preparing suitable satellite imagery for a specific region requires several manual filtering and export steps.",
        "solution": "The application combines an interactive map with a validated Earth Engine export workflow and task-status tracking.",
        "features": [
            "Polygon and rectangle area selection with Leaflet Draw",
            "Sentinel-2 date and cloud-percentage filtering",
            "Automatic least-cloudy image selection",
            "RGB GeoTIFF preparation with B4, B3 and B2 bands",
            "Google Drive export and task-status polling",
            "Local download preparation documented in the current backend"
        ],
        "technologies": [
            "Python",
            "Flask",
            "Google Earth Engine",
            "Sentinel-2",
            "Leaflet",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "previewImage": "assets/projects/satellite-monitoring.png",
        "visualLabel": "TERRA",
        "github": "https://github.com/sourav7-1/satellite-project",
        "liveDemo": "",
        "updatedAt": "2026-07-25T06:21:05Z",
        "source": "github"
    },
    {
        "id": "focusflow",
        "title": "FocusFlow",
        "repositoryName": "focusflow",
        "categories": [
            "Web",
            "Database"
        ],
        "status": "In Development",
        "featured": true,
        "shortDescription": "A Laravel productivity application for study sessions, tasks, goals and authenticated user dashboards.",
        "fullDescription": "The verified Laravel repository includes study-session timing, task completion, multi-goal management, profile workflows, email verification, password recovery and Google OAuth routes.",
        "problem": "Study planning information can become fragmented across separate timers, task lists and goal trackers.",
        "solution": "FocusFlow brings study sessions, tasks, goals and account workflows into one Laravel application.",
        "features": [
            "Start and stop study sessions",
            "Create, complete and delete tasks",
            "Create, pause, resume and remove goals",
            "Registration, login and password recovery",
            "Email verification and profile management",
            "Google OAuth routes"
        ],
        "technologies": [
            "Laravel",
            "PHP",
            "Blade",
            "Tailwind CSS",
            "Alpine.js",
            "Vite",
            "SQL"
        ],
        "previewImage": "assets/projects/focusflow-dashboard.png",
        "visualLabel": "FLOW",
        "github": "https://github.com/sourav7-1/focusflow",
        "liveDemo": "",
        "updatedAt": "2026-07-20T14:02:15Z",
        "source": "github"
    },
    {
        "id": "food-safety-system",
        "title": "Food Safety System",
        "repositoryName": "Food-Safety-System",
        "categories": [
            "Web",
            "Database",
            "Python"
        ],
        "status": "Academic Prototype",
        "featured": true,
        "shortDescription": "A Flask and MySQL starter for structured street-food inspection, vendor, complaint and risk-analysis data.",
        "fullDescription": "The repository currently contains a Flask application starter and a detailed normalized MySQL design for roles, users, vendors, inspectors, areas, stalls, food items, inspections, criterion scores, complaints, reviews and corrective actions. The schema is substantial, while most application modules remain starter placeholders.",
        "problem": "Street-food safety records need a consistent relational structure for inspections, complaints, scoring and follow-up actions.",
        "solution": "The academic prototype defines a normalized database and a Flask foundation for future inspection and risk-analysis workflows.",
        "features": [
            "Fifteen-table normalized MySQL schema",
            "Role, vendor, inspector, area and stall relationships",
            "Inspection criteria and score records",
            "Complaint, review and corrective-action data design",
            "Environment-based Flask and MySQL configuration",
            "Starter Jinja interface"
        ],
        "technologies": [
            "Python",
            "Flask",
            "Flask-SQLAlchemy",
            "MySQL",
            "PyMySQL",
            "Jinja2",
            "HTML",
            "CSS"
        ],
        "previewImage": "",
        "visualLabel": "SAFE",
        "github": "https://github.com/sourav7-1/Food-Safety-System",
        "liveDemo": "",
        "updatedAt": "2026-07-12T17:30:18Z",
        "source": "github"
    },
    {
        "id": "study-motivation",
        "title": "Study Motivation Phone Detector",
        "repositoryName": "Python-mini-project",
        "categories": [
            "AI",
            "Python",
            "Web"
        ],
        "status": "Prototype",
        "featured": true,
        "shortDescription": "A camera-based study aid that detects mobile-phone use and plays an alert in desktop or mobile-browser modes.",
        "fullDescription": "The verified repository provides a desktop OpenCV detector using YOLOv3-tiny and a phone-friendly browser mode using TensorFlow.js. It serves the mobile interface through Python's standard HTTP server and provides an installable web-app manifest.",
        "problem": "Mobile-phone distractions can interrupt focused study sessions.",
        "solution": "The prototype monitors a camera feed for a cell phone and triggers an audible reminder when one is detected.",
        "features": [
            "Desktop webcam detection with OpenCV DNN",
            "YOLOv3-tiny cell-phone recognition",
            "Browser-camera mobile mode with TensorFlow.js",
            "Audible alert and text-to-speech fallback",
            "Local-network mobile access",
            "Installable web-app manifest and service worker"
        ],
        "technologies": [
            "Python",
            "OpenCV",
            "YOLOv3-tiny",
            "TensorFlow.js",
            "JavaScript",
            "HTML",
            "CSS",
            "PWA"
        ],
        "previewImage": "",
        "visualLabel": "FOCUS",
        "github": "https://github.com/sourav7-1/Python-mini-project",
        "liveDemo": "",
        "updatedAt": "2026-06-10T11:01:39Z",
        "source": "github"
    },
    {
        "id": "zen-bank-tracker",
        "title": "ZEN Bank Tracker",
        "repositoryName": "Bakirkhata",
        "categories": [
            "Web",
            "Database",
            "Python"
        ],
        "status": "Prototype",
        "featured": true,
        "shortDescription": "A Flask money tracker for friend balances, transactions, reminders and limited friend access.",
        "fullDescription": "The verified Flask application supports owner accounts, isolated friend lists, balance transactions, reminder links and a code-based friend portal. The current code initializes SQLite storage and includes migration logic for legacy JSON data.",
        "problem": "Informal borrowed and lent balances are difficult to track consistently across friends.",
        "solution": "The application records balance-changing transactions per friend and offers controlled read access through unique codes.",
        "features": [
            "Owner registration and login",
            "Per-user friend and transaction records",
            "Given, returned and borrowed balance tracking",
            "Code-based friend portal",
            "Reminder and balance-message links",
            "SQLite storage with legacy JSON migration"
        ],
        "technologies": [
            "Python",
            "Flask",
            "SQLite",
            "Jinja2",
            "HTML",
            "CSS"
        ],
        "previewImage": "",
        "visualLabel": "ZEN",
        "github": "https://github.com/sourav7-1/Bakirkhata",
        "liveDemo": "",
        "updatedAt": "2026-04-13T17:23:12Z",
        "source": "github"
    },
    {
        "id": "food-ordering-system",
        "title": "Food Ordering System",
        "repositoryName": "FoodOrderingSystem",
        "categories": [
            "Web"
        ],
        "status": "Academic Project",
        "featured": false,
        "shortDescription": "A Java console application that models customers, food items, order items and a basic ordering workflow.",
        "fullDescription": "The verified repository contains Java classes for burgers, pizzas, drinks, customers, orders and order items. It demonstrates object-oriented modeling, menu display, item selection, order totals and ordered-item output.",
        "problem": "A simple food-order workflow needs clear domain objects and predictable order calculations.",
        "solution": "The academic application separates menu items, customers and orders into focused Java classes.",
        "features": [
            "Burger, pizza and drink menu items",
            "Customer and order models",
            "Food selection and order placement",
            "Ordered-item summary",
            "Object-oriented class structure"
        ],
        "technologies": [
            "Java",
            "Object-Oriented Programming"
        ],
        "previewImage": "",
        "visualLabel": "JAVA",
        "github": "https://github.com/sourav7-1/FoodOrderingSystem",
        "liveDemo": "",
        "updatedAt": "2026-04-07T12:09:42Z",
        "source": "github"
    },
    {
        "id": "personal-portfolio",
        "title": "Personal Portfolio",
        "repositoryName": "Portfolio",
        "categories": [
            "Web"
        ],
        "status": "Completed",
        "featured": false,
        "shortDescription": "A responsive static portfolio with data-driven projects, accessible previews and lightweight 3D interactions.",
        "fullDescription": "The verified repository is this HTML, CSS, Vanilla JavaScript and JSON portfolio. It works without a build step and includes responsive navigation, local project-data fallback, search, filters, an accessible preview dialog and reduced-motion support.",
        "problem": "A recruiter-facing portfolio needs accurate project information without requiring a framework or backend.",
        "solution": "The site uses static technologies and verified JSON data while retaining direct-file compatibility.",
        "features": [
            "Responsive single-page layout",
            "Data-driven project cards",
            "Project search and multi-category filters",
            "Accessible preview dialog",
            "CSS fallback visuals for missing screenshots",
            "Reduced-motion and keyboard support"
        ],
        "technologies": [
            "HTML5",
            "CSS3",
            "JavaScript",
            "JSON"
        ],
        "previewImage": "",
        "visualLabel": "PORT",
        "github": "https://github.com/sourav7-1/Portfolio",
        "liveDemo": "https://portfolio-six-sage-au5s0ebxhw.vercel.app",
        "updatedAt": "2026-07-24T17:39:56Z",
        "source": "github"
    }
];

// =========================
// CERTIFICATE DATA
// =========================

// This matches assets/data/certificates.json for direct file:// use.
const fallbackCertificates = [
    {
        "id": "ai-innovation-hackathon-final-round-2026",
        "title": "Certificate of Participation — AI Innovation Hackathon 2026",
        "issuer": "Daffodil International University",
        "date": "25 July 2026",
        "category": "Competition",
        "description": "Selected for the Final Round of AI Innovation Hackathon 2026: From Learning to Impact as part of KORPA-LOGIC. The certificate recognizes innovation, creativity and dedication.",
        "credentialNumber": "",
        "grantDate": "25 July 2026",
        "expirationDate": "",
        "file": "assets/certificates/ai-innovation-hackathon-final-round-2026.png",
        "fileType": "image",
        "credentialLink": "",
        "featured": true
    },
    {
        "id": "diu-ai-project-competition-2026",
        "title": "Certificate of Participation — DIU AI Project Competition 2026",
        "issuer": "Daffodil International University",
        "date": "2026",
        "category": "Competition",
        "description": "Successfully participated in the DIU AI Project Competition 2026 and was selected for the Final Round. The certificate recognizes innovation, dedication and outstanding project performance.",
        "credentialNumber": "",
        "grantDate": "",
        "expirationDate": "",
        "file": "assets/certificates/diu-ai-project-competition-2026.png",
        "fileType": "image",
        "credentialLink": "",
        "featured": true
    },
    {
        "id": "ai-prompt-engineer-level-1",
        "title": "AI+ Prompt Engineer Level 1™",
        "issuer": "AI CERTs™",
        "date": "26 June 2025",
        "category": "Professional Certification",
        "description": "Successfully completed the requirements to be recognized as an AI+ Prompt Engineer Level 1™.",
        "credentialNumber": "576065c59096",
        "grantDate": "26 June 2025",
        "expirationDate": "25 June 2026",
        "file": "assets/certificates/ai-prompt-engineer-level-1.pdf",
        "fileType": "pdf",
        "credentialLink": "",
        "featured": true
    }
];


// This matches assets/data/achievements.json for direct file:// use.
const fallbackAchievements = [
    {
        "id": "ai-innovation-hackathon-final-round-2026",
        "date": "25 July 2026",
        "title": "Final Round Selection — AI Innovation Hackathon 2026",
        "organization": "Daffodil International University",
        "category": "Competition",
        "description": "Selected for the Final Round of AI Innovation Hackathon 2026: From Learning to Impact as part of KORPA-LOGIC for demonstrating innovation, creativity and dedication.",
        "proof": "assets/certificates/ai-innovation-hackathon-final-round-2026.png",
        "proofType": "image",
        "externalLink": "",
        "featured": true
    },
    {
        "id": "diu-ai-project-final-round-2026",
        "date": "2026",
        "title": "Final Round Selection — DIU AI Project Competition 2026",
        "organization": "Daffodil International University",
        "category": "Competition",
        "description": "Successfully participated in the DIU AI Project Competition 2026 and was selected for the Final Round for demonstrating innovation, dedication and strong project performance.",
        "proof": "assets/certificates/diu-ai-project-competition-2026.png",
        "proofType": "image",
        "externalLink": "",
        "featured": true
    },
    {
        "id": "ai-prompt-engineer-level-1-2025",
        "date": "26 June 2025",
        "title": "Earned AI+ Prompt Engineer Level 1™ Certification",
        "organization": "AI CERTs™",
        "category": "Certification",
        "description": "Successfully completed the requirements for the AI+ Prompt Engineer Level 1™ certification.",
        "proof": "assets/certificates/ai-prompt-engineer-level-1.pdf",
        "proofType": "pdf",
        "externalLink": "",
        "featured": true
    }
];


// =========================
// PROJECT GALLERY
// =========================

const projectGrid = document.getElementById("projectGrid");
const projectSearch = document.getElementById("projectSearch");
const projectEmpty = document.getElementById("projectEmpty");
const filterButtons = document.querySelectorAll(".filter-btn");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

let projects = fallbackProjects;
let visibleProjects = [...projects];
let activeFilter = "All";
let searchTerm = "";


function escapeHTML(value = "") {
    const helper = document.createElement("div");
    helper.textContent = value;
    return helper.innerHTML;
}


function projectCategories(project) {
    if (Array.isArray(project.categories)) {
        return project.categories;
    }

    /* Supports older data while the JSON schema is being upgraded. */
    return [
        project.category,
        ...(project.secondaryCategories || [])
    ].filter(Boolean);
}


function projectMatchesSearch(project) {
    const searchable = [
        project.title,
        project.repositoryName,
        project.shortDescription,
        project.fullDescription,
        project.problem,
        project.solution,
        project.status,
        ...projectCategories(project),
        ...(project.technologies || [])
    ].join(" ").toLowerCase();

    return searchable.includes(searchTerm);
}


function createProjectVisual(project, large = false) {
    const visual = document.createElement("div");
    visual.className = large ? "project-visual modal-project-visual" : "project-visual";
    visual.dataset.label =
        project.visualLabel ||
        projectCategories(project)[0] ||
        "Project";

    // Show a fallback visual when no screenshot is available.
    if (project.previewImage) {
        const image = document.createElement("img");
        image.src = project.previewImage;
        image.alt = `${project.title} project preview`;
        image.addEventListener("load", () => visual.classList.add("has-image"));
        image.addEventListener("error", () => image.remove());
        visual.appendChild(image);
    }

    const fallback = document.createElement("div");
    fallback.className = "project-visual-fallback";
    fallback.setAttribute("aria-hidden", "true");
    fallback.innerHTML = `<span>${escapeHTML(project.visualLabel || projectCategories(project)[0] || "Project")}</span><i></i><i></i><i></i>`;
    visual.appendChild(fallback);

    return visual;
}


function externalProjectLink(label, url) {
    if (!url || !isSafeExternalURL(url)) {
        return "";
    }

    return `<a class="project-action" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}


function isSafeExternalURL(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" ||
            url.protocol === "http:";
    }
    catch (error) {
        return false;
    }
}


function addProjectTilt(card) {
    if (
        !finePointer.matches ||
        reducedMotion.matches ||
        window.innerWidth < 769
    ) {
        return;
    }

    card.addEventListener("mousemove", event => {
        // Calculate pointer position for the 3D parallax effect.
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-8px)`;
        card.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
        // Reset the element when the pointer leaves.
        card.style.transform = "";
    });
}


function renderProjects() {
    if (!projectGrid) {
        return;
    }

    visibleProjects = projects.filter(project => {
        const matchesFilter = activeFilter === "All" || projectCategories(project).includes(activeFilter);
        return matchesFilter && projectMatchesSearch(project);
    });

    projectGrid.innerHTML = "";
    projectEmpty.hidden = visibleProjects.length !== 0;

    visibleProjects.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card reveal show";
        card.dataset.projectId = project.id;

        const visualWrap = document.createElement("button");
        visualWrap.className = "project-visual-button";
        visualWrap.type = "button";
        visualWrap.dataset.previewId = project.id;
        visualWrap.setAttribute("aria-label", `Preview ${project.title}`);
        visualWrap.appendChild(createProjectVisual(project));
        visualWrap.insertAdjacentHTML("beforeend", "<span class=\"project-visual-overlay\">Preview Project</span>");

        const content = document.createElement("div");
        content.className = "project-content";
        content.innerHTML = `
            ${project.featured ? "<span class=\"featured-badge\">Featured</span>" : ""}
            <div class="project-meta"><small>${escapeHTML(projectCategories(project).join(" / "))}</small><span>${escapeHTML(project.status)}</span></div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.shortDescription)}</p>
            <div class="tags">${(project.technologies || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
            <div class="project-actions">
                <button class="project-action primary" type="button" data-preview-id="${escapeHTML(project.id)}">Preview</button>
                <button class="project-action" type="button" data-preview-id="${escapeHTML(project.id)}">Details</button>
                ${externalProjectLink("GitHub", project.github)}
                ${externalProjectLink("Open Live Demo", project.liveDemo)}
            </div>`;

        card.append(visualWrap, content);
        projectGrid.appendChild(card);
        addProjectTilt(card);
    });
}


filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(item => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });
        renderProjects();
    });
});


if (projectSearch) {
    projectSearch.addEventListener("input", () => {
        searchTerm = projectSearch.value.trim().toLowerCase();
        renderProjects();
    });
}


async function loadProjects() {
    try {
        const response = await fetch("assets/data/projects.json");
        if (!response.ok) {
            throw new Error("Project data was not available.");
        }
        projects = await response.json();
    }
    catch (error) {
        // Opening index.html directly blocks fetch in some browsers, so use the matching fallback.
        projects = fallbackProjects;
    }

    renderProjects();
}


// =========================
// PROJECT PREVIEW SYSTEM
// =========================

const projectModal = document.getElementById("projectModal");
const projectDialog = projectModal?.querySelector(".project-dialog");
const modalClose = document.getElementById("modalClose");
const modalVisual = document.getElementById("modalVisual");
const modalTitle = document.getElementById("modalTitle");
const modalBrowserTitle = document.getElementById("modalBrowserTitle");
const modalCategory = document.getElementById("modalCategory");
const modalStatus = document.getElementById("modalStatus");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const modalTags = document.getElementById("modalTags");
const modalActions = document.getElementById("modalActions");
const previousProject = document.getElementById("previousProject");
const nextProject = document.getElementById("nextProject");

let currentProjectIndex = 0;
let previewTrigger = null;


function updateModal(project) {
    modalTitle.textContent = project.title;
    modalBrowserTitle.textContent = project.title;
    modalCategory.textContent = projectCategories(project).join(" / ");
    modalStatus.textContent = project.status;
    modalDescription.textContent = project.fullDescription || project.shortDescription;
    modalFeatures.innerHTML = (project.features || []).map(feature => `<li>${escapeHTML(feature)}</li>`).join("");
    modalTags.innerHTML = (project.technologies || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
    modalActions.innerHTML = `${externalProjectLink("GitHub", project.github)}${externalProjectLink("Live Demo", project.liveDemo)}`;
    modalVisual.innerHTML = "";
    modalVisual.appendChild(createProjectVisual(project, true));
}


function openProjectPreview(projectId, trigger) {
    // Find the selected project using its unique ID.
    const index = visibleProjects.findIndex(project => project.id === projectId);
    if (index < 0 || !projectModal) {
        return;
    }

    currentProjectIndex = index;
    previewTrigger = trigger;
    updateModal(visibleProjects[currentProjectIndex]);
    projectModal.hidden = false;
    document.body.classList.add("modal-open");
    modalClose.focus();
}


function closeProjectPreview() {
    if (!projectModal || projectModal.hidden) {
        return;
    }

    projectModal.hidden = true;
    document.body.classList.remove("modal-open");

    // Restore focus when the preview closes.
    previewTrigger?.focus();
}


function moveProject(direction) {
    // Move to the previous or next project preview.
    if (visibleProjects.length === 0) {
        return;
    }

    currentProjectIndex = (currentProjectIndex + direction + visibleProjects.length) % visibleProjects.length;
    updateModal(visibleProjects[currentProjectIndex]);
}


projectGrid?.addEventListener("click", event => {
    const trigger = event.target.closest("[data-preview-id]");
    if (trigger) {
        openProjectPreview(trigger.dataset.previewId, trigger);
    }
});


modalClose?.addEventListener("click", closeProjectPreview);
projectModal?.querySelector("[data-modal-close]")?.addEventListener("click", closeProjectPreview);
previousProject?.addEventListener("click", () => moveProject(-1));
nextProject?.addEventListener("click", () => moveProject(1));


document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        navMenu?.classList.contains("show")
    ) {
        navMenu.classList.remove("show");
        menuBtn?.setAttribute("aria-expanded", "false");
        menuBtn?.focus();
    }

    if (!projectModal || projectModal.hidden) {
        return;
    }

    if (event.key === "Escape") {
        closeProjectPreview();
        return;
    }

    // Trap keyboard focus inside the preview modal.
    if (event.key === "Tab") {
        const focusable = [...projectDialog.querySelectorAll("button, a[href], input, [tabindex]:not([tabindex='-1'])")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});


// =========================
// CERTIFICATE AND ACHIEVEMENT SYSTEM
// =========================

const certificateGrid = document.getElementById("certificateGrid");
const achievementTimeline = document.getElementById("achievementTimeline");
const certificateModal = document.getElementById("certificateModal");
const certificateDialog = certificateModal?.querySelector(".certificate-dialog");
const certificateModalClose = document.getElementById("certificateModalClose");
const certificateModalImage = document.getElementById("certificateModalImage");
const certificateModalFallback = document.getElementById("certificateModalFallback");
const certificateModalCategory = document.getElementById("certificateModalCategory");
const certificateModalTitle = document.getElementById("certificateModalTitle");
const certificateModalIssuer = document.getElementById("certificateModalIssuer");
const certificateModalDate = document.getElementById("certificateModalDate");
const certificateModalNavigation = document.getElementById("certificateModalNavigation");
const previousCertificate = document.getElementById("previousCertificate");
const nextCertificate = document.getElementById("nextCertificate");

let certificates = fallbackCertificates;
let achievements = fallbackAchievements;
let imageCertificates = [];
let currentCertificateIndex = 0;
let certificatePreviewTrigger = null;


function uniqueById(items) {
    const seen = new Set();

    return items.filter(item => {
        if (!item?.id || seen.has(item.id)) {
            return false;
        }

        seen.add(item.id);
        return true;
    });
}


function isSafeCertificatePath(value) {
    return typeof value === "string" &&
        /^assets\/certificates\/[a-z0-9._-]+\.(png|jpg|jpeg|pdf)$/i.test(value);
}


function createTextNodeElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    return element;
}


function parseCertificateDate(value) {
    const match = /^(\d{1,2}) ([A-Za-z]+) (\d{4})$/.exec(value || "");
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    if (!match) {
        return null;
    }

    const monthIndex = months.indexOf(match[2]);
    if (monthIndex < 0) {
        return null;
    }

    return new Date(
        Number(match[3]),
        monthIndex,
        Number(match[1]),
        23,
        59,
        59
    );
}


function certificateTiming(certificate) {
    if (!certificate.expirationDate) {
        return certificate.grantDate
            ? `Issued ${certificate.grantDate}`
            : certificate.date;
    }

    const expiration = parseCertificateDate(certificate.expirationDate);
    const status = expiration && new Date() > expiration
        ? `Expired on ${certificate.expirationDate}`
        : `Valid until ${certificate.expirationDate}`;

    return certificate.grantDate
        ? `Issued ${certificate.grantDate} · ${status}`
        : status;
}


function createCertificateFallback(label, isPdf = false) {
    const fallback = document.createElement("div");
    fallback.className = isPdf
        ? "certificate-pdf-placeholder"
        : "certificate-image-fallback";

    const badge = createTextNodeElement(
        "span",
        "certificate-file-badge",
        isPdf ? "PDF" : "CERT"
    );
    const title = createTextNodeElement(
        "strong",
        "",
        label
    );

    fallback.append(badge, title);
    return fallback;
}


function createCertificateVisual(certificate) {
    const visual = document.createElement("div");
    visual.className = "certificate-visual";

    if (
        certificate.fileType === "image" &&
        isSafeCertificatePath(certificate.file)
    ) {
        const image = document.createElement("img");
        image.src = certificate.file;
        image.alt = `${certificate.title} certificate`;
        image.loading = "lazy";

        const fallback = createCertificateFallback(
            certificate.title
        );
        fallback.hidden = true;

        image.addEventListener("load", () => {
            visual.classList.add("has-certificate-image");
        });

        image.addEventListener("error", () => {
            image.remove();
            fallback.hidden = false;
            visual.classList.add("certificate-file-missing");
        });

        visual.append(image, fallback);
        return visual;
    }

    // PDF certificate fallback visual.
    visual.append(
        createCertificateFallback(
            certificate.title,
            certificate.fileType === "pdf"
        )
    );
    return visual;
}


function createLocalCertificateLink(label, certificate, options = {}) {
    if (!isSafeCertificatePath(certificate.file)) {
        return null;
    }

    const link = document.createElement("a");
    link.className = options.primary
        ? "certificate-action primary"
        : "certificate-action";
    link.href = certificate.file;
    link.textContent = label;

    if (options.newTab) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    if (options.download) {
        link.download = "";
    }

    return link;
}


function addCertificateTilt(card) {
    if (
        !finePointer.matches ||
        reducedMotion.matches ||
        window.innerWidth < 769
    ) {
        return;
    }

    card.addEventListener("mousemove", event => {
        // Creates subtle depth around each certificate.
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
            `perspective(1100px) rotateX(${-y * 4}deg) ` +
            `rotateY(${x * 4}deg) translateY(-7px)`;
        card.style.setProperty(
            "--certificate-shine-x",
            `${(x + 0.5) * 100}%`
        );
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
}


function certificateViewControl(certificate, label = "View Certificate") {
    if (
        certificate.fileType === "image" &&
        isSafeCertificatePath(certificate.file)
    ) {
        const button = document.createElement("button");
        button.className = "certificate-action primary";
        button.type = "button";
        button.dataset.certificateId = certificate.id;
        button.textContent = label;
        return button;
    }

    // Open PDF certificates in a new browser tab.
    return createLocalCertificateLink(
        label,
        certificate,
        {
            primary: true,
            newTab: true
        }
    );
}


function renderCertificates() {
    if (!certificateGrid) {
        return;
    }

    certificateGrid.replaceChildren();
    imageCertificates = certificates.filter(
        certificate =>
            certificate.fileType === "image" &&
            isSafeCertificatePath(certificate.file)
    );

    certificates.forEach(certificate => {
        const card = document.createElement("article");
        card.className = "certificate-card reveal show";

        const visual = createCertificateVisual(certificate);
        const content = document.createElement("div");
        content.className = "certificate-content";

        const badgeRow = document.createElement("div");
        badgeRow.className = "certificate-badge-row";
        badgeRow.append(
            createTextNodeElement(
                "span",
                "certificate-category",
                certificate.category
            )
        );

        if (certificate.featured) {
            badgeRow.append(
                createTextNodeElement(
                    "span",
                    "certificate-featured",
                    "Featured"
                )
            );
        }

        const title = createTextNodeElement(
            "h3",
            "",
            certificate.title
        );
        const issuer = createTextNodeElement(
            "p",
            "certificate-issuer",
            certificate.issuer
        );
        const timing = createTextNodeElement(
            "p",
            "certificate-timing",
            certificateTiming(certificate)
        );
        const description = createTextNodeElement(
            "p",
            "certificate-description",
            certificate.description
        );

        content.append(
            badgeRow,
            title,
            issuer,
            timing
        );

        if (certificate.credentialNumber) {
            content.append(
                createTextNodeElement(
                    "p",
                    "certificate-number",
                    `Certification number: ${certificate.credentialNumber}`
                )
            );
        }

        content.append(description);

        const actions = document.createElement("div");
        actions.className = "certificate-actions";
        const viewControl = certificateViewControl(certificate);
        const downloadControl = createLocalCertificateLink(
            "Download",
            certificate,
            { download: true }
        );

        if (viewControl) {
            actions.append(viewControl);
        }
        if (downloadControl) {
            actions.append(downloadControl);
        }

        content.append(actions);
        card.append(visual, content);
        certificateGrid.append(card);
        addCertificateTilt(card);
    });
}


function matchingCertificateForAchievement(achievement) {
    return certificates.find(
        certificate => certificate.file === achievement.proof
    );
}


function renderAchievements() {
    if (!achievementTimeline) {
        return;
    }

    achievementTimeline.replaceChildren();

    achievements.forEach(achievement => {
        const item = document.createElement("article");
        item.className = "achievement-item reveal show";

        const marker = document.createElement("div");
        marker.className = "achievement-marker";
        marker.setAttribute("aria-hidden", "true");

        const card = document.createElement("div");
        card.className = "achievement-card";

        const top = document.createElement("div");
        top.className = "achievement-top";
        top.append(
            createTextNodeElement(
                "time",
                "achievement-date",
                achievement.date
            ),
            createTextNodeElement(
                "span",
                "certificate-category",
                achievement.category
            )
        );

        card.append(
            top,
            createTextNodeElement("h3", "", achievement.title),
            createTextNodeElement(
                "p",
                "achievement-organization",
                achievement.organization
            ),
            createTextNodeElement(
                "p",
                "achievement-description",
                achievement.description
            )
        );

        const certificate = matchingCertificateForAchievement(
            achievement
        );

        if (certificate) {
            const timing = certificateTiming(certificate);
            if (timing && certificate.expirationDate) {
                card.append(
                    createTextNodeElement(
                        "p",
                        "achievement-certificate-status",
                        timing
                    )
                );
            }

            const control = certificateViewControl(
                certificate,
                achievement.proofType === "image"
                    ? "View Proof"
                    : "View Certificate"
            );
            if (control) {
                card.append(control);
            }
        }

        item.append(marker, card);
        achievementTimeline.append(item);
    });
}


async function loadJsonWithFallback(path, fallback, label) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`${label} data was not available.`);
        }
        const data = await response.json();
        return Array.isArray(data)
            ? uniqueById(data)
            : fallback;
    }
    catch (error) {
        // Use fallback certificate data when fetch is unavailable.
        return fallback;
    }
}


async function loadCredentialData() {
    // Load certificate data from certificates.json.
    [certificates, achievements] = await Promise.all([
        loadJsonWithFallback(
            "assets/data/certificates.json",
            fallbackCertificates,
            "Certificate"
        ),
        loadJsonWithFallback(
            "assets/data/achievements.json",
            fallbackAchievements,
            "Achievement"
        )
    ]);

    renderCertificates();
    renderAchievements();
}


function updateCertificateModal(certificate) {
    certificateModalCategory.textContent = certificate.category;
    certificateModalTitle.textContent = certificate.title;
    certificateModalIssuer.textContent = certificate.issuer;
    certificateModalDate.textContent = certificateTiming(certificate);
    certificateModalFallback.hidden = true;
    certificateModalImage.hidden = false;
    certificateModalImage.src = certificate.file;
    certificateModalImage.alt = `${certificate.title} certificate`;

    certificateModalImage.onerror = () => {
        certificateModalImage.hidden = true;
        certificateModalFallback.hidden = false;
    };

    certificateModalNavigation.hidden =
        imageCertificates.length <= 1;
}


function openCertificatePreview(certificateId, trigger) {
    // Open image certificates inside the preview modal.
    const index = imageCertificates.findIndex(
        certificate => certificate.id === certificateId
    );

    if (index < 0 || !certificateModal) {
        return;
    }

    currentCertificateIndex = index;
    certificatePreviewTrigger = trigger;
    updateCertificateModal(
        imageCertificates[currentCertificateIndex]
    );
    certificateModal.hidden = false;
    document.body.classList.add("modal-open");
    certificateModalClose.focus();
}


function closeCertificatePreview() {
    if (!certificateModal || certificateModal.hidden) {
        return;
    }

    certificateModal.hidden = true;
    certificateModalImage.removeAttribute("src");
    document.body.classList.remove("modal-open");
    certificatePreviewTrigger?.focus();
}


function moveCertificate(direction) {
    if (imageCertificates.length <= 1) {
        return;
    }

    currentCertificateIndex =
        (
            currentCertificateIndex +
            direction +
            imageCertificates.length
        ) % imageCertificates.length;

    updateCertificateModal(
        imageCertificates[currentCertificateIndex]
    );
}


function handleCertificateTrigger(event) {
    const trigger = event.target.closest(
        "[data-certificate-id]"
    );

    if (trigger) {
        openCertificatePreview(
            trigger.dataset.certificateId,
            trigger
        );
    }
}


certificateGrid?.addEventListener(
    "click",
    handleCertificateTrigger
);
achievementTimeline?.addEventListener(
    "click",
    handleCertificateTrigger
);
certificateModalClose?.addEventListener(
    "click",
    closeCertificatePreview
);
certificateModal?.querySelector(
    "[data-certificate-modal-close]"
)?.addEventListener(
    "click",
    closeCertificatePreview
);
previousCertificate?.addEventListener(
    "click",
    () => moveCertificate(-1)
);
nextCertificate?.addEventListener(
    "click",
    () => moveCertificate(1)
);


document.addEventListener("keydown", event => {
    if (!certificateModal || certificateModal.hidden) {
        return;
    }

    if (event.key === "Escape") {
        closeCertificatePreview();
        return;
    }

    if (event.key === "Tab") {
        const focusable = [
            ...certificateDialog.querySelectorAll(
                "button:not([hidden]), a[href], [tabindex]:not([tabindex='-1'])"
            )
        ].filter(element => !element.closest("[hidden]"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
        else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {
            event.preventDefault();
            first.focus();
        }
    }
});


// =========================
// HERO 3D PARALLAX
// =========================

const heroVisual = document.querySelector(".hero-visual");
const visualCard = document.querySelector(".visual-card");

if (
    heroVisual &&
    visualCard &&
    finePointer.matches &&
    !reducedMotion.matches &&
    window.innerWidth >= 769
) {
    heroVisual.addEventListener("mousemove", event => {
        // Calculate pointer position for the 3D parallax effect.
        const rect = heroVisual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        visualCard.style.transform = `perspective(1200px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translate3d(0, -8px, 0)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
        // Reset the element when the pointer leaves.
        visualCard.style.transform = "";
    });
}


// Pause CSS animation work whenever the page is not visible.
document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle(
        "is-page-hidden",
        document.hidden
    );
});

// =========================
// PAGE CHROME AND CONTACT
// =========================

const siteHeader = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");
const copyEmailButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

let scrollFrame = 0;
function updatePageChrome() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    siteHeader?.classList.toggle("scrolled", window.scrollY > 18);
    if (scrollProgress) {
        scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    scrollFrame = 0;
}

window.addEventListener("scroll", () => {
    if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updatePageChrome);
    }
}, { passive: true });
updatePageChrome();

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1800);
}

copyEmailButton?.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email || siteData.profile?.email;
    if (!email) return;

    try {
        await navigator.clipboard.writeText(email);
    }
    catch (error) {
        const helper = document.createElement("textarea");
        helper.value = email;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        helper.remove();
    }

    showToast("Email copied");
});

document.addEventListener("click", event => {
    if (
        navMenu?.classList.contains("show") &&
        !event.target.closest(".navbar")
    ) {
        navMenu.classList.remove("show");
        menuBtn?.setAttribute("aria-expanded", "false");
    }
});

// =========================
// RESILIENT PUBLIC GITHUB DATA
// =========================

const githubRepoCount = document.getElementById("githubRepoCount");
const githubStarCount = document.getElementById("githubStarCount");
const githubStatus = document.getElementById("githubStatus");
const githubRepositoryList = document.getElementById("githubRepositoryList");
const githubCacheKey = "sourav-public-github-v1";
const githubCacheLifetime = 6 * 60 * 60 * 1000;

function renderGitHubData(repositories, sourceLabel) {
    if (!Array.isArray(repositories) || !repositories.length) return;

    const publicRepositories = repositories.filter(repository => !repository.private);
    const starCount = publicRepositories.reduce(
        (total, repository) => total + Number(repository.stargazers_count || 0),
        0
    );
    const preferred = [
        "satellite-project",
        "focusflow",
        "Food-Safety-System",
        "Python-mini-project",
        "Bakirkhata"
    ];
    const strongest = preferred
        .map(name => publicRepositories.find(repository => repository.name === name))
        .filter(Boolean)
        .slice(0, 3);

    if (githubRepoCount) githubRepoCount.textContent = String(publicRepositories.length);
    if (githubStarCount) githubStarCount.textContent = String(starCount);
    if (githubStatus) {
        githubStatus.textContent =
            `${publicRepositories.length} public repositories · ${sourceLabel}. ` +
            "The portfolio keeps verified local project data if GitHub is unavailable.";
    }

    if (githubRepositoryList && strongest.length) {
        githubRepositoryList.innerHTML = strongest.map(repository => {
            const pushed = repository.pushed_at
                ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(repository.pushed_at))
                : "Update date unavailable";
            const safeHref = isSafeExternalURL(repository.html_url)
                ? escapeHTML(repository.html_url)
                : "https://github.com/sourav7-1";
            return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">
                <span>${escapeHTML(repository.name)}</span>
                <small>${escapeHTML(repository.language || "Multi-language")} · updated ${escapeHTML(pushed)}</small>
            </a>`;
        }).join("");
    }
}

async function loadGitHubData() {
    try {
        const cached = JSON.parse(localStorage.getItem(githubCacheKey) || "null");
        if (cached?.savedAt && Date.now() - cached.savedAt < githubCacheLifetime) {
            renderGitHubData(cached.repositories, "cached public GitHub data");
            return;
        }
    }
    catch (error) {
        // Storage can be unavailable in privacy modes; the network fallback still works.
    }

    try {
        const response = await fetch(
            "https://api.github.com/users/sourav7-1/repos?per_page=100&sort=updated",
            { headers: { Accept: "application/vnd.github+json" } }
        );

        if (!response.ok) {
            throw new Error(response.status === 403
                ? "GitHub API rate limit reached."
                : "GitHub public data unavailable.");
        }

        const repositories = await response.json();
        renderGitHubData(repositories, "current GitHub API data");
        try {
            localStorage.setItem(
                githubCacheKey,
                JSON.stringify({ savedAt: Date.now(), repositories })
            );
        }
        catch (error) {
            // A cache failure does not affect the displayed public data.
        }
    }
    catch (error) {
        if (githubStatus) {
            const fallback = siteData.githubFallback || {};
            githubStatus.textContent =
                `Live GitHub data is temporarily unavailable. Showing the verified local selection ` +
                `from ${fallback.verifiedOn || "the latest audit"}.`;
        }
    }
}

// =========================
// LIGHTWEIGHT HERO SYSTEM VISUAL
// =========================

const systemCanvas = document.getElementById("systemCanvas");

function startSystemVisual() {
    if (!systemCanvas) return;
    const context = systemCanvas.getContext("2d");
    if (!context) return;

    const nodeCount = 16;
    const nodes = Array.from({ length: nodeCount }, (_, index) => ({
        phase: (Math.PI * 2 * index) / nodeCount,
        ring: index % 3,
        speed: 0.00008 + (index % 4) * 0.000015
    }));
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    function resize() {
        const rect = systemCanvas.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        width = rect.width;
        height = rect.height;
        systemCanvas.width = Math.round(width * ratio);
        systemCanvas.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw(time = 0) {
        context.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;
        const motion = reducedMotion.matches ? 0 : time;
        const points = nodes.map(node => {
            const radiusX = width * (0.22 + node.ring * 0.09);
            const radiusY = height * (0.16 + node.ring * 0.075);
            const angle = node.phase + motion * node.speed;
            return {
                x: centerX + Math.cos(angle) * radiusX,
                y: centerY + Math.sin(angle) * radiusY
            };
        });

        context.lineWidth = 1;
        points.forEach((point, index) => {
            const next = points[(index + 3) % points.length];
            context.strokeStyle = "rgba(199,243,107,.12)";
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(next.x, next.y);
            context.stroke();
        });

        points.forEach((point, index) => {
            context.fillStyle = index % 4 === 0 ? "#c7f36b" : "rgba(243,240,231,.55)";
            context.beginPath();
            context.arc(point.x, point.y, index % 4 === 0 ? 3.2 : 2, 0, Math.PI * 2);
            context.fill();
        });

        if (!reducedMotion.matches && !document.hidden) {
            animationFrame = requestAnimationFrame(draw);
        }
    }

    resize();
    draw();
    const observer = new ResizeObserver(() => {
        resize();
        if (reducedMotion.matches) draw();
    });
    observer.observe(systemCanvas);

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && !reducedMotion.matches) {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(draw);
        }
    });
}

startSystemVisual();
loadGitHubData();

loadProjects();
loadCredentialData();
