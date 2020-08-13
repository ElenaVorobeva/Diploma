import "./style.css";

import { NewsApi } from './scripts/modules/NewsApi.js';
import { LocalStorage } from './scripts/modules/LocalStorage.js';


import { Card } from './scripts/components/Card.js';
import { CardList } from './scripts/components/CardList.js';
import { SectionsState } from './scripts/components/SectionsState.js';

import { buildNewsApiUrl } from './scripts/utils/buildNewsApiUrl.js';

(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const storedData = new LocalStorage();
const sectionsState = new SectionsState();

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const searchButton = root.querySelector('.search__button');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');
const searchResultSection = root.querySelector('.search-result');
const loading = root.querySelector('.loading');
const loadingNotFound = root.querySelector('.loading-not-found');

let cardsArray = [];

/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/
// создаем карточку в доме
function createACard(sourceName, title, publishedAt, description, urlToImage) {
  return new Card(sourceName, title, publishedAt, description, urlToImage).createCard();
}

/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/

searchButton.addEventListener('click', function(e) {
  e.preventDefault();
  const newsApiUrl = buildNewsApiUrl(searchInput.value);
  const newsApi = new NewsApi(newsApiUrl);

  sectionsState.sectionState(searchResultSection, false);
  sectionsState.sectionState(loadingNotFound, false);
  sectionsState.sectionState(loading, true);

  newsApi.getCards()
  .then(res => {
    cardContainer.innerHTML = '';
    localStorage.clear();
    cardsArray = [...res.articles];
    storedData.setItemNews(cardsArray);
    storedData.setKeyWord(searchInput.value);

    if (cardsArray.length === 0) {
      sectionsState.sectionState(loading, false);
      sectionsState.sectionState(loadingNotFound, true);
    } else {
      const news = new CardList(cardContainer, storedData.getItemNews(), createACard)
      sectionsState.sectionState(loading, false);
      sectionsState.sectionState(searchResultSection, true);
      news.render();
    }
  })
  .catch((error) => {
    console.error('Невозможно продолжить', error);
  });
});

/*------------------------------------------------------------------------------
Вызовы функции
------------------------------------------------------------------------------*/

const localStoredCards = storedData.getItemNews();
sectionsState.sectionState(searchResultSection, false);

if (localStoredCards.length !== 0) {
  searchInput.value = storedData.getKeyWord();
  const news = new CardList(cardContainer, storedData.getItemNews(), createACard)
  sectionsState.sectionState(searchResultSection, true);
  news.render();
}

})();