import "./style.css";


import { SectionsState } from './scripts/components/SectionsState.js';

import { LocalStorage } from './scripts/modules/LocalStorage.js';

import { setEventListener } from './scripts/utils/setEventListener.js';
import { createACard } from './scripts/utils/createACard.js';
import { newCardList } from './scripts/utils/newCardList.js';

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

/*------------------------------------------------------------------------------
Вызовы функции
------------------------------------------------------------------------------*/
setEventListener.setHandlers();
searchResultSectionFalse.sectionState();

if (storedData.getItemNews().length !== 0) {
  searchInput.value = storedData.getKeyWord();
  searchResultSectionTrue.sectionState();
  cardsArray = storedData.getItemNews();

  newCardList(cardContainer, createACard, cardButton).pagination(cardsArray);
}

})();

