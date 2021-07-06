<template>
  <div class="home">
    <!--Banner開始-->
    <div class="banner">
      <div class="banner-title">返多寶-虛擬貨幣返佣先驅</div>
      <div class="banner-sub">致力打造全最大虛擬貨幣反傭平台，讓虛擬貨幣交易變得更優惠、讓消費者不在為了不透明的手續費而煩惱</div>
      <div class="banner-more">
        <div class="banner-button">了解更多</div>
      </div>
      <div class="banner-currencies">
        <img src="@/assets/img/common/currencies.png" alt="currencies" />
      </div>
    </div>
    <!--Banner結束-->

    <!--加入我們 開始-->
    <JoinUs />
    <!--加入我們 結束-->

    <!--介紹 開始-->
    <Info />
    <!--介紹 結束-->

    <!--底版 開始-->
    <div v-if="false" class="outline line-bg">
      <!--最新消息 開始-->
      <div class="outline news-outline">
        <div class="news-title">最新活動與消息</div>
        <div class="outline scroll">
          <div class="outblock full-news">
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
            <a href="javascript:void(0)" class="news-main">
              <div class="pic"><img src="@/assets/img/news-pic.jpg" alt="" /></div>
              <div class="sign-block">
                <div>活動</div>
              </div>
              <div class="main">How to make a website<br />look more attractive with illustrations.</div>
              <div class="date">2020.03.01</div>
            </a>
          </div>
        </div>
      </div>
      <!--最新消息 結束-->
    </div>
    <!--底版 結束-->
  </div>
</template>

<script>
import JoinUs from './components/JoinUs.vue'
import Info from './components/Info.vue'

export default {
  name: 'Home',
  components: {
    JoinUs,
    Info
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 280vh;
  background-image: url('../../assets/img/common/globe.png');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  .banner {
    margin-bottom: 180px;
    &-title {
      margin-top: 5vh;
      margin-bottom: 16px;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    &-sub {
      color: #fff;
      text-align: center;
      font-size: 16px;
    }
    &-more {
      display: flex;
      margin-top: 38px;
      justify-content: center;
      align-items: center;
      .banner-button {
        padding: 10px 48px;
        background: linear-gradient(180deg, #62ffff 9.47%, #3ea9cc 100%);
        border-radius: 8px;
        cursor: pointer;
      }
    }
    &-currencies {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 58vw;
      }
    }
  }
}

/*1024*/
@media screen and (min-width: 1000px) and (max-width: 1346px) {
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
}
/*540*/
@media screen and (min-width: 540px) and (max-width: 749px) {
}
/*320*/
@media screen and (min-width: 320px) and (max-width: 539px) {
}
</style>
