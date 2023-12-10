<template>
  <h1>{{ appConfig.title }}</h1>
  <div>app alert</div>
</template>

<script>
export default {
  data () {
    const appConfig = useAppConfig()
    return {
      appConfig
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
