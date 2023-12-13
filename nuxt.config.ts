// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  // 全局样式
  css: ['~/assets/styles/global.less'],
  // 配置pathPrefix 以使组件名不采用路径
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
