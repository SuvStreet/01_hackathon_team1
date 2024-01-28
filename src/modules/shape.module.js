import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.container = document.createElement("div");
    this.container.classList.add("container");
  }

  trigger() {
    let randomColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

    this.container.className = "";
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

    this.container.classList.add(shapes[random(0, shapes.length - 1)]);
    // this.container.style.display = "block";
    // this.container.style.position = `absolute`;
    this.container.style.zIndex = -1;
    // if (!this.container.style.background) {
      // this.container.style.background = `${randomColor}`;
    // }
    // if (!this.container.style.color) {
    this.container.style.color = `${randomColor}`;
    // }
    // if (this.container.style.borderColor) {
    // this.container.style.borderColor = `${randomColor}`;
    // }

    this.container.style.width = `${random(100, 300)}`;
    this.container.style.height = `${random(100, 300)}`;

    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    this.container.style.top = `${random(0, windowInnerHeight)}px`;
    // this.container.style.bottom = `${random(0, windowInnerHeight)}px`;
    this.container.style.right = `${random(0, windowInnerWidth)}px`;
    // this.container.style.left = `${random(0, windowInnerWidth)}px`;
    
    document.body.append(this.container);
  }
}
