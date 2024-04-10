import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs]);

let contactsSwiper;

export const initSliders = function () {
  contactsSwiper = new SwiperCore('.feedback-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 24,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1600: {
        slidesPerView: 5,
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
