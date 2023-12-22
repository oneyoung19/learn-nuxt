import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(nuxtApp => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = new AOS.init({
      offset: 600,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
  }
})
