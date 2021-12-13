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
  delay: 1,
  duration: 1.4,
  y: -300,
  ease: 'power4.in',
  skewY: 9,
  transformOrigin: 'right center'
}).to('.loader', {
  delay: -0.2,
  duration: 1.5,
  ease: 'power4.out',
  transformOrigin: 'top left',
  scaleY: 0
})
