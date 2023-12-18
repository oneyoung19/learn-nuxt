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
          <ul class="use-list">
            <li class="use-item" v-for="(item, index) in useList" :key="index">
              <SvgIcon class="icon" name="selected-white"></SvgIcon>
              <span class="text">{{ item.label }}</span>
            </li>
          </ul>
          <Button type="blank" :arrow-config="{ moving: true }">获取卡片</Button>
        </div>
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
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 100px;
          .use-item {
            display: flex;
            align-items: center;
            width: 33%;
            margin-bottom: 26px;
            &:nth-last-child(1), &:nth-last-child(2) {
              margin-bottom: 0;
            }
            .icon {
              font-size: 24px;
              color: @blank2;
            }
            .text {
              margin-left: 10px;
              font-size: 16px;
              color: @blank2;
              line-height: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
