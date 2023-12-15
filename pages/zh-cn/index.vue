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
    123
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
}
</style>
