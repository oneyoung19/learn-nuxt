<template>
  <div class="celebrities">
    <ul class="celebrity-list">
      <li
        class="celebrity-item"
        v-for="(item, index) in celebrityList"
        :key="index">
        <p class="celebrity-words">{{ item.words }}</p>
        <div class="celebrity-introduce">
          <SvgIcon class="celebrity-introduce-icon" name="quotes"></SvgIcon>
          <div class="celebrity-introduce-text">
            <p class="celebrity-name">{{ item.name }}</p>
            <p class="celebrity-position text-overflow">{{ item.position }}</p>
          </div>
        </div>
        <div class="celebrity-avatar background">
          <img :src="item.avatar" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    const getLocaltionImage = id => `/assets/image/celebrity/${id}.png`
    const celebrities = import.meta.glob('@/assets/image/celebrity/*.png', {
      eager: true
    })
    console.log(celebrities)
    return {
      celebrityList: [
        {
          id: 'daikebin',
          name: '戴科彬',
          position: '猎聘网创始人兼CEO',
          words: '猎聘网谨祝CBiBank开业运营！在职业发展上，有贵人扶持一把会让道路更加顺利；在事业经营上，有专业机构支持会让业务更加蓬勃。CBiBank就是这样一家为出海中小企业而生的国际银行，用专业、安全和贴心服务为后者保驾护航。'
        },
        {
          id: 'fengbin',
          name: '馮濱',
          position: '眾信旅遊集團股份有限公司董事長',
          words: '神州数字集团是科技金融的理想主义者，有著丰富且成熟的新金融经验和支付履历。CBiBank是神州数字在这一领域的全新探索，秉承神州数字的品牌理想，CBiBank将为出海中小企业提供专业、便捷和贴心的国际银行服务，协力创业企业、出海商神州数字集团是科技金融的理想主义者，有著丰富且成熟的新金融经验和支付履历。CBiBank是神州数字在这一领域的全新探索，秉承神州数字的品牌理想，CBiBank将为出海中小企业提供专业、便捷和贴心的国际银行服务，协力创业企业、出海商' },
        {
          id: 'yangguang',
          name: '杨光',
          position: '招商局资本高级董事总经理',
          words: '热烈祝贺CBiBank盛大开业，相信CBiBank的专业银行服务团队将为更多出海中小企业提供优质全面的国际金融服务，助力后者稳健成长。',
        },
        {}
      ].map(item => {
        const { id } = item
        if (id) {
          const avatarModule = celebrities[getLocaltionImage(id)]
          if (avatarModule && avatarModule.default) {
            const avatar = avatarModule.default
            return {
              avatar,
              ...item
            }
          }
          return item
        } else {
          return item
        }
      })
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.celebrities {
  width: 100%;
  overflow-x: scroll;
  .celebrity-list {
    display: flex;
    /* 为动画和头像预留位置 padding-top会造成box-shadow外泄 所以使用margin-top */
    margin-top: 10px;
    padding-bottom: 34px;
    .celebrity-item {
      position: relative;
      width: 380px;
      min-width: 380px;
      height: 264px;
      margin-right: 30px;
      padding: 25px 30px 0;
      background: @topwhite;
      box-shadow: 0px 10px 30px 0px rgba(50,50,71,0.08);
      border-radius: 9px;
      transition: all ease .5s;
      &:last-child {
        margin-right: 0;
      }
      .celebrity-words {
        margin-bottom: 40px;
        height: 120px;
        font-size: 14px;
        color: @blank2;
        line-height: 24px;
        overflow: scroll;
      }
      .celebrity-introduce {
        display: flex;
        .celebrity-introduce-icon {
          margin-right: 10px;
          font-size: 45px;
          color: #CFD4DD;
        }
        .celebrity-introduce-text {
          width: 148px;
          .celebrity-name {
            margin-bottom: 10px;
            font-size: 16px;
            color: #222222;
            line-height: 16px;
          }
          .celebrity-position {
            font-size: 14px;
            color: #87878F;
            line-height: 20px;
          }
        }
      }
      .celebrity-avatar {
        position: absolute;
        right: 24px;
        bottom: -34px;
        z-index: 2;
        width: 108px;
        height: 108px;
        padding: 14px;
        border-radius: 100px;
        background-image: url('@/assets/image/circle-dashed.png');
      }
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
</style>
