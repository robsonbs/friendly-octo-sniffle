/*
=======================================================
 BEM METHODOLOGY PAGE - JavaScript Implementation
=======================================================
Este arquivo JavaScript demonstra como trabalhar 
com seletores BEM de forma consistente:
- Usar classes BEM específicas como seletores
- Manter consistência com a nomenclatura CSS
- Implementar funcionalidades usando a estrutura BEM
=======================================================
*/

// BEM Methodology Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  /*
  =======================================================
   BEM-TOC BLOCK - Smooth scrolling functionality
   Usando seletores BEM: .bem-toc__link
  =======================================================
  */
  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    const tocLinks = document.querySelectorAll(".bem-toc__link");

    tocLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Add highlight effect
          targetElement.style.backgroundColor = "rgba(57, 150, 219, 0.1)";
          setTimeout(() => {
            targetElement.style.backgroundColor = "";
          }, 2000);
        }
      });
    });
  }

  /*
  =======================================================
   SCROLL SPY - Active link highlighting
   Usando BEM modifier: .bem-toc__link--active
  =======================================================
  */
  // Highlight current section in TOC
  function initScrollSpy() {
    const sections = document.querySelectorAll(".bem-section[id]");
    const tocLinks = document.querySelectorAll(".bem-toc__link");

    function updateActiveLink() {
      const scrollPos = window.scrollY + 150;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          // Remove modifier from all links
          tocLinks.forEach((link) =>
            link.classList.remove("bem-toc__link--active")
          );

          // Add modifier to current link
          const correspondingLink = document.querySelector(
            `a[href="#${section.id}"]`
          );
          if (correspondingLink) {
            correspondingLink.classList.add("bem-toc__link--active");
          }
        }
      });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Initial call
  }

  /*
  =======================================================
   CODE COPY FUNCTIONALITY - Working with BEM elements
   Usando seletores: .bem-code-block, .bem-code
  =======================================================
  */
  // Copy code functionality
  function initCodeCopy() {
    const codeBlocks = document.querySelectorAll(".bem-code-block");

    codeBlocks.forEach((block) => {
      // Creating BEM-styled copy button
      const copyButton = document.createElement("button");
      copyButton.innerHTML = "📋 Copiar";
      copyButton.className = "bem-copy-btn"; // Following BEM naming
      copyButton.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        background: var(--color-blue);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 12px;
        cursor: pointer;
        font-family: var(--font-maven);
        transition: background-color 0.3s ease;
      `;

      // Make code block relative positioned
      block.style.position = "relative";
      block.appendChild(copyButton);

      copyButton.addEventListener("click", async function () {
        const code = block.querySelector(".bem-code"); // Using BEM selector
        if (code) {
          try {
            await navigator.clipboard.writeText(code.textContent);
            copyButton.innerHTML = "✅ Copiado!";
            copyButton.style.backgroundColor = "var(--color-green)";

            setTimeout(() => {
              copyButton.innerHTML = "📋 Copiar";
              copyButton.style.backgroundColor = "var(--color-blue)";
            }, 2000);
          } catch (err) {
            console.error("Erro ao copiar:", err);
            copyButton.innerHTML = "❌ Erro";
            setTimeout(() => {
              copyButton.innerHTML = "📋 Copiar";
            }, 2000);
          }
        }
      });

      copyButton.addEventListener("mouseenter", function () {
        if (this.innerHTML === "📋 Copiar") {
          this.style.backgroundColor = "#2980b9";
        }
      });

      copyButton.addEventListener("mouseleave", function () {
        if (this.innerHTML === "📋 Copiar") {
          this.style.backgroundColor = "var(--color-blue)";
        }
      });
    });
  }

  /*
  =======================================================
   PROGRESS INDICATOR - Following BEM naming convention
   Using BEM class: .bem-progress
  =======================================================
  */
  const progressBar = document.createElement("div");
  progressBar.className = "bem-progress";
  progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--color-blue), var(--color-purple));
      z-index: 9999;
      transition: width 0.3s ease;
    `;

  document.body.appendChild(progressBar);

  /*
  =======================================================
   PROGRESS INDICATOR - Following BEM naming convention
   Using BEM class: .bem-progress
  =======================================================
  */
  // Add progress indicator
  function initProgressIndicator() {
    const progressBar = document.createElement("div");
    progressBar.className = "bem-progress";
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--color-blue), var(--color-purple));
      z-index: 9999;
      transition: width 0.3s ease;
    `;

    document.body.appendChild(progressBar);

    function updateProgress() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      progressBar.style.width = scrolled + "%";
    }

    window.addEventListener("scroll", updateProgress);
  }

  /*
  =======================================================
   BACK TO TOP BUTTON - Using BEM class: .bem-back-to-top
  =======================================================
  */
  // Back to top button
  function initBackToTop() {
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerHTML = "↑";
    backToTopBtn.className = "bem-back-to-top";
    backToTopBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: var(--color-blue);
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

    document.body.appendChild(backToTopBtn);

    function toggleBackToTop() {
      if (window.scrollY > 300) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
      }
    }

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", toggleBackToTop);
  }

  /*
  =======================================================
   INITIALIZATION - Initialize all BEM functionality
  =======================================================
  */
  // Initialize all functionality
  initSmoothScrolling();
  initScrollSpy();
  initCodeCopy();
  initProgressIndicator();
  initBackToTop();

  // Add active link style to CSS using BEM modifier
  const style = document.createElement("style");
  style.textContent = `
    .bem-toc__link--active {
      background-color: var(--color-blue) !important;
      color: var(--color-white) !important;
      transform: translateX(8px) !important;
    }
  `;
  document.head.appendChild(style);

  // Console welcome message showcasing BEM classes
  console.log(`
    🎯 BEM Methodology Guide
    ========================
    Esta página demonstra a metodologia BEM CSS
    em ação. Confira o código fonte para ver 
    exemplos práticos de nomenclatura BEM!
    
    Principais classes utilizadas:
    - .bem-page
    - .bem-header
    - .bem-section
    - .bem-code-block
    - .bem-toc__link
    
    Happy coding! 🚀
  `);
});

/*
=======================================================
 KEYBOARD SHORTCUTS - Enhanced UX following BEM practices
=======================================================
*/
// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + K para focar na navegação (bem-toc__link)
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    const firstTocLink = document.querySelector(".bem-toc__link");
    if (firstTocLink) {
      firstTocLink.focus();
    }
  }

  // ESC para voltar ao topo
  if (e.key === "Escape") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
