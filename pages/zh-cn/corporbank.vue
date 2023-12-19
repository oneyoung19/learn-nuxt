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
        <div
          class="channel-right background"
          :class="activeChannel">
          <div
            class="global-bg background"
            v-show="activeChannel === 'global'">
            <div class="global-img global-usd">
              <img src="@/assets/image/corporbank/global-usd.png" alt="">
            </div>
            <div class="global-img global-gbp">
              <img src="@/assets/image/corporbank/global-gbp.png" alt="">
            </div>
            <div class="global-img global-cad">
              <img src="@/assets/image/corporbank/global-cad.png" alt="">
            </div>
            <div class="global-img global-eur">
              <img src="@/assets/image/corporbank/global-eur.png" alt="">
            </div>
          </div>
          <div
            class="ecommerce-bg background"
            v-show="activeChannel === 'ecommerce'">
            <div class="ecommerce-img ecommerce-wish">
              <img src="@/assets/image/corporbank/wish.png" alt="">
            </div>
            <div class="ecommerce-img ecommerce-tiktok">
              <img src="@/assets/image/corporbank/tiktok.png" alt="">
            </div>
            <div class="ecommerce-img ecommerce-ebay">
              <img src="@/assets/image/corporbank/ebay.png" alt="">
            </div>
            <div class="ecommerce-img ecommerce-amazon">
              <img src="@/assets/image/corporbank/amazon.png" alt="">
            </div>
            <div class="ecommerce-img ecommerce-shopify">
              <img src="@/assets/image/corporbank/shopify.png" alt="">
            </div>
          </div>
          <div
            class="internation-bg background"
            v-show="activeChannel === 'internation'">
            <div class="internation-amount">
              <img src="@/assets/image/corporbank/internation-amount.png" alt="">
            </div>
            <div class="internation-arrow">
              <img src="@/assets/image/corporbank/internation-arrow.png" alt="">
            </div>
          </div>
        </div>
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
      justify-content: space-between;
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
      .channel-right {
        width: 558px;
        height: 558px;
        &.global {
          background-image: url('@/assets/image/corporbank/channel-bg-01.png');
        }
        &.ecommerce {
          background-image: url('@/assets/image/corporbank/channel-bg-02.png');
        }
        &.internation {
          background-image: url('@/assets/image/corporbank/channel-bg-03.png');
        }
        .global-bg {
          position: relative;
          margin-top: 48px;
          width: 100%;
          height: 428px;
          background-image: url('@/assets/image/corporbank/global-bg.png');
          .global-img {
            position: absolute;
            width: 194px;
            height: 110px;
          }
          .global-usd {
            top: 168px;
            left: -60px;
          }
          .global-gbp {
            top: 312px;
            left: 27px;
          }
          .global-cad {
            top: 322px;
            right: -20px;
          }
          .global-eur {
            top: 178px;
            right: -102px;
          }
        }
        .ecommerce-bg {
          position: relative;
          margin-top: 100px;
          width: 100%;
          height: 358px;
          background-image: url('@/assets/image/corporbank/ecommerce-bg.png');
          .ecommerce-img {
            position: absolute;
            width: 140px;
            height: 90px;
          }
          .ecommerce-wish {
            top: -60px;
            left: 288px;
          }
          .ecommerce-tiktok {
            top: 105px;
            right: -55px;
          }
          .ecommerce-ebay {
            bottom: -70px;
            right: 160px;
          }
          .ecommerce-amazon {
            width: 234px;
            height: 144px;
            left: 104px;
            bottom: -18px;
          }
          .ecommerce-shopify {
            left: -10px;
            bottom: -28px;
          }
        }
        .internation-bg {
          position: relative;
          margin: 88px auto 0;
          width: 380px;
          height: 378px;
          background-image: url('@/assets/image/corporbank/internation-bg.png');
          .internation-amount {
            position: absolute;
            top: 120px;
            left: -136px;
            width: 264px;
            height: 194px;
          }
          .internation-arrow {
            position: absolute;
            right: 40px;
            bottom: 18px;
            width: 104px;
            height: 104px;
          }
        }
      }
    }
  }
}
</style>
