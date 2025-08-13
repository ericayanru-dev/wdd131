const mainNav = document.getElementById("main-nav");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});