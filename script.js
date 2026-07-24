/* =========================
   CINEMATIC INTRO SCREEN
========================= */

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

    }, 1200);

}


/* Auto enter after cinematic intro */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            hideIntro,
            6200
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

    "CSE Student",

    "Programmer",

    "Aspiring Software Developer",

    "AI Enthusiast",

    "Problem Solver"

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
        "updatedAt": "2026-07-23T21:30:50Z",
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
        "liveDemo": "",
        "updatedAt": "2026-07-20T14:49:15Z",
        "source": "github"
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


loadProjects();
