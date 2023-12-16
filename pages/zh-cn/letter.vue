<template>
  <div class="letter">
    <div class="banner background">
      <div class="banner-container layout">
        <p class="title">提供完备的银行单证服务</p>
      </div>
    </div>
    <div class="switch">
      <div class="layout">
        <SwitchTab
          v-model="activeTab"
          :list="tabList">
        </SwitchTab>
      </div>
    </div>
    <div class="business">
      <div class="business-container layout">
        <ul class="business-list">
          <li class="business-item">
            <p class="business-item-title">信用证业务（Letter of Credit）</p>
            <div class="business-item-content">
              <ul class="content-left">
                <li class="content-left-item">
                  <div class="content-left-item-header">
                    <SvgIcon name="global"></SvgIcon>
                    <span class="title">业务介绍</span>
                  </div>
                  <div class="content-left-item-desc">
                    信用证是开证行根据进口商的申请，向受益人(或出口商)出具的一种付款承诺。在受益人的交单符合信用证所规定的各项条款时，开证行即不可撤销地向受益人履行付款责任。
                  </div>
                  <div class="content-left-item-desc">支持具有真实贸易背景的跟单信用证。</div>
                  <div class="content-left-item-desc">支持USD、CNY、EUR币种的信用证，其他币种请通过邮箱咨询。</div>
                </li>
                <li class="content-left-item">
                  <div class="content-left-item-header">
                    <SvgIcon name="global"></SvgIcon>
                    <span class="title">业务前提</span>
                  </div>
                  <div class="content-left-item-desc">
                    受益人需是我行企业客户。
                  </div>
                </li>
                <li class="content-left-item">
                  <div class="content-left-item-header">
                    <SvgIcon name="global"></SvgIcon>
                    <span class="title">业务咨询</span>
                  </div>
                  <div class="content-left-item-desc">
                    咨询邮箱：<a href="mailto:tf@cbibank.com" class="link" target="_blank">tf@cbibank.com</a>
                  </div>
                  <div class="content-left-item-desc tip">
                    * 建议编辑完整信息发送至邮箱咨询：企业名称、姓名、电话、预留邮箱、具体信用证业务需求描述。
                  </div>
                </li>
              </ul>
              <div class="content-right">
                <div class="content-right-bg">
                  <img src="@/assets/image/letter/credit01.png" alt="">
                  <div class="credit-02">
                    <img src="@/assets/image/letter/credit02.png" alt="">
                  </div>
                  <div class="credit-03">
                    <img src="@/assets/image/letter/credit03.png" alt="">
                  </div>
                  <div class="credit-04">
                    <img src="@/assets/image/letter/credit04.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="business-container-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'credit',
      tabList: [
        { value: 'credit', label: '信用证业务', labelEn: '(Letter of Credit)' },
        { value: 'documentary', label: '跟单托收业务', labelEn: '(Documentary Collections)' },
        { value: 'guarantee', label: '保函业务', labelEn: '(Letter of Guarantee)' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.letter {
  width: 100%;
  .banner {
    width: 100%;
    height: 600px;
    background-image: url('@/assets/image/letter/banner.png');
    background-size: cover;
    .banner-container {
      padding-top: 284px;
      .title {
        font-size: 60px;
        color: @topwhite;
        line-height: 80px;
      }
    }
  }
  .switch {
    width: 100%;
    height: 320px;
    background: @gray3;
    padding-top: 100px;
  }
  .business {
    height: 984px;
    background-color: @topwhite;
    .business-container {
      position: relative;
      height: 100%;
      padding-top: 120px;
      .business-list {
        position: relative;
        z-index: 2;
        // display: flex;
        .business-item {
          .business-item-title {
            margin-bottom: 80px;
            font-size: 40px;
            color: @blank;
            line-height: 56px;
          }
          .business-item-content {
            display: flex;
            justify-content: space-between;
            .content-left {
              width: 570px;
              .content-left-item {
                margin-bottom: 50px;
                &:last-child {
                  margin-bottom: 50px;
                }
                .content-left-item-header {
                  display: flex;
                  align-items: center;
                  margin-bottom: 20px;
                  font-size: 36px;
                  color: @blank;
                  line-height: 36px;
                  .title {
                    margin-left: 16px;
                    font-size: 22px;
                  }
                }
                .content-left-item-desc {
                  font-size: 16px;
                  color: @blank2;
                  line-height: 32px;
                  &.tip {
                    color: @blank3;
                  }
                  .link {
                    color: #0256FF;
                  }
                }
              }
            }
            .content-right {
              padding: 36px 80px 0 0;
              .content-right-bg {
                position: relative;
                width: 390px;
                height: 572px;
                > div {
                  position: absolute;
                }
                .credit-02 {
                  top: 42px;
                  left: -102px;
                  width: 386px;
                  height: 212px;
                }
                .credit-03 {
                  top: 193px;
                  right: -28px;
                  width: 186px;
                  height: 235px;
                }
                .credit-04 {
                  top: -44px;
                  right: -82px;
                  width: 215px;
                  height: 106px;
                }
              }
            }
          }
        }
      }
      .business-container-bg {
        position: absolute;
        top: 0;
        right: -40px;
        width: 440px;
        height: 100%;
        background: @gray-gradient;
      }
    }
  }
}
</style>
