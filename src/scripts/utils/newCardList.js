import { CardList } from '../components/CardList.js';

//создает новый массив с карточками, чтобы задействовать его при пагинации
export const newCardList = (container, card, button) => {
  return new CardList(container, card, button);
}