<template>
  <div class="who-we-are">
    <div class="banner">
      <div class="banner-container layout">
        <div class="quote">
          <Quote>
            <p>CBiBank（中文名：富港银行），成立于2017年7月，是一家美国新兴商业银行，专注为出海企业提供一站式跨境金融服务，包括离岸账户开立、转账汇款、电商收款、企业理财等。</p>
            <p>&nbsp;</p>
            <p>CBiBank是经济全球化趋势下国际银行新模式的探索者，以合规经营和科技创新为立行基础，秉承国际化、数字化、专业化的立行理念，专注普惠金融，致力于让中小企业的国际收付款更方便、财富更加国际化且保值增值。</p>
          </Quote>
        </div>
        <div class="location background"></div>
      </div>
    </div>
    <div class="profession">
      <div class="profession-container layout">
        <div class="profession-left">
          <img v-show="activeButton === 'mission'" src="@/assets/image/who-we-are/mission.png" alt="">
          <img v-show="activeButton === 'vision'" src="@/assets/image/who-we-are/vision.png" alt="">
        </div>
        <div class="profession-right">
          <SwitchButton
            v-model="activeButton"
            theme="dark"
            :list="buttonList">
          </SwitchButton>
          <div class="mission-content" v-show="activeButton === 'mission'">
            <p class="title">助力全球互联互通，为中小企业创造更多贸易及投资机会</p>
            <p class="desc">我们正在建立安全便捷的银行体系——让它更快、更方便的为企业和个人服务：收款、支付、获得报酬、消费，无论您身在何处，都可以使用我们的银行服务，我们正在推动全球贸易及投资便利化，打造最受信赖的国际商业银行。</p>
          </div>
          <div class="vision-content" v-show="activeButton === 'vision'">
            <p class="title">推动全球贸易及投资便利化，打造最受信赖的国际商业银行</p>
            <p class="desc">在深刻理解国际贸易企业需求的基础上，打造差异化的产品服务，持续提升国际间贸易收付结算的便利化水平，为广大投资者提供多元、稳健、可预期的投资产品。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="institution">
      <div class="institution-container layout">
        <div class="institution-left">
          <p class="title">守护您的资金安全</p>
          <p class="desc">CBiBank受美国金融监管机构监管，是美国银行家协会(ABA)、环球银行金融电信协会(SWIFT)、银联国际(UNIONPAY)、跨境人民币清算(CIPS)等多家机构成员、中国银行间市场交易商协会备案交易商、中国外汇交易中心外币市场会员。</p>
        </div>
        <div class="institution-right">
          <ul class="institution-list">
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/ocif.png" alt="">
              </div>
              <p class="title">美国持牌商业银行</p>
              <p class="desc">受美国金融监管机构监督</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/swift.png" alt="">
              </div>
              <p class="title">环球银行金融电信协会</p>
              <p class="desc">SWIFT：CBLBPRSJ</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/aba.png" alt="">
              </div>
              <p class="title">美国银行家协会</p>
              <p class="desc">ABA：021508125</p>
            </li>
          </ul>
          <ul class="institution-list">
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/visa.png" alt="">
              </div>
              <p class="title">VISA成员</p>
              <p class="desc">国际金融机构VISA成员</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/union-pay.png" alt="">
              </div>
              <p class="title">银联国际</p>
              <p class="desc">银联国际北美成员</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/cips.png" alt="">
              </div>
              <p class="title">跨境人民币参与行</p>
              <p class="desc">参与离岸人民币清算</p>
            </li>
          </ul>
          <ul class="institution-list">
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/cfets.png" alt="">
              </div>
              <p class="title">中国外汇交易中心</p>
              <p class="desc">外币市场会员</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/csrc.png" alt="">
              </div>
              <p class="title">CSRC中国证监会</p>
              <p class="desc">合格境外投资者资格</p>
            </li>
            <li class="institution-item">
              <div class="img">
                <img src="@/assets/image/who-we-are/nafmii.png" alt="">
              </div>
              <p class="title">中国银行间市场</p>
              <p class="desc">备案交易商</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeButton: 'mission',
      buttonList: [
        { label: '我们的使命', value: 'mission' },
        { label: '我们的愿景', value: 'vision' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.who-we-are {
  position: relative;
  width: 100%;
  .banner {
    height: 600px;
    background-color: @blank;
    .banner-container {
      display: flex;
      justify-content: space-between;
      padding-top: 168px;
      >.quote {
        flex: 1;
        padding-top: 48px;
        font-size: 16px;
        color: #BBC0D8;
        line-height: 32px;
      }
      .location {
        margin-left: 100px;
        width: 615px;
        height: 352px;
        background-image: url('@/assets/image/who-we-are/location.png');
      }
    }
  }
  .profession {
    height: 746px;
    background-color: @gray3;
    .profession-container {
      display: flex;
      padding-top: 140px;
      .profession-left {
        margin-right: 88px;
        width: 528px;
        height: 466px;
      }
      .profession-right {
        flex: 1;
        .title {
          margin: 60px 0 40px;
          font-size: 40px;
          font-weight: 600;
          color: @blank;
          line-height: 55px;
        }
        .desc {
          font-size: 18px;
          font-family: Poppins, Poppins;
          color: @blank2;
          line-height: 40px;
        }
      }
    }
  }
  .institution {
    height: 640px;
    background-color: @topwhite;
    .institution-container {
      display: flex;
      justify-content: space-between;
      padding-top: 100px;
      .institution-left {
        flex: 1;
        padding-top: 92px;
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
      .institution-right {
        margin-left: 106px;
        width: 508px;
        .institution-list {
          display: flex;
          justify-content: space-between;
          margin-bottom: 45px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .institution-item {
          text-align: center;
          >.img {
            margin: 0 auto 20px;
            width: 112px;
            height: 60px;
          }
          >.title {
            margin-bottom: 12px;
            font-size: 14px;
            color: @blank4;
            line-height: 12px;
          }
          >.desc {
            font-size: 12px;
            color: @gray4;
            line-height: 12px;
          }
        }
      }
    }
  }
}
</style>
