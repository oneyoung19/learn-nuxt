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
          <p class="title" data-aos="fade-up">贸易无国界，</p>
          <p class="title" data-aos="fade-up" data-aos-delay="300">轻松应对每一笔收付款</p>
          <ToggleTab
            class="channel-list"
            data-aos="fade-up"
            data-aos-delay="600"
            v-model="activeChannel"
            :list="channelList"
            @change="handleToggleTab">
          </ToggleTab>
        </div>
        <div
          class="channel-right background"
          data-aos="fade-up"
          data-aos-delay="600"
          :class="activeChannel">
          <div
            class="global-bg background"
            data-aos="fade-up"
            data-aos-delay="800"
            v-if="activeChannel === 'global'"
            key="global">
            <div
              class="global-img global-usd"
              data-aos="fade-right"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/global-usd.png" alt="">
            </div>
            <div
              class="global-img global-gbp"
              data-aos="fade-up"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/global-gbp.png" alt="">
            </div>
            <div
              class="global-img global-cad"
              data-aos="fade-up"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/global-cad.png" alt="">
            </div>
            <div
              class="global-img global-eur"
              data-aos="fade-left"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/global-eur.png" alt="">
            </div>
          </div>
          <div
            class="ecommerce-bg background"
            data-aos="fade-up"
            data-aos-delay="800"
            v-if="activeChannel === 'ecommerce'"
            key="ecommerce">
            <div
              class="ecommerce-img ecommerce-wish"
              data-aos="fade-down"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/wish.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-tiktok"
              data-aos="fade-left"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/tiktok.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-ebay"
              data-aos="fade-up-left"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/ebay.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-amazon"
              data-aos="fade-up"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/amazon.png" alt="">
            </div>
            <div
              class="ecommerce-img ecommerce-shopify"
              data-aos="fade-right"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/shopify.png" alt="">
            </div>
          </div>
          <div
            class="internation-bg background"
            data-aos="fade-up"
            data-aos-delay="800"
            v-if="activeChannel === 'internation'"
            key="internation">
            <div
              class="internation-amount"
              data-aos="fade-right"
              data-aos-delay="1000">
              <img src="@/assets/image/corporbank/internation-amount.png" alt="">
            </div>
            <div
              class="internation-arrow"
              data-aos="fade-up-left"
              data-aos-delay="1000">
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
      <div class="letter-container layout">
        <SwitchTab
          v-model="activeTab"
          :list="tabList"
          border>
        </SwitchTab>
        <ul class="letter-list">
          <transition
            mode="out-in"
            :name="getFadeTransition('credit')">
            <li class="letter-item" v-show="activeTab === 'credit'">
              <div
                class="letter-item-left">
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
          </transition>
          <transition
            mode="out-in"
            :name="getFadeTransition('documentary')">
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
          </transition>
          <transition
            mode="out-in"
            :name="getFadeTransition('guarantee')">
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
          </transition>
        </ul>
      </div>
    </div>
    <div class="lock">
      <div class="lock-container layout">
        <div class="lock-left background">
          <div class="lock-img-01">
            <img src="@/assets/image/corporbank/lock-img-01.png" alt="">
          </div>
        </div>
        <div class="lock-right">
          <p class="title">灵活锁汇，为您智慧避险</p>
          <p class="desc">我们提供灵活的“锁汇”即远期结售汇服务，极大限度的帮助企业规避汇率风险。</p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container layout">
        <div class="cards-left">
          <p class="title">全球随心刷，生活更简单</p>
          <p class="desc">在全球范围内都可使用的CBiBank企业借记卡，全球ATM取现，商场消费、POS刷卡和采购等。</p>
          <CardUseList class="use-list" :list="useList"></CardUseList>
          <Button type="blank" :arrow-config="{ moving: true }">获取卡片</Button>
          <div
            class="cards-bg"
            data-aos="fade-up-left"
            data-aos-offset="400">
            <img src="@/assets/image/corporbank/cards-bg.png" alt="">
          </div>
        </div>
        <!-- <div class="cards-right"></div> -->
      </div>
    </div>
    <div class="salary">
      <div class="salary-container layout">
        <div class="salary-left background">
          <div class="salary-img">
            <img src="@/assets/image/corporbank/salary-img-01.png" alt="">
          </div>
          <div class="salary-img">
            <img src="@/assets/image/corporbank/salary-img-02.png" alt="">
          </div>
          <div class="salary-img">
            <img src="@/assets/image/corporbank/salary-img-03.png" alt="">
          </div>
          <div class="salary-img">
            <img src="@/assets/image/corporbank/salary-img-04.png" alt="">
          </div>
        </div>
        <div class="salary-right">
          <p class="title">跨国企业向本地人进行工资发放</p>
          <p class="desc">全球地区支付员工薪资，无论员工选择在哪里工作，在几分钟内为世界各地的员工进行工资发放。</p>
        </div>
      </div>
    </div>
    <div class="fund">
      <div class="fund-container layout">
        <div class="fund-left">
          <p class="title">更高效的多类型企业资产管理</p>
          <p class="desc">提供高灵活度的存款产品“余额宝”与高投资性的美元基金产品，帮助您实现资产增值。</p>
        </div>
        <div class="fund-right">
          <div class="fund-bg">
            <img src="@/assets/image/corporbank/fund-bg.png" alt="">
          </div>
          <div class="fund-img">
            <img src="@/assets/image/corporbank/fund-img-01.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="open-guide">
      <div class="open-guide-container layout">
        <p class="title">我们该如何申请</p>
        <p class="sub-title">完成流程后，仅需1~3天即可开始使用</p>
        <GuideSteps
          class="guide-list"
          theme="white"
          :list="guideList">
        </GuideSteps>
        <Button type="blank" :arrow-config="{ moving: true }">立即申请</Button>
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
    },
    getFadeTransition (tab) {
      const { activeTab, tabList } = this
      const activeIndex = tabList.findIndex(item => item.value === activeTab)
      const index = tabList.findIndex(item => item.value === tab)
      // TODO: 这里的逻辑有待修复 应根据当前正确索引返回transiton模式
      if (index >= activeIndex) {
        return 'fade-right'
      } else {
        return 'fade-left'
      }
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
