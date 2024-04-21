import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

let contactsSwiper;

export const initSliders = function () {
  contactsSwiper = new SwiperCore('.feedback-swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
