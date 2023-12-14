<template>
  <div class="button" :class="[type, size, plain ? 'plain' : '']">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    // 默认medium 高50px small 高36px
    size: {
      type: String,
      default: 'medium'
    },
    plain: {
      type: Boolean,
      default: false
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
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  line-height: 1;
  text-align: center;
  transition: all ease-in-out .5s;
  &.blue {
    background-color: @blue;
    &:hover {
      background-color: @blue2;
    }
  }
  &.gray {
    background-color: @gray01;
    &:hover {
      background-color: @gray02;
    }
  }
  &.blank {
    background-color: @topblank;
    &:hover {
      background-color: @blank2;
    }
  }
  &.medium {
    min-width: 148px;
    font-size: 18px;
    padding: 16px 25px;
    border-radius: 8px;
  }
  &.small {
    font-size: 14px;
    padding: 11px 20px;
    border-radius: 4px;
  }
  &.plain {
    &.blue {
      border: 1px solid @blue;
      background-color: @topwhite;
      color: @blue;
      &:hover {
        background-color: #ecf0ff;
      }
    }
  }
  +.button {
    margin-left: 20px;
  }
}
</style>
