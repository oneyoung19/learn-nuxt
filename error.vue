<template>
  <div class="error">
    <NotFound v-if="error.statusCode === 404" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '',
  meta: [
    { name: 'keywords', content: '' },
    { name: 'description', content: '' }
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
