//валидация поиска
export const validation = (field) => {
    const FIELD_TYPE = NODE_ENV === 'production' ? field.parentElement.nextSibling : field.parentElement.nextSibling.nextSibling;

    if (field.value.length === 0) {
      FIELD_TYPE.textContent = 'Это обязательное поле';
      FIELD_TYPE.disabled = true;
      return false;
    } else {
      FIELD_TYPE.textContent = '';
      FIELD_TYPE.disabled = false;
      return true;
    }
}