import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    scroll.update()
  }, 200)
})
window.addEventListener('resize', () => {
  scroll.update()
})

const target = document.querySelector('.home__about')
const anchor = document.querySelector('.hero__scroll')

anchor.addEventListener('click', () => {
  scroll.scrollTo(target)
})
