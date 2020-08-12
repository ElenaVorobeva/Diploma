import { dateToStartWith } from '../utils/dateToStartWith.js';

export const buildNewsApiUrl = (keyWord) => {
  const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk/news/' : 'https://newsapi.org/';

  const NEWS_API_URL = `${API_URL}v2/everything?` +
  `from=${dateToStartWith.getFullYear()}-${dateToStartWith.getMonth() + 1}-${dateToStartWith.getDate()}&` +
  'sortBy=popularity&' +
  'apiKey=1f9a00b3d2044cc88628939c5a65dc0e&' +
  'pageSize=100&' +
  `q=${keyWord}`;

  return NEWS_API_URL;
}