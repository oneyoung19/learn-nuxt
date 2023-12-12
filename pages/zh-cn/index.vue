<template>
  <div>
    <div>zh-CN Home Page</div>
    <NuxtLink to="/en/about">About</NuxtLink>
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
</script>

<style scoped lang="less">
</style>
