<template>
  <div class="about">
    <div v-if="deviceWidth > 700" class="about-title">
      首家企業化的「返佣平台」及「論壇」 提供全方位返佣方案 <br />「交易返佣、手續費返佣、推薦好友再返佣」
    </div>
    <div v-else class="about-title">
      首家企業化的「返佣平台」及「論壇」<br />
      提供全方位返佣方案 <br />「交易返佣、手續費返佣、推薦好友再返佣」
    </div>
    <div class="step-title">返佣流程</div>
    <div class="step-item">
      <div class="image">
        <img src="@/assets/img/about/step1.png" alt="step1" />
      </div>
      <div class="info">
        <div class="info-title">加入返多寶</div>
        <div class="info-content">申請返多寶會員<br />另外新增好友邀請碼可共同獲得返佣</div>
      </div>
    </div>
    <div class="step-item" :class="{ reverse: deviceWidth > 700, 'reverse-m': deviceWidth <= 700 }">
      <div class="image">
        <img src="@/assets/img/about/step2.png" alt="step2" />
      </div>
      <div class="info">
        <div class="info-title">綁定交易所</div>
        <div class="info-content">透過返多寶鏈結註冊交易所<br />將交易所UID與返多寶會員綁定</div>
      </div>
    </div>
    <div class="step-item">
      <div class="image">
        <img src="@/assets/img/about/step3.png" alt="step3" />
      </div>
      <div class="info">
        <div class="info-title">領取返佣</div>
        <div class="info-content">檢視返佣儀表板，輸入錢包地址，申請出金</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-image: url('../../assets/img/common/full.png');
  background-position: 50% -15%;
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1370px) {
    background-position: 50% -22%;
  }
  @media screen and (max-width: 960px) {
    background-position: 50% -18%;
  }
  @media screen and (max-width: 700px) {
    background-position: 50% 0%;
  }
  @media screen and (max-width: 500px) {
    background-position: 50% 2%;
  }
  &-title {
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    margin: 10% 14% 40% 14%;
    text-align: center;
    @media screen and (max-width: 1370px) {
      font-size: 24px;
      line-height: 36px;
      margin: 10% 14% 33% 14%;
    }
    @media screen and (max-width: 960px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media screen and (max-width: 700px) {
      // font-size: 28px;
      line-height: 46px;
      margin: 10% 4% 40% 4%;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
      line-height: 24px;
      margin: 10% 4% 50% 4%;
    }
  }

  .step-title {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin: 40px;
    @media screen and (max-width: 1370px) {
      font-size: 32px;
      margin: 20px;
    }
    @media screen and (max-width: 960px) {
      font-size: 26px;
    }
  }
  .step-item {
    display: flex;
    justify-content: space-around;
    padding: 6% 0;
    background-image: url('../../assets/img/about/rectangle.png');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: -16% 8%;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      background-size: 94%;
      background-position: 0% 3%;
      padding: 10% 0;
    }
    &:last-child {
      margin-bottom: 200px;
      @media screen and (max-width: 700px) {
        margin-bottom: 100px;
      }
    }
    &.reverse {
      flex-direction: row-reverse;
      background-image: url('../../assets/img/about/reverse-eectangle.png');
      background-position: 108% 8%;
      .image {
        text-align: start;
      }
      .info {
        margin-left: 12%;
      }
    }
    &.reverse-m {
      background-image: url('../../assets/img/about/reverse-eectangle.png');
      background-position: 100% 3%;
    }
    .image {
      width: 60%;
      text-align: center;
      @media screen and (max-width: 700px) {
        width: 100%;
      }
      img {
        width: 76%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;
      margin-left: 6%;
      @media screen and (max-width: 700px) {
        width: 100%;
        margin-left: 0;
        text-align: center;
        margin-top: 5%;
      }
      &-title {
        font-size: 36px;
        line-height: 53px;
        font-weight: bold;
        margin-bottom: 5%;
        @media screen and (max-width: 1370px) {
          font-size: 24px;
          line-height: 36px;
        }
        @media screen and (max-width: 960px) {
          font-size: 20px;
          line-height: 30px;
        }
        @media screen and (max-width: 700px) {
          margin-bottom: 2%;
        }
      }
      &-content {
        font-size: 24px;
        line-height: 36px;
        color: #e5e5e5;
        @media screen and (max-width: 1370px) {
          font-size: 18px;
          line-height: 24px;
        }
        @media screen and (max-width: 960px) {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
