<template>
  <div class="error">
    <Page404 v-if="error.statusCode === 404" />
  </div>
</template>

<script setup lang="ts">
import Page404 from '@/components/404.vue'

useHead({
  title: 'error - CBiBank',
  meta: [
    { name: 'keywords', content: 'cbi,CBiBank,富港银行,富港银行官网,富港,富港科技,富港技术,美国银行,离岸银行开户,境外银行开户,国际银行,出口企业收款' },
    { name: 'description', content: 'CBiBank富港银行是一家持有美国银行牌照的美国商业银行，致力于为出口企业、进口企业、跨境电商以及出海企业和个人投资者用户提供一站式的全球金融解决方案，包括境外银行开户、跨境汇款、跨境支付、全球贸易收款等，离岸银行开户高效快捷，国际汇款安全，支持中英双语跨时区在线服务，富港银行将科技技术创新和金融创新为依托，持续推出丰富多元、适应用户需求的国际银行服务。site.' }
  ]
})

const props = defineProps({
  error: Object
})

function handleError () {
  clearError({ redirect: '/' })
}
</script>

<style scoped lang="less">
.error {
  width: 100vw;
  min-height: 100vh;
  color: @topwhite;
  background-color: @blank;
}
</style>
