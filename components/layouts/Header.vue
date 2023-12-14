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
          <div class="">
            <Button type="gray" size="medium">企业登录</Button>
            <Button type="blue" size="small">开户申请</Button>
            <Button type="blue" size="medium" plain>开户申请</Button>
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
  color: @topwhite;
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
