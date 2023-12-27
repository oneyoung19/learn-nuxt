<template>
  <ElDialog
    class="el-dialog-cover"
    :modelValue="visible"
    @update:modelValue="handleVisible">
    <div class="open-account">
      <SvgIcon class="icon-close" name="close" @click="handleClose"></SvgIcon>
      <div class="open-account-banner background">
        <p class="title">CBiBank富港银行开户</p>
        <SwitchButton
          type="gray"
          v-model="activeButton"
          :list="buttonList">
        </SwitchButton>
      </div>
      <ul class="open-account-list">
        <li class="open-account-item enterprise" v-show="activeButton === 'enterprise'">
          <p class="tip-text">输入您的信息，客户经理和您取得联系</p>
          <ElForm
            class="form"
            :model="formData"
            :rules="rules"
            ref="form">
            <ElFormItem class="el-form-cover" prop="name">
              <ElInput
                class="el-input-cover"
                v-model="formData.name"
                placeholder="请输入您的姓名">
                <template #prefix>
                  <SvgIcon name="avatar" class="icon"></SvgIcon>
                </template>
              </ElInput>
            </ElFormItem>
            <ElFormItem class="el-form-cover" prop="phone">
              <ElInput
                class="el-input-cover"
                v-model="formData.phone"
                placeholder="手机号码">
                <template #prefix>
                  <el-select
                    class="el-select-hidden-cover"
                    v-model="formData.countryCode"
                    filterable
                  >
                    <el-option
                      v-for="item in countryCodeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <div class="country-code-item">
                        <span>+{{ item.value }}</span>
                        <p>{{ item.name }}</p>
                      </div>
                    </el-option>
                  </el-select>
                  <div class="prefix-icon">
                    <SvgIcon name="tele" class="icon"></SvgIcon>
                  </div>
                </template>
              </ElInput>
            </ElFormItem>
          </ElForm>
          <div class="submit-btn">
            <Button
              :loading="submitLoading"
              type="blank"
              @click="handleSubmit"
            >
              提交
            </Button>
          </div>
        </li>
        <li class="open-account-item person" v-show="activeButton === 'person'">
          <p class="tip-text">手机扫描下方二维码下载CBiBank APP</p>
          <div class="download-qrcode">
            <img src="@/assets/image/download-qrcode.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </ElDialog>
</template>

<script>
import {
  getCountryCodeList,
  cluesSubmit
} from '@/api'

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
      ],
      submitLoading: false,
      // 表单
      formData: {
        name: '',
        countryCode: '+86',
        phone: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ]
      },
      countryCodeList: []
    }
  },
  created () {
    this.getCountryCodeList()
  },
  methods: {
    getCountryCodeList () {
      return getCountryCodeList({
      }).then(res => {
        this.countryCodeList = res
      })
    },
    handleClose () {
      this.$emit('update:modelValue', false)
    },
    handleVisible (visible) {
      this.$emit('update:modelValue', visible)
    },
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          const {
            name: customerName,
            countryCode,
            phone
          } = this.formData
          const data = {
            customerName,
            countryCode,
            phone,
            pageType: 2,
            channelNum: 'GW8306',
            channeLink: location.href,
            platform: '3'
          }
          this.submitLoading = true
          cluesSubmit(data).then(res => {
            this.submitLoading = false
            if (res) {
              // 提交成功，需要增加confirm确认
            }
          }).catch(err => {
            this.submitLoading = false
            console.error(err)
          })
        }
      })
      // const { pending, data: posts } = useFetch('http://sit1.cbi-catcher-gateway.sitcbi.com/cbi-catcher-app/catcher/front/clues/registerAreaList', {
      //   server: false
      // })
      // console.log(unref(pending), unref(posts))
    }
  }
}
</script>

<style lang="less">
.el-dialog-cover {
  width: 468px;
}
.open-account {
  .el-select__popper {
    width: 310px;
  }
}
</style>

<style scoped lang="less">
.country-code-item {
  display: flex;
  width: 100%;
  align-items: center;
  color: @blank;
  span {
    display: block;
    width: 90px;
    flex-shrink: 0;
  }
  p {
    flex: 1;
    text-align: right;
  }
}
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
          .el-select-hidden-cover {
            width: 58px;
          }
          .el-input-cover {
            .prefix-icon {
              height: 16px;
              margin-left: 7px;
              padding-left: 7px;
              border-left: 1px solid @gray2;
            }
            .icon {
              font-size: 16px;
            }
          }
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
