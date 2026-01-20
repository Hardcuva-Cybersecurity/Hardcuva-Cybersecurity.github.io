/* ==================================================
   HARDCUVA-CYBERSECURITY
   Subtle UX Enhancements
   Author: Olóládé
================================================== */

/* ------------------------------
   MOBILE NAV TOGGLE
------------------------------ */
const menuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* Close menu when link is clicked (mobile UX) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ------------------------------
   SMOOTH SCROLL (fallback-safe)
------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ------------------------------
   SCROLL REVEAL (lightweight)
------------------------------ */
const revealItems = document.querySelectorAll(
  ".service-card, .stat-item, .process-step, .stack-item"
);

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      item.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ------------------------------
   HEADER ELEVATION ON SCROLL
------------------------------ */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ------------------------------
   ACCESSIBILITY: ESC CLOSE MENU
------------------------------ */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navLinks.classList.remove("active");
  }
});
