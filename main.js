const menuButton = document.querySelector(".navbar-menu-btn");

const navbarLinks = document.querySelector(".navbar-links");

menuButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("mobile-menu");
});
