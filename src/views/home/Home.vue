<template>
  <div class="home">
    <!--Banner開始-->
    <div class="banner-limit">
      <el-carousel
        :arrow="bannerList > 1 ? 'always' : ''"
        :height="`${deviceWidth > 700 ? '60vw' : '88vw'}`"
        indicator-position="none"
        class="banner"
      >
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <!-- 手機版背景還沒串 -->
          <div class="banner-item" :style="`backgroundImage: url('${item.webImageUrl}')`">
            <div class="banner-title">{{ item.title }}</div>
            <div class="banner-sub">{{ item.description }}</div>
            <div class="banner-more">
              <a :href="item.buttonUrl" class="banner-button fdb-btn-primary-hover">{{ item.buttonName }}</a>
            </div>
          </div>
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

    <!-- 文章列表 最新消息 -->
    <ArticleList />
    <!-- 最新消息 結束 -->
  </div>
</template>

<script>
import JoinUs from './components/JoinUs.vue'
import Info from './components/Info.vue'
import ArticleList from './components/ArticleList.vue'
import { getHomePageInfo } from '@/apis/common.js'

export default {
  name: 'Home',
  components: {
    JoinUs,
    Info,
    ArticleList
  },
  data() {
    return {
      bannerList: []
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  },
  created() {
    this.getHomePageInfo()
  },
  methods: {
    async getHomePageInfo() {
      try {
        const res = await getHomePageInfo({ lang: 0 })
        this.bannerList = res.data
      } catch (error) {
        console.error(error)
      }
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
    height: 35vw;
    @media screen and (max-width: 1500px) {
      height: 37vw;
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
      // background-image: url('../../assets/img/common/banner.svg');
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
        color: #ffffff;
        padding: 10px 48px;
        background: linear-gradient(180deg, #62ffff 9.47%, #3ea9cc 100%);
        border-radius: 8px;
        cursor: pointer;
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
        // background-image: url('../../assets/img/home/banner-mobile.png');
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
