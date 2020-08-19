export class CommitCardList {
  constructor(container, card) {
    this._container = container;
    this._card = card;
  }

  addCard(date, img, name, email, description) {
    const newCard = this._card(date, img, name, email, description);
    this._container.append(newCard);
  }

  render = (newCardList) => {
    newCardList.forEach(card => {
      this.addCard(card.commit.committer.date.slice(0, 10), card.committer.avatar_url, card.commit.committer.name, card.commit.committer.email, card.commit.message);
    })
  }
}