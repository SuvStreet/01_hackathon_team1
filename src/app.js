import './styles.css'

import { ContextMenu } from './menu'

class App {
  constructor() {
    new ContextMenu('body').open()

    this.body = document.querySelector('body')
    this.container = document.createElement('div')
    this.container.classList.add('container')
    this.container.innerHTML = 'Нажми на меня правой кнопкой мыши'
  }

  render() {
    this.body.append(this.container)
  }
}

new App().render()