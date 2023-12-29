<template>
  <div class="page-404 background">
    <div class="content">
      <img src="@/assets/image/404/404-bg.png" alt="" srcset="">
      <h1>糟糕，您访问的页面飞走了</h1>
      <p>该页面不存在或者页面出现了错误</p>
      <Button @click="handleToHome">返回首页</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleToHome() {
  navigateTo('/')
}
</script>

<style scoped lang="less">
.page-404 {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-image: url('@/assets/image/404/404-gradient.png');
  background-size: 804px 503px;
  background-position: top left;
  .content {
    width: 860px;
    margin: 0 auto;
    padding: 110px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    > img {
      width: 100%;
      height: 420px;
      display: block;
      margin-bottom: 80px;
    }

    > h1 {
      font-size: 24px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    > p {
      font-size: 16px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 58px;
    }

    &::before {
      content: '';
      width: 167px;
      height: 167px;
      position: absolute;
      z-index: 2;
      left: -320px;
      top: 432px;
      background: url('@/assets/image/404/404-dashed.png') no-repeat;
      background-size: 100% 100%;
    }

    &::after {
      content: '';
      width: 167px;
      height: 167px;
      position: absolute;
      z-index: 2;
      right: -230px;
      top: 621px;
      background: url('@/assets/image/404/404-dashed.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
