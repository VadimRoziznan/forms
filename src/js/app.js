import Field from "./Field";
import Moving from "./Moving";
import AddImage from "./AddImage";
import Cursor from "./Сursor";

document.addEventListener("DOMContentLoaded", () => {
  new Field(document.querySelector(".field"), 4, 4).fieldGenerator();
  const newImage = new AddImage(document.querySelector(".field"));
  const move = new Moving();

  const c = new Cursor(document.querySelector('.field')).changeCursor()


  setInterval(() => {
    const step = move.randomStep(4, 4);
    newImage.createImage(step.width, step.height);
  }, 1000);
});
