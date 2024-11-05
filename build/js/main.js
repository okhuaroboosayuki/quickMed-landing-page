import { pricing } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  /* HIDE/SHOW HEADER */
  const header = document.getElementById("header");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    window.scrollY > lastScrollY ? header.classList.add("header-hidden") : header.classList.remove("header-hidden");
    lastScrollY = window.scrollY;
  });

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

  /* PRICING CARDS */
  const loadCard = async () => {
    const pricingCardsContainer = document.getElementById("price-cards-container");

    pricingCardsContainer.innerHTML = pricing
      .map(
        (price) => `<div class="w-full h-[564px] flex flex-col capitalize items-center p-8 gap-8 border rounded-[32px] cursor-pointer " id="pricing-card" data-key="${price.title}">
          <div class="flex-col self-start w-full flex-center !items-start gap-8">
            ${
              price.tag
                ? `<div class="flex justify-between w-full">
                  <h4 class="text-lg font-medium text-charcoal-purple">${price.title}</h4>

                  <span class="px-3 py-1 text-sm font-medium border rounded-full bg-soft-violet border-bright-violet">${price.tag}</span>
                </div>`
                : `<h4 class="text-lg font-medium text-charcoal-purple">${price.title}</h4>`
            }

            ${price.price.amount ? ` <h3 class="text-4xl font-medium lowercase text-charcoal-purple">${price.price.amount} / ${price.price.per}</h3>` : `<h3 class="text-4xl font-medium text-charcoal-purple capitalize">${price.price}</h3>`}

            <button class="w-full font-medium button bg-[${price.button.bgColor}]">${price.button.text}</button>
          </div>

          <ul class="flex flex-col items-start self-start gap-3">
              ${price.benefits
                .map(
                  (benefit) =>
                    `<li class="gap-3 flex-center" data-checked=${benefit.check}>
                    <img src=${benefit.image} alt="icon" />
                    <span>${benefit.name}</span>
                  </li>`
                )
                .join("")}
          </ul>
        </div>`
      )
      .join("");
  };

  loadCard();

  const pricingCards = document.querySelectorAll("#pricing-card");

  if (pricingCards.length > 1) {
    pricingCards[1].classList.add("active-card");
  }

  pricingCards.forEach((card) => {
    card.addEventListener("click", () => {
      pricingCards.forEach((card) => card.classList.remove("active-card"));

      card.classList.add("active-card");
    });
  });

  /* FAQ ACCORDION */
  const accordionTop = document.querySelectorAll("#accordion-top");

  accordionTop.forEach((top) => {
    top.addEventListener("click", () => {
      const isActive = top.parentElement.classList.contains("active-accordion");

      accordionTop.forEach((acc) => acc.parentElement.classList.remove("active-accordion"));

      if (!isActive) {
        top.parentElement.classList.toggle("active-accordion");
      }
    });
  });

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
