export class Menu {
  constructor() {

  }

  menuSelector = () => {
    console.log(this)
    this.classList.toggle('header__menu-item-link_active');
  }

  addEventListeners = () => {
    
  }
}