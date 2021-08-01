<template>
  <div class="info">
    <div class="info-title">最新活動與消息</div>
    <div class="info-list">
      <div v-for="(item, index) in infoList" :key="index" class="info-card">
        <div class="info-card-img">
          <img src="@/assets/img/news/news-pic.jpg" alt="news" />
        </div>
        <div class="info-card-tag">
          <div class="tag info-bg-activity">活動</div>
        </div>
        <div class="info-card-title">
          How to make a website look more attractive with illustrations.
        </div>
        <div class="info-card-date">2020.03.01</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    infoList: {
      type: Array,
      default: () => [{}, {}, {}]
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
