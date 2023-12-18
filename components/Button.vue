<template>
  <div class="button" :class="[type, size, plain ? 'plain' : '']">
    <span
      class="container"
      :class="[
        arrowConfig.moving ? 'moving' : '',
        arrowConfig.suspend ? 'suspend' : '']">
      <slot></slot>
      <SvgIcon
        class="arrow"
        name="arrow-right">
      </SvgIcon>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // blue gray blank
    type: {
      type: String,
      default: 'blue'
    },
    // 默认medium 高50px small 高36px
    size: {
      type: String,
      default: 'medium'
    },
    plain: {
      type: Boolean,
      default: false
    },
    arrowConfig: {
      type: Object,
      default () {
        return {
          moving: false,
          suspend: false
        }
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
.button {
  position: relative;
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
    color: @topwhite;
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
  .container {
    display: flex;
    align-items: center;
    .arrow {
      display: none;
      transition: all ease-in-out .5s;
    }
    &.moving {
      .arrow {
        display: inline-block;
        margin-left: 10px;
      }
    }
    &.suspend {
      position: relative;
      .arrow {
        position: absolute;
        top: 50%;
        right: 0;
        display: inline-block;
        margin: 0;
        transform: translate((100% + 10px), -50%);
        opacity: 0;
      }
    }
  }
  &:hover {
    .container {
      &.moving {
        .arrow {
          transform: translateX(6px);
        }
      }
      &.suspend {
        .arrow {
          transform: translate((100% + 30px), -50%);
          opacity: 1;
        }
      }
    }
  }
}
</style>
