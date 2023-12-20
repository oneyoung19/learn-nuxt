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
    <div class="efficiency">
      <div class="efficiency-container layout">
        <div class="efficiency-left background">
          <div class="efficiency-img efficiency-usd">
            <img src="@/assets/image/corporbank/efficiency-usd.png" alt="">
          </div>
          <div class="efficiency-img efficiency-cad">
            <img src="@/assets/image/corporbank/efficiency-cad.png" alt="">
          </div>
        </div>
        <div class="efficiency-right">
          <p class="title">收款速度更快，为您节省更多时间</p>
          <p class="desc">通过智能风控系统实现款项到账即时完成相关风险排查，结合自动化风险评估体系，为您带来更快、更安全的收款体验。</p>
        </div>
      </div>
    </div>
    <div class="letter">
      <div class="letter-container layout">
        <SwitchTab
          v-model="activeTab"
          :list="tabList">
        </SwitchTab>
        <ul class="letter-list">
          <li class="letter-item" v-show="activeTab === 'credit'">
            <div class="letter-item-left">
              <p class="title">满足客户信用证结算需求</p>
              <p class="desc">支持美元、欧元、人民币等主流币种的具有真实贸易背景的信用证相关服务，与全球主要高资信评级银行建立信用证合作关系。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right credit background">
              <div class="letter-credit-img">
                <img src="@/assets/image/corporbank/letter-credit-01.png" alt="">
              </div>
              <div class="letter-credit-img">
                <img src="@/assets/image/corporbank/letter-credit-02.png" alt="">
              </div>
              <div class="letter-credit-img">
                <img src="@/assets/image/corporbank/letter-credit-03.png" alt="">
              </div>
            </div>
          </li>
          <li class="letter-item" v-show="activeTab === 'documentary'">
            <div class="letter-item-left">
              <p class="title">协助客户完成进出口托收业务</p>
              <p class="desc">支持美元、欧元、人民币等主流货币的进口代收、出口托收业务，接受或委托代理行为客户提供托收业务中涉及的单据提示、单据交付等服务。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right documentary background">
              <div class="letter-documentary-img">
                <img src="@/assets/image/corporbank/letter-documentary-01.png" alt="">
              </div>
              <div class="letter-documentary-img">
                <img src="@/assets/image/corporbank/letter-documentary-02.png" alt="">
              </div>
            </div>
          </li>
          <li class="letter-item" v-show="activeTab === 'guarantee'">
            <div class="letter-item-left">
              <p class="title">解决客户保函业务需求</p>
              <p class="desc">支持美元、欧元、人民币等主流货币的投标保函、预付款保函、履约保函、付款保函、融资保函等保函类服务。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right guarantee">
              <div class="letter-guarantee-img">
                <img src="@/assets/image/corporbank/letter-guarantee-01.png" alt="">
              </div>
              <div class="letter-guarantee-img">
                <img src="@/assets/image/corporbank/letter-guarantee-02.png" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="lock">
      <div class="lock-container layout">
      </div>
    </div>
    <div class="cards">
      <div class="cards-container layout"></div>
    </div>
    <div class="salary">
      <div class="salary-container layout"></div>
    </div>
    <div class="fund">
      <div class="fund-container layout"></div>
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
      ],
      activeTab: 'credit',
      tabList: [
        { value: 'credit', label: '信用证业务', labelEn: '(Letter of Credit)' },
        { value: 'documentary', label: '跟单托收业务', labelEn: '(Documentary Collections)' },
        { value: 'guarantee', label: '保函业务', labelEn: '(Letter of Guarantee)' }
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
  .efficiency {
    height: 700px;
    background-color: @gray3;
    .efficiency-container {
      display: flex;
      padding-top: 224px;
      .efficiency-left {
        position: relative;
        margin-right: 116px;
        width: 574px;
        height: 320px;
        background-image: url('@/assets/image/corporbank/efficiency-bg.png');
        .efficiency-img {
          position: absolute;
          width: 360px;
          height: 230px;
        }
        .efficiency-usd {
          top: -120px;
          left: -78px;
        }
        .efficiency-cad {
          right: -36px;
          bottom: -45px;
        }
      }
      .efficiency-right {
        flex: 1;
        padding-top: 28px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
      }
    }
  }
  .letter {
    height: 885px;
    background-color: @topwhite;
    .letter-container {
      padding-top: 100px;
      .letter-list {
        display: flex;
        width: 100%;
        padding-top: 34px;
        overflow: hidden;
        .letter-item {
          display: flex;
          width: 100%;
          min-width: 100%;
          .letter-item-left {
            flex: 1;
            padding-top: 126px;
            .title {
              margin-bottom: 40px;
              font-size: 40px;
              color: @blank;
              line-height: 40px;
            }
            .desc {
              margin-bottom: 100px;
              font-size: 18px;
              color: @blank2;
              line-height: 40px;
            }
          }
          .letter-item-right {
            position: relative;
            &.credit {
              width: 594px;
              height: 594px;
              margin-left: 89px;
              background-image: url('@/assets/image/corporbank/letter-credit-bg.png');
              .letter-credit-img {
                position: absolute;
                &:nth-child(1) {
                  top: 58px;
                  right: 30px;
                  width: 267px;
                  height: 152px;
                }
                &:nth-child(2) {
                  top: 159px;
                  right: 68px;
                  width: 459px;
                  height: 251px;
                }
                &:nth-child(3) {
                  left: -22px;
                  bottom: 0;
                  width: 246px;
                  height: 311px;
                }
              }
            }
            &.documentary {
              width: 607px;
              height: 493px;
              margin-left: 45px;
              margin-top: 54px;
              background-image: url('@/assets/image/corporbank/letter-documentary-bg.png');
              .letter-documentary-img {
                position: absolute;
                &:nth-child(1) {
                  top: 44px;
                  right: 0;
                  width: 464px;
                  height: 272px;
                }
                &:nth-child(2) {
                  top: 289px;
                  right: 164px;
                  width: 28px;
                  height: 58px;
                }
              }
            }
            &.guarantee {
              width: 557px;
              height: 556px;
              margin-left: 126px;
              margin-top: 30px;
              .letter-guarantee-img {
                position: absolute;
                &:nth-child(1) {
                  top: 0;
                  left: 0;
                  width: 363px;
                  height: 483px;
                }
                &:nth-child(2) {
                  top: 106px;
                  left: 165px;
                  width: 392px;
                  height: 450px;
                }
              }
            }
          }
        }
      }
    }
  }
  // .efficiency {
  //   height: 700px;
  //   background-color: @gray3;
  //   .efficiency-container {
  //     display: flex;
  //     padding-top: 140px;
  //   }
  // }
}
</style>
