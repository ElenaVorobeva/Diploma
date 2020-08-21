export class LocalStorage {
  //записывает в localStorage массив с новостями
  setItemNews = (item) => {
    localStorage.setItem('news', JSON.stringify(item));
  }

  //забирает из localStorage массив с новостями
  getItemNews = () => {
    return JSON.parse(localStorage.getItem('news'));
  }

  //записывает в localStorage поисковое слово
  setKeyWord = (item) => {
    localStorage.setItem('keyWord', JSON.stringify(item));
  }

  //забирает из localStorage поисковое слово
  getKeyWord = () => {
    return JSON.parse(localStorage.getItem('keyWord'));
  }

  //записывает в localStorage весь пришедший массив для аналитики
  setAllRes = (item) => {
    localStorage.setItem('allRes', JSON.stringify(item));
  }

  //забирает из localStorage весь пришедший массив для аналитики
  getAllRes = () => {
    return JSON.parse(localStorage.getItem('allRes'))
  }

}