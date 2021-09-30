<template>
  <div class="info">
    <div class="info-title">{{ $t('latest_events_news') }}</div>
    <div class="info-list">
      <div v-for="(item, index) in infoList" :key="index" class="info-card" @click="goToNews(item.id)">
        <div class="info-card-img" :style="`background-image: url('${item.img}')`">
          <!-- <img :src="item.img" alt="news" /> -->
        </div>
        <div class="info-card-tag">
          <div :class="`tag info-bg-${articleMap[item.tag] ? articleMap[item.tag].key : 'forum'}`">
            {{ articleMap[item.tag] ? articleMap[item.tag].name : $t('undefined') }}
          </div>
        </div>
        <div class="info-card-title">{{ item.title }}</div>
        <div class="info-card-date">{{ item.createdate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTopNews } from '@/apis/news.js'
import { articleMap } from '@/utils/map.js'

export default {
  name: 'ArticleList',
  data() {
    return {
      articleMap,
      infoList: [{ tag: 0 }, { tag: 0 }, { tag: 0 }]
    }
  },
  mounted() {
    this.getTopNews()
  },
  methods: {
    async getTopNews() {
      try {
        const res = await getTopNews()
        // 只顯示三筆資料
        this.infoList = res.data.slice(0, 3)
      } catch (e) {
        console.error(e)
      }
    },
    goToNews(articleId) {
      this.$router.push({ name: 'News', query: { mode: 'article', tab: 'all', articleId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  max-width: 1440px;
  padding: 0 5%;
  margin: 0 auto 8vw auto;
  &-title {
    text-align: center;
    font-weight: bold;
    font-size: 48px;
    line-height: 64px;
    @media screen and (max-width: 1370px) {
      font-size: 36px;
    }
    @media screen and (max-width: 960px) {
      font-size: 28px;
    }
    @media screen and (max-width: 700px) {
      font-size: 36px;
    }
    @media screen and (max-width: 500px) {
      font-size: 22px;
      line-height: 100%;
    }
  }
  &-list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
    margin-top: 4%;
    margin-bottom: 8%;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 960px) {
      justify-content: flex-start;
    }
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    .info-card {
      flex: 0 0 32%;
      margin-bottom: 26px;
      padding: 16px;
      background-color: #151923;
      border-radius: 8px;
      box-sizing: border-box;
      cursor: pointer;
      @media screen and (max-width: 960px) {
        flex: 0 0 280px;
        margin-right: 20px;
      }
      @media screen and (max-width: 700px) {
        flex: 0 0 auto;
        margin-right: 0px;
      }
      &-img {
        width: auto;
        height: 240px;
        background-position: center;
        background-size: cover;
      }
      &-tag {
        .tag {
          width: 100px;
          font-size: 14px;
          line-height: 22px;
          border-radius: 12px;
          text-align: center;
          margin-top: 12px;
          margin-bottom: 12px;
        }
      }
      &-title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @media screen and (max-width: 1370px) {
          font-size: 22px;
        }
      }
      &-date {
        font-size: 16px;
        line-height: 150%;
        color: #e5e5e5;
      }
    }
  }
}
</style>
