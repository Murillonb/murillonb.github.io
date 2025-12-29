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
