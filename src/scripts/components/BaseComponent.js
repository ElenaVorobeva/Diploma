export class BaseComponent {
  constructor(handlers = []){
    this._handlers = handlers;
  }

  //добавляет всем пришедшим объектам слушатели
  setHandlers() {
    this._handlers.forEach(handler => {
      this._addHandler(handler);
    })
  }

  //создает слушатель
  _addHandler({element, event, callback}) {
    element.addEventListener(event, callback);
  }

  //удаляет всем пришедшим объектам слушатели
  removeHandlers() {
    this._handlers.forEach(handler => {
      this._removeHandler(handler);
    })
  }

  //создает удаление слушателя
  _removeHandler({element, event, callback}) {
    element.removeEventListener(event, callback);
  }
}