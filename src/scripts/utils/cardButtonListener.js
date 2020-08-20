import { createACard } from './createACard.js';
import { newCardList } from './newCardList';
import { CreateCardsArray } from './createCardsArray.js';

const cardContainer = document.querySelector('.search-result__cards');
const cardButton = document.querySelector('.search-result__button');
const createCardsArray = new CreateCardsArray();

//слушатель для добавления карточек по клику на кнопку "Показать еще"
export const cardButtonListener = (e) => {
  e.preventDefault();
  
  newCardList(cardContainer, createACard, cardButton).pagination(createCardsArray.getArray());
}