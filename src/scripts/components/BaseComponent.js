export class BaseComponent {
  constructor(handlers = []){
    this._handlers = handlers;
  }

  setHandlers() {
    this._handlers.forEach(handler => {
      this._addHandler(handler);
    })
  }

  _addHandler({element, event, callback}) {
    element.addEventListener(event, callback);
  }

  removeHandlers() {
    this._handlers.forEach(handler => {
      this._removeHandler(handler);
    })
  }

  _removeHandler({element, event, callback}) {
    element.removeEventListener(event, callback);
  }
}