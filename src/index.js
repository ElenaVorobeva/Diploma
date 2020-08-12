import "./style.css";

import { NewsApi } from './scripts/modules/NewsApi.js';
import { LocalStorage } from './scripts/modules/LocalStorage.js';


import { Card } from './scripts/components/Card.js';
import { CardList } from './scripts/components/CardList.js';

import { buildNewsApiUrl } from './scripts/utils/buildNewsApiUrl.js';

(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const card = new Card();
const cardList = new CardList();
const storedData = new LocalStorage();

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const searchButton = root.querySelector('.search__button');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');

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
  newsApi.getCards()
  .then(res => {
    cardContainer.innerHTML = '';
    localStorage.clear();
    cardsArray = [...res.articles];
    storedData.setItemNews(cardsArray);
    storedData.setKeyWord(searchInput.value);

    const news = new CardList(cardContainer, storedData.getItemNews(), createACard)
    news.render();
  })
  .catch((error) => {
    console.error('Невозможно продолжить', error);
  });
});

/*------------------------------------------------------------------------------
Вызовы функции
------------------------------------------------------------------------------*/

const localStoredCards = storedData.getItemNews();

if (localStoredCards) {
  searchInput.value = storedData.getKeyWord();
  const news = new CardList(cardContainer, storedData.getItemNews(), createACard)
  news.render();
}


})();