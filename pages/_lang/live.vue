<template>
  <div class="live">
    <!--live開始-->
    <div class="live-centre">
      <div class="container">
        <!-- 直播及播放清單 -->
        <div class="live-centre__lf" :class="{ '-full': !isLive, '-is-play-list': !isLive }">
          <!-- 直播 -->
          <iframe
            v-if="isLive"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${streamData.ytkey}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <!-- 播放清單 -->
          <iframe
            v-else
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/videoseries?list=${streamData.liveListUrl}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <!-- 直播及播放清單 End -->

        <!-- 聊天室及師資介紹 非直播時不顯示 -->
        <div v-show="isLive" class="live-centre__rt">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane :label="$t('chat_room')" name="first">
                <div class="live-content">
                  <iframe
                    width="100%"
                    height="100%"
                    :src="`https://www.youtube.com/live_chat?v=${streamData.ytkey}&embed_domain=${hostname}`"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane>
              <el-tab-pane :label="$t('teacher_presentation')" name="second">
                <div class="live-content">
                  <div class="live-content__title">{{ $t('teacher_presentation') }}</div>
                  <div class="live-content__user">
                    <div class="user-photo">
                      <img :src="streamData.streamerImg" alt="streamer image" class="user-photo__img" />
                    </div>
                    <div class="user-info">
                      <div class="user-info__id">
                        <span class="id-text">{{ streamData.streamer }}</span>
                      </div>
                      <div class="user-info__dec">
                        <span class="dec-text">{{ streamData.experience }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="live-content__dec">
                    <p class="dec-text">{{ $t('teach_point') }}：</p>
                    <p class="dec-text">{{ streamData.direction }}</p>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </div>
        <!-- 聊天室及師資介紹 End -->
      </div>
    </div>
    <!--live結束-->

    <!-- 文章列表 開始 -->
    <div class="article-slide">
      <div class="container">
        <div class="article-list">
          <NuxtLink
            v-for="article in recommends"
            :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
            class="article-card -row"
            :key="article.id"
          >
            <div class="article-card__photo">
              <div v-if="article.img === 'loading'" v-loading="true" style="display: inline-block; width: 142px; height: 142px"></div>
              <img v-else class="photo-img" :src="article.img" :alt="article.title" />
            </div>
            <div class="article-card__content">
              <div class="card-tag">
                <div v-for="tag in article.tags" :key="tag.id" class="card-tag__item">
                  <span class="item-text">＃{{ tag.name }}</span>
                </div>
              </div>
              <div class="card-title">
                <h3 class="card-title__text">{{ article.title }}</h3>
              </div>
              <div class="card-date">
                <span class="card-date__text">{{ $formatDate(article.date) }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- 文章列表 結束 -->

    <!-- 廣告 -->
    <div class="ad-list">
      <div class="container">
        <a v-for="(ad, index) in adList" class="ad-list__item" :key="index" :href="ad.url" target="_blank">
          <!-- 1 2 3 上中下 titlePosition -->
          <div class="item-title" :class="{ '-top': ad.titlePosition === 1, '-bottom': ad.titlePosition === 3 }">
            <h3 class="item-title__text" :style="{ color: ad.titleColor }">{{ ad.title }}</h3>
          </div>
          <img class="item-img" :src="ad.img" :alt="ad.imgAlt" />
        </a>
      </div>
    </div>
    <!-- 廣告 End -->
  </div>
</template>

<script>
import { initSlider } from '@/utils/slider'

export default {
  data() {
    return {
      activeName: 'first',
      hostname: '',
      streamData: {
        // 有兩種狀態 0 非直播, 1 直播中
        live: 0
      },
      pollingTimer: null,
      recommends: [
        { title: 'FDB Title', tags: { name: 'FDBTAG', id: '1' }, date: '2022-09-20T22:00:19.94', img: 'loading' },
        { title: 'FDB Title', tags: { name: 'FDBTAG', id: '1' }, date: '2022-09-20T22:00:19.94', img: 'loading' },
        { title: 'FDB Title', tags: { name: 'FDBTAG', id: '1' }, date: '2022-09-20T22:00:19.94', img: 'loading' },
        { title: 'FDB Title', tags: { name: 'FDBTAG', id: '1' }, date: '2022-09-20T22:00:19.94', img: 'loading' }
      ],
      adList: [],
      removeSliderEvent: () => {}
    }
  },
  computed: {
    isLive() {
      // 0 非直播, 1 直播中
      return this.streamData.live === 1
    }
  },
  mounted() {
    this.hostname = window.location.hostname
    this.getStreamSetting()
    this.getRecommendNews()
    this.getCommercial()
    this.startPolling()

    this.removeSliderEvent = initSlider('.article-list')
  },
  destroyed() {
    if (this.pollingTimer) {
      window.clearInterval(this.pollingTimer)
    }
    this.removeSliderEvent()
  },
  methods: {
    handleClick() {
      // do nothing
    },
    // 拿取直播資訊
    async getStreamSetting() {
      try {
        const res = await this.$api.stream.getStreamSetting()
        this.streamData = res.data
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 推薦文章
    async getRecommendNews() {
      try {
        const res = await this.$api.stream.getStreamNews()
        this.recommends = res
      } catch (error) {
        console.error(error)
      }
    },
    // 廣告位
    async getCommercial() {
      try {
        // 廣告位置(首頁 = 1,新聞 = 2,直播 = 3)
        const reqBody = { adPosition: 3 }
        const res = await this.$api.commercial.getCommercial(reqBody)
        this.adList = res
      } catch (error) {
        console.error(error)
      }
    },
    startPolling() {
      // 輪詢更新直播狀態 1 分鐘
      this.pollingTimer = window.setInterval(this.getStreamSetting, 1 * 60 * 1000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
