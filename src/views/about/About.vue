<template>
  <div class="about">
    <div class="about-title">
      返多寶致力成為全球最大虛擬貨幣「返擁平台」及「論壇」<br />交易返佣、手續費返佣、推廣返佣<br />全方面的反佣方案、24小時專業客服團隊<br />只有返多寶
    </div>
    <div class="about-mission">我們的使命</div>
    <div class="about-detail">返多寶為幣圈第一間返佣平台</div>
    <div class="about-detail">聯合創始人為中國、新加坡、台灣、日本幣圈知名人士</div>
    <div class="about-mission">我們的願景</div>
    <div class="about-detail">致力為幣圈帶來更透明的訊息、更健康生態、讓投資更簡單</div>
    <div class="about-detail">並拓展為全球最專業反佣平台與論壇</div>
    <div class="about-img">
      <img src="@/assets/img/about/about-bitcoin-kv.jpg" alt="about-bitcoin-kv" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  background-image: url('../../assets/img/common/full.png');
  background-position: 50% -36%;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 1500px) {
    background-position: 50% -26%;
  }
  @media screen and (max-width: 1370px) {
    background-position: 50% -22%;
  }
  @media screen and (max-width: 960px) {
    background-position: 50% -18%;
  }
  @media screen and (max-width: 700px) {
    background-position: 50% 16%;
  }
  @media screen and (max-width: 500px) {
    background-position: 50% 6%;
  }
  &-title {
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    margin: 10% 17% 40% 17%;
    text-align: center;
    @media screen and (max-width: 1370px) {
      font-size: 24px;
      line-height: 36px;
    }
    @media screen and (max-width: 960px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media screen and (max-width: 700px) {
      font-size: 30px;
      line-height: 46px;
      margin: 10% 4% 40% 4%;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &-mission {
    line-height: 64px;
    margin-top: 10%;
    margin-bottom: 4%;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 1370px) {
      font-size: 36px;
    }
    @media screen and (max-width: 960px) {
      font-size: 28px;
    }
    @media screen and (max-width: 700px) {
      font-size: 36px;
    }
    @media screen and (max-width: 500px) {
      font-size: 22px;
    }
  }
  &-detail {
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #e5e5e5;
    @media screen and (max-width: 960px) {
      font-size: 16px;
      line-height: 28px;
    }
    @media screen and (max-width: 700px) {
      font-size: 22px;
      line-height: 34px;
      margin: 0 3%;
    }
    @media screen and (max-width: 500px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
  &-img {
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 20%;
    img {
      width: 1000px;
      @media screen and (max-width: 1370px) {
        width: 772px;
      }
      @media screen and (max-width: 960px) {
        width: 600px;
      }
      @media screen and (max-width: 700px) {
        width: 470px;
      }
      @media screen and (max-width: 500px) {
        width: 291px;
      }
    }
  }
}
</style>
