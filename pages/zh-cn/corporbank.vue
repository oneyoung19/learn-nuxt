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
    <div class="channel">
      <div class="channel-container layout">
        <div class="channel-left">
          <p class="title">贸易无国界，</p>
          <p class="title">轻松应对每一笔收付款</p>
          <ToggleTab
            class="channel-list"
            v-model="activeChannel"
            :list="channelList">
          </ToggleTab>
        </div>
        <div class="channel-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeChannel: 'global',
      channelList: [
        { label: '全球贸易收款', value: 'global', iconName: 'wallet-deep', activeIconName: 'wallet-light' },
        { label: '电商平台收款', value: 'ecommerce', iconName: 'bag-deep', activeIconName: 'bag-light' },
        { label: '国际投融资', value: 'internation', iconName: 'cross-deep', activeIconName: 'cross-light' }
      ]
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
  .channel {
    height: 800px;
    background-color: @topwhite;
    .channel-container {
      display: flex;
      padding-top: 120px;
      .channel-left {
        padding-top: 36px;
        .title {
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        .channel-list {
          margin-top: 60px;
        }
      }
      .channel-right {}
    }
  }
}
</style>
