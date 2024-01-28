import { Module } from '../core/module'

export class TimerModule extends Module {
  trigger() {
    const activeTimer = document.querySelector('.activeTimer')
    if (!activeTimer) {
      this.createModal()
      this.run()
    }
  }

  createModal() {
    const container = document.querySelector('.container')

    container.innerHTML = ''

    const titleTimer = document.createElement('span')
    titleTimer.classList.add('inputModal')
    titleTimer.textContent = 'Введите время для таймера'

    const form = document.createElement('form')
    form.id = 'input'
    form.textContent = 'Время (сек)'

    const newInput = document.createElement('input')
    newInput.type = 'number'
    newInput.className = 'input-form'
    newInput.name = 'timerValue'

    const newButton = document.createElement('div')
    newButton.className = 'btn'

    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Старт'

    form.append(newInput, newButton)
    newButton.append(btn)
    titleTimer.append(form)
    container.append(titleTimer)
  }

  run() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      
      const timerValue = event.target.elements.timerValue.value

      if (timerValue > 0) {
        this.removeModal()
        this.getFormatedTime(timerValue)
      } else alert('Введите время!')
    })
  }

  removeModal() {
    const removeModal = document.querySelector('.inputModal')
    if (removeModal) {
      removeModal.remove()
    }
  }

  getFormatedTime(timeValue) {
    let getMinutes = 0
    let getSeconds = 0

    if (timeValue < 60) {
      getMinutes = 0
      getSeconds = timeValue
    } else {
      getMinutes = Math.floor(timeValue / 60)
      getSeconds = timeValue % 60
    }

    this.showActiveTimer()
    this.startTimer(getMinutes, getSeconds)
  }

  showActiveTimer() {
    const container = document.querySelector('.container')

    const activeTimer = document.createElement('div')
    activeTimer.classList.add('activeTimer')

    const timerText = document.createElement('div')
    timerText.className = 'modalText'

    const closeBtn = document.createElement('img')
    closeBtn.src =
      'https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close'
    closeBtn.className = 'closeBtn'

    activeTimer.append(closeBtn, timerText)
    container.append(activeTimer)
  }

  startTimer(minutes, seconds) {
    this.showFormatedTimer(minutes, seconds)

    const timer = setInterval(() => {
      if (minutes > 0) {
        if (seconds > 0) {
          seconds -= 1
          this.showFormatedTimer(minutes, seconds)
        } else {
          minutes -= 1
          seconds += 59
          seconds -= 1
          this.showFormatedTimer(minutes, seconds)
        }
      } else if (seconds > 0) {
        seconds -= 1
        this.showFormatedTimer(minutes, seconds)
      } else {
        this.clearTimer(timer)
        this.showTimerEnd()

        setTimeout(() => {
          this.removeActiveTimer()
        }, 3000)
      }
    }, 1000)

    this.clickOnCloseBtn(timer)
  }

  showFormatedTimer(minutes, seconds) {
    const modalSeconds = document.querySelector('.modalText')
    if (modalSeconds) {
      if (String(minutes).length >= 2) {
        if (String(seconds).length == 2) {
          modalSeconds.textContent = `Таймер: ${minutes}.${seconds}`
        } else {
          modalSeconds.textContent = `Таймер: ${minutes}.0${seconds}`
        }
      } else if (String(seconds).length == 2) {
        modalSeconds.textContent = `Таймер: 0${minutes}.${seconds}`
      } else {
        modalSeconds.textContent = `Таймер: 0${minutes}.0${seconds}`
      }
    }
  }

  clearTimer(timer) {
    clearInterval(timer)
  }

  showTimerEnd() {
    const endTimer = document.querySelector('.modalText')
    endTimer.textContent = 'Таймер закончен!'
  }

  removeActiveTimer() {
    const removeActiveTimer = document.querySelector('.activeTimer')

    removeActiveTimer.remove()
    document.querySelector('.container').innerHTML =
      'Нажми на меня правой кнопкой мыши'
    document.querySelector('.container').classList.remove('timer')
  }

  clickOnCloseBtn(timer) {
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn.addEventListener('click', () => {
      this.clearTimer(timer)
      this.removeActiveTimer()
    })
  }
}
