import { LocalStorage } from './LocalStorage.js';
export class NewsApi {
  constructor(url) {
    this._url = url;
  }

  //запрос для новостей
  getCards = () => {
    return fetch(this._url)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status);
      } else {
        return res.json();
      }
    })
  }
}