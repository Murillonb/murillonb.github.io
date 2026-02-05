// smooth scrolling
export default function scrollSmooth() {
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth" }); // scroll to section

    links.forEach((l) => l.classList.remove("active")); // remove class from all links
    e.target.classList.add("active"); // add class to the clicked link
  }

  const links = document.querySelectorAll("[data-link-interno]");

  if (links.length) {
    links.forEach((l) => {
      l.addEventListener("click", scrollToSection);
    });
  }
}
