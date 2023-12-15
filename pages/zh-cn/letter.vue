<template>
  <div class="letter">
    <div class="banner background">
      <div class="banner-container layout">
        <p class="title">提供完备的银行单证服务</p>
      </div>
    </div>
    <div class="switch"></div>
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
.letter {
  width: 100%;
  .banner {
    width: 100%;
    height: 600px;
    background-image: url('@/assets/image/letter/banner.png');
    background-size: cover;
    .banner-container {
      padding-top: 284px;
      .title {
        font-size: 60px;
        color: @topwhite;
        line-height: 80px;
      }
    }
  }
  .switch {
    width: 100%;
    height: 320px;
    background: @gray3;
  }
}
</style>
