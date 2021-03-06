export class SectionsState {
  constructor(section, state) {
    this._section = section;
    this._state = state;
  }

  //определеят отображение секции
  sectionState = () => {
    this._state ?
      this._section.classList.add('active') :
      this._section.classList.remove('active');
  }
}