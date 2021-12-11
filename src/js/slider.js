import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.slider__pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__btn__prev',
    prevEl: '.slider__btn__next'
  }

})
