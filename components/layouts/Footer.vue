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
  .logo {
    margin-bottom: 80px;
    width: 170px;
    height: 34px;
    background-image: url('@/assets/image/logo.png');
  }
  .footer-menu {
    display: flex;
    font-size: 16px;
    color: @white;
    line-height: 16px;
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
}
</style>
