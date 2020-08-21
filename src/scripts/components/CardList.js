import { removeSearchButtonEventListener } from '../utils/removeSearchButtonEventListener.js';

export class CardList {
  constructor(container, card, button) {
    this._container = container;
    this._card = card;
    this._button = button;
  }

  //отрисовывет карточку с нужной инфой
  addCard(url, sourceName, title, publishedAt, description, urlToImage) {
    const newCard = this._card(url, sourceName, title, publishedAt, description, urlToImage);
    this._container.append(newCard);
  }

  //разбивает массив карточек по три и отрисовывает их
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
      removeSearchButtonEventListener.removeHandlers();
    }
  }

  //отрисовывает массив с пришедшей инфой
  _render = (newCardList) => {
    newCardList.forEach(card => {
      this.addCard(card.url, card.source.name, card.title, card.publishedAt.slice(0, 10), card.description, card.urlToImage);
    })
  }

  //показывает или скывает кнопку "Показать еще"
  _cardButtonIsShown = (state) => {
    state ?
    this._button.classList.remove('hidden') :
    this._button.classList.add('hidden');
  }
}