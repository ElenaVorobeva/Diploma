import { EventListeners } from '../components/EventListeners.js';
import { inputListener } from './inputListener.js';
import { cardButtonListener } from './cardButtonListener.js';
import { searchButtonListener } from './searchButtonListener.js';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');
const cardButton = document.querySelector('.search-result__button');

//навешивает указанные слушаетлеи указанным элементам
export const setEventListener = new EventListeners([
  {
    element: searchInput,
    event: 'input',
    callback: inputListener
  },

  {
    element: cardButton,
    event: 'click',
    callback: cardButtonListener
  },

  {
    element: searchButton,
    event: 'click',
    callback: searchButtonListener
  }
])