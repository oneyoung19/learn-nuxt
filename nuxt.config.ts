// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          // 变量样式
          additionalData: '@import "@/assets/styles/variable/color.less";@import "@/assets/styles/variable/gradient.less";@import "@/assets/styles/variable/size.less";'
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
        src: '@/plugins/aos',
        ssr: false,
        mode: 'client'
      },
      // TODO:什么情况下 这里需要配置
      // {
      //   src: '@/plugins/click-outside.ts',
      //   ssr: false,
      //   mode: 'client'
      // }
    ]
  },
  // 全局样式
  css: [
    '~/assets/styles/reset.less',
    '~/assets/styles/global.less',
    'animate.css/animate.css',
    '~/assets/styles/animation/index.js',
    'element-plus/dist/index.css',
    '~/assets/styles/element/index.js'
  ],
  // 配置pathPrefix 以使组件名不采用路径
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  // https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
  modules: ['@element-plus/nuxt', '@formkit/auto-animate/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  elementPlus: {
    // https://github.com/element-plus/element-plus-nuxt/issues/77
    importStyle: false
  },
  build: {
    // https://www.npmjs.com/package/vue-countup-v3
    transpile: ['vue-countup-v3']
  }
})
