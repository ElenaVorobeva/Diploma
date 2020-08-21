export class CommitCardsApi {
  constructor(url) {
    this._url = url;
  }

  //запрос для коммитов
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