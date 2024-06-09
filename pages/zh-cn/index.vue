<template>
  <div>
    <p>中文简体首页</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  created () {
    // SSR相对SSG有两个优点：
    // 1.SEO更好 譬如https://example.com?query=usd_to_rmb该查询字符串 在SSR中的HTML能够直接渲染出usd_to_rmb 而SSG需要借助浏览器渲染
    // 2.数据更新更友好 SSG的数据更新是借助JS渲染之后才能完成的 而SSR在服务端的渲染逻辑能够在某种程度上减少该开销
    // SSR的缺点 在于：
    // 1.beforeCreate created等生命周期在服务端会执行一次 在客户端也会执行一次
    // 2.beforeMount mounted生命周期只会在客户端执行
    // 3.对服务器有压力 需要做好服务器负载
    this.count = 100
    console.log('count', this.count)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
