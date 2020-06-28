var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".arrow"
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    }
  }
});

var mBtn = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
mBtn.addEventListener('click', function () {
  mBtn.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});