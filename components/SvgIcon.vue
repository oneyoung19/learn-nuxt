<template>
  <svg class="svgclass" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style scoped lang='less'>
.svgclass {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: currentColor;
  // 保证与文字对齐
  vertical-align: top;
}
</style>
