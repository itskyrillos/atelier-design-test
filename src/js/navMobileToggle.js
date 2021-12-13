const hiddenMobileMenu = document.querySelector('.nav-mobile')
const buttonMobileMenu = document.querySelector('.nav-mobile__btn')

buttonMobileMenu.addEventListener('click', () => {
  hiddenMobileMenu.classList.toggle('--open')
})
