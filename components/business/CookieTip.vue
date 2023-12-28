<template>
  <!-- 增加cookie提示，暂时只放在了首页中，将来要放到全局提示 -->
  <div class="cookie-tip">
    <div class="content layout">
      <div class="">
        <h3>Cookie 为您提供个性化体验</h3>
        <p>
          Cookie帮助我们优化您的网站使用体验，我们使用Cookie进行网站分析和个性化内容展示，
          如果您继续访问本网站，代表您同意相关用途。更多信息，请查看我们的
          <a class="link" href="https://www.cbibank.com/privacy.html" target="__blank">《隐私权协议》</a>
        </p>
      </div>
      <div class="btns">
        <Button
          type="blank"
          size="small"
          @click="handleAcceptCookie">
          接受Cookie
        </Button>
        <!-- <Button
          type="gray"
          size="small"
          @click="handleRefuseCookie">
          拒绝Cookie
        </Button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// if (!window.localStorage.getItem('cookieConsent')) {
//   $('.cookie-consent').show()
// }
// 接受cookie
function handleAcceptCookie() {
  // todo
  // const cookieConsent = $('.cookie-consent')
  // const height = cookieConsent.height()
  // cookieConsent.animate({
  //   bottom: `-${height}px`
  // }, 500, function () {
  //   cookieConsent.hide()
  // })
  // window.localStorage.setItem('cookieConsent', true)
}

// 拒绝cookie
function handleRefuseCookie() {
  // todo
}
</script>

<style lang="less" scoped>
.cookie-tip {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 99;
  width: 100%;
  padding: 24px 60px;
  background: linear-gradient(180deg, #EAF0F7 0%, #FFFFFF 50%, #FFFFFF 100%);
  box-shadow: 0px 15px 40px 0px rgba(10,18,35,0.2);
  border-radius: 8px;
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(187.00000405311584, 192.00000375509262, 216.00000232458115, 1)) 1 1;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 20px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #171725;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #44444F;
      >.link {
        color: #4A6AFF;
        cursor: pointer;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      flex-shrink: 0;
      margin-left: 130px;
    }
  }
}
</style>
