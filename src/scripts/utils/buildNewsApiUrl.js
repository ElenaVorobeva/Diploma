import { dateToStartWith } from '../utils/dateToStartWith.js';

//формирует ссылку для запроса
export const buildNewsApiUrl = (keyWord) => {
  const API_URL = NODE_ENV === 'production' ? 'https://nomoreparties.co/news/' : 'https://newsapi.org/';

  const NEWS_API_URL = `${API_URL}v2/everything?` +
  `from=${dateToStartWith.getFullYear()}-${dateToStartWith.getMonth() + 1}-${dateToStartWith.getDate()}&` +
  'sortBy=Datepublished&' +
  'apiKey=1f9a00b3d2044cc88628939c5a65dc0e&' +
  'pageSize=100&' +
  `q=${keyWord}`;

  return NEWS_API_URL;
}