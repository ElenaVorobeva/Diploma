import {SectionsState } from '../components/SectionsState.js';
import { newCardList } from './newCardList.js'
import { createACard } from './createACard.js'
import { validation } from '../components/validation.js'
import { buildNewsApiUrl } from './buildNewsApiUrl.js';
import { NewsApi } from '../modules/NewsApi.js';
import { LocalStorage } from '../modules/LocalStorage.js';
import { CreateCardsArray } from './createCardsArray.js';

const root = document.querySelector('.root');
const searchInput = root.querySelector('.search__input');
const searchResultSection = root.querySelector('.search-result');
const loading = root.querySelector('.loading');
const loadingNotFound = root.querySelector('.loading-not-found');
const cardContainer = root.querySelector('.search-result__cards');
const cardButton = root.querySelector('.search-result__button');

const searchResultSectionTrue = new SectionsState(searchResultSection, true);
const searchResultSectionFalse = new SectionsState(searchResultSection, false);
const loadingSectionTrue = new SectionsState(loading, true);
const loadingSectionFalse = new SectionsState(loading, false);
const loadingNotFoundSectionTrue = new SectionsState(loadingNotFound, true);
const loadingNotFoundSectionFalse = new SectionsState(loadingNotFound, false);

const storedData = new LocalStorage();
const createCardsArray = new CreateCardsArray();

let cardsArray = [];

//здесь происходит магия
//при нажатии на кнопку создается отдельный массив,
//затем он записывается в функцию, которая позже будет передавать данные для пагинации
//затем в localStorage, чтобы данные сохранялись при перезагрузке
//затем отображаются нужные секции и карточки, если имеются
export const searchButtonListener = (e) => {
  e.preventDefault();

  if (validation(searchInput)) {
    const newsApiUrl = buildNewsApiUrl(searchInput.value);
    const newsApi = new NewsApi(newsApiUrl);

    searchResultSectionFalse.sectionState();
    loadingNotFoundSectionFalse.sectionState();
    loadingSectionTrue.sectionState();

    newsApi.getCards()
    .then(res => {
      cardContainer.innerHTML = '';
      localStorage.clear();

      storedData.setAllRes(res);
      cardsArray = [...res.articles];

      createCardsArray.setArray(cardsArray)

      storedData.setItemNews(cardsArray);
      storedData.setKeyWord(searchInput.value);

      if (cardsArray.length === 0) {
        loadingSectionFalse.sectionState();
        loadingNotFoundSectionTrue.sectionState();
      } else {
        loadingSectionFalse.sectionState();
        searchResultSectionTrue.sectionState();
        newCardList(cardContainer, createACard, cardButton).pagination(createCardsArray.getArray());
      }
    })
    .catch((error) => {
      console.error('Невозможно продолжить', error);
    });
  }
}