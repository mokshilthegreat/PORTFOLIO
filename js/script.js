/* =========================================================
   MOKSHIL SHAH PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR SHADOW
========================================================= */

const navbar =
    document.getElementById("mainNavbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =========================================================
   MOBILE NAVBAR CLOSE
========================================================= */

const navItems =
    document.querySelectorAll(
        "#navbarContent .nav-link"
    );


const navbarCollapse =
    document.getElementById(
        "navbarContent"
    );


navItems.forEach((item) => {

    item.addEventListener(
        "click",
        () => {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains(
                    "show"
                )
            ) {

                const bsCollapse =
                    bootstrap.Collapse
                        .getInstance(
                            navbarCollapse
                        );


                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        }
    );

});



/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =
    document.getElementById(
        "typingText"
    );


const words = [

    "Full Stack Developer",

    "Frontend Developer",

    "React Developer",

    "Creative Designer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);



/* =========================================================
   PROJECT CARD TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth < 992
            ) {

                return;

            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                30;


            const rotateY =
                (centerX - x) /
                30;


            card.style.transform =
                `translateY(-12px)
                 perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById(
        "currentYear"
    );


if (yearElement) {

    yearElement.textContent =
        new Date()
            .getFullYear();

}



/* =========================================================
   IMAGE ERROR HANDLER
========================================================= */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.display =
                "none";

            image.parentElement
                .classList.add(
                    "image-missing"
                );

        }
    );

});



/* =========================================================
   SMOOTH PARALLAX HERO
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            !heroVisual ||
            window.innerWidth < 992
        ) {

            return;

        }


        const scrollValue =
            window.scrollY;


        if (scrollValue < 800) {

            heroVisual.style.transform =
                `translateY(${scrollValue * 0.08}px)`;

        }

    }
);



/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement(
                    "span"
                );


            ripple.classList.add(
                "button-ripple"
            );


            const rect =
                button.getBoundingClientRect();


            ripple.style.left =
                event.clientX -
                rect.left +
                "px";


            ripple.style.top =
                event.clientY -
                rect.top +
                "px";


            button.appendChild(
                ripple
            );


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});



/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Mokshil Shah Portfolio 🚀 ",
    "background:#0d6efd;color:white;padding:10px;font-size:14px;font-weight:bold;"
);

console.log(
    "Full Stack Developer × Creative Designer"
);