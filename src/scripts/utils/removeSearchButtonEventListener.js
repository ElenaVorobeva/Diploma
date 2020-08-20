import { EventListeners } from '../components/EventListeners.js';
import { cardButtonListener } from './cardButtonListener.js';

const cardButton = document.querySelector('.search-result__button');

export const removeSearchButtonEventListener = new EventListeners([
  {
    element: cardButton,
    event: 'click',
    callback: cardButtonListener
  }
])