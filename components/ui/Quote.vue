<template>
  <div class="quote">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.quote {
  position: relative;
  padding-left: 24px;
  font-size: 16px;
  color: @blank3;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: @blue;
  }
}
</style>
