// Main JavaScript file for friendly-octo-sniffle
// Portfolio implementation based on Figma design

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio carregado com sucesso!");

  // Project card hover effects
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

  // Tag click functionality (for future filtering)
  const tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      console.log(`Tag clicada: ${this.textContent}`);
      // Future: Implement project filtering by technology
    });
  });

  // Social button interactions
  const socialButtons = document.querySelectorAll(".social-button");

  socialButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const buttonText = this.querySelector(".social-button__text").textContent;
      console.log(`${buttonText} button clicked`);

      // Here you could implement actual links:
      // - LinkedIn: https://linkedin.com/in/your-profile
      // - Instagram: https://instagram.com/your-username
      // - GitHub: https://github.com/your-username
      // - E-mail: mailto:your-email@domain.com
    });
  });

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
