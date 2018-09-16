var burger = document.querySelector(".menu-button");
var menu = document.querySelector(".nav-container");

menu.classList.add("nav-container--close");
burger.classList.add("menu-button--close");

burger.addEventListener ("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("nav-container--close");
  burger.classList.toggle("menu-button--close");
});
