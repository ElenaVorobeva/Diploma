import "./about.css";
import Swiper, { Navigation, Pagination } from 'swiper';
import { CommitCard } from '../../scripts/components/CommitCard.js'
import { CommitCardList } from '../../scripts/components/CommitCardList.js'
import { CommitCardsApi } from '../../scripts/modules/CommitCardsApi.js'

Swiper.use([Navigation, Pagination]);



(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const cardContainer = document.querySelector('.history__swipe-wrapper');

const commitUrl = 'https://api.github.com/repos/elenavorobeva/Diploma/commits';

//настраивает свайпер
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  loopAdditionalSlides: 3,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  width: 400,
  init: false,

  pagination: {
    el: '.history__swipe-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

const commitCardsArray = new CommitCardsApi(commitUrl);
commitCardsArray.getCards()
.then(res => {
  createCommitCardList(cardContainer, createACard).render(res);
  mySwiper.init();
})


/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
//создает карточку
function createACard(date, img, name, email, description) {
  return new CommitCard(date, img, name, email, description).createCommitCard();
}

//добавляет в нее нужную инфу
function createCommitCardList(container, card) {
  return new CommitCardList(container, card);
}

//запускает свайпер после подгрузки карточек
mySwiper.update();

})();