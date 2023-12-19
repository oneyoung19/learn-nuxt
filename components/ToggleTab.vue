<template>
  <ul class="toggle-tab-list">
    <li
      class="toggle-tab-item"
      :class="modelValue === item.value ? 'active' : ''"
      v-for="(item, index) in list"
      :key="index"
      @click="handleClick(item)">
      <SvgIcon class="icon" :name="modelValue === item.value ? item.activeIconName : item.iconName"></SvgIcon>
      <span>{{ item.label }}</span>
      <SvgIcon class="icon-arrow" name="arrow-line"></SvgIcon>
    </li>
    <!-- <li class="toggle-tab-item active">
      <SvgIcon class="icon" name="wallet-light"></SvgIcon>
      <span>全球贸易收款</span>
      <SvgIcon class="icon-arrow" name="arrow-line"></SvgIcon>
    </li>
    <li class="toggle-tab-item">
      <SvgIcon class="icon" name="bag-deep"></SvgIcon>
      <span>电商平台收款</span>
    </li>
    <li class="toggle-tab-item">
      <SvgIcon class="icon" name="cross-deep"></SvgIcon>
      <span>国际投融资</span>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (item) {
      const { value } = item
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style scoped lang="less">
.toggle-tab-list {
  display: inline-block;
  .toggle-tab-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding: 0 24px;
    width: 450px;
    height: 90px;
    background: @gray-gradient4;
    font-size: 18px;
    color: @blank2;
    line-height: 90px;
    border-radius: 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    .icon {
      margin-right: 22px;
      font-size: 36px;
    }
    .icon-arrow {
      position: absolute;
      top: 50%;
      right: 38px;
      transform: translateY(-50%);
      display: none;
      font-size: 26px;
    }
    &.active {
      color: @topwhite;
      background: @blank;
      .icon-arrow {
        display: block;
      }
    }
  }
}
</style>
