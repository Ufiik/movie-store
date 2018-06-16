document.addEventListener('DOMContentLoaded', function () {
  var navIcon = document.querySelector(".nav-icon"),
      nav = document.querySelector(".header-nav");

  navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon-active');

    nav.classList.toggle("nav-opened");
  });
});
