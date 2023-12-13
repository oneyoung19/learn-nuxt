<template>
  <div class="header">
    <div class="layout">
      <div class="header-container">
        <div class="header-left">
          <div class="logo">
            <img src="~assets/image/logo.png" alt="logo">
          </div>
          <ul class="navigation">
            <li class="navigation-item">企业网银</li>
            <li class="navigation-item">个人网银</li>
            <li class="navigation-item">关于我们</li>
          </ul>
        </div>
        <div class="header-right">
          <div class="buttons">
            <div class="button gray">企业登录</div>
            <div class="button blue">开户申请</div>
          </div>
          <div class="switch-lang">
            <SvgIcon class="svg-global" name="global"></SvgIcon>
            <span class="lang">简体中文</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.header {
  background: @blank;
  font-size: 16px;
  color: @white;
  line-height: 16px;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    .header-left {
      display: flex;
      .logo {
        width: 114px;
        margin-right: 50px;
      }
      .navigation {
        display: flex;
        align-items: center;
        .navigation-item {
          margin-right: 40px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .buttons {
        display: flex;
        margin-right: 40px;
        .button {
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          user-select: none;
        }
        .gray {
          margin-right: 20px;
          background: #5A607F;
        }
        .blue {
          background: #4A6AFF;
        }
      }
      .switch-lang {
        display: flex;
        align-items: center;
        .svg-global {
          font-size: 20px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
