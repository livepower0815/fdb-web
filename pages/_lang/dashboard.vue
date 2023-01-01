<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <!--Dashboar 開始-->
      <DashboardHeader />
      <!--Dashboar 結束-->

      <!--佣金明細 開始-->
      <!-- 標題 -->
      <div class="detail-title">
        <span class="title">{{ $t('commission_detail') }}</span>
        <NuxtLink :to="{ name: 'lang-take-cash', params: { lang: $route.params.lang } }" class="withdraw-btn fdb-btn-primary-hover">
          {{ $t('withdrawal_apply') }}
        </NuxtLink>
      </div>

      <!-- menu -->
      <div class="detail-menu">
        <div
          class="menu"
          :class="{ active: refundShow === 'CommissionTransaction' }"
          @click="refundChange('CommissionTransaction', 'left')"
        >
          {{ $t('your_commission_change_record') }}
        </div>
        <div class="menu" :class="{ active: refundShow === 'PersonalFeedback' }" @click="refundChange('PersonalFeedback', 'left')">
          {{ $t('personal_rebate_information') }}
        </div>
        <div class="menu" :class="{ active: refundShow === 'Recommender' }" @click="refundChange('Recommender', 'right')">
          {{ $t('referrer_rebate_information') }}
        </div>
        <div class="menu" :class="{ active: refundShow === 'Withdrawal' }" @click="refundChange('Withdrawal', 'right')">
          {{ $t('withdrawal_apply_record') }}
        </div>
      </div>

      <!-- filter & table -->
      <div v-loading="tableLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="detail-list">
        <!--佣金異動紀錄 開始-->
        <DashboardCommissionTransaction
          v-if="refundShow === 'CommissionTransaction'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--佣金異動紀錄 結束-->

        <!--個人反佣 開始-->
        <DashboardPersonalFeedback
          v-if="refundShow === 'PersonalFeedback'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--個人反佣 結束-->

        <!--推薦人反佣 開始-->
        <DashboardRecommender
          v-if="refundShow === 'Recommender'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--推薦人反佣 結束-->

        <!--出金 開始-->
        <DashboardWithdrawal
          v-if="refundShow === 'Withdrawal'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--出金 結束-->
      </div>
    </div>
  </div>
  <!--佣金明細 結束-->
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Dashboard',
  data() {
    return {
      refundShow: 'CommissionTransaction',
      tableLoading: false,
      refundFilter: {
        currencyType: 0,
        dateRange: [dayjs().subtract(60, 'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')]
      },
      menuDom: null
    }
  },
  mounted() {
    // 儀表板交易所綁定確認
    this.checkBindStores()
    this.menuDom = document.querySelector('.detail-menu')
  },
  methods: {
    // 沒有綁定交易所 不要讓她到 dashboard 讓它到 綁定交易所頁面並提示 (在提供綁定交易所提示文案)
    async checkBindStores() {
      this.$store.commit('app/SET_G_LOADING', true)
      try {
        const stores = await this.$store.dispatch('user/getBindStores')
        // 沒有綁定清單或是清單內沒有驗證完成的交易所
        if (stores.length === 0 || !stores.find(item => item.status === 1)) {
          this.$message({
            type: 'warning',
            duration: 10 * 1000,
            message: this.$t('exchange_not_yet_bound')
          })
          this.$router.push({ name: 'lang-personal', params: { lang: this.$route.params.lang } })
        }
      } catch (error) {
        console.error(error)
        this.$router.push({ name: 'lang-personal', params: { lang: this.$route.params.lang } })
      } finally {
        this.$store.commit('app/SET_G_LOADING', false)
      }
    },
    refundChange(type, direction) {
      this.refundShow = type
      this.scorllMenu(direction)
    },
    scorllMenu(direction) {
      switch (direction) {
        case 'left':
          this.menuDom.scrollLeft = 0
          break
        case 'right':
          this.menuDom.scrollLeft = 1000
          break
      }
    }
  }
}
</script>
