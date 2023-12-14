<template>
  <div class="select" :class="visible ? 'active' : ''">
    <div class="select-container" @click="handleClick">
      <span class="select-text">关于我们</span>
      <SvgIcon class="arrow" name="arrow-bottom"></SvgIcon>
    </div>
    <ul
      class="select-dropdown"
      v-show="visible">
      <li
        class="select-dropdown-item"
        :class="item.label === selectedItem ? 'selected' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="handleSelect(item)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      list: [
        { label: '安全合规' },
        { label: '我们是谁' }
      ],
      selectedItem: ''
    }
  },
  methods: {
    handleClick () {
      this.visible = true
    },
    handleSelect (item) {
      this.selectedItem = item.label
      this.visible = false
    }
  }
}
</script>

<style scoped lang="less">
.select {
  position: relative;
  font-size: 16px;
  line-height: 14px;
  cursor: pointer;
  .select-container {
    .select-text {
      margin-right: 6px;
    }
    .arrow {
      transition: all ease .5s;
    }
  }
  .select-dropdown {
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    width: 108px;
    padding: 8px 0;
    color: @blank;
    background: @topwhite;
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
    border-radius: 8px;
    .select-dropdown-item {
      height: 42px;
      line-height: 42px;
      padding: 0 22px;
      text-align: center;
      &:hover {
        background-color: @gray3;
      }
      &.selected {
        color: @blue;
      }
    }
  }
  &.active {
    .select-container {
      .arrow {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
