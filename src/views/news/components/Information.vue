<template>
  <div class="information">
    <div v-for="(item, index) in infoList" :key="index" class="info-card" @click="$emit('loadArticle')">
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
</template>

<script>
export default {
  name: 'Information',
  props: {
    infoList: {
      type: Array,
      default: () => [{}, {}, {}, {}, {}, {}]
    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4%;
  margin-bottom: 8%;
  .info-card {
    flex: 0 0 32%;
    margin-bottom: 26px;
    padding: 16px;
    background-color: #151923;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
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
    }
    &-date {
      font-size: 16px;
      line-height: 150%;
      color: #e5e5e5;
    }
  }
}
</style>
