document.addEventListener("DOMContentLoaded", () => {
  /* MOBILE MENU TOGGLE */
  const mobileMenuBtn = document.getElementById("mobileMenuIcon");
  const nav = document.querySelector("#nav");
  const navList = document.getElementById("nav-list");
  const btns = document.getElementById("btns");

  const toggleMenu = () => {
    mobileMenuBtn.classList.toggle("toggle-menu");
    nav.classList.toggle("hidden");
    navList.classList.toggle("open-menu");
    btns.classList.toggle("show-btns");

    mobileMenuBtn.classList.contains("toggle-menu") ? setDocumentOverFlow(true) : setDocumentOverFlow(false);
  };

  mobileMenuBtn.addEventListener("click", toggleMenu);

  window.addEventListener("resize", () => {
    if (navList.classList.contains("open-menu")) toggleMenu();
  });

  /* TRUSTED CLIENTS SCROLL ANIMATION */
  const trustedClientsSection = document.getElementById("trusted-clients");
  const scrollContent = document.getElementById("scroll-content");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    trustedClientsSection.setAttribute("data-animated", true);

    const scrollContentChildren = Array.from(scrollContent.children);

    scrollContentChildren.forEach((child) => {
      const duplicatedChild = child.cloneNode(true);

      duplicatedChild.setAttribute("aria-hidden", true);

      scrollContent.appendChild(duplicatedChild);
    });
  }

  // FUNCTIONS

  /**
   * Sets the overflow property of the document based on the provided boolean value.
   *
   * @param {boolean} isOpen - If true, disables scrolling by setting overflow to hidden. If false, restores scrolling by resetting overflow properties.
   */
  function setDocumentOverFlow(isOpen) {
    isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "");
  }
});
