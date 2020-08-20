import { newsCard} from '../components/newsCard.js';

export const createACard = (url, sourceName, title, publishedAt, description, urlToImage) => {
  return new newsCard(url, sourceName, title, publishedAt, description, urlToImage).createCard();
}