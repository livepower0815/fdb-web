<template>
  <div class="article">
    <div class="article-main">
      <div class="main-title">{{ articleData.title }}</div>
      <div class="main-date">{{ articleData.createdate }} by {{ articleData.auther }}</div>
      <div class="main-content" v-html="articleData.content">
        <!-- <img src="@/assets/img/news/news-chat-main-pic.jpg" alt="img" />
        <p>
          从今天起至2021年3月31日，您和每位足推荐条件的好友将分别得10美元等的BTC体金。
          新用戶使用您的推荐注册，成功充且交易至少一次BTCUSD反向永合，即“推荐成功”。
        </p>
        <h3>推荐越多，獎励越多</h3>
        <p>推荐好友无上限，推荐励浩瀚无！您可以推荐无数名好友。除了推荐獎励以外，有更多交易獎励等您来領取！</p>
        <h3>交易量更多，獎励翻倍</h3>
        <p>好友的永續合約累積交易量每增加100K，即可解所 $10 USDT 体驗金。通過API进行的交易量并不符合獎勵励条件。</p>
        <h3>活動适用于所有 Bybit用戶，使用辦法</h3>
        <p>
          步驟1：确保您已登入Bybit 账户<br />
          步驟2：点集Bybit推荐好友页面<br />
          步驟3：将您的推荐碼共享給好友<br />
          每成功推荐一位好友，您和好友各得$10，最高可或得 $600奖励！
        </p> -->
      </div>
    </div>
    <div class="article-other">
      <div class="other-title">其他相關文章</div>
      <div v-for="item in newsList" :key="item.id" class="other-item">
        <div class="item">
          <div :class="`item-tag info-bg-${articleMap[item.tag].key}`">{{ articleMap[item.tag].name }}</div>
          <div class="item-title">{{ item.title }}</div>
          <div class="item-date">{{ item.createdate }}</div>
        </div>
        <img class="img" :src="item.img" alt="pic" />
      </div>
    </div>
  </div>
</template>

<script>
import { getNews, getNewsDetail } from '@/apis/news.js'
import { articleMap } from '@/utils/map.js'

export default {
  name: 'Article',
  props: {
    articleId: [Number, String]
  },
  data() {
    return {
      articleData: {},
      newsList: [],
      articleMap
    }
  },
  mounted() {
    this.getNewsDetail()
  },
  methods: {
    async getNewsDetail() {
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
    },
    async getNews(tagKey) {
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
    .main-content {
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
  &-other {
    width: 416px;
    height: 100%;
    background: #151923;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 1370px) {
      width: 310px;
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
      .item {
        flex: 1;
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
        }
        .item-date {
          font-size: 14px;
          line-height: 100%;
          color: #e5e5e5;
        }
      }
      .img {
        width: 112px;
        height: 100%;
      }
    }
  }
}
</style>
