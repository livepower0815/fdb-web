<template>
  <div class="outline">
    <div class="outblock">
      <!--Dashboar 開始-->
      <DashboardHeader />
      <!--Dashboar 結束-->

      <!--佣金明細 開始-->
      <div class="outline">
        <div class="outblock">
          <div class="refund-detail-block">
            <div class="title">
              <span>佣金明細</span>
              <a href="">出金申請</a>
            </div>

            <div class="refund-detail-menu-out">
              <div class="refund-detail-menu-block">
                <a href="javascript:void(0)" class="menu" :class="{ active: refundShow === 'CommissionTransaction' }" @click="refundShow = 'CommissionTransaction'">您的佣金異動紀錄</a>
                <a href="javascript:void(0)" class="menu" :class="{ active: refundShow === 'PersonalFeedback' }" @click="refundShow = 'PersonalFeedback'">個人返佣資訊</a>
                <a href="javascript:void(0)" class="menu" :class="{ active: refundShow === 'Withdrawal' }" @click="refundShow = 'Withdrawal'">推薦人返佣資訊</a>
                <a href="javascript:void(0)" class="menu" :class="{ active: refundShow === 'Recommender' }" @click="refundShow = 'Recommender'">出金申請紀錄</a>
              </div>
            </div>

            <div class="dashboard-chart-color">
              <!--佣金異動紀錄 開始-->
              <CommissionTransaction v-if="refundShow === 'CommissionTransaction'" />
              <!--佣金異動紀錄 結束-->

              <!--個人反佣 開始-->
              <PersonalFeedback v-if="refundShow === 'PersonalFeedback'" />
              <!--個人反佣 結束-->

              <!--出金 開始-->
              <Withdrawal v-if="refundShow === 'Withdrawal'" />
              <!--出金 結束-->

              <!--推薦人反佣 開始-->
              <Recommender v-if="refundShow === 'Recommender'" />
              <!--推薦人反佣 結束-->
            </div>
          </div>
        </div>
      </div>
      <!--佣金明細 結束-->
    </div>
  </div>
</template>

<script>
import DashboardHeader from './compoents/DashboardHeader'
import CommissionTransaction from './compoents/CommissionTransaction'
import PersonalFeedback from './compoents/PersonalFeedback'
import Withdrawal from './compoents/Withdrawal'
import Recommender from './compoents/Recommender'

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
      refundShow: 'CommissionTransaction'
    }
  }
}
</script>

<style scoped></style>
