import { createACard } from './createACard.js';
import { newCardList } from './newCardList';
import { LocalStorage } from '../modules/LocalStorage.js';

const storedData = new LocalStorage();

const cardContainer = document.querySelector('.search-result__cards');
const cardButton = document.querySelector('.search-result__button');

let cardsArray = [];
cardsArray = storedData.getItemNews();

export const cardButtonListener = (e) => {
  e.preventDefault();
  newCardList(cardContainer, createACard, cardButton).pagination(cardsArray);
}