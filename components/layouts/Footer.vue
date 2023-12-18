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
              :class="linkItem.url ? 'underline' : ''"
              :href="linkItem.url"
              target="_blank">
              {{ linkItem.text }}
            </a>
            <span
              v-else
              :class="linkItem.url ? 'underline' : ''">
              {{ linkItem.text }}
            </span>
          </p>
        </li>
      </ul>
      <div class="footer-external">
        <div class="footer-external-download">
          <p class="download-title">下载APP</p>
          <DownloadApp></DownloadApp>
        </div>
        <div class="footer-external-follow">
          <p class="follow-title">关注我们</p>
          <div class="follow-list">
            <a href="https://www.facebook.com/cbibank2017" class="follow-item" target="_blank">
              <SvgIcon  name="facebook"></SvgIcon>
            </a>
            <a href="https://twitter.com/CBiBank2" class="follow-item" target="_blank">
              <SvgIcon name="x"></SvgIcon>
            </a>
            <a href="https://www.linkedin.com/company/cbibank" class="follow-item" target="_blank">
              <SvgIcon name="linkedin"></SvgIcon>
            </a>
            <a href="https://www.youtube.com/channel/UC9mT7YZvaNlt_oMKXnLboKA" class="follow-item youtube" target="_blank">
              <SvgIcon name="youtube"></SvgIcon>
            </a>
            <a href="https://www.instagram.com/cbibank2023" class="follow-item" target="_blank">
              <SvgIcon name="ins"></SvgIcon>
            </a>
            <a href="" class="follow-item">
              <SvgIcon name="wechat"></SvgIcon>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-statement">
        <p>CB International Bank LLC (CBiBank) 受美国波多黎各金融监管机构（OCIF）监管，是美国持牌的商业银行。CBiB 和 CBi 徽标是CB International Bank或其附属机构在波多黎各及美国的商标或注册商标，特此声明。</p>
        <p>注册地址：ST 330, 270 Munoz Rivera Ave, San Juan, Puerto Rico, United States 00918</p>
      </div>
      <div class="footer-attach">
        <div class="protocol">
          <a href="">服务协议</a>
          <span>|</span>
          <a href="">隐私权协议</a>
        </div>
        <div class="copyright">Copyright ©2017 CB International Bank LLC</div>
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
            { text: '单证业务', url: '/zh-cn/letter' },
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
  color: @topwhite;
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
        &:hover {
          .underline {
            color: @topwhite;
            font-weight: bold;
          }
        }
      }
    }
  }
  .footer-external {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    .footer-external-download {
      .download-title {
        margin-bottom: 40px;
      }
    }
    .footer-external-follow {
      .follow-title {
        margin-bottom: 40px;
      }
      .follow-list {
        display: flex;
        align-items: center;
        height: 50px;
        .follow-item {
          width: 20px;
          height: 20px;
          margin-right: 38px;
          color: @topwhite;
          &.youtube {
            width: 49px;
          }
          :deep(.svgclass) {
            width: 100%;
            height: 100%;
          }
          &:last-child {
            margin-right: 0;
          }
          &:hover {
            color: @gray2;
          }
        }
      }
    }
  }
  .footer-statement {
    font-size: 14px;
    color: @gray2;
    line-height: 26px;
    padding-bottom: 40px;
    border-bottom: 1px solid @blank3;
  }
  .footer-attach {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 106px;
    font-size: 16px;
    font-family: Poppins, Poppins;
    line-height: 16px;
    .protocol {
      > span {
        margin: 0 32px;
      }
    }
    .copyright {
    }
  }
}
</style>
