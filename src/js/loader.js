import { gsap } from 'gsap'

const tl = gsap.timeline()

tl.from('.loader__image',
  {
    delay: 0.5,
    duration: 1.4,
    y: 300,
    ease: 'power4.out',
    skewY: 9
  }
).to('.loader__image', {
  delay: 0.5,
  duration: 1.4,
  y: -300,
  ease: 'power4.in',
  skewY: 9,
  transformOrigin: 'right center'
}).to('.loader', {
  duration: 1.5,
  ease: 'power4.out',
  transformOrigin: 'top left',
  scaleY: 0
}, '>-0.1').from('.hero__left', {
  duration: 1,
  ease: 'power4.inOut',
  opacity: 0,
  immediateRender: true
}, '>-1').from('.hero__right', {
  duration: 1,
  ease: 'power4.inOut',
  opacity: 0,
  immediateRender: true
}, '>-0.5')
