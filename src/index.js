import "./style.css";

import { NewsApi } from './scripts/modules/NewsApi.js';
import { LocalStorage } from './scripts/modules/LocalStorage.js';


import { newsCard } from './scripts/components/newsCard.js';
import { CardList } from './scripts/components/CardList.js';
import { SectionsState } from './scripts/components/SectionsState.js';
import { Validation } from './scripts/components/Validation.js';

import { buildNewsApiUrl } from './scripts/utils/buildNewsApiUrl.js';

(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
let cardsArray = [];

const storedData = new LocalStorage();

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const searchButton = root.querySelector('.search__button');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');
const searchResultSection = root.querySelector('.search-result');
const loading = root.querySelector('.loading');
const loadingNotFound = root.querySelector('.loading-not-found');

const searchResultSectionTrue = new SectionsState(searchResultSection, true);
const searchResultSectionFalse = new SectionsState(searchResultSection, false);
const loadingSectionTrue = new SectionsState(loading, true);
const loadingSectionFalse = new SectionsState(loading, false);
const loadingNotFoundSectionTrue = new SectionsState(loadingNotFound, true);
const loadingNotFoundSectionFalse = new SectionsState(loadingNotFound, false);

const validation = new Validation();



/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
// создаем карточку в доме
function createACard(url, sourceName, title, publishedAt, description, urlToImage) {
  return new newsCard(url, sourceName, title, publishedAt, description, urlToImage).createCard();
}

function newCardList(container, array, card, button) {
  return new CardList(container, array, card, button).pagination(cardsArray);
}

/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/

searchInput.addEventListener('input', () => {
  validation.checkField(searchInput);
})

searchButton.addEventListener('click', function(e) {
  e.preventDefault();

  if (validation.checkField(searchInput)) {
    const newsApiUrl = buildNewsApiUrl(searchInput.value);
    const newsApi = new NewsApi(newsApiUrl);

    searchResultSectionFalse.sectionState();
    loadingNotFoundSectionFalse.sectionState();
    loadingSectionTrue.sectionState();

    newsApi.getCards()
    .then(res => {
      cardContainer.innerHTML = '';
      localStorage.clear();

      storedData.setAllRes(res);

      cardsArray = [...res.articles];
      storedData.setItemNews(cardsArray);
      storedData.setKeyWord(searchInput.value);


      if (cardsArray.length === 0) {
        loadingSectionFalse.sectionState();
        loadingNotFoundSectionTrue.sectionState();
      } else {
        loadingSectionFalse.sectionState();
        searchResultSectionTrue.sectionState();
        newCardList(cardContainer, cardsArray, createACard, cardButton);
      }

      return cardsArray;
    })
    .catch((error) => {
      console.error('Невозможно продолжить', error);
    });
  }
});

cardButton.addEventListener('click', e => {
  e.preventDefault();

  newCardList(cardContainer, storedData.getItemNews(), createACard, cardButton);
})

/*------------------------------------------------------------------------------
Вызовы функции
------------------------------------------------------------------------------*/
searchResultSectionFalse.sectionState();

if (storedData.getItemNews().length !== 0) {
  searchInput.value = storedData.getKeyWord();
  searchResultSectionTrue.sectionState();
  cardsArray = storedData.getItemNews();

  newCardList(cardContainer, cardsArray, createACard, cardButton);
}

})();

