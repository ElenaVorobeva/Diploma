import { validation } from '../components/validation.js';
const searchInput = document.querySelector('.search__input');

export const inputListener = () => {
  validation(searchInput);
}