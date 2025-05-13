import Swiper from 'swiper';
import 'swiper/css/bundle';

let benefitsSwiper;

benefitsSwiper = new Swiper('.benefits-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      loop: false,
      initialSlide: 0,
      slidesPerView: 4,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.benefits-swiper-container')
        .classList.add('show');
    },
  },
});
