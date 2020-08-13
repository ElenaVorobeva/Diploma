import { LocalStorage } from '../modules/LocalStorage.js'

export class CardList {
  constructor(container, cards, card) {
    this._container = container;
    this._card = card;
    this._cards = cards;
  }

  addCard(sourceName, title, publishedAt, description, urlToImage) {
    const newCard = this._card(sourceName, title, publishedAt, description, urlToImage);
    this._container.append(newCard);
  }

  pagination = (storedCardList) => {
    const newCardList = [];
    for (let i = 0; i < 3; i++) {
      newCardList.push(storedCardList.pop());
    }
    this._render(newCardList);
  }

  _render = (newCardList) => {
    newCardList.forEach(card => {
      this.addCard(card.source.name, card.title, card.publishedAt, card.description, card.urlToImage);
    })
  }

}