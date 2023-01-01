<template>
  <div class="news">
    <!--內容 開始-->
    <div class="layout-content">
      <!-- 文章列表 -->
      <div class="article">
        <div class="article-main">
          <div class="article-card">
            <div class="article-card__content">
              <div class="card-tag">
                <NuxtLink
                  v-for="tag in articleData.tags"
                  :to="{ name: 'lang-tag-info-tagName', params: { lang: $route.params.lang, tagName: tag.name } }"
                  class="card-tag__item"
                  :key="tag.id"
                >
                  <span class="item-text">＃{{ tag.name }}</span>
                </NuxtLink>
              </div>
              <div class="card-title">
                <h3 class="card-title__text">{{ articleData.title }}</h3>
              </div>
            </div>
            <div class="article-card__photo">
              <img class="photo-img" style="object-fit: contain" :src="articleData.img" alt="" />
            </div>
          </div>
          <div class="article-info">
            <div class="article-info__lf">
              <div class="article-tag">
                <span class="article-tag__text">{{ categoryMap[articleData.category] }}</span>
              </div>
              <div class="article-detail">
                <span class="article-detail__text">{{ $formatDate(articleData.createdate) }}</span>
                <span class="article-detail__text">by {{ articleData.auther }}</span>
              </div>
            </div>
            <div class="article-info__rt">
              <div class="tab-switch">
                <a
                  class="tab-switch__item cursor-point"
                  :class="{ 'tab-switch__item--active': theme === 'dark' }"
                  @click.stop="theme = 'dark'"
                >
                  <span class="item-text">{{ $t('dark_color') }}</span>
                </a>
                <a
                  class="tab-switch__item cursor-point"
                  :class="{ 'tab-switch__item--active': theme === 'light' }"
                  @click.stop="theme = 'light'"
                >
                  <span class="item-text">{{ $t('light_color') }}</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="article-content"
            :class="{ '-bg-light': theme === 'light', '-bg-dark': theme === 'dark' }"
            v-html="articleData.content"
          ></div>

          <!-- 置頂按鈕 -->
          <div class="back-top-btn">
            <img src="@/assets/img/common/back-to-top-2.png" alt="scroll top" class="back-top-btn__img cursor-point" @click="scrollTop" />
          </div>
        </div>

        <!-- 推薦文章 -->
        <div class="article-other">
          <div class="n-recommend">
            <div class="recommend-article">
              <div class="recommend-article__title">
                <h3 class="title-text">{{ $t('recommended_article') }}</h3>
              </div>
              <div v-for="article in recommendList" class="article-card" :key="article.id">
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
                    class="card-dec"
                  >
                    <span class="card-dec__text hover-primary">{{ article.title }}</span>
                  </NuxtLink>
                  <div class="card-date">
                    <span class="card-date__text">{{ $formatDate(article.date) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 廣告位 -->
            <CommonAdList :list-data="adList" />
            <!-- 廣告位 end -->
          </div>
        </div>
        <!-- 推薦文章 end -->
      </div>
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
const getTheme = () => {
  if (!process.browser) return 'dark'
  return localStorage.getItem('fdb-theme') || 'dark'
}

export default {
  name: 'ArticleInfo',
  async asyncData({ params, $api, store }) {
    let articleData = {
      title: 'FUNDOBIT',
      desc: '「Fundobit」the world’s largest CryptoCurrency rebate platform.',
      img: 'https://fdb-web-api.azurewebsites.net/Upload/UserImage/202111282001344329/F20211128200134.png',
      tags: [],
      category: 0,
      createdate: '2022.08.20',
      auther: 'FUNDOBIT Auther',
      content: ''
    }
    if (params.articleId) {
      const reqBody = { id: params.articleId }
      try {
        store.commit('app/SET_G_LOADING', true)
        const res = await $api.news.getNewsDetail(reqBody)
        articleData = res.data
      } catch (error) {
        console.error(error)
      } finally {
        store.commit('app/SET_G_LOADING', false)
      }
    }
    return { articleData }
  },
  head() {
    return {
      title: this.articleData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.articleData.desc },
        // FB Line
        { hid: 'og:title', property: 'og:title', content: this.articleData.title },
        { hid: 'og:description', property: 'og:description', content: this.articleData.desc },
        { hid: 'og:image', property: 'og:image', content: this.articleData.img },
        // Twitter
        { hid: 'twitter:title', property: 'twitter:title', content: this.articleData.title },
        { hid: 'twitter:description', property: 'twitter:description', content: this.articleData.desc },
        { hid: 'twitter:image', property: 'twitter:image', content: this.articleData.img }
      ]
    }
  },
  data() {
    return {
      theme: getTheme(), // dark | light
      // 推薦文章
      recommendList: [],
      adList: [],
      categoryMap: [this.$t('hot_articles'), this.$t('beginner_guide'), this.$t('market_pulse'), this.$t('system_notification')]
    }
  },
  computed: {
    articleId() {
      return this.$route.params.articleId
    }
  },
  watch: {
    theme(val) {
      localStorage.setItem('fdb-theme', val)
    }
  },
  mounted() {
    this.getCommercial()
    this.getNewsRecommendNews()
  },
  methods: {
    // 推薦文章
    async getNewsRecommendNews() {
      try {
        const reqBody = { id: this.articleId }
        const res = await this.$api.news.getNewsRecommendNews(reqBody)
        this.recommendList = res.data
      } catch (error) {
        console.error(error)
      }
    },
    // 廣告位
    async getCommercial() {
      try {
        // 廣告位置(首頁 = 1,新聞 = 2,直播 = 3)
        const reqBody = { adPosition: 2 }
        const res = await this.$api.commercial.getCommercial(reqBody)
        this.adList = res
      } catch (error) {
        console.error(error)
      }
    },
    scrollTop() {
      window.scroll({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
