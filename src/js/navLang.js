const hiddenLangMenu = document.querySelector('.nav__lang')
const buttonLangList = document.querySelector('.nav__lang__btn')

buttonLangList.addEventListener('click', (e) => {
  hiddenLangMenu.classList.toggle('--open')
})
