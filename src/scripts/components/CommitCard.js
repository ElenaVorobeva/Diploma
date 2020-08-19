export class CommitCard {
  constructor(date, img, name, email, description) {
    this._date = date;
    this._img = img;
    this._name = name;
    this._email = email;
    this._description = description;
  }

  createCommitCard() {
    const cardContainer = `
    <div class="card card_swiper">
      <p class="card__data"></p>
      <div class="card__header">
        <img class="card__profile-pic"></img>
        <div class="card__header-text">
          <h4 class="card__title card__title_swiper"></h4>
          <p class="card__subtitle"></p>
        </div>
    </div>
        <p class="card__description"></p>
    </div>
    `

    const cardElement = document.createElement('div');
    cardElement.classList.add("history__swipe-slide", "search-result__card", "swiper-slide");
    cardElement.insertAdjacentHTML('afterbegin', cardContainer);

    cardElement.querySelector('.card__profile-pic').src = `${this._img}`;
    cardElement.querySelector('.card__data').textContent = this._date;
    cardElement.querySelector('.card__title').textContent = this._name;
    cardElement.querySelector('.card__subtitle').textContent = this._email;
    cardElement.querySelector('.card__description').textContent = this._description;

    this._cardElement = cardElement;
    return cardElement;

  }
}