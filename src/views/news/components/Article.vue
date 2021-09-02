<template>
  <div class="article">
    <div class="article-main" v-loading="mainLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
      <div class="main-title">{{ articleData.title }}</div>
      <div class="main-date">{{ articleData.createdate }} by {{ articleData.auther }}</div>
      <div class="main-content" v-html="articleData.content"></div>
    </div>
    <div class="article-other" v-loading="otherLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
      <div class="other-title">其他相關文章</div>
      <template v-if="newsList.length > 0">
        <router-link
          :to="{ query: { ...$route.query, articleId: item.id } }"
          v-for="(item, index) in newsList"
          :key="index"
          class="other-item"
        >
          <div class="item">
            <div :class="`item-tag info-bg-${articleMap[item.tag] ? articleMap[item.tag].key : 'forum'}`">
              {{ articleMap[item.tag] ? articleMap[item.tag].name : '未定義' }}
            </div>
            <div class="item-title">{{ item.title }}{{ item.title }}{{ item.title }}{{ item.title }}</div>
            <div class="item-date">{{ item.createdate }}</div>
          </div>
          <div class="img" :style="`background-image: url('${item.img}')`"></div>
          <!-- <img class="img" :src="item.img" alt="pic" /> -->
        </router-link>
      </template>
      <div v-else class="other-empty">
        <img style="width: 100px;" src="@/assets/img/common/empty.png" alt="empty" />
        <div>無相關文章</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNews, getNewsDetail } from '@/apis/news.js'
import { articleMap } from '@/utils/map.js'

export default {
  name: 'Article',
  data() {
    return {
      articleData: {},
      newsList: [],
      articleMap,
      mainLoading: false,
      otherLoading: false
    }
  },
  computed: {
    articleId() {
      return Number(this.$route.query.articleId)
    }
  },
  watch: {
    articleId() {
      this.getNewsDetail()
    }
  },
  mounted() {
    this.getNewsDetail()
  },
  methods: {
    async getNewsDetail() {
      this.mainLoading = true
      try {
        const reqBody = {
          id: this.articleId
        }
        const res = await getNewsDetail(reqBody)
        this.articleData = res.data
        // 文章其他相關文章用相同tag的前10篇
        await this.getNews(res.data.tag)
      } catch (e) {
        console.error(e)
      }
      this.mainLoading = false
    },
    async getNews(tagKey) {
      this.otherLoading = true
      try {
        const reqData = {
          lang: 0,
          pageIndex: 1,
          // 文章其他相關文章用相同tag的前10篇
          pageSize: 10,
          tag: tagKey,
          keyWord: ''
        }
        const res = await getNews(reqData)
        this.newsList = res.data.data
      } catch (e) {
        console.error(e)
      }
      this.otherLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  margin-bottom: 4%;
  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
  &-main {
    flex: 1;
    margin-right: 2%;
    .main-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 53px;
      margin-bottom: 12px;
      @media screen and (max-width: 500px) {
        font-size: 28px;
        line-height: 41px;
      }
    }
    .main-date {
      font-size: 16px;
      line-height: 24px;
      color: #e5e5e5;
      margin-bottom: 24px;
      @media screen and (max-width: 500px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  &-other {
    width: 416px;
    height: 100%;
    background: #151923;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 1370px) {
      width: 310px;
      padding: 10px;
    }
    @media screen and (max-width: 960px) {
      display: none;
    }
    .other-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 160%;
      letter-spacing: 0.05em;
      margin-bottom: 30px;
    }
    .other-item {
      display: flex;
      margin-bottom: 24px;
      cursor: pointer;
      .item {
        flex: 1;
        margin-right: 8px;
        .item-tag {
          width: 100px;
          font-size: 14px;
          line-height: 22px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 6px;
        }
        .item-title {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 6px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .item-date {
          font-size: 14px;
          line-height: 100%;
          color: #e5e5e5;
        }
      }
      .img {
        width: 112px;
        height: 112px;
        background-position: center;
        background-size: cover;
        @media screen and (max-width: 1370px) {
          width: 97px;
        }
      }
    }
    .other-empty {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #e5e5e5;
    }
  }
}
</style>

<style lang="scss">
.article-main {
  .main-content {
    img {
      width: auto;
      max-width: 100%;
      height: auto;
    }
    h3 {
      margin-top: 36px;
      font-weight: bold;
      font-size: 22px;
      line-height: 160%;
      letter-spacing: 0.05em;
      @media screen and (max-width: 500px) {
        font-size: 20px;
      }
    }
    p {
      font-size: 20px;
      line-height: 160%;
      letter-spacing: 0.05em;
      color: #e5e5e5;
      @media screen and (max-width: 500px) {
        font-size: 18px;
      }
    }
  }
}
</style>
