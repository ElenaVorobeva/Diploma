export class Card {
  constructor(sourceName, title, publishedAt, description, urlToImage) {
    this._sourceName = sourceName;
    this._title = title;
    this._publishedAt = publishedAt;
    this._description = description;
    this._urlToImage = urlToImage;
  }

  createCard() {
    const cardContainer = `
    <img class="card__image">
    <div class="card__info">
      <p class="card__data"></p>
      <h4 class="card__title"></h4>
      <p class="card__description"></p>
      <p class="search-result__card-company-name">Лента.ру</p>
    </div>
    `;

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.insertAdjacentHTML('afterbegin', cardContainer);

    cardElement.querySelector('.card__image').src = `${this._urlToImage}`;
    cardElement.querySelector('.card__data').textContent = this._publishedAt;
    cardElement.querySelector('.card__title').textContent = this._title;
    cardElement.querySelector('.card__description').textContent = this._description;
    cardElement.querySelector('.search-result__card-company-name').textContent = this._sourceName;

    this._cardElement = cardElement;
    return cardElement;
  }
}