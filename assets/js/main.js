/*
=======================================================
 JAVASCRIPT BEM IMPLEMENTATION
=======================================================
Este arquivo JavaScript segue as melhores práticas
para trabalhar com nomenclatura BEM:
- Usar seletores de classe específicos do BEM
- Documentar a estrutura de blocos e elementos
- Manter consistência com a metodologia CSS
=======================================================
*/

// Main JavaScript file for friendly-octo-sniffle
// Portfolio implementation based on Figma design

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio carregado com sucesso!");

  /*
  =======================================================
   PROJECT-CARD BLOCK - JavaScript Interactions
  =======================================================
  */
  // Project card hover effects using BEM selectors
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  /*
  =======================================================
   INTRO__TAG and PROJECT-CARD__TAG ELEMENTS - Click Functionality
  =======================================================
  */
  // Tag click functionality using BEM selectors for both intro and project-card tags
  const introTags = document.querySelectorAll(".intro__tag");
  const projectCardTags = document.querySelectorAll(".project-card__tag");

  // Handle intro tags
  introTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      console.log(`Intro tag clicada: ${this.textContent}`);
      // Future: Implement project highlighting by technology
    });
  });

  // Handle project card tags
  projectCardTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      console.log(`Project tag clicada: ${this.textContent}`);
      // Future: Implement project filtering by technology
    });
  });

  /*
  =======================================================
   SOCIAL-BUTTON BLOCK - JavaScript Interactions
  =======================================================
  */
  // Social button interactions using BEM selectors
  const socialButtons = document.querySelectorAll(".social-button");

  socialButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Using BEM selector to access the text element
      const buttonText = this.querySelector(".social-button__text").textContent;
      console.log(`${buttonText} button clicked`);

      // Here you could implement actual links:
      // - LinkedIn: https://linkedin.com/in/your-profile
      // - Instagram: https://instagram.com/your-username
      // - GitHub: https://github.com/your-username
      // - E-mail: mailto:your-email@domain.com
    });
  });

  /*
  =======================================================
   UTILITY FUNCTIONS - Following BEM Methodology
  =======================================================
  */
  // Smooth scrolling for sections (if navigation is added)
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Export for potential use
  window.smoothScroll = smoothScroll;
});
