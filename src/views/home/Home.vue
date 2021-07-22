<template>
  <div class="home">
    <!--Banner開始-->
    <div class="banner-limit">
      <el-carousel arrow="always" :height="`${deviceWidth > 700 ? '60vw' : '88vw'}`" indicator-position="none" class="banner">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="banner-item">
            <div class="banner-title">返多寶-虛擬貨幣返佣先驅</div>
            <div class="banner-sub">致力打造全最大虛擬貨幣反傭平台，讓虛擬貨幣交易變得更優惠、讓消費者不在為了不透明的手續費而煩惱</div>
            <div class="banner-more">
              <div class="banner-button">了解更多</div>
            </div>
          </div>
          <!-- <div class="banner-currencies">
            <img src="@/assets/img/common/currencies.png" alt="currencies" />
          </div> -->
        </el-carousel-item>
      </el-carousel>
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
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-image: url('../../assets/img/common/globe.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  .banner-limit {
    height: 37vw;
    @media screen and (min-width: 1500px) {
      height: 42vw;
    }
  }
  .banner {
    margin-bottom: 2vw;
    ::v-deep {
      .el-carousel__arrow {
        font-size: 36px;
        height: 72px;
        width: 72px;
      }
    }
    &-item {
      background-image: url('../../assets/img/common/banner.svg');
      background-size: cover;
      height: 60vw;
    }
    &-title {
      padding-top: 5vh;
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
    .banner-limit {
      height: 40vw;
    }
    .banner {
      margin-bottom: 6vw;
      ::v-deep {
        .el-carousel__arrow {
          font-size: 28px;
          height: 56px;
          width: 56px;
        }
      }
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
    }
  }
}
/*768*/
@media screen and (min-width: 750px) and (max-width: 999px) {
  .home {
    background-size: contain;
    .banner-limit {
      height: 37vw;
    }
    .banner {
      margin-bottom: 6vw;
      ::v-deep {
        .el-carousel__arrow {
          font-size: 22px;
          height: 44px;
          width: 44px;
        }
      }
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
    }
  }
}
/*540*/
@media screen and (min-width: 500px) and (max-width: 749px) {
  .home {
    background-size: contain;
    background-position: 50% 6%;
    .banner-limit {
      height: 50vw;
      margin-bottom: 126px;
    }
    .banner {
      margin-bottom: 6vw;
      ::v-deep {
        .el-carousel__arrow {
          font-size: 22px;
          height: 44px;
          width: 44px;
        }
      }
      &-item {
        background-image: url('../../assets/img/home/banner-mobile.png');
        height: 88vw;
      }
      &-title {
        padding-top: 3vh;
        font-size: 30px;
      }
      &-sub {
        font-size: 16px;
        padding: 0 40px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 8px 40px;
          font-size: 14px;
        }
      }
    }
  }
}
/*320*/
@media screen and (min-width: 300px) and (max-width: 499px) {
  .home {
    background-size: contain;
    background-position: 50% 8%;
    .banner-limit {
      height: 50vw;
      margin-bottom: 80px;
    }
    .banner {
      margin-bottom: 6vw;
      ::v-deep {
        .el-carousel__arrow {
          font-size: 18px;
          height: 36px;
          width: 36px;
        }
        .el-carousel__arrow--flef {
          left: 6px;
        }
        .el-carousel__arrow--right {
          right: 6px;
        }
      }
      &-item {
        background-image: url('../../assets/img/home/banner-mobile.png');
        height: 88vw;
      }
      &-title {
        padding-top: 2vh;
        font-size: 22px;
      }
      &-sub {
        font-size: 12px;
        padding: 0 12px;
      }
      &-more {
        margin-top: 30px;
        .banner-button {
          padding: 6px 22px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
