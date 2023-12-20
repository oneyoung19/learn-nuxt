<template>
  <ul class="use-list">
    <li
      class="use-item"
      v-for="(item, index) in list"
      :key="index">
      <SvgIcon class="icon" name="selected-white"></SvgIcon>
      <span class="text">{{ item.label }}</span>
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
.use-list {
  display: flex;
  flex-wrap: wrap;
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
</style>
