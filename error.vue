<template>
  <div class="error">
    <h2>{{ error.statusCode }}</h2>
    <Button type="blue" @click="handleError">返回首页</Button>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleError () {
      clearError({ redirect: '/' })
    }
  }
}
</script>

<style scoped lang="less">
.error {
  width: 100vw;
  height: 100vh;
  color: @topwhite;
  background-color: @blank;
}
</style>
