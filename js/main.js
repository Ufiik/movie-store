document.addEventListener('DOMContentLoaded', function () {
  var navIcon = document.querySelector(".nav-icon"),
      nav = document.querySelector(".header-nav");

  navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon-active');

    nav.classList.toggle("nav-opened");
  });
});

(function (jQuery) {
  $(".owl-carousel").owlCarousel({
    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
    items: 1,
    nav: false,
    dots: true,
    dotsContainer: ".banner-dots",
    mouseDrag: false
  });

  var $moviesGrid = $(".movies-grid");

  $moviesGrid.imagesLoaded().progress(function () {
    $moviesGrid.masonry({
      itemSelector: ".movies-grid-item",
      columnWidth: ".movies-grid-item",
      gutter: 18
    });
  });
}(jQuery));
