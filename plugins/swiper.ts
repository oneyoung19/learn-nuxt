import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

export default defineNuxtPlugin(nuxtApp => {
  // if (typeof window !== 'undefined') {
  //   nuxtApp.vueApp.component('Swiper', Swiper)
  //   nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
  // }
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
})
