const initApp = () => {
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
};

// FUNCTIONS

/**
 * Sets the overflow property of the document based on the provided boolean value.
 *
 * @param {boolean} isOpen - If true, disables scrolling by setting overflow to hidden. If false, restores scrolling by resetting overflow properties.
 */
function setDocumentOverFlow(isOpen) {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", initApp);
