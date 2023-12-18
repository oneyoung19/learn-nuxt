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
}
</style>
