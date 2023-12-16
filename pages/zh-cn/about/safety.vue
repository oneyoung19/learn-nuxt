<template>
  <div class="safety">
    <div class="banner background">
      <div class="banner-container layout">
        <p class="intro-text">安全·合规</p>
        <p class="title">稳若泰山</p>
        <p class="desc">用专业的技术、专业的团队、雄厚的实力来确保银行安全稳健运行</p>
      </div>
    </div>
    <div class="advance">
      <div class="advance-container layout">
        <p class="title">用坚实的后盾将风险拒之门外，守护您的信息财产安全</p>
        <ul class="advance-list">
          <li class="advance-item">
            <div class="advance-item-bg background"></div>
            <div class="advance-item-content">
              <p class="title">客户身份安全</p>
              <p class="desc">我们通过多种身份验证方式，确保客户身份安全。</p>
            </div>
          </li>
          <li class="advance-item">
            <div class="advance-item-bg background"></div>
            <div class="advance-item-content">
              <p class="title">交易安全</p>
              <p class="desc">我们建立了多重安全机制并使用专业的加密技术保证客户的交易安全。</p>
            </div>
          </li>
          <li class="advance-item">
            <div class="advance-item-bg background"></div>
            <div class="advance-item-content">
              <p class="title">系统和数据安全</p>
              <p class="desc">我们采用多种安全设备用以构建IT安全体系，并通过多种数据备份方案，确保客户的数据安全。</p>
            </div>
          </li>
          <li class="advance-item">
            <div class="advance-item-bg background"></div>
            <div class="advance-item-content">
              <p class="title">KYC与反洗钱</p>
              <p class="desc">我们有经验丰富的合规运营团队，通过专业的反洗钱模型确保银行安全、合规的运营。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="finance">
      <div class="finance-container layout">
        <p class="title">反洗钱</p>
        <p class="sub-title">诚信的金融环境，切实保障用户权益
        </p>
        <ul class="finance-list">
          <li class="finance-item">
            <div class="icon">
              <img src="@/assets/image/about/safety/finance01.png" alt="">
            </div>
            <p class="title">金融体系安全</p>
            <p class="desc">CBiBank严格遵守《美国爱国者法》、《银行保密法》 （BSA）、OFAC报告和反洗钱（AML），维护金融系统的完整性，杜绝任何组织及个人通过银行进行违法活动。</p>
          </li>
          <li class="finance-item">
            <div class="icon">
              <img src="@/assets/image/about/safety/finance02.png" alt="">
            </div>
            <p class="title">KYC</p>
            <p class="desc">我们通过KYC要求客户提供身份验证文件，并进行详细的背景调查，以确保他们的身份是合法且可信的。</p>
          </li>
          <li class="finance-item">
            <div class="icon">
              <img src="@/assets/image/about/safety/finance03.png" alt="">
            </div>
            <p class="title">高标准</p>
            <p class="desc">严格遵守监管要求，持续强化合规建设，以确保金融系统的安全性和完整性，并维护客户的权益。</p>
          </li>
        </ul>
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
.safety {
  width: 100%;
  .banner {
    width: 100%;
    height: 600px;
    background-image: url('@/assets/image/about/safety/banner.png');
    background-size: cover;
    .banner-container {
      padding-top: 190px;
      .intro-text {
        margin-bottom: 30px;
        font-size: 24px;
        color: @gray5;
        line-height: 36px;
      }
      .title {
        margin-bottom: 40px;
        font-size: 60px;
        color: @topwhite;
        line-height: 100px;
      }
      .desc {
        font-size: 24px;
        color: @gray5;
        line-height: 36px;
      }
    }
  }
  .advance {
    height: 686px;
    background-color: @topwhite;
    .advance-container {
      padding-top: 140px;
      > .title {
        margin-bottom: 80px;
        font-size: 40px;
        color: @blank;
        line-height: 40px;
        text-align: center;
      }
      .advance-list {
        display: flex;
        align-items: center;
        width: 100%;
        height: 308px;
        .advance-item {
          flex: 1;
          max-width: 286px;
          height: 100%;
          margin-right: 20px;
          background-color: @gray3;
          &:nth-child(1) {
            .advance-item-bg {
              background-image: url('@/assets/image/about/safety/advance01.png');
            }
          }
          &:nth-child(2) {
            .advance-item-bg {
              background-image: url('@/assets/image/about/safety/advance02.png');
            }
          }
          &:nth-child(3) {
            .advance-item-bg {
              background-image: url('@/assets/image/about/safety/advance03.png');
            }
          }
          &:nth-child(4) {
            .advance-item-bg {
              background-image: url('@/assets/image/about/safety/advance04.png');
            }
          }
          &:last-child {
            margin-right: 0;
          }
          .advance-item-bg {
            height: 80px;
            background-size: cover;
          }
          .advance-item-content {
            padding: 40px 28px;
            .title {
              margin-bottom: 14px;
              font-size: 18px;
              color: @blank;
              line-height: 25px;
            }
            .desc {
              font-size: 14px;
              color: @blank2;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  .finance {
    height: 632px;
    background-color: @gray3;
    .finance-container {
      padding-top: 120px;
      >.title {
        margin-bottom: 40px;
        font-size: 40px;
        color: @blank;
        line-height: 40px;
        text-align: center;
      }
      >.sub-title {
        margin-bottom: 60px;
        font-size: 18px;
        color: @blank2;
        line-height: 36px;
        text-align: center;
      }
      .finance-list {
        display: flex;
        .finance-item {
          flex: 1;
          margin-right: 75px;
          &:last-child {
            margin-right: 0;
          }
          .icon {
            width: 108px;
            height: 90px;
            margin-bottom: 16px;
          }
          .title {
            margin-bottom: 14px;
            font-size: 18px;
            color: @blank;
            line-height: 25px;
          }
          .desc {
            font-size: 14px;
            color: @blank2;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
