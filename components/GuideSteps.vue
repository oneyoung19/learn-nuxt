<template>
  <ul class="guide-list" :class="theme">
    <li
      class="guide-item"
      v-for="(item, index) in list"
      :key="index">
      <div class="guide-icon">
        <SvgIcon :name="item.iconName"></SvgIcon>
      </div>
      <p class="guide-text">{{ item.label }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    // gray white
    theme: {
      type: String,
      default: 'gray'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.guide-list {
  display: flex;
  justify-content: space-between;
  .guide-item {
    position: relative;
    flex: 1;
    margin-right: 25px;
    height: 213px;
    
    border-radius: 20px;
    text-align: center;
    &::after {
      content: '';
      position: absolute;
      top: 37px;
      left: calc(50% + (37px * 2));
      z-index: 2;
      width: calc(100% + 20px - (37px * 4));
      height: 2px;
      background-color: @blue;
    }
    &:last-child {
      margin-right: 0;
      &::after {
        display: none;
      }
    }
    .guide-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 74px;
      height: 74px;
      margin: 0 auto 50px;
      background-color: @blank;
      border-radius: 37px;
      color: @topwhite;
      font-size: 35px;
    }
    .guide-text {
      font-size: 16px;
      color: @blank2;
      line-height: 30px;
    }
  }
  &.gray {
    .guide-item {
      background: @gray-gradient3;
    }
  }
  &.white {
    .guide-item {
      background: @gray-gradient5;
    }
  }
}
</style>
