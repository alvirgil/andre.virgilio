var swiper = new Swiper(".right .slide-depoimentos", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".s-portfolio .cases .carrossel", {
  slidesPerView: 3, // Remover as aspas para garantir que seja um número
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".cases .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 3, 
    },
    1440: {
      slidesPerView: 3, 
    },
    1280: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2.3,
    },
    600: {
      slidesPerView: 2, 
    },
    440: {
      slidesPerView: 1.3, 
    },
    375: {
      slidesPerView: 1,
  },
}
});

