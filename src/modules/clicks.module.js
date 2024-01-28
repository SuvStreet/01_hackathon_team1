import { Module } from '../core/module'

export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text)
		this.oneClick = 0
		this.dblClick = 0
	}

	trigger() {
      this.clickListener()
		//this.counter()
		//this.render()
	}

	counter(method) {
		//let oneCounter = null
		//let oneClick = 0
		//let dblClick = 0
		console.log(method)

		setTimeout(() => {
			if (method === 'click') {
				//console.log('oneClick', this.oneClick)
				this.oneClick += 1
			} else {
				//console.log('dblClick', this.dblClick)
				this.dblClick += 1
			}

			this.render()
		}, 3000)

		//if (method === 'click') {
		//	setTimeout(() => {
		//		oneClick += 1
		//		console.log('oneClick', oneClick)
		//	}, 3000)
		//} else {
		//	setTimeout(() => {
		//		dblClick += 1
		//		console.log('dblClick', dblClick)
		//	}, 3000)
		//}
	}

	clickListener() {
		document.body.addEventListener('click', event => {
			console.log(event.detail)
			if (event.detail === 1) {
				this.counter('click')
			}
		})

		document.body.addEventListener(
			'dblclick',
			event => {
				//clearTimeout(oneCounter)
				//oneCounter = setTimeout(() => {
				//	dblClick += 1
				//	console.log('dblClick', dblClick)
				this.counter('dblclick')
			},
			3000
		)
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
