<template>
  <ElDialog
    class="el-custom-cover"
    :modelValue="visible"
    @update:modelValue="handleVisible">
    <div class="debit-card">
      <SvgIcon class="icon-close" name="close" @click="handleClose"></SvgIcon>
      <div class="debit-card-banner background">
        <p class="text">CBiBank 个人借记卡</p>
        <div class="img">
          <img src="@/assets/image/dialog/person-debit-card.png" alt="">
        </div>
      </div>
      <div class="debit-card-content">
        <ul class="debit-card-content-list">
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="i-deep"></SvgIcon>
            <div class="content">
              <p class="title">如何申请卡片</p>
              <p class="desc">下载CBiBank App——注册个人账户——入金激活账户——申请借记卡</p>
            </div>
          </li>
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="cards-deep"></SvgIcon>
            <div class="content">
              <p class="title">卡片额度</p>
              <p class="desc">ATM取现限额：2000美元/笔，2000美元/日，5000美元/月，20000美元/年；</p>
              <p class="desc">POS刷卡限额： 100000美元/笔，200000美元/日；</p>
              <p class="desc">EC消费限额：5000美元/比，10000美元/日，20000美元/月；</p>
            </div>
          </li>
          <li class="debit-card-content-item">
            <SvgIcon class="icon" name="note-deep"></SvgIcon>
            <div class="content">
              <p class="title">收费标准</p>
              <p class="desc">办卡费用9.9美元</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="debit-card-footer">
        <p class="text">下载 CBiBank APP 完成操作</p>
        <DownloadApp class="download" invert></DownloadApp>
      </div>
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
    handleClose () {
      this.$emit('update:modelValue', false)
    },
    handleVisible (visible) {
      this.$emit('update:modelValue', visible)
    }
  }
}
</script>

<style scoped lang="less">
.debit-card {
  position: relative;
  width: 100%;
  text-align: center;
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
    background-image: url('@/assets/image/dialog/debit-card-bg.png');
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
    margin-bottom: 20px;
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
  .debit-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 108px;
    padding: 0 40px;
    background: linear-gradient(90deg, #44444F 0%, #171725 100%);
    .text {
      font-size: 14px;
      color: @topwhite;
      line-height: 24px;
    }
    .download {
      :deep(.download-item) {
        .download-app-store {
          width: 90px;
          height: 30px;
        }
        .download-google-play {
          width: 100px;
          height: 30px;
        }
        .download-qrcode {
          width: 30px;
          height: 30px;
          background-size: 18px 18px;
        }
      }
    }
  }
}
</style>
