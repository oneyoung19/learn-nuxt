<template>
  <div>
    <div>Home Page</div>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'index'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
await navigateTo('/en')
</script>

<style scoped lang="less">
</style>
