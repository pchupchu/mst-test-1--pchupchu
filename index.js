function initMenuToggle() {

  const menuButton = document.querySelector(".header__menu");
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  function toggleMenu() {
    burger.classList.toggle("header__burger_active");
    nav.classList.toggle("navigation_active");
  }

  menuButton.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initMenuToggle);

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("header_active"); 
  } else {
    header.classList.remove("header_active"); 
  }
});