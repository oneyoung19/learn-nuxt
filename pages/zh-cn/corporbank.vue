<template>
  <div class="corporbank">
    <div class="banner background">
      <div class="banner-container layout">
        <p class="title">快至<span class="point-text">1</span>天，</p>
        <p class="title">即可使用您的企业账户</p>
        <p class="desc">省时、高效、安全，为企业量身定制的银行帐户</p>
        <Button type="blue">获取账户</Button>
      </div>
    </div>
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
.corporbank {
  width: 100%;
  .banner {
    width: 100%;
    height: 720px;
    background-image: url('@/assets/image/corporbank/banner.png');
    background-size: cover;
    .banner-container {
      padding-top: 200px;
      .title {
        font-size: 60px;
        color: @topwhite;
        line-height: 80px;
        .point-text {
          display: inline-block;
          margin: 0 15px;
          font-size: 80px;
          color: @blue2;
          vertical-align: top;
          // line-height: 80px;
        }
      }
      .desc {
        margin: 60px 0;
        font-size: 24px;
        color: @gray5;
        line-height: 36px;
      }
    }
  }
}
</style>
