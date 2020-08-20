import { validation } from '../components/validation.js';
const searchInput = document.querySelector('.search__input');

//обрабатывает поле ввода ключевого слова
export const inputListener = () => {
  validation(searchInput);
}