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
        <li class="open-account-item enterprise">
          <p class="text">输入您的信息，客户经理和您取得联系</p>
          <ElForm class="form">
            <ElFormItem class="form-item">
              <ElInput class="form-item-input"></ElInput>
            </ElFormItem>
            <ElFormItem class="form-item">
              <ElInput class="form-item-input"></ElInput>
            </ElFormItem>
            <Button class="submit-btn" type="blank">提交</Button>
          </ElForm>
        </li>
        <li class="open-account-item person"></li>
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
      &.enterprise {
        >.text {
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: linear-gradient(270deg, rgba(225,230,234,0) 0%, #DBF0FF 51%, rgba(225,230,234,0) 100%);
        }
        .form {
          padding: 30px 60px;
          .form-item {
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
            .form-item-input {
              height: 46px;
            }
          }
          .submit-btn {
            width: 100%;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
