<template>
  <!-- 增加cookie提示，暂时只放在了首页中，将来要放到全局提示 -->
  <div class="cookie-tip">
    <h3>Cookie 为您提供个性化体验</h3>
    <div class="content">
      <p>
        Cookie帮助我们优化您的网站使用体验，我们使用Cookie进行网站分析和个性化内容展示，
        如果您继续访问本网站，代表您同意相关用途。更多信息，请查看我们的
        <span @click="handlePreviewProtocol">《隐私权政策》</span>
      </p>
      <div class="btns">
        <Button
          type="blank"
          @click="handleAcceptCookie"
        >
          接受Cookie
        </Button>

        <Button
          type="gray"
          @click="handleRejectCookie"
        >
          拒绝Cookie
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 接受cookie
function handleAcceptCookie() {
  // todo
}

// 拒绝cookie
function handleRejectCookie() {
  // todo
}

function handlePreviewProtocol() {

}
</script>

<style lang="less" scoped>
.cookie-tip {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: 180px;
  background: linear-gradient(180deg, #EAF0F7 0%, #FFFFFF 50%, #FFFFFF 100%);
  box-shadow: 0px 15px 40px 0px rgba(10,18,35,0.2);
  border-radius: 8px 8px 8px 8px;
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(187.00000405311584, 192.00000375509262, 216.00000232458115, 1)) 1 1;
  padding: 40px 50px 36px;

  h3 {
    font-size: 20px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 400;
    color: #171725;
    margin-bottom: 24px;
  }

  .content {
    width: 100%;
    display: flex;
    align-items: center;

    > p {
      flex: 1;
      font-size: 14px;
      line-height: 30px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #44444F;
      span {
        color: #4A6AFF;
        cursor: pointer;
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      width: 400px;
      flex-shrink: 0;
    }
  }
}
</style>
