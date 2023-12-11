<template>
  <div>about</div>
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
</script>

<style scoped lang="less">
</style>
