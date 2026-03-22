// ===============================
// HAMBURGER MENU TOGGLE
// ===============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle icon (bars ↔ X)
    const icon = hamburger.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


// ===============================
// TYPING EFFECT (CINEMATIC TEXT)
// ===============================

const typingText = [
    "cinematic stories",
    "visual emotions",
    "memories that last",
    "real experiences"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const target = document.getElementById("typing");

    if (!target) return;

    currentText = typingText[index];

    if (isDeleting) {
        target.textContent = currentText.substring(0, charIndex--);
    } else {
        target.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % typingText.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".projects, .skills, .services, .about, .contact"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));


// ===============================
// SMOOTH SCROLL FIX (optional enhancement)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
