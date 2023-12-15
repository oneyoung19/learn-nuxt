<template>
  <div class="home">
    <div class="banner">
      <div class="layout">
        <p class="title">富港银行 提供一站式全球金融服务</p>
        <p class="sub-title">CB International Bank 快速开启国际银行帐户</p>
        <ul class="carousel-list">
          <li class="carousel-item">
            <Button type="blue" class="carousel-item-btn">立即注册</Button>
            <div class="carousel-item-img">
              <img src="~assets/image/home/carousel-01.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="partners">
      <ul class="partners-list">
        <li class="partners-item cips">
          <img src="~assets/image/home/cips.png" alt="">
        </li>
        <li class="partners-item union-pay">
          <img src="~assets/image/home/union-pay.png" alt="">
        </li>
        <li class="partners-item swift">
          <img src="~assets/image/home/swift.png" alt="">
        </li>
        <li class="partners-item visa">
          <img src="~assets/image/home/visa.png" alt="">
        </li>
        <li class="partners-item aba">
          <img src="~assets/image/home/aba.png" alt="">
        </li>
        <li class="partners-item ocif">
          <img src="~assets/image/home/ocif.png" alt="">
        </li>
      </ul>
    </div>
    <div class="video-apply">
      <div class="video-apply-container layout">
        <div class="video-apply-demo">
          <div class="ghosted certificate-img">
            <img src="~assets/image/home/certificate.png" alt="">
          </div>
          <div class="activated figure-img">
            <img src="~assets/image/home/figure.png" alt="">
            <div class="activated-tip1"></div>
            <div class="activated-tip2"></div>
          </div>
        </div>
        <div class="video-apply-tip">
          <p class="title">线上快速获取银行帐户</p>
          <p class="desc">全程线上申请、视频面签，无需邮寄纸质材料、无需临柜，业务全流程实现线上办理，省时、省心、省力。</p>
          <Button type="blue" plain :arrow-config="{ moving: true }">开始体验</Button>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="layout">
        <SwitchButton
          class="switch-button"
          v-model="currentSwitchCard"
          :list="cardsSwitchList">
        </SwitchButton>
        <ul class="cards-list">
          <li class="cards-item enterprise">
            <div class="cards-item-left">
              <p class="title">无论您走到哪里，都可以刷卡消费</p>
              <p class="desc">像当地人一样在全球范围内使用CBiBank企业借记卡消费，在当地ATM取现，试用商场、酒店、网购等等各类场景。</p>
              <ul class="feature-list">
                <li class="feature-item" v-for="(item, index) in featureList" :key="index">
                  <SvgIcon class="feature-item-icon" name="selected"></SvgIcon>
                  <span class="feature-item-text">{{ item.label }}</span>
                </li>
              </ul>
              <Button type="blue" plain :arrow-config="{ moving: true }">获取卡片</Button>
            </div>
            <div class="cards-item-right">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'CBiBank',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'index'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
const cardsSwitchList = ref([
  { label: '企业卡', value: 'enterprise' },
  { label: '个人卡', value: 'personal' }
])
const currentSwitchCard = ref('enterprise')

const featureList = ref([
  { label: 'ATM取现' },
  { label: '商场消费' },
  { label: 'POS刷卡' },
  { label: '资金周转' },
  { label: '采购' }
])
</script>

<style scoped lang="less">
.home {
  // padding-top: @headerHeight;
  .banner {
    height: 974px;
    padding-top: calc(@headerHeight + 100px);
    color: @topwhite;
    background-color: @blank;
    text-align: center;
    .title {
      margin-bottom: 40px;
      font-size: 60px;
    }
    .sub-title {
      margin-bottom: 114px;
      font-size: 24px;
      color: #BBC0D8;
    }
    .carousel-list {
      width: 100%;
      .carousel-item {
        width: 100%;
        .carousel-item-btn {
          width: 187px;
          height: 52px;
          margin-bottom: 49px;
        }
        .carousel-item-img {
          width: 100%;
        }
      }
    }
  }
  .partners {
    background-color: #fff;
    height: 340px;
    .partners-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: @homeParentsWidth;
      height: 100%;
      margin: 0 auto;
      .partners-item {
        height: 141px;
        // margin-right: 42px;
        &:last-child {
          margin-right: 0;
        }
        &.cips {
          width: 253px;
        }
        &.union-pay {
          width: 272px;
        }
        &.swift {
          width: 191px;
        }
        &.visa {
          width: 251px;
        }
        &.aba {
          width: 341px;
        }
        &.ocif {
          width: 278px;
        }
      }
    }
  }
  .video-apply {
    height: 700px;
    padding-top: 180px;
    background-color: @gray3;
    .video-apply-container {
      display: flex;
      .video-apply-demo {
        flex: 1;
        position: relative;
        padding-top: 45px;
        .certificate-img {
          width: 316px;
          height: 190px;
        }
        .figure-img {
          width: 262px;
          height: 336px;
        }
        .ghosted {
          position: relative;
        }
        .activated {
          position: absolute;
          top: 0;
          left: 180px;
        }
      }
      .video-apply-tip {
        width: 586px;
        margin-left: 64px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
        }
        .desc{
          margin-bottom: 100px;
          font-size: 18px;
          color: @blank2;
          line-height: 36px;
        }
      }
    }
  }
  .cards {
    height: 838px;
    padding-top: 112px;
    background-color: @topwhite;
    .switch-button {
      margin-bottom: 35px;
    }
    .cards-list {
      .cards-item {
        display: flex;
        &.enterprise {
          .cards-item-left {
            width: 586px;
            margin-right: 104px;
            .title {
              width: 554px;
              margin-bottom: 30px;
              font-size: 40px;
              color: @blank;
              line-height: 55px;
            }
            .desc {
              margin-bottom: 60px;
              font-size: 18px;
              color: @blank2;
              line-height: 36px;
            }
            .feature-list {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 100px;
              .feature-item {
                display: flex;
                align-items: center;
                width: 150px;
                margin-right: 50px;
                margin-bottom: 12px;
                &:nth-child(3n) {
                  margin-right: 0;
                }
                &:nth-last-child(1), &:nth-last-child(2) {
                  margin-bottom: 0;
                }
                .feature-item-icon {
                  font-size: 24px;
                  margin-right: 10px;
                  color: #DDE1EB;
                }
                .feature-item-text {
                  font-size: 16px;
                  color: #5C5C66;
                  line-height: 40px;
                }
              }
            }
          }
          .cards-item-right {

          }
        }
      }
    }
  }
}
</style>
