<template>
  <ul class="toggle-tab-list">
    <li
      class="toggle-tab-item"
      :class="modelValue === item.value ? 'active' : ''"
      v-for="(item, index) in list"
      :key="index"
      @click="handleClick(item)">
      <SvgIcon
        class="icon"
        :name="modelValue === item.value ? item.activeIconName : item.iconName">
      </SvgIcon>
      <span>{{ item.label }}</span>
      <SvgIcon class="icon-arrow" name="arrow-line"></SvgIcon>
    </li>
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
  emits: ['update:modelValue', 'change'],
  data () {
    return {
    }
  },
  methods: {
    handleClick (item) {
      const { value } = item
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped lang="less">
.toggle-tab-list {
  display: inline-block;
  .toggle-tab-item {
    position: relative;
    z-index: 2;
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
    user-select: none;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 0;
      height: 100%;
      border-radius: 10px;
      background: @blank;
      opacity: 0;
      transition: all ease-in-out .5s;
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
      font-size: 26px;
      opacity: 0;
      transition: all ease-in-out .5s;
    }
    &:hover {
      color: @blank2;
      .icon-arrow {
        opacity: 1;
      }
    }
    &.active {
      color: @topwhite;
      &::before {
        width: 100%;
        opacity: 1;
      }
      .icon-arrow {
        opacity: 1;
      }
      &:hover {
        .icon-arrow {
          transform: translate(10px, -50%);
        }
      }
    }
  }
}
</style>
