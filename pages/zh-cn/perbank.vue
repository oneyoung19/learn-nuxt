<template>
  <div class="perbank">
    <div class="banner background">
      <div class="banner-container layout">
        <div class="banner-left">
          <p class="title">一个APP，</p>
          <p class="title">解决全球汇款</p>
          <DownloadApp class="download-app"></DownloadApp>
        </div>
        <div class="banner-right">
          <img src="@/assets/image/perbank/phone.png" alt="">
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container layout">
        <div class="cards-left">
          <div class="cards-img union-pay-cards">
            <img src="@/assets/image/perbank/union-pay-card.png" alt="">
          </div>
          <div class="cards-img visa-cards">
            <img src="@/assets/image/perbank/visa-card.png" alt="">
          </div>
        </div>
        <div class="cards-right">
          <p class="title">在全球，以更优惠的汇率刷卡消费</p>
          <p class="desc">环球旅行，ATM取现，使用您的 CBiBank 实体卡在全球地区消费 ，CBiBank已与北美银联、Visa建立深度合作。</p>
          <CardUseList class="use-list" :list="useList"></CardUseList>
          <Button type="blank" :arrow-config="{ moving: true }">获取卡片</Button>
        </div>
      </div>
    </div>
    <div class="remit">
      <div class="remit-container layout">
        <div class="remit-left">
          <p class="title">随时随地、多币种轻松汇款</p>
          <p class="desc">美元、欧元、离岸人民币、港币等主流货币，全球范围内自由汇转。</p>
        </div>
        <div class="remit-right">
          <div class="remit-bg">
            <img src="@/assets/image/perbank/remit-bg.png" alt="">
          </div>
          <div class="remit-data">
            <img src="@/assets/image/perbank/remit-data.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="swap">
      <div class="swap-container layout">
        <div class="swap-left">
          <div class="swap-steps">
            <img src="@/assets/image/perbank/swap-steps.png" alt="">
          </div>
          <div class="swap-select">
            <img src="@/assets/image/perbank/swap-select.png" alt="">
          </div>
          <div class="swap-confirm">
            <img src="@/assets/image/perbank/swap-confirm.png" alt="">
          </div>
        </div>
        <div class="swap-right">
          <p class="title">以实时的汇率进行换汇</p>
          <p class="desc">轻松换汇，您可以通过CBiBank快捷完成货币兑换，以实时汇率结算。</p>
        </div>
      </div>
    </div>
    <div class="express">
      <div class="express-container layout">
        <div class="express-left">
          <p class="title">提供全球的速汇业务</p>
          <p class="desc">为有跨国汇款需求的人群提供即时到账的速汇服务，资金即时汇转到您的当地银行卡。</p>
        </div>
        <div class="express-right background"></div>
      </div>
    </div>
    <div class="open-guide">
      <div class="open-guide-container layout">
        <p class="title">如何拥有帐户</p>
        <p class="sub-title">线上即刻开户，纵享全球服务</p>
        <GuideSteps
          class="guide-list"
          :list="guideList">
        </GuideSteps>
        <DownloadApp theme="blank"></DownloadApp>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      useList: [
        { label: 'ATM取现' },
        { label: '商场消费' },
        { label: 'POS刷卡' },
        { label: '订票' },
        { label: '购物' }
      ],
      guideList: [
        { label: '下载APP注册', iconName: 'download' },
        { label: '实名认证，提交KYC', iconName: 'cert' },
        { label: '视频面签，24H审核', iconName: 'computer' },
        { label: '开户完成', iconName: 'wallet' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.perbank {
  width: 100%;
  .banner {
    width: 100%;
    height: 720px;
    background-image: url('@/assets/image/perbank/banner.png');
    background-size: cover;
    .banner-container {
      display: flex;
      justify-content: space-between;
      padding-top: 125px;
      .banner-left {
        padding-top: 105px;
        >.title {
          font-size: 60px;
          color: @topwhite;
          line-height: 80px;
        }
        >.download-app {
          margin-top: 100px;
        }
      }
      .banner-right {
        width: 575px;
        height: 595px;
      }
    }
  }
  .cards  {
    height: 720px;
    background-color: @topwhite;
    .cards-container {
      display: flex;
      justify-content: space-between;
      padding-top: 140px;
      .cards-left {
        position: relative;
        padding-top: 54px;
        .cards-img {
          width: 432px;
          height: 272px;
        }
        .union-pay-cards {
          position: relative;
          z-index: 2;
          margin-left: -22px;
        }
        .visa-cards {
          position: absolute;
          top: 122px;
          left: 80px;
        }
      }
      .cards-right {
        width: 620px;
        >.title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        >.desc {
          width: 570px;
          margin-bottom: 45px;
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
        >.use-list {
          margin-bottom: 100px;
        }
      }
    }
  }
  .remit {
    height: 700px;
    background-color: @gray3;
    .remit-container {
      display: flex;
      justify-content: space-between;
      padding-top: 80px;
      .remit-left {
        flex: 1;
        padding-top: 205px;
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
      .remit-right {
        position: relative;
        margin-left: 80px;
        width: 578px;
        .remit-bg {
          width: 400px;
          height: 475px;
        }
        .remit-data {
          position: absolute;
          top: 285px;
          left: 255px;
          width: 290px;
          height: 256px;
        }
      }
    }
  }
  .swap {
    height: 700px;
    background-color: @topwhite;
    .swap-container {
      display: flex;
      padding-top: 132px;
      .swap-left {
        position: relative;
        margin-right: 115px;
        padding-left: 162px;
        .swap-steps {
          width: 280px;
          height: 438px;
        }
        .swap-select {
          position: absolute;
          top: 120px;
          left: 0;
          width: 198px;
          height: 298px;
        }
        .swap-confirm {
          position: absolute;
          top: 208px;
          left: 385px;
          width: 116px;
          height: 126px;
        }
      }
      .swap-right {
        flex: 1;
        padding-top: 150px;
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
  .express {
    height: 700px;
    background-color: @gray3;
    .express-container {
      display: flex;
      padding-top: 116px;
      .express-left {
        flex: 1;
        padding-top: 146px;
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
      .express-right {
        margin-left: 90px;
        margin-right: 40px;
        width: 510px;
        height: 584px;
        background-image: url('@/assets/image/perbank/express-bg.png');
      }
    }
  }
  .open-guide {
    height: 798px;
    background-color: @topwhite;
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
}
</style>
