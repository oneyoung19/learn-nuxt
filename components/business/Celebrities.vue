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
    return {
      celebrityList: [
        {
          id: 'daikebin',
          name: '戴科彬',
          position: '猎聘网创始人兼CEO',
          words: '猎聘网谨祝CBiBank开业运营！在职业发展上，有贵人扶持一把会让道路更加顺利；在事业经营上，有专业机构支持会让业务更加蓬勃。CBiBank就是这样一家为出海中小企业而生的国际银行，用专业、安全和贴心服务为后者保驾护航。'
        },
        {
          id: 'liyan',
          name: '李岩',
          position: '微智全景CEO',
          words: '“乘风破浪会有时，直挂云帆济沧海”，祝贺CBiBank开业大吉，为出海中小企业提供安全、专业、快速、便捷的国际银行服务。'
        },
        {
          id: 'fenglun',
          name: '冯仑',
          position: '万通控股董事长',
          words: '神州数字集团是科技金融的理想主义者，有著丰富且成熟的新金融经验和支付履历。CBiBank是神州数字在这一领域的全新探索，秉承神州数字的品牌理想，CBiBank将为出海中小企业提供专业、便捷和贴心的国际银行服务，协力创业企业、出海商神州数字集团是科技金融的理想主义者，有著丰富且成熟的新金融经验和支付履历。CBiBank是神州数字在这一领域的全新探索，秉承神州数字的品牌理想，CBiBank将为出海中小企业提供专业、便捷和贴心的国际银行服务，协力创业企业、出海商'
        },
        {
          id: 'yangguang',
          name: '杨光',
          position: '招商局资本高级董事总经理',
          words: '热烈祝贺CBiBank盛大开业，相信CBiBank的专业银行服务团队将为更多出海中小企业提供优质全面的国际金融服务，助力后者稳健成长。',
        },
        {
          id: 'yanghuan',
          name: '杨桓',
          position: '联想佳沃集团董事总经理',
          words: 'CBiBank是一家专为出海中小企业提供国际银行服务的专业银行，立足美国，专业的服务团队，为客户提供贴心、便捷的服务，出海中小企业值得拥有。'
        },
        {
          id: 'zhangqiang',
          name: '张强',
          position: '去哪儿网总裁兼旅悦集团CEO',
          words: 'CBiBank是服务出海中小企业的国际银行专家，在传统国际大银行服务缺位的现实条件下，CBiBank不啻为出海中小企业的一个上佳选择。放心专享便捷、专业和快速的国际银行服务新通道，出海中小企业值得拥有！'
        },
        {
          id: 'xuejun',
          name: '薛军',
          position: '启迪创投创始合伙人<br/>清控银杏创始合伙人',
          words: 'CBiBank已经成功运营多月，我对于其团队表现出的专业度和敬业度印象深刻。CBiBank专注于出海中小企业的国际银行服务，安全、快速、便捷的境外开户、转账和支付是出海中小企业的不二之选，能在很大程度上提升后者财务效率。出海中小企业国际银行，我推荐CBiBank！'
        },
        {
          id: 'moxiaoqi',
          name: '莫小奇',
          position: '知名演员<br/>准了App创始人',
          words: '一台好戏需要专业团队精心编排，一个好产品需要专业团队用心打磨。CBiBank最专业的团队为出海中小企业提供快速、便捷和安全的国际银行服务! 祝贺CBiBank开业迎宾!'
        },
        {
          id: 'xiaodun',
          name: '肖盾',
          position: '<span>一起教育（股票代码：YQ）<br/>联合创始人</span>',
          words: '一起教育科技解决的是教学效率低下的问题，CBiBank则解决的是出海中小企业金融效率低下的问题。依赖CBiBank专业的银行团队，出海中小企业可以在国际银行服务领域畅享安全、快速和便捷的跨境开户和转账服务，提升整体业务和盈利水平。'
        },
        {
          id: 'heqingyuan',
          name: '何庆源',
          position: '香港星展银行独立董事<br/>中国移动通信集团董事',
          words: '我欢迎新金融加入金融行业，完善金融市场的多元化发展。 CBiBank作为立足美国的全球首批民营互联网银行，其团队专业度值得信赖，其快速、便捷和安全的国际银行服务将为出海中小企业解决境外开户、跨境转账等切实需求。'
        },
        {
          id: 'yangtianzhen',
          name: '杨天真',
          position: '壹心娱乐创始人',
          words: '祝贺CBiBank富港银行成立，通过科技赋能新金融，立足未来、服务全球。CBiBank是全球艺人国际银行服务的新选择。'
        },
        {
          id: 'ruliyun',
          name: '茹立云',
          position: '葡萄智学创始人兼CEO<br/>搜狗公司战略顾问',
          words: '祝贺CBiBank开业迎宾！过硬的产品、专业的团队、贴心的服务是所有企业走向成功的基石，CBiBank就是这样一家源自美国的银行，其安全、便捷和专业的国际银行服务，是出海中小企业的国际银行服务新通路。'
        },
        {
          id: 'tianhongfei',
          name: '田鸿飞',
          position: '远望资本合伙人',
          words: '我谨代表远望资本祝贺CBiBank开业运营！CBiBank是首批民营国际互联网银行，其创业团队的前瞻性和管理团队的专业性为CBiBank奠定了坚实的基础，让安全、可靠、专业、贴心、便捷在CBiBank甫一成立即成为其核心标签。CBiBank是出海中小企业值得信赖的国际银行服务专家！'
        },
        {
          id: 'wenxin',
          name: '文心',
          position: '策源创投合伙人',
          words: '热烈祝贺CBiBank盛大开业！CBiBank和策源创投有着相通的使命：帮助创业者成长，策源侧重于投资，而CBiBank则擅长金融，为创业企业、出海中小企提供专业、便捷和贴心的国际银行服务。'
        },
        {
          id: 'xingshanhu',
          name: '邢山虎',
          position: '乐动卓越CEO',
          words: '乐动卓越诚贺CBiBank开业，CBiBank立足美国、创新银行业务，成为国际大银行的重要补充，是出海中小企业值得信赖的银行服务合作伙伴。'
        }
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
