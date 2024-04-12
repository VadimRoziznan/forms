export default class Cursor {
  constructor(element) {
    this.element = element;
  }
  changeCursor() {
    document.querySelector('.field').style.cursor = 'url("../images/goblin.png"), auto';
  }
  
}
