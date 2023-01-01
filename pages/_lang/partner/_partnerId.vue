<template>
  <div class="n-partner">
    <!-- banner -->
    <div class="bg-banner">
      <div class="bg-banner__content">
        <div class="bg-banner__lf">
          <div class="banner-title">
            <img :src="storeData.icon" alt="store-icon" class="banner-title__icon" />
            <h1 class="banner-title__text">{{ storeData.name }}</h1>
          </div>
          <div class="banner-dec">
            <p class="banner-dec__text">{{ storeData.desc }}</p>
          </div>
          <div class="rebate">
            <div class="rebate__item">
              <h3 class="item-result">{{ storeData.rebate }}%</h3>
              <p class="item-text">{{ $t('fundobit_rebate') }}</p>
            </div>
            <div class="rebate__item">
              <h3 class="item-result">{{ storeData.friendRebate }}%</h3>
              <p class="item-text">{{ $t('Invite_friends_rebate') }}</p>
            </div>
          </div>
        </div>
        <div class="bg-banner__rt">
          <div class="brand-info">
            <div class="brand-info__item">
              <div class="item-icon">
                <img src="@/assets/img/common/ic24-company@2x.png" alt="" class="item-icon__img" />
              </div>
              <div class="item-info">
                <div class="item-info__title">
                  <p class="title-text">{{ $t('established_date') }}</p>
                </div>
                <div class="item-info__text">
                  <span class="text-txt">{{ storeData.buildDate }}</span>
                </div>
              </div>
            </div>
            <div class="brand-info__item">
              <div class="item-icon">
                <img src="@/assets/img/common/ic24-verified@2x.png" alt="" class="item-icon__img" />
              </div>
              <div class="item-info">
                <div class="item-info__title">
                  <p class="title-text">{{ $t('interface_rate') }}</p>
                  <el-tooltip effect="dark" :content="$t('ratings_experience_click_process')" placement="top">
                    <a href="javascript:void(0);" class="title-btn"></a>
                  </el-tooltip>
                </div>
                <CommonStarScore :score="storeData.interfaceScore" />
              </div>
            </div>
            <div class="brand-info__item">
              <div class="item-icon">
                <img src="@/assets/img/common/ic24-trophy@2x.png" alt="" class="item-icon__img" />
              </div>
              <div class="item-info">
                <div class="item-info__title">
                  <p class="title-text">{{ storeData.featureTitle }}</p>
                </div>
                <div class="item-info__text">
                  <small class="text-symbol">#</small>
                  <span class="text-txt">{{ storeData.featureScore }}</span>
                </div>
              </div>
            </div>
            <div class="brand-info__item">
              <div class="item-icon">
                <img src="@/assets/img/common/ic24-desktop@2x.png" alt="" class="item-icon__img" />
              </div>
              <div class="item-info">
                <div class="item-info__title">
                  <p class="title-text">{{ $t('credible_rate') }}</p>
                  <el-tooltip effect="dark" :content="$t('score_transaction_volume')" placement="top">
                    <a href="javascript:void(0);" class="title-btn"></a>
                  </el-tooltip>
                </div>
                <CommonStarScore :score="storeData.creditScore" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-banner__footer">
          <a :href="storeData.registerUrl" target="_blank" class="footer-btn">
            <span class="footer-btn__text">{{ $t('apply_account_open') }}</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 交易所 -->
    <div class="layout-content">
      <div class="partner-inner">
        <!-- 優勢列表 -->
        <div class="partner-inner-main">
          <div class="partner-intro">
            <div v-for="(adv, index) in storeData.advantages" :key="index" class="partner-intro__item">
              <div class="item-icon">
                <img :src="adv.img" alt="advantage-image" class="item-icon__img" />
              </div>
              <div class="item-info">
                <div class="item-info__title">
                  <p class="title-text">{{ adv.title }}</p>
                </div>
                <div class="item-info__dec">
                  <p class="dec-text">{{ adv.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 優勢列表 End -->

        <!-- 文章列表 -->
        <div class="partner-inner-other">
          <div class="article-list">
            <NuxtLink
              v-for="article in storeData.articles"
              :key="article.id"
              :to="{ name: 'lang-article-articleId', params: { lang: $route.params.lang, articleId: article.id } }"
              class="article-card -row"
            >
              <div class="article-card__photo">
                <img class="photo-img" :src="article.img" :alt="article.title" />
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
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- 文章列表 End -->
      </div>

      <div v-if="marketChartData.length || currencyChartData.length" class="deal-chart">
        <div class="deal-chart__title">
          <h2 class="title-text">{{ $t('volume_distribution') }}</h2>
        </div>
        <div class="deal-chart__content">
          <div v-if="marketChartData.length" class="chart-item">
            <div class="chart-item__title">{{ $t('volume_based_market_match') }}</div>
            <ChartsCustomChart :options="marketChartOptions" :chart-style="{ width: '100%', height: '100%' }" />
          </div>
          <div v-if="currencyChartData.length" class="chart-item">
            <div class="chart-item__title">{{ $t('volume_by_currency') }}</div>
            <ChartsCustomChart :options="currencyChartOptions" :chart-style="{ width: '100%', height: '100%' }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const color = [
  '#37A2DA',
  '#FFDB5C',
  '#32C5E9',
  '#67E0E3',
  '#9FE6B8',
  '#ff9f7f',
  '#fb7293',
  '#e7bcf3',
  '#9d96f5',
  '#8378EA',
  '#96BFFF',
  '#7FAF91',
  '#DE9326',
  '#CFB2A9',
  '#7A7B7F',
  '#5C6F7B',
  '#D7E0E8',
  '#20A0A1'
]

export default {
  name: 'PartnerInfo',
  async asyncData({ params, $api, store }) {
    let storeData = {}
    if (params.partnerId) {
      const reqBody = { id: params.partnerId }
      try {
        store.commit('app/SET_G_LOADING', true)
        const res = await $api.store.getStoreDetail(reqBody)
        storeData = res
      } catch (error) {
        console.error(error)
      } finally {
        store.commit('app/SET_G_LOADING', false)
      }
    }
    return { storeData }
  },
  data() {
    return {
      marketChartOptions: {
        color,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#ffffff'
            }
          }
        ]
      },
      currencyChartOptions: {
        color,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#ffffff'
            }
          }
        ]
      }
    }
  },
  computed: {
    partnerId() {
      return this.$route.params.partnerId
    },
    marketChartData() {
      return this.marketChartOptions.series[0].data
    },
    currencyChartData() {
      return this.currencyChartOptions.series[0].data
    }
  },
  mounted() {
    this.setChartData()
  },
  methods: {
    setChartData() {
      this.marketChartOptions.series[0].data = this.storeData.marketTrading.map(item => ({
        name: item.name,
        value: item.num
      }))
      this.currencyChartOptions.series[0].data = this.storeData.currencyTrading.map(item => ({
        name: item.name,
        value: item.num
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.deal-chart__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 30px;

  .chart-item {
    height: 470px;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: 100%;
    }

    .chart-item__title {
      padding-bottom: 20px;
      font-size: 22px;
    }
  }
}
</style>
