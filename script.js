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


/* =========================
   3D PROJECT HOVER
========================= */

const cards =
    document.querySelectorAll(
        ".project-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const mouseX =
                event.clientX
                - rect.left;


            const mouseY =
                event.clientY
                - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                (
                    mouseX - centerX
                )
                / centerX
                * 4;


            const rotateX =
                -(
                    mouseY - centerY
                )
                / centerY
                * 4;


            card.style.transform =

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});
