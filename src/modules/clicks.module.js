import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text)

    this.oneClick = 0
    this.dblClick = 0
  }

  trigger() {
    this.counter()
  }

  counter() {
    document.body.addEventListener('click', (event) => {
      if(event.detail === 1) {
        this.oneClick += 1
      }

      // if(event.button === 2) {
      //   console.log('event.button === 2')
      //   document.querySelector('#menu').classList.toggle('open')
      // }
    })

    document.body.addEventListener('dblclick', (event) => {
        this.oneClick -= 1
        this.dblClick += 1
      }
    )
    
    setTimeout(() => {
      this.render()
    }, 3000)
  }

  render() {
    const titleModal = document.createElement('div')
    titleModal.className = 'modalActive_item'
    titleModal.textContent = 'Колличество Ваших кликов:'

    const itemOneLeftClicks = document.createElement('p')
    itemOneLeftClicks.className = 'modalActive_list'
    itemOneLeftClicks.textContent = `Количество одиночных кликов: ${this.oneClick}`

    const itemTwoLeftClicks = document.createElement('p')
    itemTwoLeftClicks.className = 'modalActive_list'
    itemTwoLeftClicks.textContent = `Количество двойных кликов: ${this.dblClick}`

    titleModal.append(itemOneLeftClicks, itemTwoLeftClicks)
    document.body.append(titleModal)
  }
}
