<template>
  <div class="all-info">
    <div class="info-main">
      <div class="img">
        <img src="@/assets/img/news/news-announced-pic.jpg" alt="announced" />
      </div>
      <div class="info-tag">
        <div class="info-tag-inside info-bg-bulletin">公告</div>
      </div>
      <div class="info-title">
        How to make a website look more attractive with illustrations.
      </div>
      <div class="info-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
      <div class="info-date">2020.03.01</div>
    </div>
    <div class="info-list">
      <div
        v-for="item in [
          { name: '論壇', class: 'forum' },
          { name: '公告', class: 'bulletin' },
          { name: '活動', class: 'activity' }
        ]"
        :key="item.class"
        class="list-item"
      >
        <div class="list-main">
          <div :class="`list-tag info-bg-${item.class}`">{{ item.name }}</div>
          <div class="list-title">How to make a website look more attractive with illustrations.</div>
          <div class="list-date">2020.03.01</div>
        </div>
        <div class="list-img">
          <img src="@/assets/img/news/news-chat-pic.jpg" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllInfo'
}
</script>

<style lang="scss" scoped>
.all-info {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px #ffffff solid;
  .info-main {
    width: 36%;
    .img {
      width: auto;
    }
    .info-tag {
      display: flex;
      &-inside {
        width: 100px;
        font-size: 14px;
        line-height: 22px;
        border-radius: 12px;
        text-align: center;
        margin: 12px 0 16px 0;
      }
    }
    .info-title {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      text-align: justify;
      margin-bottom: 8px;
    }
    .info-content {
      font-size: 16px;
      line-height: 150%;
      color: #e5e5e5;
      margin-bottom: 10px;
    }
    .info-date {
      font-size: 16px;
      line-height: 150%;
      color: #e5e5e5;
    }
  }
  .info-list {
    flex: 1;
    margin-left: 30px;
    .list-item {
      display: flex;
      margin-bottom: 36px;
      .list-main {
        flex: 1;
        margin-right: 40px;
        .list-tag {
          width: 100px;
          font-size: 14px;
          line-height: 22px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 12px;
        }
        .list-title {
          font-weight: bold;
          font-size: 24px;
          line-height: 32px;
          text-align: justify;
          margin-bottom: 4px;
        }
        .list-date {
          font-size: 16px;
          line-height: 150%;
          color: #e5e5e5;
        }
      }
      .list-img {
        width: 186px;
      }
    }
  }
}
</style>
