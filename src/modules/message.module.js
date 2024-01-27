import { Module } from '../core/module'

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)

    this.container = document.querySelector('.container')
  }

  trigger() {
    this.render()
  }

  render() {
    this.container = document.querySelector('.container')
    this.container.innerHTML = ''
    this.modalHTML(this.container)
    setTimeout(() => {
      this.container.innerHTML = 'Нажми на меня правой кнопкой мыши'
      this.container.classList.remove('message')
    }, 2000)
  }

  message() {
    return "Hello, I'm a message"
  }

  modalHTML(container) {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const span = document.createElement('span')
    span.textContent = this.message()
    modal.append(span)

    container.append(modal)
  }
}
