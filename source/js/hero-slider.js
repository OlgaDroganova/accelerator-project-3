import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.hero-slider', {
  modules: [Pagination],
  loop: true,
  observeParents: true,
  slidesPerView: 1,
  pagination: {
    el: 'hero-paination',
    bulletElement: 'button',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--current',
    clickable: true,
  },
});
