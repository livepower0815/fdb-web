<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <!--Dashboar 開始-->
      <DashboardHeader />
      <!--Dashboar 結束-->

      <!--佣金明細 開始-->
      <!-- 標題 -->
      <div class="detail-title">
        <span class="title">佣金明細</span>
        <router-link to="/take-cash" class="withdraw-btn">出金申請</router-link>
      </div>

      <!-- menu -->
      <div class="detail-menu">
        <div class="menu" :class="{ active: refundShow === 'CommissionTransaction' }" @click="refundShow = 'CommissionTransaction'">
          您的佣金異動紀錄
        </div>
        <div class="menu" :class="{ active: refundShow === 'PersonalFeedback' }" @click="refundShow = 'PersonalFeedback'">個人返佣資訊</div>
        <div class="menu" :class="{ active: refundShow === 'Recommender' }" @click="refundShow = 'Recommender'">推薦人返佣資訊</div>
        <div class="menu" :class="{ active: refundShow === 'Withdrawal' }" @click="refundShow = 'Withdrawal'">出金申請紀錄</div>
      </div>

      <!-- filter & table -->
      <div v-loading="tableLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="detail-list">
        <!--佣金異動紀錄 開始-->
        <CommissionTransaction
          v-if="refundShow === 'CommissionTransaction'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--佣金異動紀錄 結束-->

        <!--個人反佣 開始-->
        <PersonalFeedback
          v-if="refundShow === 'PersonalFeedback'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--個人反佣 結束-->

        <!--推薦人反佣 開始-->
        <Recommender
          v-if="refundShow === 'Recommender'"
          :filterCurrencyType.sync="refundFilter.currencyType"
          :filterDateRange.sync="refundFilter.dateRange"
          :loading.sync="tableLoading"
        />
        <!--推薦人反佣 結束-->

        <!--出金 開始-->
        <Withdrawal
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
import DashboardHeader from './compoents/DashboardHeader'
import CommissionTransaction from './compoents/CommissionTransaction'
import PersonalFeedback from './compoents/PersonalFeedback'
import Withdrawal from './compoents/Withdrawal'
import Recommender from './compoents/Recommender'
import moment from 'moment'

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    CommissionTransaction,
    PersonalFeedback,
    Withdrawal,
    Recommender
  },
  data() {
    return {
      refundShow: 'CommissionTransaction',
      tableLoading: false,
      refundFilter: {
        currencyType: 0,
        dateRange: [
          moment()
            .subtract(60, 'days')
            .format('yyyy-MM-DD'),
          moment().format('yyyy-MM-DD')
        ]
        // dateRange: [
        //   moment()
        //     .subtract(7, 'days')
        //     .format('yyyy-MM-DD'),
        //   moment().format('yyyy-MM-DD')
        // ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  &-container {
    margin: 0 auto;
    max-width: 1360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1500px) {
      margin: 0 3%;
    }
    .detail-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 22px;
      .title {
        font-weight: bold;
        font-size: 30px;
      }
      .withdraw-btn {
        font-size: 14px;
        padding: 9px 30px;
        height: 20px;
        border-radius: 6px;
        color: #ffffff;
        background-image: linear-gradient(180deg, #62ffff 9.47%, #3ea9cc 100%);
        cursor: pointer;
      }
    }
    .detail-menu {
      display: flex;
      width: 100%;
      .menu {
        font-size: 16px;
        color: #e5e5e5;
        margin-right: 26px;
        box-sizing: border-box;
        padding-bottom: 10px;
        cursor: pointer;
        transition: color 0.4s;
        &:hover {
          color: #62ffff;
        }
        &.active {
          color: #62ffff;
          border-bottom: 4px solid #62ffff;
        }
      }
    }
    .detail-list {
      width: 100%;
      background-color: #151923;
      padding: 26px 0;
      border-top: 1px #ffffff solid;
      margin-bottom: 30px;
    }
  }
}
</style>
