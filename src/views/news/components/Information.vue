<template>
  <div v-loading="isLoading" element-loading-background="#050608" class="information">
    <template v-if="infoList.length > 0">
      <router-link
        :to="{ query: { ...$route.query, mode: 'article', articleId: item.id } }"
        v-for="(item, index) in infoList"
        :key="index"
        class="info-card"
      >
        <div class="info-card-img">
          <img :src="item.img" alt="news" />
        </div>
        <div class="info-card-tag">
          <div :class="`tag info-bg-${articleMap[item.tag].key}`">{{ articleMap[item.tag].name }}</div>
        </div>
        <div class="info-card-title">
          {{ item.title }}
        </div>
        <div class="info-card-content">{{ item.desc }}</div>
        <div class="info-card-date">{{ item.createdate }}</div>
      </router-link>
    </template>
    <div v-else-if="!isLoading" class="info-empty">
      <img style="width: 100px;" src="@/assets/img/common/empty.png" alt="empty" />
      <div>無相關文章</div>
    </div>
  </div>
</template>

<script>
import { articleMap } from '@/utils/map.js'

export default {
  name: 'Information',
  props: {
    infoList: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      articleMap
    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 2%;
  min-height: 400px;
  .info-card {
    flex: 0 0 31%;
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 26px;
    padding: 16px;
    background-color: #151923;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    @media screen and (max-width: 1370px) {
      padding: 14px;
    }
    @media screen and (max-width: 960px) {
      flex: 0 0 48%;
    }
    @media screen and (max-width: 700px) {
      flex: 0 0 100%;
      margin-left: 0;
      margin-right: 0;
    }
    @media screen and (max-width: 500px) {
      padding: 10px;
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
      @media screen and (max-width: 500px) {
        font-size: 18px;
        line-height: 28px;
      }
    }
    &-content {
      font-size: 16px;
      line-height: 150%;
      color: #e5e5e5;
      margin-bottom: 8px;
      display: none;
      @media screen and (max-width: 700px) {
        display: block;
      }
      @media screen and (max-width: 500px) {
        font-size: 14px;
      }
    }
    &-date {
      font-size: 16px;
      line-height: 150%;
      color: #e5e5e5;
    }
  }
  .info-empty {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e5e5e5;
  }
}
</style>
