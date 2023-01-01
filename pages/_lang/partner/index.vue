<template>
  <div class="n-partner">
    <!-- banner -->
    <div class="img-banner">
      <div class="img-banner__content">
        <div class="banner__lf">
          <div class="banner-title">
            <h1 class="banner-title__text">FunDoBit</h1>
            <h1 class="banner-title__text">{{ $t('first_rebate_platform') }}</h1>
          </div>
          <div class="banner-dec">
            <p class="banner-dec__text">{{ $t('no_matter_where_in_market') }}</p>
          </div>
          <NuxtLink :to="{ name: 'lang-register', params: { lang: $route.params.lang } }" class="banner-btn">
            <span class="banner-btn__text">{{ $t('go_to_register') }}</span>
            <img src="@/assets/img/home/index-banner-icon@2x.png" alt="" class="banner-btn__icon" />
          </NuxtLink>
        </div>
        <div class="banner__rt">
          <img src="@/assets/img/partner/partner-banner-n.png" alt="" class="banner-img" />
        </div>
      </div>
    </div>
    <!-- 交易所 -->
    <div class="layout-content">
      <div class="exchange-tool">
        <!-- 查找框 -->
        <div class="n-search">
          <img src="@/assets/img/common/vector.png" alt="" class="n-search__icon" />
          <input v-model="searchKey" type="text" :placeholder="$t('enter_keywords')" class="n-search__input" />
        </div>
        <!-- 查找框 End -->

        <!-- 排序 -->
        <a class="sort-btn" :class="{ 'sort-btn--decrease': this.isDesc, 'sort-btn--increment': !this.isDesc }" @click.prevent="switchSort">
          <p class="sort-btn__text">Sort by</p>
          <p class="sort-btn__text">{{ $t('credible_rate') }}</p>
          <div class="sort-btn__icon"></div>
        </a>
        <!-- 排序 End -->
      </div>

      <!-- 交易所清單 -->
      <div class="partner-exchange">
        <!-- loading -->
        <div v-if="isLoading" v-loading="true" style="height: 400px"></div>
        <div v-else class="exchange-card-group">
          <div v-for="store in filterStores" class="exchange-card" :key="store.id">
            <div class="exchange-card__content">
              <div class="exchange-brand">
                <img :src="store.icon" alt="" class="exchange-brand__icon" />
                <p class="exchange-brand__id">{{ store.name }}</p>
              </div>
              <div class="exchange-since">
                <p class="exchange-since__text">{{ $t('established_at', { date: store.buildDate }) }}</p>
              </div>
              <div class="exchange-dec">
                <p class="exchange-dec__text">{{ store.desc }}</p>
              </div>
              <NuxtLink
                :to="{ name: 'lang-partner-partnerId', params: { lang: $route.params.lang, partnerId: String(store.id) } }"
                class="more-btn"
              >
                <span class="more-btn__text">{{ $t('understand_more') }}</span>
              </NuxtLink>
              <div class="exchange-score">
                <div class="exchange-score__item">
                  <div class="item-title">
                    <p class="item-title__text">{{ store.featureTitle }}</p>
                  </div>
                  <div class="item-result">
                    <small class="item-result__symbol">#</small>
                    <span class="item-result__rank">{{ store.featureScore }}</span>
                  </div>
                </div>
                <div class="exchange-score__item">
                  <div class="item-title">
                    <p class="item-title__text">{{ $t('interface_rate') }}</p>
                    <el-tooltip effect="dark" :content="$t('ratings_experience_click_process')" placement="top">
                      <a href="javascript:void(0);" class="item-title__btn"></a>
                    </el-tooltip>
                  </div>
                  <CommonStarScore :score="store.interfaceScore" />
                </div>
                <div class="exchange-score__item">
                  <div class="item-title">
                    <p class="item-title__text">{{ $t('credible_rate') }}</p>
                    <el-tooltip effect="dark" :content="$t('score_transaction_volume')" placement="top">
                      <a href="javascript:void(0);" class="item-title__btn"></a>
                    </el-tooltip>
                  </div>
                  <CommonStarScore :score="store.creditScore" />
                </div>
              </div>
              <div class="exchange-btn-group">
                <div class="exchange-btn">
                  <a :href="store.techUrl" target="_blank" class="exchange-btn__btn">
                    <span class="btn-text">{{ $t('account_opening_teaching') }}</span>
                  </a>
                </div>
                <div class="exchange-btn">
                  <a :href="store.registerUrl" target="_blank" class="exchange-btn__btn -primary">
                    <span class="btn-text">{{ $t('sign_now') }}</span>
                  </a>
                  <span class="exchange-btn__dec">{{ store.registerText }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 交易所清單 End -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partner',
  data() {
    return {
      isLoading: true,
      storeList: [],
      isDesc: true,
      searchKey: ''
    }
  },
  computed: {
    filterStores() {
      return this.storeList.filter(item => item.name.toUpperCase().includes(this.searchKey.toUpperCase()))
    }
  },
  mounted() {
    this.getStores()
  },
  methods: {
    async getStores() {
      try {
        this.isLoading = true
        const res = await this.$api.store.getStores()
        this.storeList = res
        this.sortStores()
      } catch (error) {
        return Promise.reject(error)
      } finally {
        this.isLoading = false
      }
    },
    sortStores() {
      // asc 小大 a - b
      // desc 大小 b - a
      if (this.isDesc) this.storeList.sort((a, b) => b.creditScore - a.creditScore)
      else this.storeList.sort((a, b) => a.creditScore - b.creditScore)
    },
    switchSort() {
      this.isDesc = !this.isDesc
      this.sortStores()
    }
  }
}
</script>
