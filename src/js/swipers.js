import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// ======================== PROJECT SWIPER

export let params = {
  modules: [Navigation, Mousewheel, Keyboard],
  loop: false,
  direction: 'horizontal',
  mousewheel: true,
  keyboard: true,

  navigation: {
    nextEl: '.custom-swiper-btn-next',
    prevEl: '.custom-swiper-btn-prev',
  },
  on: {
    init: function () {
      this.navigation.prevEl.setAttribute(
        'data-swiper-button-disabled',
        'true'
      );
    },
    slideChange: function () {
      if (this.activeIndex === 0) {
        this.navigation.prevEl.setAttribute(
          'data-swiper-button-disabled',
          'true'
        );
      } else {
        this.navigation.prevEl.removeAttribute('data-swiper-button-disabled');
      }
      if (this.activeIndex === this.slides.length - 1) {
        this.navigation.nextEl.setAttribute(
          'data-swiper-button-disabled',
          'true'
        );
      } else {
        this.navigation.nextEl.removeAttribute('data-swiper-button-disabled');
      }
    },
  },
};

const swiper = new Swiper('.swiper-container', {
  ...params,
  spaceBetween: 100,
  centeredSlides: true,
  slidesPerView: 'auto',
});

// ==================== REVIEWS SWIPER

export function initSwiper() {
  const breakpoints = {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  };

  const reviewsSwiper = new Swiper('.reviews-swiper-container', {
    ...params,
    spaceBetween: 16,
    breakpoints,
  });
}
