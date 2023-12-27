<template>
  <div class="open-screen layout">
    <div class="code-block">    @SneakyThrows
    private static void bankTransfer() {
        final ApiNoticeClient instance = authInitialization();
        instance.submitBankTransfer(“P202312252000521853169"
                , ContentData.build(“amount", “14999")
                // ...
                , ContentData.build(“targetAccount", “xxxxx")
        );
    }</div>
    <div class="code-block">private static void settleOrder() throws ApiException {
        Auth auth = Auth.create(“ 1628ab36888c40b81628ab36", 
“36888c40b8ecf0f4");

        final ApiClientFactory condorClientFactory = new ApiClientFactory(API_CLIENT_CONFIG, auth);
        final ApiNoticeClient instance = condorClientFactory.newInstance();
</div>
    <div class="code-block">private static void settleOrder() throws ApiException {
        ApiNoticeClient instance = authInitialization();
        //  ...
        instance.submitSettleOrder(“2020202"
                , ContentData.build(“amount", “200000")
                , ContentData.build(“salesFile", “file://xxxx/xxxx")
              </div>
    <div class="code-block">@SneakyThrows
    private static void innerBankTransfer() {
        // inner-bank transfer, Simple example
        instance.submitInnerBankTransfer(“P202312252000521853169"
                , ContentData.build(“amount", “4999")
                , ContentData.build(“currency", “USD")
                // ...
                , ContentData.build(“fromAccount", “xxxxx")
                , ContentData.build(“targetAccount", “xxxxx")
    }</div>
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
.open-screen {
  position: relative;
  display: none;
  .code-block {
    position: absolute;
    padding: 18px;
    color: @topwhite;
    background: @blank;
    box-shadow: 0px 12px 24px -6px rgba(33,33,33,0.2);
    border-radius: 8px;
    &:nth-child(1) {
      top: 110px;
      left: -20px;
      width: 400px;
    }
    &:nth-child(2) {
      top: 130px;
      right: 0;
      width: 350px;
    }
    &:nth-child(3) {
      top: 330px;
      left: 20px;
      width: 400px;
    }
    &:nth-child(4) {
      top: 400px;
      right: 0;
      width: 300px;
    }
  }
}
&.init {
  .open-screen {
    display: block;
    &[data-aos="aos-animate-scale-minify"] {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background: @topwhite;
      transform-origin: center bottom;
      transition-property: width, height;
      &.aos-animate {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1200px;
        height: 461px;
        // left: 50%;
        // transform: translate(-50%);
        // background: transparent;
        :deep(.code-block) {
          // &:nth-child(1) {
          //   top: 50px;
          //   left: 100px;
          //   transform: scale(.8);
          // }
          // &:nth-child(2) {
          //   top: 50px;
          //   right: 100px;
          //   transform: scale(.8);
          // }
          // &:nth-child(3) {
          //   top: 150px;
          //   left: 100px;
          //   transform: scale(.8);
          // }
          // &:nth-child(4) {
          //   top: 200px;
          //   right: 100px;
          //   transform: scale(.8);
          // }
        }
      }
    }
  }
}
</style>
