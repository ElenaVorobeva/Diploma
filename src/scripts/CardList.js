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

  // render() {
    
  // }

  render() {
    this._cards.slice(0, 3).forEach(card => {
      this.addCard(card.source.name, card.title, card.publishedAt, card.description, card.urlToImage);
    })
  }
}