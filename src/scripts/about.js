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

  // If we need pagination
  pagination: {
    el: '.history__swipe-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
})

/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/
  
  
/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
  mySwiper.update();
  
  })();