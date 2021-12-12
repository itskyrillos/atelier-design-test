import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.slider__pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.slider__btn__next',
    prevEl: '.slider__btn__prev'
  }
})
