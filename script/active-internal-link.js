// activating internal link
export default function activeInternalLink() {
  const sections = document.querySelectorAll("[data-section]");
  const links = document.querySelectorAll(`[data-link-interno]`);
  const content = document.querySelector("[data-content]");

  if (!sections.length || !links.length || !content) return;

  let currentActiveId = null;

  function onScroll() {
    let activeSectionId = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        activeSectionId = section.id;
      }
    });

    if (activeSectionId && activeSectionId !== currentActiveId) {
      currentActiveId = activeSectionId;

      links.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `[data-link-interno="${activeSectionId}"]`,
      );

      if (activeLink) activeLink.classList.add("active");
    }
  }

  content.addEventListener("scroll", onScroll);
}
