<template>
  <ul class="switch-tab-list">
    <li
      class="switch-tab-item"
      :class="item.id === activeTab ? 'active' : ''"
      v-for="(item, index) in tabList"
      :key="index">
      <p class="title">{{ item.label }}</p>
      <p class="title-en">{{ item.labelEn }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'credit',
      tabList: [
        { id: 'credit', label: '信用证业务', labelEn: '(Letter of Credit)' },
        { id: 'documentary', label: '跟单托收业务', labelEn: '(Documentary Collections)' },
        { id: 'guarantee', label: '保函业务', labelEn: '(Letter of Guarantee)' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.switch-tab-list {
  display: inline-flex;
  align-items: center;
  background-color: @topwhite;
  .switch-tab-item {
    width: 400px;
    height: 120px;
    padding: 33px 10px;
    text-align: center;
    color: @blank;
    cursor: pointer;
    &.active {
      background-color: @blank3;
    }
    .title {
      margin-bottom: 4px;
      font-size: 20px;
      line-height: 28px;
    }
    .title-en {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>
