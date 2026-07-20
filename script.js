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

            navMenu.classList.toggle("show");

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
        id: "satellite-monitoring",
        title: "Automated Satellite and AI-Based Area Monitoring System",
        category: "AI",
        secondaryCategories: ["Python"],
        status: "Concept Project",
        featured: true,
        shortDescription: "A map-led workflow that sends a selected region to an ML process for environmental and tree monitoring with satellite data.",
        fullDescription: "Users select a region of interest on a map and the selected area is prepared for an ML workflow focused on environmental and tree monitoring with satellite data.",
        features: ["Map-based region selection", "Satellite-data workflow", "Environmental and tree-monitoring focus"],
        technologies: ["Python", "Machine Learning", "Remote Sensing", "Satellite Data"],
        previewImage: "assets/projects/satellite-monitoring.jpg",
        visualLabel: "AI",
        github: "",
        liveDemo: ""
    },
    {
        id: "food-safety-system",
        title: "Food Safety System",
        category: "Web",
        secondaryCategories: ["Database", "Python"],
        status: "In Development",
        featured: true,
        shortDescription: "A Flask and MySQL starter platform for street-food inspections, vendor records, safety observations and risk-analysis workflows.",
        fullDescription: "The verified repository contains a Smart Street Food Safety Inspection and Risk Analysis System starter built around structured inspection data, vendor and stall records, complaints, reviews and corrective-action tracking.",
        features: ["Inspection and scored-criteria data design", "Vendor, stall and area records", "Complaints, reviews and corrective-action schema", "Flask application factory with MySQL configuration"],
        technologies: ["Python", "Flask", "SQLAlchemy", "MySQL", "HTML", "CSS"],
        previewImage: "assets/projects/food-safety-system.jpg",
        visualLabel: "SAFE",
        github: "https://github.com/sourav7-1/Food-Safety-System",
        liveDemo: ""
    },
    {
        id: "focusflow",
        title: "FocusFlow",
        category: "Web",
        secondaryCategories: ["Database"],
        status: "In Development",
        featured: true,
        shortDescription: "A Laravel productivity application for study sessions, tasks, goals, profiles and authenticated dashboards.",
        fullDescription: "The verified Laravel repository includes authentication, email verification, Google OAuth, task completion, study-session timing, goal management and user profile workflows.",
        features: ["Task and goal management", "Study-session start and stop workflow", "Authentication and email verification", "Google OAuth and profile management"],
        technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Alpine.js", "Vite"],
        previewImage: "assets/projects/focusflow.jpg",
        visualLabel: "FLOW",
        github: "https://github.com/sourav7-1/focusflow",
        liveDemo: ""
    },
    {
        id: "food-ordering-system",
        title: "Food Ordering System",
        category: "Java",
        secondaryCategories: [],
        status: "Academic Project",
        featured: true,
        shortDescription: "A Java application for viewing food items, selecting meals, placing orders and displaying ordered items.",
        fullDescription: "The verified repository is a Java project that practices object-oriented food-item, customer, order and order-item models through a simple ordering workflow.",
        features: ["Food menu display", "Meal selection and order placement", "Ordered-item summary", "Object-oriented Java class structure"],
        technologies: ["Java", "Git", "GitHub"],
        previewImage: "assets/projects/food-ordering-system.jpg",
        visualLabel: "JAVA",
        github: "https://github.com/sourav7-1/FoodOrderingSystem",
        liveDemo: ""
    },
    {
        id: "digital-combination-lock",
        title: "Digital Combination Lock",
        category: "Hardware",
        secondaryCategories: [],
        status: "Details Pending",
        featured: false,
        shortDescription: "A portfolio project entry for a digital combination lock; implementation details are awaiting verification.",
        fullDescription: "Only the project title was supplied. Technical details and completion status will be added after source files or documentation are available.",
        features: ["Verified project details pending"],
        technologies: [],
        previewImage: "assets/projects/digital-combination-lock.jpg",
        visualLabel: "LOCK",
        github: "",
        liveDemo: ""
    },
    {
        id: "student360-ai",
        title: "Student360 AI",
        category: "AI",
        secondaryCategories: [],
        status: "Details Pending",
        featured: false,
        shortDescription: "A portfolio project entry named Student360 AI; implementation details are awaiting verification.",
        fullDescription: "Only the project title was supplied. Technical details and completion status will be added after source files or documentation are available.",
        features: ["Verified project details pending"],
        technologies: [],
        previewImage: "assets/projects/student360-ai.jpg",
        visualLabel: "360",
        github: "",
        liveDemo: ""
    },
    {
        id: "zen-bank-tracker",
        title: "ZEN Bank Tracker",
        category: "Web",
        secondaryCategories: ["Database"],
        status: "Details Pending",
        featured: false,
        shortDescription: "A portfolio project entry named ZEN Bank Tracker; implementation details are awaiting verification.",
        fullDescription: "Only the project title was supplied. Technical details and completion status will be added after source files or documentation are available.",
        features: ["Verified project details pending"],
        technologies: [],
        previewImage: "assets/projects/zen-bank-tracker.jpg",
        visualLabel: "ZEN",
        github: "",
        liveDemo: ""
    },
    {
        id: "human-following-robot",
        title: "Human Following Robot",
        category: "Hardware",
        secondaryCategories: [],
        status: "Details Pending",
        featured: false,
        shortDescription: "A portfolio project entry for a human-following robot; implementation details are awaiting verification.",
        fullDescription: "Only the project title was supplied. Technical details and completion status will be added after source files or documentation are available.",
        features: ["Verified project details pending"],
        technologies: [],
        previewImage: "assets/projects/human-following-robot.jpg",
        visualLabel: "BOT",
        github: "",
        liveDemo: ""
    },
    {
        id: "diu-hall-portal",
        title: "DIU Hall Portal Management System",
        category: "Web",
        secondaryCategories: ["Database"],
        status: "Details Pending",
        featured: false,
        shortDescription: "A portfolio project entry for a DIU hall portal management system; implementation details are awaiting verification.",
        fullDescription: "Only the project title was supplied. Technical details and completion status will be added after source files or documentation are available.",
        features: ["Verified project details pending"],
        technologies: [],
        previewImage: "assets/projects/diu-hall-portal.jpg",
        visualLabel: "DIU",
        github: "",
        liveDemo: ""
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
    return [project.category, ...(project.secondaryCategories || [])];
}


function projectMatchesSearch(project) {
    const searchable = [
        project.title,
        project.shortDescription,
        project.fullDescription,
        project.status,
        ...projectCategories(project),
        ...(project.technologies || [])
    ].join(" ").toLowerCase();

    return searchable.includes(searchTerm);
}


function createProjectVisual(project, large = false) {
    const visual = document.createElement("div");
    visual.className = large ? "project-visual modal-project-visual" : "project-visual";
    visual.dataset.label = project.visualLabel || project.category;

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
    fallback.innerHTML = `<span>${escapeHTML(project.visualLabel || project.category)}</span><i></i><i></i><i></i>`;
    visual.appendChild(fallback);

    return visual;
}


function externalProjectLink(label, url) {
    if (!url) {
        return "";
    }

    return `<a class="project-action" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}


function addProjectTilt(card) {
    if (!finePointer.matches || reducedMotion.matches) {
        return;
    }

    card.addEventListener("mousemove", event => {
        // Calculate pointer position for the 3D parallax effect.
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-8px)`;
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
            <div class="project-meta"><small>${escapeHTML(projectCategories(project).join(" / "))}</small><span>${escapeHTML(project.status)}</span></div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.shortDescription)}</p>
            <div class="tags">${(project.technologies || []).map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
            <div class="project-actions">
                <button class="project-action primary" type="button" data-preview-id="${escapeHTML(project.id)}">Preview</button>
                <button class="project-action" type="button" data-preview-id="${escapeHTML(project.id)}">Details</button>
                ${externalProjectLink("GitHub", project.github)}
                ${externalProjectLink("Live Demo", project.liveDemo)}
            </div>`;

        card.append(visualWrap, content);
        projectGrid.appendChild(card);
        addProjectTilt(card);
    });
}


filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(item => item.classList.toggle("active", item === button));
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

if (heroVisual && visualCard && finePointer.matches && !reducedMotion.matches) {
    heroVisual.addEventListener("mousemove", event => {
        // Calculate pointer position for the 3D parallax effect.
        const rect = heroVisual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        visualCard.style.transform = `perspective(1200px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translate3d(0, -8px, 0)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
        // Reset the element when the pointer leaves.
        visualCard.style.transform = "";
    });
}


loadProjects();
