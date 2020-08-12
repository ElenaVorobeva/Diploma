export class LocalStorage {
  setItemNews = (item) => {
    localStorage.setItem('news', JSON.stringify(item));
  }

  getItemNews = () => {
    return JSON.parse(localStorage.getItem('news'));
  }

  setKeyWord = (item) => {
    localStorage.setItem('keyWord', JSON.stringify(item));
  }

  getKeyWord = () => {
    return JSON.parse(localStorage.getItem('keyWord'));
  }

}