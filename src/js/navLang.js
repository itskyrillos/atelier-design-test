const hiddenLangMenu = document.querySelector('.nav__lang')
const buttonLangToggle = document.querySelector('.nav__lang__btn')

const langToggle = event => {
  event.stopPropagation()

  if (!event.target.closest('.nav__lang__list')) {
    hiddenLangMenu.classList.toggle('--open')

    hiddenLangMenu.classList.contains('--open')
      ? document.addEventListener('click', langToggle)
      : document.removeEventListener('click', langToggle)
  }
}

buttonLangToggle.addEventListener('click', langToggle)
