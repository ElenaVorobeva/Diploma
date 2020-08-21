import "./style.css";


import { SectionsState } from './scripts/components/SectionsState.js';

import { LocalStorage } from './scripts/modules/LocalStorage.js';

import { setEventListener } from './scripts/utils/setEventListener.js';
import { createACard } from './scripts/utils/createACard.js';
import { newCardList } from './scripts/utils/newCardList.js';

import { CreateCardsArray } from './scripts/utils/createCardsArray.js';


(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
let cardsArray = [];

const storedData = new LocalStorage();

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');
const searchResultSection = root.querySelector('.search-result');

const searchResultSectionTrue = new SectionsState(searchResultSection, true);
const searchResultSectionFalse = new SectionsState(searchResultSection, false);

const createCardsArray = new CreateCardsArray();


/*------------------------------------------------------------------------------
Вызовы функции
------------------------------------------------------------------------------*/
//навешивает случашатели событий для кнопок
setEventListener.setHandlers();

//изначально скрывает секцию с карточками,
//чтобы не было случайного отображения, если она пуста при перезагрузке страницы
searchResultSectionFalse.sectionState();


//отрисовывает первые три карточки, если в localStorage имеются данные
if (storedData.getItemNews().length !== 0) {
  searchInput.value = storedData.getKeyWord();
  searchResultSectionTrue.sectionState();
  cardsArray = storedData.getItemNews();
  createCardsArray.setArray(cardsArray)

  newCardList(cardContainer, createACard, cardButton).pagination(createCardsArray.getArray());
}

})();

