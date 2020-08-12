export class NewsApi {
  constructor(url) {
    this._url = url;
  }

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