export default class Moving {
  constructor() {
    this.lastNumber = 0;
  }

  randomStep(width, height) {
    let randomWidth;
    let randomHeight;
    /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
    while (true) {
      randomWidth = Math.floor(Math.random() * width);
      randomHeight = Math.floor(Math.random() * height);
      if (randomWidth !== this.lastNumber) {
        break;
      }
    }
    this.lastNumber = randomWidth;
    return { width: randomWidth, height: randomHeight };
  }
}
