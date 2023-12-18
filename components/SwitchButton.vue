<template>
  <div class="switch-button" :class="theme">
    <ul
      class="switch-button-list"
      ref="buttonList">
      <li
        class="switch-button-item"
        :class="item.value === modelValue ? 'active' : ''"
        v-for="item in list"
        :key="item.value"
        @click="handleSwitchButton(item)">
        <p
          class="content"
          :data-value="item.value">
          {{ item.label }}
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
    theme: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      // 目标元素的位置数据
      offsetList: []
    }
  },
  computed: {
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
    // const eventListener = () => {
    //   this.setSlider()
    // }
    // window.addEventListener('resize', eventListener)
    // this.$once('hook:beforeDestroy', () => {
    //   window.removeEventListener('resize', eventListener)
    // })
  },
  methods: {
    // 获取位置数据
    getOffsetList () {
      const { buttonList } = this.$refs
      let offsetList = []
      if (buttonList) {
        const contentList = [...buttonList.querySelectorAll('.switch-button-item .content')]
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
          slider.style.height = `${target.offsetHeight}px`
          slider.style.top = `${target.totalOffsetTop}px`
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
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style scoped lang="less">
.switch-button {
  position: relative;
  display: inline-block;
  user-select: none;
  .switch-button-list {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: @gray3;
    border-radius: 26px;
    font-size: 16px;
    color: @gray4;
    .switch-button-item {
      position: relative;
      z-index: 2;
      height: 52px;
      text-align: center;
      transition: all ease .5s;
      &.active {
        color: @topwhite;
      }
      .content {
        display: inline-block;
        min-width: 128px;
        height: 100%;
        line-height: 24px;
        padding: 14px 44px;
        cursor: pointer;
      }
    }
  }
  .slider {
    position: absolute;
    z-index: 1;
    width: 0;
    height: 0;
    background-color: @gray4;
    border-radius: 26px;
    transition: top 0.5s ease, left 0.5s ease;
  }
  &.dark {
    .switch-button-list {
      background-color: @topwhite;
      color: @gray;
    }
    .slider {
      background-color: @blank;
    }
  }
}
</style>
