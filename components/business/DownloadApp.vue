<template>
  <ul class="download-list" :class="theme">
    <li class="download-item">
      <a href="" class="download-app-store background"></a>
    </li>
    <li class="download-item">
      <a href="" class="download-google-play background"></a>
    </li>
    <li class="download-item">
      <a href="" class="download-qrcode background"></a>
      <div class="download-h5">
        <div class="download-h5-qrcode">
          <img src="~assets/image/download-qrcode.png" alt="">
        </div>
        <p class="download-h5-text">
          <!-- Scan QR to download app -->
          扫码直接下载
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.download-list {
  display: inline-flex;
  .download-item {
    position: relative;
    margin-right: 15px;
    background-color: @topwhite;
    border-radius: 6px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: @gray3;
    }
    > a {
      display: block;
    }
    .download-app-store {
      width: 150px;
      height: 50px;
      background-image: url('@/assets/image/app-store.png');
    }
    .download-google-play {
      width: 168px;
      height: 50px;
      background-image: url('@/assets/image/google-play.png');
    }
    .download-qrcode {
      width: 50px;
      height: 50px;
      background-image: url('@/assets/image/qrcode.png');
      background-size: 30px 30px;
      background-position: center center;
    }
    .download-h5 {
      position: absolute;
      top: calc(100% + 22px);
      left: 50%;
      transform: translateX(-50%);
      display: none;
      padding: 6px 6px 16px;
      background-color: @topwhite;
      border-radius: 8px;
      box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.1);
      &::before {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
        z-index: 2;
        content: '';
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        /* 箭头的颜色，可以根据需要修改 */
        border-bottom: 7px solid @topwhite;
      }
      /* after伪元素覆盖before伪元素 从而使三角形有边框 */
      &::after {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
        display: none;
        content: '';
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid @gray2;
      }
      .download-h5-qrcode {
        width: 168px;
        height: 168px;
      }
      .download-h5-text {
        font-size: 12px;
        font-family: Poppins, Poppins;
        color: #44444F;
        line-height: 14px;
        text-align: center;
      }
    }
    &:hover {
      .download-h5 {
        display: block;
      }
    }
  }
  &.blank {
    .download-item {
      background-color: @topblank;
      &:hover {
        background-color: @blank2;
      }
      .download-app-store {
        background-image: url('@/assets/image/app-store-blank.png');
      }
      .download-google-play {
        background-image: url('@/assets/image/google-play-blank.png');
      }
      .download-qrcode {
        background-image: url('@/assets/image/qrcode-blank.png');
      }
      .download-h5 {
        border: 1px solid @gray2;
        &::after {
          display: block;
        }
      }
    }
  }
}
</style>
