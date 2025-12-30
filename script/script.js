// Garante que o código só rode após o HTML carregar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const id = this.getAttribute("href");

      // Verifica se o link não é apenas "#" e se o alvo existe
      if (id !== "#" && id.startsWith("#")) {
        const target = document.querySelector(id);

        if (target) {
          e.preventDefault(); // Só cancela o clique se o alvo existir
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Remove a classe de todos os links
          links.forEach((l) => l.classList.remove("ativo"));

          // Adiciona a classe ao link clicado
          this.classList.add("ativo");
          // -------------------------------------------
        }
      }
    });
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('a[href^="#"]');

const observerOptions = {
  // Adjust threshold: 0.3 means the section must take up 30% of the viewport
  threshold: 0.3,
  // RootMargin can help trigger the change earlier or later
  // rootMargin: "-30% 0px -30% 0px"??????????????????????????????????????
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      // Update all links
      navLinks.forEach((link) => {
        // We check if the href matches the section id (e.g., "#about" === "#about")
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("ativo", isActive);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));
