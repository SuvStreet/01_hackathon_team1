import { Menu } from "./core/menu"
import { BackgroundModule } from "./modules/background.module"
import { ClicksModule } from "./modules/clicks.module"
import { MessageModule } from "./modules/message.module"
import { ShapeModule } from "./modules/shape.module"
import { SoundModule } from "./modules/sound.module"
import { TimerModule } from "./modules/timer.module"

const ArrayOfModules = [
  new BackgroundModule("background", "Случайный фон"),
  new ClicksModule("clicks", "Аналитика кликов (3 секунды)"),
  new MessageModule("message", "Сообщения"),
  new ShapeModule("shape", "Фигуры"),
  new SoundModule("sound", "Звуки"),
  new TimerModule("timer", "Таймер"),
]

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
    this.menu = document.querySelector("#menu")
  }

  open() {
    this.el.addEventListener("contextmenu", (event) => {
      event.preventDefault()
      this.menu.style.top = `${event.clientY}px`
      this.menu.style.left = `${event.clientX}px`
      this.add()
      this.close()
    })

    this.menu.addEventListener("click", (event) => {
      event.stopPropagation()
      ArrayOfModules.find(module => module.type === event.target.dataset.type).trigger()
      document.querySelector('.container').classList.add(event.target.dataset.type)
      this.menu.classList.remove('open')
    })
  }

  close() {
    this.el.addEventListener("click", () => {
      this.menu.classList.remove("open")
    })
  }

  add() {
    this.menu.classList.add("open")
    this.menu.innerHTML = ArrayOfModules.map((module) => module.toHTML()).join(
      ""
    )
  }
}
