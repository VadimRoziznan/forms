export default class AddImage {
  constructor(element) {
    this.element = element;
  }

  createImage(x, y) {
    const divs = this.element.querySelectorAll(".square");
    const image = document.createElement("img");
    image.src = "../images/goblin.png";
    divs.forEach((div) => {
      const imageСheck = div.childNodes[0];
      if (imageСheck) {
        AddImage.removeImage(imageСheck);
      }
    });
    this.element.childNodes[x].childNodes[y].appendChild(image);
  }

  static removeImage(image) {
    image.remove();
  }
}
