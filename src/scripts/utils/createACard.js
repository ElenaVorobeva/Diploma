import { newsCard} from '../components/newsCard.js';

//создает карточку для дальнейшей ее обработки
export const createACard = (url, sourceName, title, publishedAt, description, urlToImage) => {
  return new newsCard(url, sourceName, title, publishedAt, description, urlToImage).createCard();
}