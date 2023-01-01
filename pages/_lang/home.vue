<template>
  <div class="index">
    <!--Banner開始-->
    <client-only placeholder="Loading...">
      <el-carousel :arrow="bannerList.length > 1 ? 'always' : 'never'" :height="carouselHeight" :interval="6000" indicator-position="none">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <div v-if="item.loading" v-loading="true" style="height: 400px"></div>
          <div v-else class="img-banner">
            <div class="img-banner__content">
              <div class="banner__lf">
                <div class="banner-title">
                  <h1 class="banner-title__text" :style="{ color: item.titleColor || '' }">{{ item.title }}</h1>
                </div>
                <div class="banner-dec">
                  <p class="banner-dec__text" :style="{ color: item.descColor || '' }">{{ item.description }}</p>
                </div>
                <a :href="item.linkUrl" target="_blank" class="banner-btn">
                  <span class="banner-btn__text">{{ item.linkText }}</span>
                  <img src="@/assets/img/home/index-banner-icon@2x.png" alt="" class="banner-btn__icon" />
                </a>
              </div>
              <div class="banner__rt">
                <img :src="item.webImageUrl" alt="" class="banner-img cursor-point" @click="openNewWindow(item.linkUrl)" />
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </client-only>
    <!--Banner結束-->

    <!-- 市場脈動 開始-->
    <div class="market-pulse">
      <div class="container">
        <div class="market-pulse__title">
          <div class="title">
            <p class="title__text">{{ $t('market_pulse') }}</p>
          </div>
          <div class="sub-title">
            <p class="sub-title__text">{{ $t('keep_know_current_market') }}</p>
          </div>
          <NuxtLink :to="{ name: 'lang-news', params: { lang: $route.params.lang } }" class="title-icon"
            ><img src="@/assets/img/home/arrow-top-right-o.png" alt="" class="title-icon__img"
          /></NuxtLink>
        </div>
        <div class="market-pulse__slide">
          <div class="slide-list-group">
            <div class="slide-list">
              <a v-if="marketLoading" v-loading="true" href="javascript:void(0)" class="slide-list__item"></a>
              <NuxtLink
                v-else
                v-for="art in marketPulseList"
                :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: art.id } }"
                class="slide-list__item"
                :key="art.id"
              >
                <div class="item-img">
                  <img :src="art.img" alt="" class="item-img__img hover-image" />
                </div>
                <div class="item-content">
                  <div class="tag-list">
                    <div v-for="tag in art.tags" class="tag-list__tag" :key="tag.id">
                      <p class="tag-text">#{{ tag.name }}</p>
                    </div>
                  </div>
                  <div class="item-title">
                    <p class="item-title__text">{{ art.title }}</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 市場脈動 結束 -->

    <!-- 行情資訊 開始 -->
    <div class="card-slide -quotes">
      <div class="container">
        <div class="card-slide__content">
          <div class="slide-list-group" @mouseover="hoverHandler" @mouseleave="leaveHandler">
            <!-- for 跑馬燈 本體 + 克隆體 所以需要兩個 -->
            <div v-for="num in 2" :key="num" ref="quoteMarquee" class="slide-list">
              <a v-for="(quote, index) in coinTrendList" href="javascript:void(0);" class="slide-list__item" :key="index">
                <div class="item-lf">
                  <div class="item-icon">
                    <img class="item-icon__img" :src="quote.icon" alt="coin-icon" />
                  </div>
                  <div class="item-detail">
                    <p class="item-detail__name">{{ quote.name }}</p>
                    <p class="item-detail__result">${{ quote.price }}</p>
                  </div>
                </div>
                <div class="item-rt">
                  <!-- quote-change -rise -down -->
                  <!-- -1 跌, 0 平, 1 漲 -->
                  <div class="quote-change" :class="{ '-rise': quote.direction === 1, '-down': quote.direction === -1 }">
                    <p class="quote-change__text">{{ quote.percentrice }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 行情資訊 結束 -->

    <!--內容 開始-->
    <div class="layout-content">
      <!-- 文章列表 -->
      <div class="article">
        <div class="article-main">
          <div class="article-title">
            <span class="article-title__text">{{ $t('recommended_article') }}</span>
            <img src="@/assets/img/home/arrow-top-right-o.png" alt="" class="article-title__icon" />
          </div>
          <div class="article-dec">
            <span class="article-dec__text">{{ $t('provides_exclusive_articles') }}</span>
          </div>
          <div class="article-list -index">
            <div v-for="(article, index) in recommends" class="article-card -row" :key="article.id">
              <div class="article-card__number">
                <p class="number-text">{{ `${index + 1}`.padStart(2, '0') }}</p>
              </div>
              <NuxtLink
                :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
                class="article-card__photo"
              >
                <img class="photo-img" :src="article.img" :alt="article.title" />
              </NuxtLink>
              <div class="article-card__content">
                <div class="card-tag">
                  <NuxtLink
                    v-for="tag in article.tags"
                    :key="tag.id"
                    :to="{ name: 'lang-tag-info-tagName', params: { lang: $route.params.lang, tagName: tag.name } }"
                    class="card-tag__item"
                  >
                    <span class="item-text">＃{{ tag.name }}</span>
                  </NuxtLink>
                </div>
                <NuxtLink
                  :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
                  class="card-title"
                >
                  <h3 class="card-title__text hover-primary">{{ article.title }}</h3>
                </NuxtLink>
                <div class="card-date">
                  <span class="card-date__text">{{ $formatDate(article.date) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 文章列表 end -->

        <div class="article-other">
          <div class="n-recommend">
            <!-- 挖掘更多你想看的文章 -->
            <div class="n-recommend__title">
              <h3 class="title-text">{{ $t('explore_more_articles') }}</h3>
            </div>
            <div class="tag-list">
              <NuxtLink
                v-for="tag in moreHashTags"
                :to="{ name: 'lang-tag-info-tagName', params: { lang: $route.params.lang, tagName: tag.name } }"
                class="tag-list__item"
                :key="tag.id"
              >
                <span class="item-text">{{ tag.name }}</span>
              </NuxtLink>
            </div>
            <!-- 挖掘更多你想看的文章 end -->

            <!-- 廣告位 -->
            <CommonAdList :list-data="adList" />
            <!-- 廣告位 end -->
          </div>
        </div>
      </div>
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
import { debounce } from '@/utils/debounce.js'
import { initSlider } from '@/utils/slider'

export default {
  name: 'Home',
  data() {
    return {
      // banner
      bannerList: [{ loading: true }],
      // 市場脈動
      marketPulseList: [],
      marketLoading: true,
      // 貨幣趨勢
      coinTrendList: [],
      // 推薦文章
      recommends: [],
      // 更多文章tags
      moreHashTags: [],
      // 廣告位
      adList: [],
      removeSliderEvent: () => {}
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    carouselHeight() {
      if (this.deviceWidth <= 767) return '450px'
      else if (this.deviceWidth <= 992) return '300px'
      else return '500px'
    }
  },
  mounted() {
    this.getHomePageInfo()
    this.getMarketPulse()
    this.getCoinTrend()
    this.getRecommendNews()
    this.getHashTags()
    this.getCommercial()

    this.removeSliderEvent = initSlider('.slide-list-group')
  },
  destroyed() {
    this.removeSliderEvent()
  },
  methods: {
    // banner
    async getHomePageInfo() {
      try {
        const res = await this.$api.common.getHomePageInfo()
        this.bannerList = res.data
      } catch (error) {
        console.error(error)
      }
    },
    // 市場脈動
    async getMarketPulse() {
      try {
        this.marketLoading = true
        const res = await this.$api.common.getMarketPulse()
        this.marketPulseList = res
      } catch (error) {
        console.error(error)
      } finally {
        this.marketLoading = false
      }
    },
    // 貨幣趨勢
    async getCoinTrend() {
      try {
        const res = await this.$api.common.getCoinTrend()
        this.coinTrendList = res.data

        // 加上跑馬燈動畫
        window.setTimeout(() => {
          this.$refs.quoteMarquee[0].classList.add('quote-marquee1')
          this.$refs.quoteMarquee[1].classList.add('quote-marquee2')
        }, 100)
      } catch (error) {
        console.error(error)
      }
    },
    // 暫停跑馬燈動畫
    setQuotePaused(isPaused = true) {
      const status = isPaused ? 'paused' : 'running'
      window.setTimeout(() => {
        this.$refs.quoteMarquee[0].style.animationPlayState = status
        this.$refs.quoteMarquee[1].style.animationPlayState = status
      }, 10)
    },
    hoverHandler: debounce(function () {
      this.setQuotePaused(true)
    }, 200),
    leaveHandler: debounce(function () {
      this.setQuotePaused(false)
    }, 200),
    // 推薦文章
    async getRecommendNews() {
      try {
        const res = await this.$api.common.getHomeRecommendNews()
        this.recommends = res
      } catch (error) {
        console.error(error)
      }
    },
    // 更多文章 tags
    async getHashTags() {
      try {
        const res = await this.$api.news.getHashTags()
        this.moreHashTags = res.data
      } catch (error) {
        console.error(error)
      }
    },
    // 廣告位
    async getCommercial() {
      try {
        // 廣告位置(首頁 = 1,新聞 = 2,直播 = 3)
        const reqBody = { adPosition: 1 }
        const res = await this.$api.commercial.getCommercial(reqBody)
        this.adList = res
      } catch (error) {
        console.error(error)
      }
    },
    openNewWindow(url) {
      window.open(url)
    }
  }
}
</script>
