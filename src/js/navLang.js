const hiddenLangMenu = document.querySelector('.nav__lang')
const buttonLangList = document.querySelector('.nav__lang__btn')

buttonLangList.addEventListener('click', () => {
  hiddenLangMenu.classList.toggle('--open')
})
