import "../pages/about.css";
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);



(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
  
const mySwiper = new Swiper('.swiper-container', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopAdditionalSlides: 3,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  width: 400,

  pagination: {
    el: '.history__swipe-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {

    769: {
      width: 400,
      height: 282,
      spaceBetween: 8
    },

    515: {
      width: 336,
      height: 242,
      spaceBetween: 8
    },

    320: {
      width: 288,
      height: 262
    }
  }
})

/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/
  
  
/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
  mySwiper.update();
  
  })();