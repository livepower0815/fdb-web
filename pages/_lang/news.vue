<template>
  <div class="news">
    <!--Banner開始-->
    <div class="title-banner">
      <div class="title-banner__content">
        <div class="banner-title">{{ $t('exclusive_news_center') }}</div>
        <div class="banner-info">{{ $t('news_stays_with_you') }}</div>
      </div>
    </div>
    <!--Banner結束-->

    <!--內容 開始-->
    <div class="layout-content">
      <!-- menu bar -->
      <div class="btn-tab">
        <a
          v-for="item in [
            { name: this.$t('hot_articles'), category: categoryNum.HOT },
            { name: this.$t('beginner_guide'), category: categoryNum.GUIDE },
            { name: this.$t('market_pulse'), category: categoryNum.MARKET },
            { name: this.$t('system_notification'), category: categoryNum.SYSTEM }
          ]"
          :key="item.category"
          class="btn-tab__item"
          :class="{ 'btn-tab__item--active': category === item.category }"
          @click.prevent="switchCategory(item.category)"
        >
          <span class="btn-tab__item__text">{{ item.name }}</span>
        </a>
      </div>

      <!-- 置頂文章 768 以上 -->
      <div v-if="topLoading" v-loading="true" class="article-top-loading" style="height: 560px"></div>
      <div v-else class="article-top">
        <div class="article-top__lf">
          <!-- 寬版左邊是置頂的第二及第三篇文章 -->
          <div v-for="article in topArticleRest" class="article-card" :key="article.id">
            <NuxtLink
              :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
              class="article-card__photo"
            >
              <img class="photo-img hover-image" :src="article.img" :alt="article.title" />
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
            </div>
          </div>
        </div>
        <div class="article-top__main">
          <!-- 寬版中間是置頂的第一篇文章 -->
          <div v-if="topArticleOne" class="article-card" :key="topArticleOne.id">
            <NuxtLink
              :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: topArticleOne.id } }"
              class="article-card__photo"
            >
              <img class="photo-img hover-image" :src="topArticleOne.img" :alt="topArticleOne.title" />
            </NuxtLink>
            <div class="article-card__content">
              <div class="card-tag">
                <NuxtLink
                  v-for="tag in topArticleOne.tags"
                  :key="tag.id"
                  :to="{ name: 'lang-tag-info-tagName', params: { lang: $route.params.lang, tagName: tag.name } }"
                  class="card-tag__item"
                >
                  <span class="item-text">＃{{ tag.name }}</span>
                </NuxtLink>
              </div>
              <NuxtLink
                :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: topArticleOne.id } }"
                class="card-title"
              >
                <h3 class="card-title__text hover-primary">{{ topArticleOne.title }}</h3>
              </NuxtLink>
              <div class="card-date">
                <span class="card-date__text">{{ $formatDate(topArticleOne.date) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="article-top__rt">
          <!-- 最新文章 3 篇 -->
          <div v-for="article in lastList" class="article-card" :key="article.id">
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
              <div class="card-dec">
                <span class="card-dec__text">{{ article.description }}</span>
              </div>
              <div class="card-date">
                <span class="card-date__text">{{ $formatDate(article.date) }}</span>
              </div>
            </div>
          </div>
          <!-- 最新文章 3 篇 end -->
        </div>
      </div>

      <!-- 文章列表 -->
      <div v-if="listLoading" v-loading="true" class="article-list-loading" style="height: 500px"></div>
      <div v-else class="article">
        <div class="article-main">
          <div class="article-list">
            <div v-for="article in articleList" class="article-card -row" :key="article.id">
              <NuxtLink
                :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
                class="article-card__photo"
              >
                <img class="photo-img hover-image" :src="article.img" :alt="article.title" />
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
                <div class="card-dec">
                  <span class="card-dec__text">{{ article.description }}</span>
                </div>
                <div class="card-date">
                  <span class="card-date__text">{{ $formatDate(article.date) }}</span>
                </div>
              </div>
            </div>
          </div>
          <!--Pages-->
          <CommonPager :get-data="getArticleList" :pager="pager" style="margin-top: 32px" />
        </div>
        <!-- 文章列表 end -->

        <div class="article-other">
          <div class="n-recommend">
            <!-- 挖掘更多你想看的文章 start -->
            <div class="n-recommend__title">
              <h3 class="title-text">{{ $t('explore_more_articles') }}</h3>
            </div>
            <div class="tag-list">
              <NuxtLink
                v-for="tag in moreHashTags"
                :key="tag.id"
                :to="{ name: 'lang-tag-info-tagName', params: { lang: $route.params.lang, tagName: tag.name } }"
                class="tag-list__item"
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
const categoryNum = {
  HOT: '0', // 熱門文章
  GUIDE: '1', // 新手指引
  MARKET: '2', // 市場脈動
  SYSTEM: '3' // 系統公告
}

export default {
  name: 'News',
  middleware({ query, redirect, params }) {
    if (!query.category) {
      redirect({ name: 'lang-news', params: { lang: params.lang }, query: { category: categoryNum.HOT } })
    }
  },
  data() {
    return {
      categoryNum,
      // 置頂文章
      topList: [],
      topLoading: true,
      // 最新文章列表
      lastList: [],
      // 文章列表
      articleList: [],
      listLoading: true,
      // 更多文章tags
      moreHashTags: [],
      // 廣告位
      adList: [],
      pager: {
        pageIndex: 1,
        pageSize: 12,
        totalCount: 0
      }
    }
  },
  computed: {
    category() {
      return this.$route.query.category
    },
    // 置頂第一篇
    topArticleOne() {
      return this.topList[0] ? this.topList[0] : {}
    },
    // 置頂二三篇
    topArticleRest() {
      return this.topList.slice(1, 3)
    }
  },
  watch: {
    $route() {
      this.getTopList()
      this.getLastList()
      this.getArticleList(true)
    }
  },
  mounted() {
    this.getTopList()
    this.getLastList()
    this.getArticleList(true)
    this.getHashTags()
    this.getCommercial()
  },
  methods: {
    //  拿取置頂文章
    async getTopList() {
      try {
        this.topLoading = true
        const params = { category: Number(this.category) }
        const res = await this.$api.news.getTopNews(params)
        this.topList = res.data
      } catch (error) {
        return Promise.reject(error)
      } finally {
        this.topLoading = false
      }
    },
    // 拿取最新文章
    async getLastList() {
      try {
        const params = { category: Number(this.category) }
        const res = await this.$api.news.getLastNews(params)
        this.lastList = res.data
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 拿取文章列表
    async getArticleList(reset = false) {
      try {
        this.listLoading = true
        if (reset) {
          this.pager.pageIndex = 1
        }
        const reqBody = {
          pageIndex: this.pager.pageIndex,
          pageSize: this.pager.pageSize,
          category: Number(this.category),
          tag: null,
          keyWord: ''
        }
        const res = await this.$api.news.getNews(reqBody)
        this.articleList = res.data.data
        this.pager.pageIndex = res.data.pageIndex
        this.pager.totalCount = res.data.totalCount
      } catch (error) {
        return Promise.reject(error)
      } finally {
        this.listLoading = false
      }
    },
    switchCategory(index) {
      this.$router.push({ query: { category: index } })
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
        const reqBody = { adPosition: 2 }
        const res = await this.$api.commercial.getCommercial(reqBody)
        this.adList = res
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
