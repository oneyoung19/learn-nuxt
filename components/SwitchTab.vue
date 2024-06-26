<template>
  <div class="switch-tab">
    <ul
      class="switch-tab-list"
      :class="border ? 'border-bottom' : ''"
      ref="tabList">
      <li
        class="switch-tab-item"
        :class="item.value === modelValue ? 'active' : ''"
        v-for="item in list"
        :key="item.value"
        :data-value="item.value"
        @click="handleSwitchButton(item)">
        <p
          class="content">
          {{ item.label }}
        </p>
        <p
          class="content-en">
          {{ item.labelEn }}
        </p>
      </li>
    </ul>
    <div
      class="slider"
      ref="slider">
    </div>
  </div>
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
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'beforeChange', 'change'],
  data () {
    return {
      // 目标元素的位置数据
      offsetList: []
    }
  },
  watch: {
    modelValue: {
      handler () {
        this.setSlider()
      },
      immediate: true
    }
  },
  mounted () {
    this.setSlider()
  },
  methods: {
    // 获取位置数据
    getOffsetList () {
      const { tabList } = this.$refs
      let offsetList = []
      if (tabList) {
        const contentList = [...tabList.querySelectorAll('.switch-tab-item')]
        offsetList = contentList.map((content, index) => {
          // 目标元素的标识
          const { value } = content.dataset
          // 目标元素的本身大小及其距离父元素的偏移
          const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = content
          // 目标父元素距离祖先元素的偏移
          const { offsetTop: parentOffsetTop, offsetLeft: parentOffsetLeft } = content.parentNode
          // 总偏移
          const totalOffsetTop = offsetTop + parentOffsetTop
          const totalOffsetLeft = offsetLeft + parentOffsetLeft
          return {
            value,
            offsetWidth,
            offsetHeight,
            offsetTop,
            offsetLeft,
            parentOffsetTop,
            parentOffsetLeft,
            totalOffsetTop,
            totalOffsetLeft,
            index,
            endLeft: parentOffsetLeft + offsetLeft
          }
        })
      }
      return offsetList
    },
    // 根据选中的button设置位置和大小
    setOffset (modelValue, offsetList) {
      const { slider } = this.$refs
      if (slider) {
        const target = offsetList.find(item => item.value === modelValue)
        if (target) {
          slider.style.width = `${target.offsetWidth}px`
          // slider.style.height = `${target.offsetHeight}px`
          slider.style.height = `4px`
          // slider.style.top = `${target.totalOffsetTop}px`
          slider.style.bottom = 0
          slider.style.left = `${target.totalOffsetLeft}px`
        } else {
          // 如果activeButton不是button的数据之一 则清除slider
          slider.style.width = 0
          slider.style.height = 0
          slider.style.left = 0
        }
      }
    },
    // 设置slider
    setSlider () {
      this.offsetList = this.getOffsetList()
      this.setOffset(this.modelValue, this.offsetList)
    },
    // 切换button
    handleSwitchButton ({ value }) {
      this.$emit('beforeChange', value)
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped lang="less">
.switch-tab {
  position: relative;
  display: inline-block;
  user-select: none;
  .switch-tab-list {
    position: relative;
    display: inline-flex;
    align-items: center;
    background-color: @topwhite;
    &.border-bottom {
      border-bottom: 4px solid @gray3;
    }
    .switch-tab-item {
      position: relative;
      width: 400px;
      height: 120px;
      padding: 33px 10px;
      text-align: center;
      color: @blank;
      cursor: pointer;
      transition: all ease-in-out .5s;
      &:hover {
        background: linear-gradient(180deg, #F3F5F8 3%, rgba(255,255,255,0) 100%);
      }
      &.active {
        background: linear-gradient(180deg, #F3F5F8 3%, rgba(255,255,255,0) 100%);
      }
      &:first-child {
        border-radius: 10px 0 0 0;
      }
      &:last-child {
        border-radius: 0 10px 0 0;
      }
      .content {
        margin-bottom: 4px;
        font-size: 20px;
        line-height: 28px;
      }
      .content-en {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
  .slider {
    position: absolute;
    z-index: 1;
    width: 0;
    height: 0;
    background-color: @blank;
    transition: top 0.5s ease, left 0.5s ease;
  }
}
</style>
