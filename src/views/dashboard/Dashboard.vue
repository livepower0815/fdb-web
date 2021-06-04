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
                <a href="javascript:void(0)" class="menu active" id="fund-exchange-btn">您的佣金異動紀錄</a>
                <a href="javascript:void(0)" class="menu" id="personal-refund-btn">個人返佣資訊</a>
                <a href="javascript:void(0)" class="menu" id="recommender-refund-btn">推薦人返佣資訊</a>
                <a href="javascript:void(0)" class="menu" id="take-cash-btn">出金申請紀錄</a>
              </div>
            </div>

            <div class="dashboard-chart-color">
              <!--佣金異動紀錄 開始-->
              <CommissionTransaction />
              <!--佣金異動紀錄 結束-->

              <!--個人反佣 開始-->
              <PersonalFeedback />
              <!--個人反佣 結束-->

              <!--出金 開始-->
              <Withdrawal />
              <!--出金 結束-->

              <!--推薦人反佣 開始-->
              <Recommender />
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
    return {}
  }
}
</script>

<style scoped></style>
