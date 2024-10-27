const initApp = () => {
  const mobileMenuBtn = document.getElementById("mobileMenuIcon");

  const toggleMenu = () => {
    mobileMenuBtn.classList.toggle("toggle-menu");
  };

  mobileMenuBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
