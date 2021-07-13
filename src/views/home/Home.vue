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

    <!--最新消息 開始-->
    <div class="outline news-outline">
      <div class="news-title">最新活動與消息</div>
      <div class="outline scroll">
        <div class="outblock full-news">
          <div href="javascript:void(0)" class="news-main">
            <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
            <div class="sign-block">
              <div>活動</div>
            </div>
            <div class="main">How to make a website<br />look more attractive with illustrations.</div>
            <div class="date">2020.03.01</div>
          </div>
          <div href="javascript:void(0)" class="news-main">
            <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
            <div class="sign-block">
              <div>活動</div>
            </div>
            <div class="main">How to make a website<br />look more attractive with illustrations.</div>
            <div class="date">2020.03.01</div>
          </div>
          <div href="javascript:void(0)" class="news-main">
            <div class="pic"><img src="@/assets/img/news/news-pic.jpg" alt="" /></div>
            <div class="sign-block">
              <div>活動</div>
            </div>
            <div class="main">How to make a website<br />look more attractive with illustrations.</div>
            <div class="date">2020.03.01</div>
          </div>
        </div>
      </div>
    </div>
    <!--最新消息 結束-->
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
  // height: 280vh;
  background-image: url('../../assets/img/common/globe.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  .banner {
    margin-bottom: 8vw;
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
      margin-top: 6vw;
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
  .home {
    .banner {
      margin-bottom: 6vw;
      &-title {
        font-size: 36px;
      }
      &-sub {
        font-size: 16px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 10px 48px;
        }
      }
      &-currencies {
        margin-top: 3vw;
      }
    }
  }
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
  .home {
    background-size: contain;
    .banner {
      margin-bottom: 6vw;
      &-title {
        font-size: 28px;
      }
      &-sub {
        font-size: 14px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 8px 40px;
          font-size: 14px;
        }
      }
      &-currencies {
        margin-top: 3vw;
      }
    }
  }
}
/*540*/
@media screen and (min-width: 500px) and (max-width: 749px) {
  .home {
    background-size: contain;
    background-position: 50% 6%;
    .banner {
      margin-bottom: 6vw;
      &-title {
        font-size: 24px;
      }
      &-sub {
        font-size: 14px;
        padding: 0 40px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 8px 40px;
          font-size: 14px;
        }
      }
      &-currencies {
        margin-top: 3vw;
      }
    }
  }
}
/*320*/
@media screen and (min-width: 300px) and (max-width: 499px) {
  .home {
    background-size: contain;
    background-position: 50% 8%;
    .banner {
      margin-bottom: 6vw;
      &-title {
        font-size: 22px;
      }
      &-sub {
        font-size: 12px;
        padding: 0 22px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 6px 22px;
          font-size: 12px;
        }
      }
      &-currencies {
        margin-top: 3vw;
      }
    }
  }
}
</style>
