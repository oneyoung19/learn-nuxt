<template>
  <div class="letter">
    <div class="banner background">
      <div class="banner-container layout">
        <p class="title">提供完备的银行单证服务</p>
      </div>
    </div>
    <div class="switch">
      <div class="layout">
        <SwitchTab
          v-model="activeTab"
          :list="tabList">
        </SwitchTab>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'credit',
      tabList: [
        { value: 'credit', label: '信用证业务', labelEn: '(Letter of Credit)' },
        { value: 'documentary', label: '跟单托收业务', labelEn: '(Documentary Collections)' },
        { value: 'guarantee', label: '保函业务', labelEn: '(Letter of Guarantee)' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.letter {
  width: 100%;
  .banner {
    width: 100%;
    height: 600px;
    background-image: url('@/assets/image/letter/banner.png');
    background-size: cover;
    .banner-container {
      padding-top: 284px;
      .title {
        font-size: 60px;
        color: @topwhite;
        line-height: 80px;
      }
    }
  }
  .switch {
    width: 100%;
    height: 320px;
    background: @gray3;
    padding-top: 100px;
  }
}
</style>
