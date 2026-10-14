(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  const desktopQuery = window.matchMedia("(min-width: 1200px)");
  desktopQuery.addEventListener("change", closeMenu);

  const productPrice = window.SPINEFORM_CONFIG?.price?.trim() || "À definir";
  document.querySelectorAll("[data-price]").forEach((element) => {
    element.textContent = productPrice;
  });

  const checkoutLinks = document.querySelectorAll("[data-checkout]");
  const checkoutStatus = document.querySelector("#checkout-status");
  const configuredUrl = window.SPINEFORM_CONFIG?.checkoutUrl?.trim();
  let checkoutUrl;

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl);
      if (url.protocol === "https:" && !url.username && !url.password) checkoutUrl = url.href;
    } catch {
      // Keep purchases unavailable until a valid public checkout URL is supplied.
    }
  }

  checkoutLinks.forEach((link) => {
    if (checkoutUrl) {
      link.href = checkoutUrl;
      link.removeAttribute("aria-disabled");
    } else {
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  if (checkoutUrl) checkoutStatus.textContent = "Você será direcionado ao checkout para concluir a compra.";

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  document.documentElement.classList.add("js-ready");
})();
