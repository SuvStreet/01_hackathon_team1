import { Module } from '../core/module'

export class OwnModule extends Module {
  trigger() {
    const autors = this.createAutors()
    document.body.append(autors)
  }

  createCard(nameUser = 'Имя Пользователя', imgUser) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('img_user')
    img.src = `https://i.imgur.com/8JWYv2K.jpg`
    console.log('imgUser[0]', `${imgUser[0]}`)
    console.log('imgUser', imgUser)
    img.alt = 'InfoUser'
    img.style.width = '100%'

    const container = document.createElement('div')
    container.classList.add('container_cards')

    const h4 = document.createElement('h4')
    h4.innerHTML = `<strong>${nameUser}</strong>`

    const p = document.createElement('p')
    p.textContent = 'Описание карточки.'

    container.append(h4, p)
    card.append(img, container)

    return card
  }

  createAutors() {
    const autors = document.createElement('div')
    autors.className = 'autors'
    const allImage = this.getDataGitAutors()
    console.log('allImage', allImage)

    //Создать функцию по созданию карточек
    const card_1 = this.createCard('имя', allImage)
    const card_2 = this.createCard('имя', allImage)
    const card_3 = this.createCard('имя', allImage)
    const card_4 = this.createCard('имя', allImage)
    const card_5 = this.createCard('имя', allImage)
    autors.append(card_1, card_2, card_3, card_4, card_5)

    return autors
  }

  getDataGitAutors() {
    const image = []
    const URL_GITHUB = 'https://api.github.com/users/SuvStreet'
    async function findUser() {
      try {
        const responses = await fetch(URL_GITHUB)
        const infoUser = await responses.json()
        // console.log('infoUser', infoUser)
        image.push(infoUser.avatar_url)
      } catch (e) {
        console.log(e)
      }
    }
    findUser()
    // console.log('image', image)
    return image
  }
}

// async function findUser() {
//   try {
//     const responses = await fetch(URL_GITHUB)
//     const infoUser = await responses.json()
//     console.log('infoUser', infoUser)
//     console.log('infoUser.avatar_url', infoUser.avatar_url)
//     return infoUser.avatar_url
//   } catch (e) {
//     console.log(e)
//   }
// }
