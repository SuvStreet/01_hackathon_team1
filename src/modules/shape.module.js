import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.container = document.createElement("div");
    this.container.classList.add("container");
  }

  trigger() {
    this.render();
  }

  render() {
    let randomColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;

    this.container = document.querySelector(".container");
    this.container.innerHTML = "";
    // this.container.className = "";

    this.createShape(this.container);
    // setTimeout(() => {
    //   this.container.innerHTML = 'Нажми на меня правой кнопкой мыши'
    //   this.container.classList.remove()
    // }, 2000)
  }

  createShape() {
    const shapes = [
      "square",
      "rectangle",
      "circle",
      "oval",
      "triangle-up",
      "triangle-down",
      "triangle-left",
      "triangle-right",
      "pacman",
      "infinity",
      "moon",
      "yin-yang",
      "star-five",
      "trapezoid",
      "parallelogram",
      "star-six",
      "heart",
    ];

    const newShape = document.createElement('div')
    newShape.classList.add(shapes[random(0, shapes.length - 1)]);
    newShape.style.position = `absolute`;

    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    newShape.style.top = `${random(0, windowInnerHeight)}px`;
    newShape.style.right = `${random(0, windowInnerWidth)}px`;

    document.body.append(newShape);
  }
}
