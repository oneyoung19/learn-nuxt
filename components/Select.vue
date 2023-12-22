<template>
  <div
    class="select"
    :class="visible ? 'active' : ''"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-click-outside="handleClickOutside">
    <div
      class="select-container"
      @click="handleClick">
      <span class="select-text">{{ text || modelValue.label }}</span>
      <SvgIcon class="arrow" name="arrow-bottom"></SvgIcon>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp">
      <div
        class="select-dropdown"
        v-show="visible">
        <ul
          class="select-dropdown-list">
          <li
            class="select-dropdown-item"
            :class="item.label === modelValue.label ? 'selected' : ''"
            v-for="(item, index) in list"
            :key="index"
            @click="handleSelect(item)">
            {{ item.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    },
    text: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    },
    // hover or click
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleClick () {
      if (this.trigger !== 'click') return
      this.visible = true
    },
    handleClickOutside () {
      if (this.trigger !== 'click') return
      this.visible = false
    },
    handleMouseEnter () {
      if (this.trigger !== 'hover') return
      this.visible = true
    },
    handleMouseLeave () {
      if (this.trigger !== 'hover') return
      this.visible = false
    },
    handleSelect (item) {
      this.$emit('update:modelValue', item)
      this.$emit('change', item)
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
    top: 100%;
    right: 0;
    padding-top: 15px;
    .select-dropdown-list {
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
