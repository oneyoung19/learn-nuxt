// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
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
    },
    plugins: [
      // vite处理svg https://www.cnblogs.com/lovewhatIlove/p/16879581.html
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons/svg')]
      }),
      // https://cloud.tencent.com/developer/ask/sof/106787568
      {
        src: '@/plugins/aos.js',
        ssr: false,
        mode: 'client'
      }
    ]
  },
  // 全局样式
  css: ['~/assets/styles/reset.less', '~/assets/styles/global.less', '~/assets/styles/animate.less', 'animate.css/animate.css'],
  // 配置pathPrefix 以使组件名不采用路径
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
