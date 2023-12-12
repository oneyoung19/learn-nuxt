<template>
  <div>
    <div>En About Page</div>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About' }
  ],
  bodyAttrs: {
    class: 'about'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<style scoped lang="less">
</style>
