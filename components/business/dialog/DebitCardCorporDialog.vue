<template>
  <ElDialog
    class="el-dialog-cover"
    :modelValue="visible"
    @update:modelValue="handleVisible">
    <div class="debit-card">
      <SvgIcon class="icon-close" name="close" @click="handleClose"></SvgIcon>
      <div class="debit-card-banner background">
        <p class="text">CBiBank 企业借记卡</p>
        <div class="img">
          <img src="@/assets/image/dialog/corpor-debit-card.png" alt="">
        </div>
      </div>
      <div class="debit-card-content">
        <ul class="debit-card-content-list">
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="i-deep"></SvgIcon>
            <div class="content">
              <p class="title">如何拥有企业借记卡</p>
              <p class="desc">拥有CBiBank企业账户——登录企业网银——账户管理——申请企业借记卡</p>
            </div>
          </li>
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="cards-deep"></SvgIcon>
            <div class="content">
              <p class="title">卡片额度</p>
              <p class="desc">ATM取现限额：2000美元/笔，2000美元/日，5000美元/月，20000美元/年；</p>
              <p class="desc">POS刷卡限额： 100000美元/笔，200000美元/日；</p>
              <p class="desc">EC消费限额：5000美元/比，10000美元/日，50000美元/月；</p>
            </div>
          </li>
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="note-deep"></SvgIcon>
            <div class="content">
              <p class="title">收费标准</p>
              <p class="desc">办卡费用49美元</p>
            </div>
          </li>
        </ul>
      </div>
      <Button
        class="debit-card-button"
        type="blank"
        @click="handleApply">
        立即申请
      </Button>
    </div>
  </ElDialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleApply () {
      window.open('https://online.cbibank.com')
    },
    handleClose () {
      this.$emit('update:modelValue', false)
    },
    handleVisible (visible) {
      this.$emit('update:modelValue', visible)
    }
  }
}
</script>

<style lang="less">
.el-dialog-cover {
  width: 600px;
}
</style>

<style scoped lang="less">
.debit-card {
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
  .icon-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: @blank2;
    cursor: pointer;
    &:hover {
      color: @gray4;
    }
  }
  .debit-card-banner {
    display: flex;
    align-items: center;
    width: 600px;
    height: 285px;
    padding: 60px 60px 30px;
    background-image: url('@/assets/image/dialog/dialog-large-bg.png');
    text-align: left;
    .text {
      flex: 1;
      font-size: 26px;
      color: @topblank;
      line-height: 36px;
    }
    .img {
      margin-left: 40px;
      width: 310px;
      height: 195px;
    }
  }
  .debit-card-content {
    margin-bottom: 40px;
    padding: 0 40px;
    text-align: left;
    .debit-card-content-list {
      padding: 20px 20px 20px 30px;
      background: linear-gradient(180deg, #EAF5FA 0%, #EDF9FF 0%, rgba(246,252,255,0) 100%);
      border-radius: 8px;
      .debit-card-content-item {
        display: flex;
        margin-bottom: 23px;
        &:last-child {
          margin-bottom: 0;
        }
        >.icon {
          margin-right: 16px;
          font-size: 28px;
        }
        >.content {
          padding-top: 7px;
          .title {
            margin-bottom: 8px;
            font-size: 14px;
            color: @blank;
            line-height: 14px;
          }
          .desc {
            font-size: 12px;
            color: @blank2;
            line-height: 24px;
          }
        }
      }
    }
  }
  .debit-card-button {
    width: 300px;
  }
}
</style>
