<template>
  <div class="footer">
    <div class="layout">
      <div class="logo background"></div>
      <ul class="footer-menu">
        <li
          class="footer-menu-item"
          v-for="(menuItem, menuIndex) in menuList"
          :key="menuIndex">
          <p class="footer-menu-item-title">
            {{ menuItem.title }}
          </p>
          <p
            class="footer-menu-item-link"
            v-for="(linkItem, linkIndex) in menuItem.links"
            :key="linkIndex">
            <a
              v-if="linkItem.url"
              :href="linkItem.url"
              target="_blank">
              {{ linkItem.text }}
            </a>
            <span v-else>{{ linkItem.text }}</span>
          </p>
        </li>
      </ul>
      <div class="footer-external">
        <div class="footer-external-download">
          <p class="download-title">下载APP</p>
          <ul class="download-list">
            <li class="download-item">
              <a href="" class="download-app-store background"></a>
            </li>
            <li class="download-item">
              <a href="" class="download-google-play background"></a>
            </li>
            <li class="download-item">
              <a href="" class="download-qrcode background"></a>
              <div class="download-h5">
                <div class="download-h5-qrcode">
                  <img src="~assets/image/download-qrcode.png" alt="">
                </div>
                <p class="download-h5-text">
                  <!-- 扫描下载APP -->
                  Scan QR to download app
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-external-follow">
          <p class="title">关注我们</p>
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          title: '银行服务',
          links: [
            { text: '企业服务', url: '' },
            { text: '个人服务', url: '' },
            { text: '单证业务', url: '' },
            { text: '我们是谁', url: '' },
            { text: '安全合规', url: '' },
            { text: '反洗钱', url: '' }
          ]
        },
        {
          title: '帮助中心',
          links: [
            { text: '费用说明', url: '' },
            { text: '尽调查册缴费', url: '' },
            { text: '百科全书', url: '' }
          ]
        },
        {
          title: '联系我们',
          links: [
            { text: '全球客服热线：+1-939-332-7285', url: 'tel:+1-939-332-7285' },
            { text: '亚太客服热线：+86-400-022-9291', url: 'tel:+86-400-022-9291' },
            { text: '联系邮箱：support@cbibank.com', url: 'mailto:support@cbibank.com' },
            { text: 'WhatsApp：+1（917） 920-6771', url: '' }
          ]
        },
        {
          title: '资质',
          links: [
            { text: 'SWIFT CODE：CBLBPRSJ', url: '' },
            { text: 'ABA：021508125', url: '' }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.footer {
  height: 928px;
  padding-top: 100px;
  background: @blank;
  font-size: 16px;
  color: @white;
  line-height: 16px;
  .logo {
    margin-bottom: 80px;
    width: 170px;
    height: 34px;
    background-image: url('@/assets/image/logo.png');
  }
  .footer-menu {
    display: flex;
    margin-bottom: 70px;
    .footer-menu-item {
      margin-right: 150px;
      &:last-child {
        margin-right: 0;
      }
      .footer-menu-item-title {
        margin-bottom: 50px;
      }
      .footer-menu-item-link {
        margin-bottom: 20px;
        color: @gray2;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .footer-external {
    display: flex;
    justify-content: space-between;
    .footer-external-download {
      .download-title {
        margin-bottom: 40px;
      }
      .download-list {
        display: flex;
        .download-item {
          position: relative;
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          > a {
            display: block;
          }
          .download-app-store {
            width: 150px;
            height: 50px;
            background-image: url('@/assets/image/app-store.png');
          }
          .download-google-play {
            width: 168px;
            height: 50px;
            background-image: url('@/assets/image/google-play.png');
          }
          .download-qrcode {
            width: 50px;
            height: 50px;
            background-image: url('@/assets/image/qrcode.png');
          }
          .download-h5 {
            position: absolute;
            top: calc(100% + 22px);
            left: 50%;
            transform: translateX(-50%);
            display: none;
            padding: 6px 6px 16px;
            background-color: @white;
            border-radius: 8px;
            box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
            &::before {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translate(-50%, -100%);
              content: '';
              width: 0;
              height: 0;
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              border-bottom: 7px solid @white; /* 箭头的颜色，可以根据需要修改 */
            }
            .download-h5-qrcode {
              width: 168px;
              height: 168px;
            }
            .download-h5-text {
              font-size: 12px;
              font-family: Poppins, Poppins;
              color: #44444F;
              line-height: 14px;
              text-align: center;
            }
          }
          &:hover {
            .download-h5 {
              display: block;
            }
          }
        }
      }
    }
    .footer-external-follow {}
  }
}
</style>
