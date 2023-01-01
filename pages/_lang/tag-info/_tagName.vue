<template>
  <div class="news">
    <!--內容 開始-->
    <div class="layout-content">
      <!-- 文章列表 -->
      <div class="article">
        <div class="article-title">
          <span class="article-title__text">#{{ tagName }}</span>
        </div>
        <div class="article-main">
          <div v-if="listLoading" v-loading="true" class="article-list-loading" style="height: 500px"></div>
          <div v-else class="article-list">
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
        <div class="article-other">
          <div class="n-recommend">
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
export default {
  name: 'TagInfo',
  data() {
    return {
      tagId: null,
      // 文章列表
      articleList: [],
      listLoading: true,
      // 更多文章tags
      moreHashTags: [],
      adList: [],
      pager: {
        pageIndex: 1,
        pageSize: 12,
        totalCount: 0
      }
    }
  },
  computed: {
    tagName() {
      return this.$route.params.tagName
    }
  },
  async mounted() {
    try {
      this.getHashTags()
      this.getCommercial()
      await this.getHashTagID()
      await this.getArticleList(true)
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    // 查詢TAG ID by tag name
    async getHashTagID() {
      try {
        const params = { tagName: this.tagName }
        const res = await this.$api.news.getHashTagID(params)
        this.tagId = res.data
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
          category: null,
          tag: Number(this.tagId),
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
