import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
  trigger() {
    this.container = document.querySelector('.container')
    this.container.innerHTML = ''
    this.createShape(this.container)
  }

  createShape(container) {
    const shapes = [
      'square',
      'rectangle',
      'circle',
      'oval',
      'parallelogram',
    ]

    const shape = shapes[random(0, shapes.length - 1)]

    const newShape = document.createElement('div')
    newShape.classList.add(shape)
    newShape.style.position = `relative`
    newShape.style.width = `${random(50, 200)}px`
    newShape.style.height = `${random(50, 200)}px`
    newShape.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`

    const shapeWidth = document.querySelector('.shape').offsetWidth
    const shapeHeight = document.querySelector('.shape').offsetHeight

    newShape.style.top = `${random(
      -(shapeHeight - newShape.offsetHeight) / 2,
      (shapeHeight - newShape.offsetHeight) / 2
    )}px`
    newShape.style.right = `${random(
      -(shapeWidth - newShape.offsetWidth) / 2,
      (shapeWidth - newShape.offsetWidth) / 2
    )}px`

    container.append(newShape)
  }
}
