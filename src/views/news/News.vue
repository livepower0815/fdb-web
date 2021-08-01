<template>
  <div class="nwes">
    <!--Banner開始-->
    <div class="news-banner">
      <div class="banner-content">
        <div class="banner-title">返多寶社群</div>
        <div class="banner-info">逐步發展虛擬貨幣須知，發展成獨立的虛擬貨幣自媒體</div>
      </div>
    </div>
    <!--Banner結束-->

    <!--內容 開始-->
    <div class="news-content">
      <!-- menu bar -->
      <div class="menu-bar">
        <div class="menu-left">
          <div class="menu-item" :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">全部</div>
          <div class="menu-item" :class="{ active: activeTab === 'forum' }" @click="activeTab = 'forum'">論壇</div>
          <div class="menu-item" :class="{ active: activeTab === 'bulletin' }" @click="activeTab = 'bulletin'">公告</div>
          <div class="menu-item" :class="{ active: activeTab === 'activity' }" @click="activeTab = 'activity'">活動</div>
        </div>
        <div class="menu-right">
          <img @click="showSearch = !showSearch" class="icon-search" src="@/assets/img/common/icon-search.png" alt="search" />
          <input class="input" :class="{ hide: !showSearch }" type="text" />
        </div>
      </div>

      <!-- all info -->
      <AllInfo v-if="activeTab === 'all'" />

      <!-- 文章列表 -->
      <Information @loadArticle="loadArticle" />

      <!-- 文章內容 -->
      <Article />
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
import AllInfo from './components/AllInfo'
import Information from './components/Information.vue'
import Article from './components/Article'

export default {
  name: 'News',
  components: {
    AllInfo,
    Information,
    Article
  },
  data() {
    return {
      activeTab: this.$route.query.tab || 'all',
      showSearch: false
    }
  },
  watch: {
    activeTab(val) {
      this.$router.replace({ query: { tab: val } })
    }
  },
  methods: {
    loadArticle() {
      this.activeTab = 'article'
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  &-banner {
    position: relative;
    height: 30vw;
    background-image: url('../../assets/img/news/news-banner.png');
    background-size: cover;
    .banner-content {
      position: absolute;
      left: 5%;
      top: 32%;
      .banner-title {
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;
      }
      .banner-info {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  &-content {
    max-width: 1440px;
    padding: 0 3%;
    margin: 0 auto;
    @media screen and (max-width: 1370px) {
      padding: 0 4%;
    }
    .menu-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      .menu-left {
        display: flex;
        .menu-item {
          font-size: 20px;
          margin-right: 60px;
          cursor: pointer;
          &:hover,
          &.active {
            color: #62ffff;
          }
        }
      }
      .menu-right {
        display: flex;
        .icon-search {
          width: 20px;
          cursor: pointer;
        }
        .input {
          margin-left: 8px;
          color: #c4c4c4;
          background-color: #050608;
          border-bottom: 1px #fff solid;
          width: 140px;
          opacity: 1;
          transition: all 0.4s;
          &.hide {
            width: 0px;
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
