import "../pages/style.css";

import { Api } from './Api.js';
import { Card } from './Card.js';
import { CardList } from './CardList.js';

(function () {
/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const card = new Card();
const cardList = new CardList();

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const searchButton = root.querySelector('.search__button');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');

// const config = {
//   url: 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=1f9a00b3d2044cc88628939c5a65dc0e&q=',
//   headers: {
//     q: '',
//   }

// }


/*------------------------------------------------------------------------------
Переменные
------------------------------------------------------------------------------*/
const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=1f9a00b3d2044cc88628939c5a65dc0e&q=';


/*------------------------------------------------------------------------------
Функции
------------------------------------------------------------------------------*/

function createACard(sourceName, title, publishedAt, description, urlToImage) {
  return new Card(sourceName, title, publishedAt, description, urlToImage).createCard();
}


/*------------------------------------------------------------------------------
Слушатели событий
------------------------------------------------------------------------------*/
searchButton.addEventListener('click', function(e) {
  e.preventDefault();

  const apiUrl = url + searchInput.value;

  const api = new Api(apiUrl);

  api.getCards()
    .then(res => {
      console.log(res.articles)
      const cards = new CardList(cardContainer, res.articles, createACard);
      cardContainer.innerHTML = '';
      cards.render();
  
    })
    .catch((error) => {
      console.error('Невозможно продолжить', error);
    });
});


/*------------------------------------------------------------------------------
Апи
------------------------------------------------------------------------------*/



})();