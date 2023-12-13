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
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          // 变量样式
          additionalData: '@import "@/assets/styles/variable/color.less";@import "@/assets/styles/variable/gradient.less";'
        }
      }
    }
  },
  // 全局样式
  css: ['~/assets/styles/reset.less', '~/assets/styles/global.less'],
  // 配置pathPrefix 以使组件名不采用路径
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
