import { LocalStorage } from '../modules/LocalStorage.js'

export class CardList {
  constructor(container, cards, card, button) {
    this._container = container;
    this._card = card;
    this._cards = cards;
    this._button = button;
  }

  addCard(url, sourceName, title, publishedAt, description, urlToImage) {
    const newCard = this._card(url, sourceName, title, publishedAt, description, urlToImage);
    this._container.append(newCard);
  }

  pagination = (storedCardList) => {
    const newCardList = [];
    for (let i = 0; i < 3; i++) {
      if (storedCardList.length !== 0) {
        newCardList.push(storedCardList.pop());
        this._cardButtonIsShown(true);
      }
    }
    this._render(newCardList);
    if (storedCardList.length === 0) {
      this._cardButtonIsShown(false);
    }
  }

  _render = (newCardList) => {
    newCardList.forEach(card => {
      this.addCard(card.url, card.source.name, card.title, card.publishedAt.slice(0, 10), card.description, card.urlToImage);
    })
  }

  _cardButtonIsShown = (state) => {
    state ?
    this._button.classList.remove('hidden') :
    this._button.classList.add('hidden');
  }
}