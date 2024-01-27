import { Module } from '../core/module'
//import { img } from "../assets/close.png";

export class TimerModule extends Module {
  trigger() {
    //const removeTimerModal = document.querySelector(".timer");
    // if (removeTimerModal) {
    //   //removeTimerModal.className = "timerModal timerHiden";
    //   removeTimerModal.remove();
    //   this.removeModal();
    //   this.clearTimer(timer);
    // }
    this.createModal()
    this.showModal()
    this.run()
  }
  checkContainer() {}

  createModal() {
    const body = document.querySelector('body')
    const newContainer = document.createElement('div')
    newContainer.className = 'container hidden'
    newContainer.textContent = 'Введите время для таймера'
    body.append(newContainer)
    const form = document.createElement('form')
    form.id = 'input'
    form.textContent = 'Время (сек)'
    const newInput = document.createElement('input')
    newInput.className = 'input-form'
    newInput.name = 'timerValue'
    const newButton = document.createElement('div')
    newButton.className = 'btn'
    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Старт'
    form.append(newInput)
    form.append(newButton)
    newContainer.append(form)
    newButton.append(btn)
  }

  removeModal() {
    const removeModal = document.querySelector('.container')
    //removeModal.className = "container hidden";
    if (removeModal) {
      removeModal.remove()
      this.removeTimerModal()
    }
  }

  showModal() {
    const showModal = document.querySelector('.container')
    showModal.className = 'container'
  }

  removeTimerModal() {
    const removeTimerModal = document.querySelector('.timerModal')
    if (removeTimerModal) {
      removeTimerModal.className = 'timerModal timerHiden'
      removeTimerModal.remove()
    }
    const removeTimerContainer = document.querySelector('.container')
    if (removeTimerContainer) {
      removeTimerContainer.remove()
    }
  }

  showTimerModal() {
    const body = document.querySelector('body')
    const timerModal = document.createElement('div')
    timerModal.className = 'timerModal'
    const timerText = document.createElement('div')
    timerText.className = 'modalText'
    const closeBtn = document.createElement('img')
    closeBtn.src =
      'https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close'
    closeBtn.className = 'closeBtn'
    timerModal.append(closeBtn)
    timerModal.append(timerText)
    body.append(timerModal)
  }

  clickOnCloseBtn(timer) {
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn.addEventListener('click', (event) => {
      this.clearTimer(timer)
      this.removeTimerModal()
      //this.showModal();
    })
  }
  run() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const timerValue = event.target.elements.timerValue.value
      timerValue.trim()
      if (timerValue.length) {
        this.removeModal()
        this.getFormatedTime(timerValue)
        //timerValue.remove();
      } else alert('Введите время!')
    })
  }
  getFormatedTime(timeValue) {
    const getMinutes = Math.floor(timeValue / 60)
    const getSeconds = timeValue % 60
    this.showTimerModal()
    this.startTimer(getMinutes, getSeconds)
  }

  showFormatedTimer(minutes, seconds) {
    //this.clickOnCloseBtn();
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

  showTimerEnd() {
    const endTimer = document.querySelector('.modalText')
    endTimer.textContent = 'Таймер закончен!'
  }

  clearTimer(timer) {
    clearInterval(timer)
  }

  startTimer(minutes, seconds) {
    const timer = setInterval(() => {
      if (minutes > 0) {
        if (seconds > 0) {
          this.showFormatedTimer(minutes, seconds)
          seconds -= 1
        } else {
          minutes -= 1
          seconds += 59
          this.showFormatedTimer(minutes, seconds)
          seconds -= 1
        }
      } else if (seconds > 0) {
        this.showFormatedTimer(minutes, seconds)
        seconds -= 1
      } else {
        this.showFormatedTimer(minutes, seconds)
        this.showTimerEnd()
        setTimeout(() => {
          this.removeTimerModal()
        }, 3000)
        this.clearTimer(timer)
      }
    }, 1000)
    this.clickOnCloseBtn(timer)
  }
}
