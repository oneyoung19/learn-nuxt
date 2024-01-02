<template>
  <div class="header">
    <div class="layout">
      <div class="header-container">
        <div class="header-left">
          <NuxtLink class="logo" to="/zh-cn">
            <img src="~assets/image/logo.png" alt="logo">
          </NuxtLink>
          <ul class="navigation">
            <li
              class="navigation-item"
              :class="item.value === $route.path ? 'active' : ''"
              v-for="(item, index) in navigationList"
              :key="index">
              <NuxtLink :to="item.value">
                {{ item.label }}
              </NuxtLink>
            </li>
            <Select
              text="关于我们"
              trigger="hover"
              v-model="aboutSelectValue"
              :list="aboutSelectList"
              @change="handleAboutSelect">
            </Select>
          </ul>
        </div>
        <div class="header-right">
          <div class="buttons">
            <Button type="gray" size="small">企业登录</Button>
            <Button type="blue" size="small">开户申请</Button>
          </div>
          <div class="switch-lang">
            <SvgIcon class="svg-global" name="global"></SvgIcon>
            <Select
              class="lang"
              text="简体中文"
              trigger="hover"
              v-model="langSelectValue"
              :list="langSelectList"
              @change="handleLangSelect">
            </Select>
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
      // 导航
      navigationList: [
        { label: '企业网银', value: '/zh-cn/corporbank' },
        { label: '个人网银', value: '/zh-cn/perbank' }
      ],
      aboutSelectValue: {},
      aboutSelectList: [
        { label: '安全合规', value: '/zh-cn/about/safety' },
        { label: '我们是谁', value: '/zh-cn/about/who-we-are' }
      ],
      // 语言切换
      langSelectValue: {},
      langSelectList: [
        { label: '简体中文', value: 'zh-cn' },
        { label: '繁体中文', value: 'zh-hant' },
        { label: 'English', value: 'en' }
      ]
    }
  },
  methods: {
    handleAboutSelect (aboutInfo) {
      const { value: path } = aboutInfo
      this.$router.push({
        path
      })
    },
    handleLangSelect (langInfo) {
      const { value } = langInfo
      if (value === 'zh-hant') {
        // window.location.href = '/zh-hant'
      } else if (value === 'en') {
        // window.location.href = '/en'
      }
    }
  }
}
</script>

<style scoped lang="less">
.header {
  // position: fixed;
  // z-index: 999;
  width: 100%;
  height: @headerHeight;
  background: @blank;
  font-size: 16px;
  color: @topwhite;
  line-height: 16px;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .header-left {
      display: flex;
      align-items: center;
      height: 100%;
      .logo {
        width: 114px;
        height: 24px;
        cursor: pointer;
      }
      .navigation {
        display: flex;
        align-items: center;
        margin-left: 50px;
        .navigation-item {
          position: relative;
          margin-right: 40px;
          &:last-child {
            margin-right: 0;
          }
          &.active {
            &:after {
              content: '';
              position: absolute;
              left: 0;
              top: calc(100% + 15px);
              width: 100%;
              height: 2px;
              background-color: @blue;
            }
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
