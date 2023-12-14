<template>
  <div>
    <div style="height: 600px;">zh-CN Home Page</div>
    <NuxtLink to="/en/about">About</NuxtLink>
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">sassasasasasas</div>
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
