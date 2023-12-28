<template>
  <div class="corporbank">
    <div class="banner background">
      <div class="banner-container layout" data-aos="fade-up">
        <p class="title">快至<span class="point-text">1</span>天，</p>
        <p class="title">即可使用您的企业账户</p>
        <p class="desc">省时、高效、安全，为企业量身定制的银行帐户</p>
        <Button type="blue">获取账户</Button>
      </div>
    </div>
    <div class="channel">
      <div class="channel-container layout">
        <div
          class="channel-left">
          <div v-if="activeChannel === 'global'">
            <p class="title" data-aos="fade" data-aos-offset="0">贸易无国界，</p>
            <p class="title" data-aos="fade" data-aos-delay="100">轻松应对每一笔收付款</p>
          </div>
          <div v-if="activeChannel === 'ecommerce'">
            <p class="title" data-aos="fade" data-aos-offset="0">一个帐户，</p>
            <p class="title" data-aos="fade" data-aos-delay="100">管理多个电商平台收款</p>
          </div>
          <div v-if="activeChannel === 'internation'">
            <p class="title" data-aos="fade" data-aos-offset="0">金融创新，</p>
            <p class="title" data-aos="fade" data-aos-delay="100">全球投融资便利化</p>
          </div>
          <ToggleTab
            class="channel-list"
            data-aos="fade-up"
            data-aos-delay="200"
            v-model="activeChannel"
            :list="channelList"
            @change="handleToggleTab">
          </ToggleTab>
        </div>
        <div
          class="channel-right background"
          data-aos="fade-up"
          :class="activeChannel">
          <div
            class="global-bg background"
            data-aos="fade-up"
            data-aos-delay="250"
            v-if="activeChannel === 'global'"
            key="global">
            <div
              class="global-img global-usd"
              data-aos="fade-right"
              data-aos-delay="400"
              key="global">
              <img src="@/assets/image/corporbank/global-usd.png" alt="">
            </div>
            <div
              class="global-img global-gbp"
              data-aos="fade-up"
              data-aos-delay="400"
              key="global">
              <img src="@/assets/image/corporbank/global-gbp.png" alt="">
            </div>
            <div
              class="global-img global-cad"
              data-aos="fade-up"
              data-aos-delay="400"
              key="global">
              <img src="@/assets/image/corporbank/global-cad.png" alt="">
            </div>
            <div
              class="global-img global-eur"
              data-aos="fade-left"
              data-aos-delay="400"
              key="global">
              <img src="@/assets/image/corporbank/global-eur.png" alt="">
            </div>
          </div>
          <div
            class="ecommerce-bg background"
            data-aos="fade-up"
            data-aos-delay="250"
            v-if="activeChannel === 'ecommerce'"
            key="ecommerce">
            <div
              class="ecommerce-img ecommerce-wish"
              data-aos="fade-down"
              data-aos-delay="400"
              key="ecommerce">
              <img src="@/assets/image/corporbank/wish.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-tiktok"
              data-aos="fade-left"
              data-aos-delay="400"
              key="ecommerce">
              <img src="@/assets/image/corporbank/tiktok.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-ebay"
              data-aos="fade-up-left"
              data-aos-delay="400"
              key="ecommerce">
              <img src="@/assets/image/corporbank/ebay.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-amazon"
              data-aos="fade-up"
              data-aos-delay="400"
              key="ecommerce">
              <img src="@/assets/image/corporbank/amazon.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-shopify"
              data-aos="fade-right"
              data-aos-delay="400"
              key="ecommerce">
              <img src="@/assets/image/corporbank/shopify.png" alt="">
            </div>
          </div>
          <div
            class="internation-bg background"
            data-aos="fade-up"
            data-aos-delay="250"
            v-if="activeChannel === 'internation'"
            key="internation">
            <div
              class="internation-amount"
              data-aos="fade-right"
              data-aos-delay="400"
              key="internation">
              <img src="@/assets/image/corporbank/internation-amount.png" alt="">
            </div>
            <div
              class="internation-arrow"
              data-aos="fade-up-left"
              data-aos-delay="400"
              key="internation">
              <img src="@/assets/image/corporbank/internation-arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="efficiency">
      <div class="efficiency-container layout">
        <div class="efficiency-left background" data-aos="fade">
          <div class="efficiency-img efficiency-usd" data-aos="fade-down" data-aos-delay="1000">
            <img src="@/assets/image/corporbank/efficiency-usd.png" alt="">
          </div>
          <div class="efficiency-img efficiency-dashed-line">
            <img src="@/assets/image/corporbank/efficiency-dashed-line.png" alt="" data-aos="aos-c-animate-padding">
          </div>
          <div class="efficiency-img efficiency-cad" data-aos="fade-up" data-aos-delay="1800">
            <img src="@/assets/image/corporbank/efficiency-cad.png" alt="">
          </div>
        </div>
        <div class="efficiency-right" data-aos="fade-left" data-aos-delay="3000">
          <p class="title">收款速度更快，为您节省更多时间</p>
          <p class="desc">通过智能风控系统实现款项到账即时完成相关风险排查，结合自动化风险评估体系，为您带来更快、更安全的收款体验。</p>
        </div>
      </div>
    </div>
    <div class="letter">
      <div class="letter-container layout" data-aos="fade-up" data-aos-offset="200">
        <SwitchTab
          v-model="activeTab"
          :list="tabList"
          border>
        </SwitchTab>
        <ul class="letter-list">
          <li class="letter-item" v-if="activeTab === 'credit'">
            <div
              class="letter-item-left"
              data-aos="fade">
              <p class="title">满足客户信用证结算需求</p>
              <p class="desc">支持美元、欧元、人民币等主流币种的具有真实贸易背景的信用证相关服务，与全球主要高资信评级银行建立信用证合作关系。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right credit background" data-aos="fade" key="credit">
              <div class="letter-credit-img" data-aos="fade-down" data-aos-delay="400">
                <img src="@/assets/image/corporbank/letter-credit-01.png" alt="">
              </div>
              <div class="letter-credit-img" data-aos="fade-up" data-aos-delay="200">
                <img src="@/assets/image/corporbank/letter-credit-02.png" alt="">
              </div>
              <div class="letter-credit-img" data-aos="fade-up" data-aos-delay="400">
                <img src="@/assets/image/corporbank/letter-credit-03.png" alt="">
              </div>
            </div>
          </li>
          <li class="letter-item" v-if="activeTab === 'documentary'">
            <div
              class="letter-item-left"
              data-aos="fade">
              <p class="title">协助客户完成进出口托收业务</p>
              <p class="desc">支持美元、欧元、人民币等主流货币的进口代收、出口托收业务，接受或委托代理行为客户提供托收业务中涉及的单据提示、单据交付等服务。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right documentary background" data-aos="fade" key="documentary">
              <div class="letter-documentary-img">
                <img src="@/assets/image/corporbank/letter-documentary-01.png" alt="">
              </div>
              <div class="letter-documentary-img">
                <img src="@/assets/image/corporbank/letter-documentary-02.png" alt="">
              </div>
            </div>
          </li>
          <li class="letter-item" v-if="activeTab === 'guarantee'">
            <div
              class="letter-item-left"
              data-aos="fade">
              <p class="title">解决客户保函业务需求</p>
              <p class="desc">支持美元、欧元、人民币等主流货币的投标保函、预付款保函、履约保函、付款保函、融资保函等保函类服务。</p>
              <Button type="blank" :arrow-config="{ moving: true }">了解详情</Button>
            </div>
            <div class="letter-item-right guarantee" data-aos="fade" key="guarantee">
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
        <div class="lock-left background" data-aos="fade-right">
          <div class="lock-img-01">
            <img src="@/assets/image/corporbank/lock-img-01.png" alt="">
          </div>
        </div>
        <div class="lock-right" data-aos="fade-left">
          <p class="title">灵活锁汇，为您智慧避险</p>
          <p class="desc">我们提供灵活的“锁汇”即远期结售汇服务，极大限度的帮助企业规避汇率风险。</p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container layout">
        <div class="cards-left">
          <p class="title" data-aos="fade-up">全球随心刷，生活更简单</p>
          <p class="desc" data-aos="fade-up">在全球范围内都可使用的CBiBank企业借记卡，全球ATM取现，商场消费、POS刷卡和采购等。</p>
          <CardUseList
            class="use-list"
            data-aos="fade-up"
            :list="useList">
          </CardUseList>
          <Button
            data-aos="fade-up"
            type="blank"
            :arrow-config="{ moving: true }">
            获取卡片
          </Button>
          <div
            class="cards-bg"
            data-aos="fade-up-left"
            data-aos-offset="400"
            data-aos-delay="200"
            data-aos-duration="1000">
            <img src="@/assets/image/corporbank/cards-bg.png" alt="">
          </div>
        </div>
        <!-- <div class="cards-right"></div> -->
      </div>
    </div>
    <div class="salary">
      <div class="salary-container layout">
        <div class="salary-left background" data-aos="fade-right">
          <div class="salary-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="@/assets/image/corporbank/salary-img-01.png" alt="">
          </div>
          <div class="salary-img" data-aos="zoom-in" data-aos-delay="400">
            <img src="@/assets/image/corporbank/salary-img-02.png" alt="">
          </div>
          <div class="salary-img" data-aos="zoom-in" data-aos-delay="600">
            <img src="@/assets/image/corporbank/salary-img-03.png" alt="">
          </div>
          <div class="salary-img" data-aos="zoom-in" data-aos-delay="800">
            <img src="@/assets/image/corporbank/salary-img-04.png" alt="">
          </div>
        </div>
        <div class="salary-right" data-aos="fade-left">
          <p class="title">跨国企业向本地人进行工资发放</p>
          <p class="desc">全球地区支付员工薪资，无论员工选择在哪里工作，在几分钟内为世界各地的员工进行工资发放。</p>
        </div>
      </div>
    </div>
    <div class="fund">
      <div class="fund-container layout">
        <div class="fund-left">
          <p class="title" data-aos="fade-up">更高效的多类型企业资产管理</p>
          <p class="desc" data-aos="fade-up">提供高灵活度的存款产品“余额宝”与高投资性的美元基金产品，帮助您实现资产增值。</p>
        </div>
        <div class="fund-right">
          <div class="fund-bg" data-aos="fade-up">
            <img src="@/assets/image/corporbank/fund-bg.png" alt="">
          </div>
          <div class="fund-img" data-aos="zoom-in">
            <img src="@/assets/image/corporbank/fund-img-01.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="open-guide">
      <div class="open-guide-container layout">
        <p class="title" data-aos="fade-up">我们该如何申请</p>
        <p class="sub-title" data-aos="fade-up">完成流程后，仅需1~3天即可开始使用</p>
        <GuideSteps
          class="guide-list"
          data-aos="fade-up"
          theme="white"
          :list="guideList">
        </GuideSteps>
        <Button
          data-aos="fade-up"
          type="blank"
          :arrow-config="{ moving: true }">
          立即申请
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '企业网银 - CBiBank',
  meta: [
    { name: 'keywords', content: '企业离岸账户,银行卡商户收单,在线跨境收款,在线银行账户开立' },
    { name: 'description', content: 'CBiBank企业银行服务,可快速申请开立境外银行账户,随时随地在线操作,丰富的投资组合,实现账户资产稳健增值,快速的跨境转账,全球主流货币的收付款,银行卡商户收单,支持商户借记卡贷记卡收款清算,灵活掌握资金使用。' }
  ]
})
</script>

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
      ],
      useList: [
        { label: 'ATM取现' },
        { label: '商场消费' },
        { label: 'POS刷卡' },
        { label: '资金周转' },
        { label: '采购' }
      ],
      guideList: [
        { label: '下载APP注册', iconName: 'download' },
        { label: '实名认证，提交KYC', iconName: 'cert' },
        { label: '视频面签，24H审核', iconName: 'computer' },
        { label: '开户完成', iconName: 'wallet' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleToggleTab (value) {
      // const nuxtApp = useNuxtApp()
      // console.log(nuxtApp.AOS, nuxtApp.aos)
      // nuxtApp.AOS.refresh()
      // if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      //   this.$nextTick(() => {
      //     const nuxtApp = useNuxtApp()
      //     console.log(nuxtApp)
      //     nuxtApp.AOS.refreshHard()
      //   })
      // }
    }
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
        // 这里写作all 而不是background-image 因为这里会覆盖aos的transition
        transition: all ease-in-out .8s;
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
        .efficiency-dashed-line {
          width: 306px;
          height: 63px;
          top: 107px;
          left: 113px;
          > img {
            padding-right: 306px;
            object-fit: cover;
            object-position: left;
            transition: all ease 1s;
            // &:hover {
            //   padding-right: 0;
            // }
          }
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
                &[data-aos="fade-down"] {
                  transform: translate3d(0, -30px, 0);
                  &.aos-animate {
                    transform: none;
                  }
                }
                &[data-aos="fade-up"] {
                  transform: translate3d(0, 50px, 0);
                  &.aos-animate {
                    transform: none;
                  }
                }
                &:nth-child(1) {
                  top: 83px;
                  right: 62px;
                  width: 250px;
                  height: 100px;
                  box-shadow: 0px -10px 25px -6px rgba(22,31,91,0.15);
                }
                &:nth-child(2) {
                  top: 197px;
                  right: 104px;
                  width: 387px;
                  height: 213px;
                  box-shadow: 0px 6px 25px -6px rgba(22,31,91,0.15);
                }
                &:nth-child(3) {
                  left: 8px;
                  bottom: 38px;
                  width: 186px;
                  height: 234px;
                  box-shadow: 0px 6px 25px -6px rgba(22,31,91,0.15);
                }
              }
            }
            &.documentary {
              width: 607px;
              height: 395px;
              margin-left: 45px;
              margin-top: 100px;
              background-image: url('@/assets/image/corporbank/letter-documentary-bg.png');
              .letter-documentary-img {
                position: absolute;
                &:nth-child(1) {
                  top: 0;
                  right: 0;
                  width: 464px;
                  height: 240px;
                }
                &:nth-child(2) {
                  bottom: 90px;
                  right: 150px;
                  width: 45px;
                  height: 64px;
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
  .lock {
    height: 700px;
    background-color: @gray3;
    .lock-container {
      display: flex;
      padding-top: 63px;
      .lock-left {
        position: relative;
        width: 460px;
        height: 574px;
        margin-right: 192px;
        background-image: url('@/assets/image/corporbank/lock-img-bg.png');
        .lock-img-01 {
          position: absolute;
          top: 235px;
          right: -80px;
          width: 198px;
          height: 198px;
        }
      }
      .lock-right {
        padding-top: 207px;
        width: 550px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 40px;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
      }
    }
  }
  .cards {
    height: 720px;
    overflow: hidden;
    background-color: @topwhite;
    .cards-container {
      display: flex;
      padding-top: 140px;
      .cards-left {
        position: relative;
        width: 518px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        .desc {
          margin-bottom: 40px;
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
        .use-list {
          margin-bottom: 100px;
        }
        .cards-bg {
          position: absolute;
          top: -75px;
          left: 100%;
          width: 947px;
          height: 655px;
        }
      }
      // .cards-right {}
    }
  }
  .salary {
    height: 700px;
    background-color: @gray3;
    .salary-container {
      display: flex;
      padding-top: 107px;
      .salary-left {
        position: relative;
        width: 504px;
        height: 504px;
        margin-right: 136px;
        background-image: url('@/assets/image/corporbank/salary-bg.png');
        .salary-img {
          position: absolute;
          width: 130px;
          height: 130px;
          &:nth-child(1) {
            top: 7px;
            left: -13px;
          }
          &:nth-child(2) {
            top: 38px;
            right: -38px;
          }
          &:nth-child(3) {
            bottom: 28px;
            right: -21px;
          }
          &:nth-child(4) {
            bottom: 24px;
            left: 0;
          }
        }
      }
      .salary-right {
        flex: 1;
        padding-top: 164px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 40px;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
      }
    }
  }
  .fund {
    height: 700px;
    overflow: hidden;
    background-color: @topwhite;
    .fund-container {
      display: flex;
      .fund-left {
        width: 523px;
        padding-top: 266px;
        margin-left: 77px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 36px;
        }
      }
      .fund-right {
        flex: 1;
        position: relative;
        .fund-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 960px;
          height: 700px;
        }
        .fund-img {
          position: absolute;
          top: 100px;
          left: 58px;
          width: 566px;
          height: 480px;
        }
      }
    }
  }
  .open-guide {
    height: 798px;
    background-color: @gray3;
    .open-guide-container {
      padding-top: 120px;
      text-align: center;
      .title {
        margin-bottom: 40px;
        font-size: 40px;
        color: @blank;
        line-height: 55px;
      }
      .sub-title {
        margin-bottom: 80px;
        font-size: 18px;
        color: @blank2;
        line-height: 40px;
      }
      .guide-list {
        margin-bottom: 80px;
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
