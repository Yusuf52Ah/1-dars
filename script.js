"use strict";

/* =========================================================
   MOBIPRO — 1-DARS
   JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     SMOOTH NAVIGATION
  ======================================================= */

  const navigationLinks = document.querySelectorAll(
    '.nav a[href^="#"]'
  );

  navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     IMAGE ERROR HANDLING
  ======================================================= */

  const images = document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener("error", () => {

      image.style.background =
        "linear-gradient(135deg, #ead8c6, #c9a27d)";

      image.style.objectFit = "contain";

      image.alt = "Rasm topilmadi";

    });

  });


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navLinks = document.querySelectorAll(
    '.nav a[href^="#"]'
  );

  const updateActiveNavigation = () => {

    let currentSection = "";

    const scrollPosition =
      window.scrollY + 160;

    sections.forEach((section) => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }

    });

    navLinks.forEach((link) => {

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }

    });

  };


  window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
  );

  updateActiveNavigation();


  /* =======================================================
     BUTTON FEEDBACK
  ======================================================= */

  const actionButtons = document.querySelectorAll(
    ".btn"
  );

  actionButtons.forEach((button) => {

    button.addEventListener("click", () => {

      button.style.transform =
        "translateY(-1px)";

      setTimeout(() => {

        button.style.transform = "";

      }, 180);

    });

  });


  /* =======================================================
     CONSOLE MESSAGE
  ======================================================= */

  console.log(
    "%cMOBIPRO — 1-DARS",
    `
      color: #7a4d2b;
      font-size: 20px;
      font-weight: 800;
    `
  );

  console.log(
    "Mobil fotografiya darsi ishga tushdi."
  );

});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});