import { CardList } from '../components/CardList.js'

export const newCardList = (container, card, button) => {
  return new CardList(container, card, button);
}