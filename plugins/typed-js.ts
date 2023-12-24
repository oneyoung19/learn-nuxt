import Typed from 'typed.js'

export default defineNuxtPlugin(nuxtApp => {
  // https://www.npmjs.com/package/typed.js
  if (typeof window !== 'undefined') {
    nuxtApp.Typed = Typed
  }
})
