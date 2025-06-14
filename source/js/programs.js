import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Scrollbar],
  loop: true,
  direction: 'horizontal',
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween:30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    }
  },

  scrollbar: {
    el: '.programs__swiper-scrollbar',
    dragClass: 'scrollbar__drag',
    draggable: true,
  },
});

