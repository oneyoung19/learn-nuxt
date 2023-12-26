<template>
  <div class="home">
    <div class="banner">
      <div class="layout">
        <!-- :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }" -->
        <Swiper
          class="carousel-list"
          :modules="swiperModules"
          :loop="true"
          :speed="2500"
          :spaceBetween="80"
          slidesPerView="auto"
          @slideChangeTransitionStart="handleSlideChangeTransitionStart">
          <SwiperSlide class="carousel-item">
            <p class="title">富港银行 提供一站式全球金融服务</p>
            <p class="sub-title">CB International Bank 快速开启国际银行帐户</p>
            <Button type="blue" class="carousel-item-btn">立即申请</Button>
            <div class="carousel-item-container carousel-01-container" :class="swiperIndex === 0 ? '' : 'inactive'">
              <div
                class="carousel-01-container-left"
                data-aos="fade"
                data-aos-duration="400">
                <div class="logo">
                  <img src="@/assets/image/home/carousel-01-logo.png" alt="">
                </div>
                <div class="menus">
                  <img src="@/assets/image/home/carousel-01-menus.png" alt="">
                </div>
                <div
                  class="active-menu"
                  data-aos="fade"
                  data-aos-delay="400">
                  <img src="@/assets/image/home/carousel-01-menu-active.png" alt="">
                </div>
              </div>
              <div
                class="carousel-01-container-right">
                <div class="carousel-01-container-right-header">
                  <CountUp
                    class="text"
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-delay="1800"
                    :end-val="158521.50"
                    :duration="1.5"
                    :decimalPlaces="2"
                    :autoplay="false"
                    @init="handleInit1"
                    @transitionend="handleTransitionEnd1">
                    <template #prefix>
                      <span>$</span>
                    </template>
                  </CountUp>
                  <div
                    class="img"
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1500">
                    <img src="@/assets/image/home/carousel-01-search.png" alt="">
                  </div>
                </div>
                <div
                  class="carousel-01-container-right-subtitle"
                  data-aos="fade"
                  data-aos-duration="1200"
                  data-aos-offset="0"
                  data-aos-delay="1800">
                  <img src="@/assets/image/home/carousel-01-subtitle.png" alt="">
                </div>
                <div class="carousel-01-container-right-content">
                  <div class="content-left">
                    <div class="content-left-header">
                      <div
                        class="visa-bg background"
                        data-aos="fade"
                        data-aos-delay="400"
                        data-aos-duration="1500">
                      </div>
                      <div
                        class="fund-bg background"
                        data-aos="fade"
                        data-aos-delay="600"
                        data-aos-duration="1800">
                        <CountUp
                          class="amount-text"
                          data-aos="fade"
                          data-aos-offset="0"
                          data-aos-delay="1800"
                          :end-val="12621.00"
                          :duration="1.5"
                          :decimalPlaces="2"
                          :autoplay="false"
                          @init="handleInit2"
                          @transitionend="handleTransitionEnd2">
                          <template #prefix>
                            <span>$</span>
                          </template>
                        </CountUp>
                      </div>
                    </div>
                    <div
                      class="content-left-footer background"
                      data-aos="fade"
                      data-aos-delay="600"
                      data-aos-duration="1800">
                      <div class="carousel-01-polyline">
                        <img
                          data-aos="aos-animate-padding-polyline"
                          data-aos-duration="2000"
                          data-aos-offset="0"
                          data-aos-delay="1800"
                          src="@/assets/image/home/carousel-01-polyline.png"
                          alt="">
                        <div
                          class="carousel-01-dot"
                          data-aos="fade"
                          data-aos-duration="1000"
                          data-aos-delay="3000"
                          data-aos-offset="0">
                          <img src="@/assets/image/home/carousel-01-dot.png" alt="">
                          <div class="carousel-01-dot-amount">
                            <img src="@/assets/image/home/carousel-01-dot-amount.png" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content-right">
                    <div
                      class="content-right-header background"
                      data-aos="fade"
                      data-aos-duration="1500"
                      data-aos-offset="0"
                      data-aos-delay="600">
                      <CountUp
                        class="amount-text"
                        data-aos="fade"
                        data-aos-offset="0"
                        data-aos-delay="1800"
                        :end-val="45230.00"
                        :duration="1.5"
                        :decimalPlaces="2"
                        :autoplay="false"
                        @init="handleInit3"
                        @transitionend="handleTransitionEnd3">
                        <template #prefix>
                          <span>$</span>
                        </template>
                      </CountUp>
                      <CountUp
                        class="amount-text"
                        data-aos="fade"
                        data-aos-offset="0"
                        data-aos-delay="1800"
                        :end-val="113291.00"
                        :duration="1.5"
                        :decimalPlaces="2"
                        :autoplay="false"
                        @init="handleInit4"
                        @transitionend="handleTransitionEnd4">
                        <template #prefix>
                          <span>$</span>
                        </template>
                      </CountUp>
                    </div>
                    <div
                      class="content-right-footer background"
                      data-aos="fade"
                      data-aos-duration="1500"
                      data-aos-offset="0"
                      data-aos-delay="600">
                      <CountUp
                        class="amount-text"
                        data-aos="fade"
                        data-aos-offset="0"
                        data-aos-delay="1800"
                        :end-val="1339.00"
                        :duration="1.5"
                        :decimalPlaces="2"
                        :autoplay="false"
                        @init="handleInit5"
                        @transitionend="handleTransitionEnd5">
                        <template #prefix>
                          <span>-$</span>
                        </template>
                      </CountUp>
                      <CountUp
                        class="amount-text"
                        data-aos="fade"
                        data-aos-offset="0"
                        data-aos-delay="1800"
                        :end-val="20000.00"
                        :duration="1.5"
                        :decimalPlaces="2"
                        :autoplay="false"
                        @init="handleInit6"
                        @transitionend="handleTransitionEnd6">
                        <template #prefix>
                          <span>-$</span>
                        </template>
                      </CountUp>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="carousel-item">
            <p class="title">让每个人随时享受专业的国际银行服务</p>
            <p class="sub-title">一个APP，解決全球个人汇款</p>
            <Button type="blue" class="carousel-item-btn">立即申请</Button>
            <div class="carousel-item-container" :class="swiperIndex === 1 ? '' : 'inactive'">
              <div class="carousel-02-bg carousel-02-phone1-bg background" data-aos="fade-up">
                <div
                  class="carousel-02-widget-img carousel-02-phone1-01"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="400">
                  <img src="@/assets/image/home/carousel-02-phone1-01.png" alt="">
                </div>
                <div
                  class="carousel-02-widget-img carousel-02-phone1-02"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="600">
                  <img src="@/assets/image/home/carousel-02-phone1-02.png" alt="">
                </div>
                <div
                  class="carousel-02-widget-img carousel-02-phone1-03"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="800">
                  <img src="@/assets/image/home/carousel-02-phone1-03.png" alt="">
                </div>
              </div>
              <div class="carousel-02-bg carousel-02-phone2-bg background" data-aos="fade-up">
                <div
                  class="carousel-02-widget-img carousel-02-phone2-01"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="400">
                  <img src="@/assets/image/home/carousel-02-phone2-01.png" alt="">
                </div>
                <div
                  class="carousel-02-widget-img carousel-02-phone2-02"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="600">
                  <img src="@/assets/image/home/carousel-02-phone2-02.png" alt="">
                </div>
                <div
                  class="carousel-02-widget-img carousel-02-phone2-03"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="800">
                  <img src="@/assets/image/home/carousel-02-phone2-03.png" alt="">
                </div>
                <div
                  class="carousel-02-widget-img carousel-02-phone2-04"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="800">
                  <img src="@/assets/image/home/carousel-02-phone2-04.png" alt="">
                </div>
              </div>
              <div class="carousel-02-bg carousel-02-phone3-bg background" data-aos="fade-up">
                <div
                  class="carousel-02-widget-img carousel-02-phone3-01"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="400">
                  <img src="@/assets/image/home/carousel-02-phone3-01.png" alt="">
                </div>
                <div
                  class="carousel-02-phone3-02"
                  data-aos="slide-up"
                  data-aos-offset="0"
                  data-aos-delay="600">
                  <img src="@/assets/image/home/carousel-02-phone3-02.png" alt="">
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="carousel-item">
            <p class="title">行之所至，畅通无忧</p>
            <p class="sub-title">实时汇率、无隐藏费用，用CBiBank借记卡、VISA卡走遍全球</p>
            <Button type="blue" class="carousel-item-btn">获取卡片</Button>
            <div class="carousel-item-container" :class="swiperIndex === 2 ? 'active' : ''">
              <div class="carousel-03-card-img carousel-03-card-01">
                <img src="@/assets/image/home/carousel-03-card-01.png" alt="">
              </div>
              <div class="carousel-03-card-img carousel-03-card-02">
                <img src="@/assets/image/home/carousel-03-card-02.png" alt="">
              </div>
              <div class="carousel-03-card-img carousel-03-card-03">
                <img src="@/assets/image/home/carousel-03-card-03.png" alt="">
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="partners">
      <Swiper
        class="partners-list"
        :modules="swiperPartnersModules"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }"
        :loop="true"
        :speed="3000"
        slidesPerView="auto"
        :centeredSlides="false">
        <SwiperSlide
          class="partners-item"
          :class="item.id"
          v-for="(item, index) in swiperPartnersImgList"
          :key="index">
          <img :src="item.src" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="video-apply">
      <div class="video-apply-container layout">
        <div
          class="video-apply-demo"
          @mouseenter="handleMouseEnterVideoDemo">
          <div class="certificate-img" data-aos="fade-up">
            <img src="~assets/image/home/certificate.png" alt="">
          </div>
          <div class="activated figure-img">
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src="~assets/image/home/figure.png"
              alt="">
            <div
              class="activated-tip first"
              data-aos="fade-up"
              data-aos-delay="200">
              <div class="icon-box">
                <SvgIcon name="apply"></SvgIcon>
              </div>
              <span>在线申请</span>
            </div>
            <div
              class="activated-tip second"
              data-aos="fade-up"
              data-aos-delay="200">
              <div class="icon-box">
                <SvgIcon name="cert"></SvgIcon>
              </div>
              <span>线上开户</span>
            </div>
            <div
              class="timeout"
              data-aos="fade-up"
              data-aos-delay="400">
              <ElProgress
                :class="timeoutActive ? 'active' : ''"
                type="circle"
                :percentage="(4 - timeout) * 25">
                <div>
                  <span class="timeout-text">{{ `${timeout}s` }}</span>
                  <img
                    class="timeout-img-binggo"
                    src="@/assets/image/home/binggo.png"
                    alt="">
                </div>
              </ElProgress>
            </div>
          </div>
        </div>
        <div class="video-apply-tip">
          <p class="title" data-aos="fade-up">线上快速获取银行帐户</p>
          <p class="desc" data-aos="fade-up">全程线上申请、视频面签，无需邮寄纸质材料、无需临柜，业务全流程实现线上办理，省时、省心、省力。</p>
          <Button
            data-aos="fade-up"
            type="blue"
            plain
            :arrow-config="{ moving: true }">
            开始体验
          </Button>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="cards-container layout">
        <SwitchButton
          type="gray"
          class="switch-button"
          v-model="currentSwitchCard"
          :list="cardsSwitchList">
        </SwitchButton>
        <ul class="cards-list">
          <li class="cards-item">
            <div class="cards-item-left">
              <p class="title" data-aos="fade-up">无论您走到哪里，都可以刷卡消费</p>
              <p class="desc" data-aos="fade-up">像当地人一样在全球范围内使用CBiBank企业借记卡消费，在当地ATM取现，试用商场、酒店、网购等等各类场景。</p>
              <ul
                class="feature-list"
                v-if="currentSwitchCard === 'corporbank'"
                key="corporbank">
                <li
                  class="feature-item"
                  data-aos="zoom-in"
                  :data-aos-delay="`${(index + 1) * 50}`"
                  v-for="(item, index) in corporFeatureList"
                  :key="`corporbank${index}`">
                  <SvgIcon class="feature-item-icon" name="selected"></SvgIcon>
                  <span class="feature-item-text">{{ item.label }}</span>
                </li>
              </ul>
              <ul
                class="feature-list"
                v-if="currentSwitchCard === 'perbank'"
                key="perbank">
                <li
                  class="feature-item"
                  data-aos="zoom-in"
                  :data-aos-delay="`${(index + 1) * 50}`"
                  v-for="(item, index) in perFeatureList"
                  :key="`perbank${index}`">
                  <SvgIcon class="feature-item-icon" name="selected"></SvgIcon>
                  <span class="feature-item-text">{{ item.label }}</span>
                </li>
              </ul>
              <Button
                data-aos="fade-up"
                type="blue"
                plain
                :arrow-config="{ moving: true }"
                @click="handleApplyCards">
                获取卡片
              </Button>
            </div>
            <div
              class="cards-item-right background"
              data-aos="fade-up"
              data-aos-offset="300">
              <div v-if="currentSwitchCard === 'perbank'" key="perbank">
                <div
                  key="perbank"
                  class="card card-above"
                  data-aos="fade-down-left">
                  <img src="~assets/image/home/visa-card.png" alt="">
                </div>
                <div
                  key="perbank"
                  class="card card-bottom"
                  data-aos="fade-up-right">
                  <img src="~assets/image/home/union-pay-card.png" alt="">
                </div>
                <div
                  key="perbank"
                  class="card-tip"
                  data-aos="fade-up">
                  <div class="card-tip-icon">
                    <img src="~assets/image/home/sawtooth-selected.png" alt="">
                  </div>
                  <p class="card-tip-text">消费成功</p>
                </div>
              </div>
              <div v-if="currentSwitchCard === 'corporbank'" key="corporbank">
                <div
                  key="corporbank"
                  class="card"
                  data-aos="fade-down-left">
                  <img src="~assets/image/home/visa-card.png" alt="">
                </div>
                <div
                  key="corporbank"
                  class="card card-bottom card-above"
                  data-aos="fade-up-right">
                  <img src="~assets/image/home/union-pay-card.png" alt="">
                </div>
                <div
                  key="corporbank"
                  class="card-tip"
                  data-aos="fade-up">
                  <div class="card-tip-icon">
                    <img src="~assets/image/home/sawtooth-selected.png" alt="">
                  </div>
                  <p class="card-tip-text">消费成功</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <DebitCardCorporDialog
      v-model="debitCardCorporDialogVisible">
    </DebitCardCorporDialog>
    <DebitCardPersonDialog
      v-model="debitCardPersonDialogVisible">
    </DebitCardPersonDialog>
    <div class="swap">
      <div class="swap-container layout">
        <div class="swap-left" ref="swapLeft">
          <div
            class="swap-bg"
            data-aos="fade-up">
            <img src="~assets/image/home/swap-bg.png" alt="">
          </div>
          <div
            class="circle-arrow"
            data-aos="fade"
            data-aos-delay="1000">
            <img
              data-aos="aos-animate-rotate"
              src="~assets/image/home/circle-arrow.png"
              alt="">
          </div>
          <div
            class="exchange-currency"
            data-aos="fade"
            data-aos-delay="500">
            <SvgIcon class="icon-logo" name="cbibank"></SvgIcon>
            <div
              class="exchange-box">
              <div class="currency-box">
                <div
                  class="icon-currency"
                  data-aos="aos-animate-spin-up-right">
                  <img src="@/assets/image/home/eur.png" alt="">
                </div>
                <div class="icon-arrow-bottom">
                  <img src="@/assets/image/home/arrow-bottom.png" alt="">
                </div>
                <!-- <SvgIcon class="icon-arrow-bottom" name="arrow-bottom"></SvgIcon> -->
              </div>
              <div
                class="icon-arrow-circle"
                data-aos="aos-animate-rotate">
                <img src="@/assets/image/home/icon-arrow-circle.png" alt="">
              </div>
              <!-- <SvgIcon
                class="icon-arrow-circle"
                data-aos="aos-animate-rotate"
                name="arrow-circle">
              </SvgIcon> -->
              <div class="currency-box">
                <div
                  class="icon-currency"
                  data-aos="aos-animate-spin-down-left">
                  <img src="@/assets/image/home/usd.png" alt="">
                </div>
                <div class="icon-arrow-bottom">
                  <img src="@/assets/image/home/arrow-bottom.png" alt="">
                </div>
                <!-- <SvgIcon class="icon-arrow-bottom" name="arrow-bottom"></SvgIcon> -->
              </div>
            </div>
          </div>
        </div>
        <div class="swap-right" data-aos="fade-up">
          <p class="title">无隐藏费用，即时货币兑换</p>
          <p class="desc">美元、欧元、离岸人民币、英镑、日元、新加坡元、港币等全球主流币种灵活互通。</p>
        </div>
      </div>
    </div>
    <div class="fund">
      <div class="fund-container layout">
        <div class="fund-left">
          <p class="title" data-aos="fade-up">量身定制的财富管理服务</p>
          <p class="desc" data-aos="fade-up">投资组合实现帐户资产稳健增值，灵活的存款产品，帮助您实现资产保值。</p>
        </div>
        <div class="fund-right background">
          <div class="fund-line-bg">
            <img
              data-aos="aos-animate-padding"
              src="@/assets/image/home/fund-line-bg.png"
              alt="">
            <div class="fund-img-dashed blue">
              <img
                data-aos="aos-animate-padding"
                data-aos-delay="200"
                src="@/assets/image/home/fund-img-dashed-01.png"
                alt="">
            </div>
            <div class="fund-img-dashed green">
              <img
                data-aos="aos-animate-padding"
                data-aos-delay="200"
                src="@/assets/image/home/fund-img-dashed-02.png"
                alt="">
            </div>
          </div>
          <div
            class="fund-img top-left"
            data-aos="fade"
            data-aos-offset="400"
            data-aos-delay="400">
            <img src="@/assets/image/home/fund-img-01.png" alt="">
          </div>
          <div
            class="fund-img top-right"
            data-aos="fade"
            data-aos-offset="400"
            data-aos-delay="400">
            <img src="@/assets/image/home/fund-img-02.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="letter">
      <div class="letter-container layout">
        <div
          class="letter-left background"
          data-aos="fade"
          data-aos-offset="300">
          <div
            class="letter-img"
            data-aos="fade-down-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="300">
            <img src="@/assets/image/home/letter-img-01.png" alt="">
          </div>
          <div
            class="letter-img"
            data-aos="fade-up"
            data-aos-offset="200">
            <img src="@/assets/image/home/letter-img-02.png" alt="">
          </div>
          <div class="letter-img">
          </div>
          <div
            class="letter-img"
            data-aos="aos-c-animate-child-transform">
          </div>
          <div
            class="letter-img"
            data-aos="aos-c-animate-child-transform">
            <img src="@/assets/image/home/letter-img-03.png" alt="">
          </div>
        </div>
        <div class="letter-right">
          <p class="title" data-aos="fade-up">提供完备的银行单证服务</p>
          <p class="desc" data-aos="fade-up">支持美元、欧元、人民币等主流币种的多种单证类业务，包括：</p>
          <p class="desc-item" data-aos="fade-up">托收业务；</p>
          <p class="desc-item" data-aos="fade-up">保函业务；</p>
          <p class="desc-item mb100" data-aos="fade-up">信用证业务等。</p>
          <Button
            data-aos="fade-up"
            type="blank"
            :arrow-config="{ moving: true }">
            了解详情
          </Button>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-container layout">
        <div class="service-left" data-aos="fade-right">
          <p class="title">为多种类型的企业和个人提供定制化服务</p>
          <p class="desc">支持实物贸易、服务贸易、全球投资、跨境电商等企业类型，服务留学生、移民、跨境工作者、个人投资者。</p>
        </div>
        <div class="service-right background" data-aos="fade-left"></div>
      </div>
    </div>
    <div class="global-net">
      <div class="global-net-container layout">
        <p class="title" data-aos="fade-up">完善的国际清算网络</p>
        <p class="desc" data-aos="fade-up">CBiBank业务覆盖全球163个国家和地区，轻松助您开启全球商机之门。</p>
        <div class="global-net-main">
          <div class="global-net-bg background" data-aos="fade">
            <div class="global-net-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="@/assets/image/home/global-net-img-01.png" alt="">
            </div>
            <div class="global-net-img" data-aos="zoom-in" data-aos-delay="400">
              <img src="@/assets/image/home/global-net-img-02.png" alt="">
            </div>
            <div class="global-net-img" data-aos="zoom-in" data-aos-delay="600">
              <img src="@/assets/image/home/global-net-img-03.png" alt="">
            </div>
            <div class="global-net-img" data-aos="zoom-in" data-aos-delay="800">
              <img src="@/assets/image/home/global-net-img-04.png" alt="">
            </div>
          </div>
          <ul class="global-net-list">
            <li class="global-net-item" data-aos="aos-c-animate-before-width">
              <span class="text-bold" data-aos="fade">163+</span>
              <span class="text" data-aos="fade">覆盖国际和地区</span>
            </li>
            <li class="global-net-item" data-aos="aos-c-animate-before-width">
              <span class="text-bold" data-aos="fade">120+</span>
              <span class="text" data-aos="fade">合作银行与金融机构</span>
            </li>
            <li class="global-net-item" data-aos="aos-c-animate-before-width">
              <span class="text-bold" data-aos="fade">20+</span>
              <span class="text" data-aos="fade">全球主流电商平台和支付网关</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="customer">
      <div class="customer-container layout">
        <div class="customer-left">
          <div
            v-if="activeTab === 'customer-material'"
            class="customer-left-item background"
            data-aos="fade"
            data-aos-offset="350">
            <p class="title" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">实物贸易型企业</p>
            <p class="desc" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">针对实物贸易型企业的实际业务需求，尤其是中小企业在国际银行开户及全球汇款等方面的痛点，CBiBank可为客户提供相应的高效、便捷的银行服务。</p>
          </div>
          <div
            v-if="activeTab === 'customer-service'"
            class="customer-left-item background"
            data-aos="fade"
            data-aos-offset="350">
            <p class="title" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">服务贸易型企业</p>
            <p class="desc" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">基于出海服务型企业对全球多币种开户、跨境支付和定制化金融产品的迫切需求，CBiBank为IT外包、互联网运营服务等行业的出海服务型企业打造了定制化的银行服务和多元化的解决方案。</p>
          </div>
          <div
            v-if="activeTab === 'customer-invest'"
            class="customer-left-item background"
            data-aos="fade"
            data-aos-offset="350">
            <p class="title" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">国际投融资企业</p>
            <p class="desc" data-aos="fade-up" data-aos-offset="350" data-aos-duration="600" data-aos-delay="400">赴海外投资和融资企业在国际金融业务方面的需求往往多样复杂，CBiBank可为客户提供基于CBiBank银行帐户之上的安全、高效、多元化资产管理解决方案。</p>
          </div>
        </div>
        <div class="customer-right">
          <p class="title" data-aos="fade-up">我们的客户</p>
          <p class="desc" data-aos="fade-up">让全球商贸类企业、全球服务型企业、全球投融资企业像在本地一样便捷进行资金往来。</p>
          <ToggleTab
            data-aos="fade-up"
            v-model="activeTab"
            :list="tabList">
          </ToggleTab>
        </div>
      </div>
    </div>
    <div class="celebrity">
      <div class="celebrity-container layout">
        <p class="title">大咖之声</p>
        <Celebrities></Celebrities>
      </div>
    </div>
  </div>
</template>

<script setup>
import cipsImg from '@/assets/image/home/cips.png'
import unionPayImg from '@/assets/image/home/union-pay.png'
import swiftImg from '@/assets/image/home/swift.png'
import visaImg from '@/assets/image/home/visa.png'
import abaImg from '@/assets/image/home/aba.png'
import ocifImg from '@/assets/image/home/ocif.png'
import { Autoplay } from 'swiper/modules'
useHead({
  title: 'CBiBank',
  // meta: [
  //   { name: 'description', content: 'My amazing site.' }
  // ],
  // bodyAttrs: {
  //   class: 'index'
  // },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
const timeout = ref(3)
const timeoutActive = ref(false)
let timer = null
const handleMouseEnterVideoDemo = () => {
  if (timeout.value <= 0 ) return
  timer = window.setInterval(() => {
    if (timeout.value <= 0) {
      window.clearInterval(timer)
      timeoutActive.value = true
      return
    }
    timeout.value -= 1
  }, 1000)
}

const currentSwitchCard = ref('corporbank')
const cardsSwitchList = ref([
  { label: '企业卡', value: 'corporbank' },
  { label: '个人卡', value: 'perbank' }
])
const corporFeatureList = ref([
  { label: 'ATM取现' },
  { label: '商场消费' },
  { label: 'POS刷卡' },
  { label: '资金周转' },
  { label: '采购' }
])
const perFeatureList = ref([
  { label: 'ATM取现' },
  { label: '网上购物' },
  { label: 'POS刷卡' },
  { label: '订酒店' },
  { label: '超时购物' }
])
// const featureList = computed(() => {
//   return currentSwitchCard.value === 'corporbank' ? corporFeatureList : perFeatureList
// })
const debitCardCorporDialogVisible = ref(false)
const debitCardPersonDialogVisible = ref(false)
const handleApplyCards = () => {
  if (currentSwitchCard.value === 'corporbank') {
    debitCardCorporDialogVisible.value = true
  } else {
    debitCardPersonDialogVisible.value = true
  }
}

const activeTab = ref('customer-material')
const tabList = ref([
  { label: '实物贸易型企业', value: 'customer-material', iconName: 'rectangle-deep', activeIconName: 'rectangle-light' },
  { label: '服务贸易型企业', value: 'customer-service', iconName: 'conversation-deep', activeIconName: 'conversation-light' },
  { label: '国际投融资企业', value: 'customer-invest', iconName: 'strip-deep', activeIconName: 'strip-light' }
])

/* 计数器 */
let countUp1 = undefined
const handleInit1 = (ctx) => {
  countUp1 = ctx
}
const handleTransitionEnd1 = (a, b, c) => {
  countUp1.start()
}

let countUp2 = undefined
const handleInit2 = (ctx) => {
  countUp2 = ctx
}
const handleTransitionEnd2 = (a, b, c) => {
  countUp2.start()
}

let countUp3 = undefined
const handleInit3 = (ctx) => {
  countUp3 = ctx
}
const handleTransitionEnd3 = (a, b, c) => {
  countUp3.start()
}

let countUp4 = undefined
const handleInit4 = (ctx) => {
  countUp4 = ctx
}
const handleTransitionEnd4 = (a, b, c) => {
  countUp4.start()
}

let countUp5 = undefined
const handleInit5 = (ctx) => {
  countUp5 = ctx
}
const handleTransitionEnd5 = (a, b, c) => {
  countUp5.start()
}

let countUp6 = undefined
const handleInit6 = (ctx) => {
  countUp6 = ctx
}
const handleTransitionEnd6 = (a, b, c) => {
  countUp6.start()
}

/* Top swiper */
const swiperModules = ref([Autoplay])
const swiperIndex = ref(0)
const handleSlideChangeTransitionStart = (slideInfo) => {
  // 当加上loop:true时，activeIndex会有问题。应该使用realIndex。
  const { realIndex } = slideInfo
  swiperIndex.value = realIndex
  // 重置计数
  countUp1.reset()
  countUp2.reset()
  countUp3.reset()
  countUp4.reset()
  countUp5.reset()
  countUp6.reset()
}

/* Partners swiper */
const partnersImgList = [
  { id: 'cips', src: cipsImg },
  { id: 'union-pay', src: unionPayImg },
  { id: 'swift', src: swiftImg },
  { id: 'visa', src: visaImg },
  { id: 'aba', src: abaImg },
  { id: 'ocif', src: ocifImg }
]
const swiperPartnersImgList = partnersImgList.concat(partnersImgList)
const swiperPartnersModules = ref([Autoplay])
</script>

<style scoped lang="less">
@keyframes aos-animate-padding-binggo {
  0% {
    opacity: 0;
    padding-right: 35px;
  }
  100% {
    opacity: 1;
    padding-right: 0;
  }
}
.home {
  // padding-top: @headerHeight;
  .banner {
    height: 974px;
    padding-top: calc(@headerHeight + 100px);
    color: @topwhite;
    background-color: @blank;
    text-align: center;
    .carousel-list {
      width: 100%;
      .carousel-item {
        width: 100%;
        .title {
          margin-bottom: 40px;
          font-size: 60px;
        }
        .sub-title {
          margin-bottom: 114px;
          font-size: 24px;
          color: #BBC0D8;
        }
        .carousel-item-btn {
          width: 187px;
          height: 52px;
          margin-bottom: 49px;
        }
        .carousel-item-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          height: 461px;
          &.carousel-01-container {
            align-items: flex-start;
            text-align: left;
            background: @topwhite;
            padding: 6px 30px 0 6px;
            box-shadow: inset 0px 0px 12px 0px rgba(0,0,0,0.14);
            border-radius: 30px 30px 0 0;
            font-family: Poppins, Poppins;
            font-weight: 600;
            .carousel-01-container-left {
              position: relative;
              width: 220px;
              height: 100%;
              margin-right: 64px;
              padding: 28px 0 0 25px;
              background-color: #E3E7F0;
              border-radius: 30px 30px 0 0;
              >.logo {
                width: 120px;
                height: 38px;
                margin-bottom: 40px;
              }
              >.menus {
                width: 167px;
                height: 302px;
              }
              >.active-menu {
                position: absolute;
                top: 97px;
                right: 0;
                width: 209px;
                height: 38px;
              }
            }
            .carousel-01-container-right {
              flex: 1;
              padding-top: 37px;
              .carousel-01-container-right-header {
                position: relative;
                margin-bottom: 10px;
                line-height: 36px;
                >.text {
                  font-size: 36px;
                  color: @blank;
                }
                >.img {
                  position: absolute;
                  top: -6px;
                  right: 12px;
                  width: 561px;
                  height: 36px;
                }
              }
              .carousel-01-container-right-subtitle {
                // width: 228px;
                width: 242px;
                height: 12px;
                margin-bottom: 20px;
              }
              .carousel-01-container-right-content {
                display: flex;
                .content-left {
                  margin-right: 38px;
                  .content-left-header {
                    display: flex;
                    margin-bottom: 20px;
                    >.visa-bg {
                      width: 230px;
                      height: 133px;
                      margin-right: 20px;
                      background-image: url('@/assets/image/home/carousel-01-visa.png');
                    }
                    >.fund-bg {
                      position: relative;
                      width: 205px;
                      height: 133px;
                      background-image: url('@/assets/image/home/carousel-01-fund.png');
                      font-size: 24px;
                      font-family: Poppins, Poppins;
                      font-weight: 600;
                      color: @blank2;
                      line-height: 36px;
                      >.amount-text {
                        position: absolute;
                        top: 48px;
                        left: 18px;
                      }
                    }
                  }
                  .content-left-footer {
                    width: 456px;
                    height: 167px;
                    padding: 15px 0 0 52px;
                    background-image: url('@/assets/image/home/carousel-01-axis.png');
                    .carousel-01-polyline {
                      position: relative;
                      width: 385px;
                      height: 110px;
                      > img {
                        padding-right: 385px;
                        object-fit: cover;
                        object-position: left;
                        &[data-aos="aos-animate-padding-polyline"] {
                          padding-right: 385px;
                          &.aos-animate {
                            padding-right: 0;
                          }
                        }
                      }
                      .carousel-01-dot {
                        position: absolute;
                        top: 1px;
                        right: 72px;
                        width: 36px;
                        height: 36px;
                        .carousel-01-dot-amount {
                          position: absolute;
                          top: 20px;
                          left: -35px;
                          width: 105px;
                          height: 52px;
                        }
                      }
                    }
                  }
                }
                .content-right {
                  font-size: 11px;
                  font-family: Poppins, Poppins;
                  font-weight: 600;
                  color: @blank;
                  line-height: 11px;
                  .content-right-header {
                    position: relative;
                    width: 388px;
                    height: 133px;
                    margin-bottom: 20px;
                    background-image: url('@/assets/image/home/carousel-01-cards.png');
                    >.amount-text {
                      position: absolute;
                      &:nth-child(1) {
                        top: 35px;
                        right: 18px;
                      }
                      &:nth-child(2) {
                        bottom: 30px;
                        right: 18px;
                      }
                    }
                  }
                  .content-right-footer {
                    position: relative;
                    width: 388px;
                    height: 167px;
                    background-image: url('@/assets/image/home/carousel-01-transactions.png');
                    >.amount-text {
                      position: absolute;
                      &:nth-child(1) {
                        top: 88px;
                        right: 18px;
                      }
                      &:nth-child(2) {
                        bottom: 18px;
                        right: 18px;
                      }
                    }
                  }
                }
              }
            }
          }
          .carousel-02-phone1-bg {
            position: relative;
            width: 348px;
            height: 364px;
            background-image: url('@/assets/image/home/carousel-02-phone1-bg.png');
            box-shadow: 117px 38px 77px 0px rgba(0,0,0,0.25);
            .carousel-02-phone1-01 {
              position: absolute;
              top: 45px;
              left: 20px;
              width: 306px;
              height: 22px;
            }
            .carousel-02-phone1-02 {
              position: absolute;
              top: 87px;
              left: 0;
              width: 348px;
              height: 93px;
            }
            .carousel-02-phone1-03 {
              position: relative;
              top: 180px;
              left: 18px;
              width: 310px;
              height: 173px;
            }
          }
          .carousel-02-phone2-bg {
            position: relative;
            width: 348px;
            height: 448px;
            background-image: url('@/assets/image/home/carousel-02-phone2-bg.png');
            box-shadow: 117px 38px 77px 0px rgba(0,0,0,0.25);
            .carousel-02-phone2-01 {
              position: absolute;
              top: 46px;
              left: 23px;
              width: 301px;
              height: 30px;
            }
            .carousel-02-phone2-02 {
              position: absolute;
              top: 102px;
              left: 19px;
              width: 309px;
              height: 180px;
            }
            .carousel-02-phone2-03 {
              position: absolute;
              bottom: 51px;
              left: 19px;
              width: 310px;
              height: 98px;
            }
            .carousel-02-phone2-04 {
              position: absolute;
              bottom: 0;
              left: 19px;
              width: 310px;
              height: 38px;
            }
          }
          .carousel-02-phone3-bg {
            position: relative;
            width: 348px;
            height: 364px;
            background-image: url('@/assets/image/home/carousel-02-phone3-bg.png');
            box-shadow: 117px 38px 77px 0px rgba(0,0,0,0.25);
            .carousel-02-phone3-01 {
              position: absolute;
              top: 67px;
              left: 40px;
              width: 266px;
              height: 94px;
            }
            .carousel-02-phone3-02 {
              position: absolute;
              bottom: 0;
              left: 4px;
              width: 340px;
              height: 173px;
            }
          }
          .carousel-03-card-img {
            position: absolute;
            bottom: 64px;
            left: 50%;
            transform: translate(-50%, 0) rotate(-54deg);
            transform-origin: center center;
            width: 440px;
            height: 268px;
            box-shadow: 112px 90px 74px 0px rgba(0,0,0,0.35);
            border-radius: 27px;
            transition: all ease-in-out .8s;
            &.carousel-03-card-01 {
              z-index: 3;
            }
            &.carousel-03-card-02 {
              z-index: 2;
            }
            &.carousel-03-card-03 {
              z-index: 1;
            }
          }
          &.inactive {
            [data-aos="fade"] {
              opacity: 0!important;
            }
            [data-aos="aos-animate-padding-polyline"] {
              padding-right: 385px!important;
            }
            [data-aos="fade-up"] {
              opacity: 0!important;
              transform: translate3d(0, 100px, 0)!important;
            }
            [data-aos="slide-up"] {
              transform: translate3d(0,100%,0)!important;
            }
          }
          &.active {
            .carousel-03-card-01 {
              left: calc(20% - 10px);
            }
            .carousel-03-card-02 {
              left: 50%;
            }
            .carousel-03-card-03 {
              left: calc(80% + 10px);
            }
          }
        }
      }
    }
  }
  .partners {
    background-color: #fff;
    height: 340px;
    .partners-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: @homeParentsWidth;
      height: 100%;
      margin: 0 auto;
      // 匀速滚动
      :deep(.swiper-wrapper) {
        justify-content: space-between;
        align-items: center;
        transition-timing-function: linear !important;
      }
      .partners-item {
        height: 141px;
        // margin-right: 42px;
        &:last-child {
          margin-right: 0;
        }
        &.cips {
          width: 253px;
        }
        &.union-pay {
          width: 272px;
        }
        &.swift {
          width: 191px;
        }
        &.visa {
          width: 251px;
        }
        &.aba {
          width: 341px;
        }
        &.ocif {
          width: 278px;
        }
      }
    }
  }
  .video-apply {
    height: 700px;
    padding-top: 180px;
    background-color: @gray3;
    .video-apply-container {
      display: flex;
      .video-apply-demo {
        flex: 1;
        position: relative;
        padding-top: 45px;
        .certificate-img {
          width: 261px;
          height: 190px;
        }
        .figure-img {
          width: 262px;
          height: 336px;
          &.activated {
            position: absolute;
            top: 0;
            left: 180px;
            .activated-tip {
              position: absolute;
              display: flex;
              align-items: center;
              width: 154px;
              height: 64px;
              padding-left: 18px;
              background: rgba(255,255,255,0.9);
              box-shadow: 0px 8px 21px 0px rgba(0,0,0,0.1);
              border-radius: 8px;
              .icon-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 38px;
                height: 38px;
                margin-right: 14px;
                line-height: 38px;
                text-align: center;
                background-color: @gray4;
                border-radius: 8px;
                font-size: 22px;
                color: @topwhite;
              }
              &.first {
                right: -84px;
                bottom: 50px;
              }
              &.second {
                left: -105px;
                bottom: -22px;
              }
            }
            .timeout {
              position: absolute;
              top: 35px;
              right: -42px;
              width: 84px;
              height: 84px;
              line-height: 84px;
              text-align: center;
              border-radius: 50%;
              box-shadow: 0px 8px 21px 0px rgba(0,0,0,0.1);
              :deep(.el-progress) {
                width: 100%;
                height: 100%;
                background: rgba(255,255,255,0.9);
                border-radius: 50%;
                transition: all ease-in-out .5s;
                .el-progress-circle {
                  width: 100%!important;
                  height: 100%!important;
                  .el-progress-circle__track {
                    stroke: #fff;
                  }
                  .el-progress-circle__path {
                    stroke: @blue;
                  }
                }
                .el-progress__text {
                  font-size: 20px;
                  font-family: Poppins, Poppins;
                  font-weight: 500;
                  color: @blue;
                  .timeout-text {
                    display: block;
                  }
                  .timeout-img-binggo {
                    display: none;
                    width: 35px;
                    height: 24px;
                    margin: 0 auto;
                    // 图片揭露
                    padding-right: 35px;
                    object-fit: cover;
                    object-position: left;
                  }
                }
                &.active {
                  background-color: @green;
                  .el-progress-circle {
                    display: none;
                  }
                  .el-progress__text {
                    .timeout-text {
                      display: none;
                    }
                    .timeout-img-binggo {
                      display: block;
                      animation-name: aos-animate-padding-binggo;
                      animation-duration: .5s;
                      animation-timing-function: ease-in-out;
                      animation-delay: .2s;
                      animation-fill-mode: forwards;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .video-apply-tip {
        width: 586px;
        margin-left: 64px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
        }
        .desc{
          margin-bottom: 100px;
          font-size: 18px;
          color: @blank2;
          line-height: 36px;
        }
      }
    }
  }
  .cards {
    height: 838px;
    background-color: @topwhite;
    .cards-container {
      padding-top: 112px;
      .switch-button {
        margin-bottom: 35px;
      }
      .cards-list {
        display: flex;
        width: 100%;
        .cards-item {
          display: flex;
          width: 100%;
          min-width: 100%;
          .cards-item-left {
            width: 586px;
            margin-right: 104px;
            .title {
              width: 554px;
              margin-bottom: 30px;
              font-size: 40px;
              color: @blank;
              line-height: 55px;
            }
            .desc {
              margin-bottom: 60px;
              font-size: 18px;
              color: @blank2;
              line-height: 36px;
            }
            .feature-list {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 100px;
              .feature-item {
                display: flex;
                align-items: center;
                width: 150px;
                margin-right: 50px;
                margin-bottom: 12px;
                &:nth-child(3n) {
                  margin-right: 0;
                }
                &:nth-last-child(1), &:nth-last-child(2) {
                  margin-bottom: 0;
                }
                .feature-item-icon {
                  font-size: 24px;
                  margin-right: 10px;
                  color: #DDE1EB;
                }
                .feature-item-text {
                  font-size: 16px;
                  color: #5C5C66;
                  line-height: 40px;
                }
              }
            }
          }
          .cards-item-right {
            position: relative;
            width: 498px;
            height: 520px;
            background-image: url('@/assets/image/home/circle.png');
            .card {
              position: absolute;
              top: 66px;
              left: 104px;
              width: 358px;
              height: 220px;
              &.card-bottom {
                top: 204px;
                left: -36px;
              }
              &.card-above {
                z-index: 2;
              }
            }
            .card-tip {
              position: absolute;
              right: -12px;
              bottom: 50px;
              width: 116px;
              height: 145px;
              padding-top: 28px;
              background: rgba(255,255,255,0.8);
              box-shadow: 0px 4px 18px -6px rgba(0,0,0,0.15);
              border-radius: 14px;
              .card-tip-icon {
                display: block;
                margin: 0 auto 22px;
                width: 48px;
                height: 48px;
              }
              .card-tip-text {
                font-size: 13px;
                color: @blank2;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .swap {
    height: 700px;
    background-color: @blank;
    .swap-container {
      display: flex;
      justify-content: space-between;
      padding-top: 222px;
      .swap-left {
        position: relative;
        padding-left: 47px;
        .swap-bg {
          width: 398px;
          height: 318px;
        }
        .circle-arrow {
          position: absolute;
          top: -106px;
          left: -117px;
          width: 400px;
          height: 472px;
        }
        .exchange-currency {
          position: absolute;
          top: 130px;
          right: -60px;
          display: flex;
          align-items: center;
          width: 344px;
          height: 72px;
          padding: 0 24px;
          background: @blur-gradient;
          box-shadow: 0px 27px 36px 0px rgba(0,0,0,0.1);
          border-radius: 8px;
          border: 1px solid rgba(237.06778943538666, 238.8374000787735, 241.3392922282219, 1);
          .icon-logo {
            font-size: 35px;
          }
          .icon-currency {
            width: 44px;
            height: 30px;
            margin-right: 9px;
          }
          .icon-arrow-bottom {
            width: 8px;
            height: 4px;
          }
          .icon-arrow-circle {
            width: 30px;
            height: 30px;
            font-size: 30px;
            color: #d0d0d2;
            margin: 0 29px;
          }
          .exchange-box {
            position: relative;
            display: flex;
            align-items: center;
            padding-left: 54px;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 24px;
              transform: translate(0, -50%);
              width: 1px;
              height: 30px;
              border-right: 1px dashed #000;
            }
            .currency-box {
              display: flex;
              align-items: center;
            }
          }
        }
      }
      .swap-right {
        width: 586px;
        padding-top: 55px;
        // margin-left: 170px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @topwhite;
          line-height: 40px;
        }
        .desc {
          font-size: 18px;
          color: @topwhite;
          line-height: 40px;
        }
      }
    }
  }
  .fund {
    height: 700px;
    background-color: @topwhite;
    padding-top: 240px;
    .fund-container {
      display: flex;
      justify-content: space-between;
      .fund-left {
        width: 542px;
        padding-top: 54px;
        margin-right: 160px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 40px;
        }
      }
      .fund-right {
        position: relative;
        width: 510px;
        height: 368px;
        background-image: url('@/assets/image/home/fund-bg.png');
        .fund-line-bg {
          position: relative;
          width: 490px;
          height: 234px;
          margin-top: 68px;
          margin-left: 11px;
          > img {
            &[data-aos="aos-animate-padding"] {
              padding-right: 490px;
              object-fit: cover;
              object-position: left;
              &.aos-animate {
                padding-right: 0;
              }
            }
          }
          .fund-img-dashed {
            position: absolute;
            &.blue {
              top: 42px;
              left: 88px;
              width: 48px;
              height: 78px;
              > img {
                &[data-aos="aos-animate-padding"] {
                  padding-top: 78px;
                  object-fit: cover;
                  object-position: bottom;
                  &.aos-animate {
                    padding-top: 0;
                  }
                }
              }
            }
            &.green {
              top: 42px;
              right: 86px;
              width: 190px;
              height: 94px;
              > img {
                &[data-aos="aos-animate-padding"] {
                  padding-top: 94px;
                  object-fit: cover;
                  object-position: bottom;
                  &.aos-animate {
                    padding-top: 0;
                  }
                }
              }
            }
          }
        }
        .fund-img {
          position: absolute;
          width: 284px;
          height: 142px;
          box-shadow: 0px 4px 20px -6px rgba(0,0,0,0.15);
          border-radius: 20px;
          &.top-left {
            top: -34px;
            left: -43px;
          }
          &.top-right {
            top: -34px;
            right: -43px;
          }
        }
      }
    }
  }
  .letter {
    height: 700px;
    background-color: @gray3;
    .letter-container {
      display: flex;
      padding-top: 40px;
      .letter-left {
        position: relative;
        width: 620px;
        height: 620px;
        // margin-right: 165px;
        margin-right: 120px;
        background-image: url('@/assets/image/home/letter-bg.png');
        .letter-img {
          position: absolute;
          &:nth-child(1) {
            top: 130px;
            right: 62px;
            z-index: 2;
            width: 215px;
            height: 106px;
          }
          &:nth-child(2) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 388px;
            height: 214px;
          }
          &:nth-child(3), &:nth-child(4), &:nth-child(5) {
            right: 0;
            bottom: 84px;
            width: 186px;
            height: 235px;
            background: @topwhite;
            border-radius: 10px;
            box-shadow: 0px 5px 25px -6px rgba(22,31,91,0.149);
            transition: all ease .5s;
          }
        }
        [data-aos="aos-c-animate-child-transform"] {
          &:nth-child(4) {
            transition: all ease-in-out .8s;
          }
          &.aos-animate {
            &:nth-child(4) {
              transform: translate(14px, 14px);
            }
          }
          &:nth-child(5) {
            transition: all ease-in-out .8s;
          }
          &.aos-animate {
            &:nth-child(5) {
              transform: translate(28px, 28px);
            }
          }
        }
        // &:hover {
        //   .letter-img {
        //     &:nth-child(4) {
        //       transform: translate(14px, 14px);
        //     }
        //     &:nth-child(5) {
        //       z-index: 2;
        //       transform: translate(28px, 28px);
        //     }
        //   }
        // }
      }
      .letter-right {
        flex: 1;
        padding-top: 120px;
        font-size: 18px;
        color: @blank2;
        line-height: 36px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 40px;
        }
        .desc {
          margin-bottom: 20px;
        }
        .desc-item {
          position: relative;
          padding-left: 26px;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            background-color: @blank2;
            border-radius: 4px;
          }
          &.mb100 {
            margin-bottom: 100px;
          }
        }
      }
    }
  }
  .service {
    height: 700px;
    background-color: @topwhite;
    .service-container {
      display: flex;
      padding-top: 100px;
      .service-left {
        flex: 1;
        padding-top: 138px;
        .title {
          margin-bottom: 40px;
          font-size: 40px;
          color: @blank;
          line-height: 55px;
        }
        .desc {
          font-size: 18px;
          color: @blank2;
          line-height: 36px;
        }
      }
      .service-right {
        position: relative;
        width: 610px;
        height: 600px;
        margin-left: 145px;
        margin-right: -75px;
        // margin-left: 70px;
        background-image: url('@/assets/image/home/service-bg.png');
      }
    }
  }
  .global-net {
    height: 762px;
    background: @blank;
    .global-net-container {
      position: relative;
      padding-top: 140px;
      text-align: center;
      .title {
        margin-bottom: 34px;
        font-size: 40px;
        color: @topwhite;
        line-height: 40px;
      }
      .desc {
        margin-bottom: 84px;
        font-size: 18px;
        color: @topwhite;
        line-height: 32px;
      }
      .global-net-main {
        display: flex;
        align-items: center;
        .global-net-bg {
          position: relative;
          width: 730px;
          height: 333px;
          margin-right: 36px;
          background-image: url('@/assets/image/home/global-net-bg.png');
          .global-net-img {
            position: absolute;
            width: 48px;
            height: 60px;
            &:nth-child(1) {
              top: 30px;
              left: 165px;
            }
            &:nth-child(2) {
              top: 72px;
              right: 150px;
            }
            &:nth-child(3) {
              top: 122px;
              left: 288px;
            }
            &:nth-child(4) {
              top: 174px;
              left: 200px;
            }
          }
        }
        .global-net-list {
          flex: 1;
          .global-net-item {
            position: relative;
            display: flex;
            align-items: center;
            height: 86px;
            margin-bottom: 35px;
            color: @topwhite;
            &:last-child {
              margin-bottom: 0;
            }
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              // width: 100%;
              height: 1px;
              background-color: @topwhite;
            }
            .text-bold {
              width: 92px;
              margin-right: 35px;
              font-size: 40px;
              font-family: Poppins, Poppins;
              font-weight: 600;
              line-height: 46px;
              text-align: left;
            }
            .text {
              font-size: 16px;
              line-height: 34px;
            }
          }
        }
      }
    }
  }
  .customer {
    height: 808px;
    background-color: @topwhite;
    .customer-container {
      display: flex;
      padding: 140px 60px 0;
      .customer-left {
        margin-right: 95px;
        width: 458px;
        height: 529px;
        >.customer-left-item {
          width: 100%;
          height: 100%;
          padding: 50px 40px;
          &:nth-child(1) {
            background-image: url('@/assets/image/home/customer-bg-01.png');
          }
          &:nth-child(2) {
            background-image: url('@/assets/image/home/customer-bg-02.png');
          }
          &:nth-child(3) {
            background-image: url('@/assets/image/home/customer-bg-03.png');
          }
          .title {
            margin-bottom: 30px;
            font-size: 20px;
            color: @topwhite;
            line-height: 20px;
          }
          .desc {
            font-size: 14px;
            color: @gray3;
            line-height: 40px;
          }
        }
      }
      .customer-right {
        flex: 1;
        >.title {
          margin-bottom: 44px;
          font-size: 40px;
          color: @blank;
          line-height: 40px;
        }
        >.desc {
          // margin-bottom: 74px;
          margin-bottom: 65px;
          font-size: 18px;
          color: @blank2;
          line-height: 32px;
        }
      }
    }
  }
  .celebrity {
    height: 762px;
    background-color: @gray3;
    .celebrity-container {
      padding-top: 120px;
      .title {
        margin-bottom: 100px;
        font-size: 40px;
        color: @blank;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
