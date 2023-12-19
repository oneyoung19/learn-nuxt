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
            theme="blank"
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
    <div class="partners">
      <div class="partners-container">
        <p class="title">
          合作伙伴
        </p>
        <ul class="partners-list">
          <li class="partners-item" v-for="(item, index) in firstPartners" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
        <ul class="partners-list">
          <li class="partners-item" v-for="(item, index) in secondPartners" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="group background">
      <div class="group-bg">
        <div class="group-container layout">
          <div class="mascot">
            <img src="@/assets/image/who-we-are/mascot.png" alt="">
          </div>
          <div class="group-right">
            <p class="title">贸易无国界，投资更简单</p>
            <p class="sub-title">让我们成为您的优选银行</p>
            <Button type="blank" :arrow-config="{ moving: true }">开启CBiBank</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="qa">
      <div class="qa-container layout">
        <p class="title">关于CBiBank常见问题</p>
        <ul class="qa-list">
          <li
            class="qa-item"
            :class="item.active ? 'active' : ''"
            v-for="(item, index) in qaList"
            :key="index"
            @click="handleToggleQa(item)">
            <p class="question">
              <SvgIcon class="icon" name="arrow-right"></SvgIcon>
              <span>{{ item.question }}</span>
            </p>
            <p class="answer">{{ item.answer }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dimVisa from '@/assets/image/who-we-are/dim-visa.png'
import dimCips from '@/assets/image/who-we-are/dim-cips.png'
import dimUnionPay from '@/assets/image/who-we-are/dim-union-pay.png'
import dimSwift from '@/assets/image/who-we-are/dim-swift.png'
import dimCitibank from '@/assets/image/who-we-are/dim-citibank.png'
import dimAba from '@/assets/image/who-we-are/dim-aba.png'
import dimJiangsubank from '@/assets/image/who-we-are/dim-jiangsubank.png'
import dimDbs from '@/assets/image/who-we-are/dim-dbs.png'
import dimOcbc from '@/assets/image/who-we-are/dim-ocbc.png'
import dimNanjingbank from '@/assets/image/who-we-are/dim-nanjingbank.png'
import dimZhongguobank from '@/assets/image/who-we-are/dim-zhongguobank.png'
import dimCommonwealthbank from '@/assets/image/who-we-are/dim-commonwealthbank.png'
import dimXingyebank from '@/assets/image/who-we-are/dim-xingyebank.png'
import dimEstpac from '@/assets/image/who-we-are/dim-estpac.png'
import dimInternationalbank from '@/assets/image/who-we-are/dim-internationalbank.png'

export default {
  data () {
    return {
      activeButton: 'mission',
      buttonList: [
        { label: '我们的使命', value: 'mission' },
        { label: '我们的愿景', value: 'vision' }
      ],
      firstPartners: [
        { img: dimVisa },
        { img: dimCips },
        { img: dimUnionPay },
        { img: dimSwift },
        { img: dimCitibank },
        { img: dimAba },
        { img: dimJiangsubank },
        { img: dimDbs }
      ],
      secondPartners: [
        { img: dimOcbc },
        { img: dimNanjingbank },
        { img: dimZhongguobank },
        { img: dimCommonwealthbank },
        { img: dimXingyebank },
        { img: dimEstpac },
        { img: dimInternationalbank }
      ],
      qaList: [
        { question: 'CBiBank能做什么？', answer: '我们可以为您提供企业及个人的国际银行服务，包含不限于银行开户、全球转帐汇款、换汇结汇、电商收款、银联收单、信用证、财富升值、薪资发放、借记卡等。', active: true },
        { question: '使用CBiBank汇款安全吗？', answer: 'CBiBank是美国商业银行，受美国银行监管体系监管，牌照资质完善。依托CBiBank强大的全球清算网络及风控体系，我们可以极大限度保障您的资金安全。' },
        { question: '开户需要多长时间？', answer: 'CBiBank支持全程线上进行开户操作，如果您提供的相关资料准确且充分，最快1天即可开户成功。' },
        { question: '企业开户要求高吗？', answer: '在CBiBank开户无需注册年限、无关联性公司、无资金流水需求，无需购买理材。如果您是中小型企业，从事全球贸易、电商等行业，CBiBank企业账户将是您最好的选择。' },
        { question: '账户资金是否可以停留境外？', answer: 'CBiBank作为一家美国专业银行，可为客户提供存款业务，支持客户资金合法合规留存。' },
        { question: '银行是如何收费的？', answer: 'CBiBank无隐藏费用，费用公开透明，详情请查阅我们的最新收费标准《CBiBank收费标准》。' }
      ]
    }
  },
  methods: {
    handleToggleQa (item) {
      item.active = !item.active
    }
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
  .partners {
    height: 738px;
    background-color: @gray3;
    .partners-container {
      padding-top: 140px;
      text-align: center;
      .title {
        margin-bottom: 100px;
        font-size: 40px;
        color: #171725;
        line-height: 55px;
      }
      .partners-list {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: scroll;
        margin-bottom: 80px;
        &:last-child {
          margin-bottom: 0;
        }
        .partners-item {
          width: 245px;
          min-width: 245px;
          height: 125px;
          margin-right: 80px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .group {
    height: 600px;
    background: @gray-gradient2;
    .group-bg {
      margin: 0 auto;
      width: @pageWidth;
      height: 100%;
      background-image: url('@/assets/image/who-we-are/mascot-bg.png');
      background-size: cover;
      .group-container {
        display: flex;
        padding-top: 80px;
        .mascot {
          margin-right: 154px;
          width: 408px;
          height: 520px;
        }
        .group-right {
          padding-top: 88px;
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
        }
      }
    }
  }
  .qa {
    // min-height: 985px;
    background-color: @gray3;
    .qa-container {
      padding: 120px 0;
      .title {
        margin-bottom: 80px;
        font-size: 40px;
        color: @blank;
        line-height: 55px;
        text-align: center;
      }
      .qa-list {
        cursor: pointer;
        .qa-item {
          padding: 26px 30px 26px 80px;
          border-top: 1px solid @blank;
          background-color: @gray3;
          &:last-child {
            border-bottom: 1px solid @blank;
          }
          .question {
            position: relative;
            margin-bottom: 10px;
            font-size: 22px;
            font-weight: 500;
            color: @blank;
            line-height: 38px;
            .icon {
              position: absolute;
              top: 50%;
              left: -50px;
              transform: translateY(-50%);
              font-size: 26px;
              color: @blank;
              transition: all ease-in-out .5s;
            }
          }
          .answer {
            display: none;
            font-size: 16px;
            color: @blank2;
            line-height: 30px;
          }
          &.active {
            background-color: @topwhite;
            .question {
              .icon {
                transform: translateY(-50%) rotate(90deg);
              }
            }
            .answer {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
