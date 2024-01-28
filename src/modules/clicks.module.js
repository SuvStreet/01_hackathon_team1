import { Module } from '../core/module'

export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text)

		this.clicks = null

		this.oneClick = 0
		this.dblClick = 0
	}

	trigger() {
		this.hideContainer()
		this.usersInteractiv()
	}

	hideContainer() {
		this.clicks = document.querySelector('.clicks')
		this.clicks.innerHTML = ''
	}

	usersInteractiv() {
		const clicksContainer = document.createElement('div')
		clicksContainer.classList.add('clicksContainer')
		clicksContainer.textContent = 'Кликай быстрее'
		this.clicks.append(clicksContainer)

      this.counter(clicksContainer)
		
      
	}

	counter(clicksContainer) {
		clicksContainer.addEventListener('click', event => {
			if (event.detail === 1) {
				this.oneClick += 1
			} else {
				this.oneClick -= 1
				this.dblClick += 1
			}
		})

		setTimeout(() => {
			clicksContainer.remove()
			this.render()

			setTimeout(() => {
				this.oneClick = 0
				this.dblClick = 0
				this.clicks.innerHTML = 'Нажми на меня правой кнопкой мыши'
				this.clicks.classList.remove('clicks')
			}, 5000)
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
		this.clicks.append(titleModal)
	}
}
