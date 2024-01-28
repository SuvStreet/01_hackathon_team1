import { Module } from "../core/module"
//import { img } from "../assets/close.png";

export class TimerModule extends Module {
  trigger(timer) {
    const timerModal = document.querySelector(".timerModal")
    if (timerModal) {
      this.clearTimer(timer)
      timerModal.classList.remove("timerModal")
    }

    this.createModal()
    //this.showModal()
    this.run()
  }

  createModal() {
    const container = document.querySelector(".container")

    container.innerHTML = ""

    const titleTimer = document.createElement("span")
    titleTimer.classList.add("inputModal")
    titleTimer.textContent = "Введите время для таймера"

    const form = document.createElement("form")
    form.id = "input"
    form.textContent = "Время (сек)"

    const newInput = document.createElement("input")
    newInput.className = "input-form"
    newInput.name = "timerValue"

    const newButton = document.createElement("div")
    newButton.className = "btn"

    const btn = document.createElement("button")
    btn.type = "submit"
    btn.textContent = "Старт"

    form.append(newInput, newButton)
    newButton.append(btn)
    titleTimer.append(form)
    container.append(titleTimer)
  }

  removeModal() {
    const removeModal = document.querySelector(".inputModal")
    if (removeModal) {
      removeModal.remove()
    }
  }

  // showModal() {
  //   // const showModal = document.querySelector('.timer')
  //   // showModal.className = 'timer container'
  // }

  removeTimerModal() {
    const removeTimerClass = document.querySelector(".timerModal")

    const removeTimerModal = document.querySelector(".startTimerModal")
    if (removeTimerModal) {
      removeTimerClass.classList.remove("timerModal")
      removeTimerModal.remove()
      document.querySelector(".container").innerHTML =
        "Нажми на меня правой кнопкой мыши"
      document.querySelector(".container").classList.remove("timer")
    }
  }

  showTimerModal() {
    const container = document.querySelector(".container")
    container.classList.add("timerModal")
    container.classList.remove("timer")

    const timerModal = document.createElement("div")
    timerModal.className = "startTimerModal"

    const timerText = document.createElement("div")
    timerText.className = "modalText"

    const closeBtn = document.createElement("img")
    closeBtn.src =
      "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
    closeBtn.className = "closeBtn"

    timerModal.append(closeBtn, timerText)
    container.append(timerModal)
  }

  clickOnCloseBtn(timer) {
    const closeBtn = document.querySelector(".closeBtn")
    closeBtn.addEventListener("click", () => {
      this.clearTimer(timer)
      this.removeTimerModal()
      //this.showModal();
    })
  }

  clickOnMenu(timer) {
    const menu = document.querySelector(".timerModal")
    menu.addEventListener("click", () => {
      this.clearTimer(timer)
    })
  }

  run() {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const timerValue = event.target.elements.timerValue.value
      timerValue.trim()
      if (timerValue.length) {
        this.getFormatedTime(timerValue)
        this.removeModal()
        //timerValue.remove();
      } else alert("Введите время!")
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
    const modalSeconds = document.querySelector(".modalText")
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
    const endTimer = document.querySelector(".modalText")
    endTimer.textContent = "Таймер закончен!"
  }

  clearTimer(timer) {
    clearInterval(timer)
  }

  showTimerInfo(minutes, seconds) {
    console.log(minutes)
    console.log(seconds)
    if (minutes > 0) {
      if (seconds > 0) {
        seconds -= 1
        this.showFormatedTimer(minutes, seconds)
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
      //this.clearTimer(timer)
    }
  }

  startTimer(minutes, seconds) {
    this.showFormatedTimer(minutes, seconds)
    //this.showTimerInfo(minutes, seconds)
    if (minutes > 0) {
      if (seconds > 0) {
        seconds -= 1
        this.showFormatedTimer(minutes, seconds)
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
    }

    const timer = setInterval(() => {
      //this.showTimerInfo(minutes, seconds)
      if (minutes > 0) {
        if (seconds > 0) {
          seconds -= 1
          this.showFormatedTimer(minutes, seconds)
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
    this.clickOnMenu(timer)
  }
}
