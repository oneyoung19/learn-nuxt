<template>
  <ElDialog
    class="el-dialog-cover"
    :modelValue="visible"
    @update:modelValue="handleVisible">
    <div class="open-account">
      <SvgIcon class="icon-close" name="close" @click="handleClose"></SvgIcon>
      <div class="open-account-banner background">
        <p class="title">CBiBank富港银行开户</p>
        <SwitchButton theme="gray" v-model="activeButton" :list="buttonList"></SwitchButton>
      </div>
      <ul class="open-account-list">
        <li class="open-account-item enterprise" v-show="activeButton === 'enterprise'">
          <p class="tip-text">输入您的信息，客户经理和您取得联系</p>
          <ElForm class="form">
            <ElFormItem class="el-form-cover">
              <ElInput class="el-input-cover"></ElInput>
            </ElFormItem>
            <ElFormItem class="el-form-cover">
              <ElInput class="el-input-cover"></ElInput>
            </ElFormItem>
          </ElForm>
          <div class="submit-btn">
            <Button type="blank">提交</Button>
          </div>
        </li>
        <li class="open-account-item person" v-show="activeButton === 'person'">
          <p class="tip-text">输入您的信息，客户经理和您取得联系</p>
          <div class="download-qrcode">
            <img src="@/assets/image/download-qrcode.png" alt="">
          </div>
        </li>
      </ul>
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
      activeButton: 'enterprise',
      buttonList: [
        { label: '企业开户', value: 'enterprise' },
        { label: '个人开户', value: 'person' }
      ]
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

<style lang="less">
.el-dialog-cover {
  width: 468px;
}
</style>

<style scoped lang="less">
.open-account {
  position: relative;
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
  .open-account-banner {
    width: 100%;
    height: 206px;
    padding-top: 60px;
    background-image: url('@/assets/image/dialog/dialog-bg.png');
    text-align: center;
    .title {
      margin-bottom: 32px;
      font-size: 22px;
      color: @blank;
      line-height: 30px;
    }
  }
  .open-account-list {
    display: flex;
    width: 100%;
    .open-account-item {
      width: 100%;
      min-width: 100%;
      padding-bottom: 40px;
      >.tip-text {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: linear-gradient(270deg, rgba(225,230,234,0) 0%, #DBF0FF 51%, rgba(225,230,234,0) 100%);
      }
      &.enterprise {
        .form {
          padding: 30px 60px;
        }
        .submit-btn {
          padding: 0 60px;
          :deep(.button) {
            width: 100%;
            border-radius: 4px;
          }
        }
      }
      &.person {
        &.person {
          .download-qrcode {
            margin: 22px auto 0;
            width: 200px;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
