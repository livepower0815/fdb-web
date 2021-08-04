<template>
  <!--Dashboar 開始-->
  <div class="dashboard-header">
    <!--Title 開始-->
    <div class="header-title">Dashboard</div>
    <!--Title 結束-->

    <div class="header-body">
      <!--線條圖 開始-->
      <div class="chart" v-loading="chartLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
        <div class="chart-title">
          <div class="title-item">
            <div class="title">
              <img class="icon" src="@/assets/img/dashboard/person.png" alt="person" style="width: 24px;" />
              <div class="word">個人返佣數量</div>
            </div>
            <div class="sub green">{{ dashboardChart.personValue }}</div>
          </div>

          <div class="title-item">
            <div class="title">
              <img class="icon" src="@/assets/img/dashboard/recommender.png" alt="recommender" style="width: 24px;" />
              <div class="word">推薦人返佣數量</div>
            </div>
            <div class="sub orange">{{ dashboardChart.recommenderValue }}</div>
          </div>

          <div class="title-item">
            <div class="title">
              <img class="icon" src="@/assets/img/dashboard/withdraw.png" alt="withdraw" style="width: 24px;" />
              <div class="word">出金數量</div>
            </div>
            <div class="sub red">{{ dashboardChart.withdrawValue }}</div>
          </div>
        </div>

        <div class="chart-filter">
          <div class="chart-filter-menu">
            <span
              class="filter-item"
              :class="{ active: dashboardChart.chartSelect === 'all' }"
              @click.prevent="dashboardChart.chartSelect = 'all'"
            >
              全部
            </span>
            <span
              class="filter-item"
              :class="{ active: dashboardChart.chartSelect === 'person' }"
              @click.prevent="dashboardChart.chartSelect = 'person'"
            >
              個人返佣數量
            </span>
            <span
              class="filter-item"
              :class="{ active: dashboardChart.chartSelect === 'recommender' }"
              @click.prevent="dashboardChart.chartSelect = 'recommender'"
            >
              推薦人返佣數量
            </span>
            <span
              class="filter-item"
              :class="{ active: dashboardChart.chartSelect === 'withdraw' }"
              @click.prevent="dashboardChart.chartSelect = 'withdraw'"
            >
              出金數量
            </span>
          </div>
          <div class="chart-filter-select">
            <el-select v-model="dashboardChart.dateRange" class="fdb-select select" popper-class="fdb-select">
              <el-option label="一週" :value="'week'" />
              <el-option label="一月" :value="'mouth'" />
              <el-option label="一季" :value="'quarter'" />
            </el-select>
            <el-select v-model="dashboardChart.currencyType" class="fdb-select select" popper-class="fdb-select">
              <el-option label="BTC" :value="1" />
              <el-option label="ETH" :value="2" />
              <el-option label="XRP" :value="3" />
              <el-option label="EOS" :value="4" />
              <el-option label="USDT" :value="5" />
            </el-select>
          </div>
        </div>

        <!--Chart-->
        <div class="chart-main">
          <div class="chart-main-container">
            <LineChart ref="linechart" :options="lineChartOptions" :chart-style="{ width: '100%', height: '100%' }" />
          </div>
        </div>
      </div>
      <!--線條圖 結束-->

      <!--幣 開始-->
      <StoreSelect />
      <!--幣 結束-->
    </div>
  </div>
  <!--Dashboar 結束-->
</template>

<script>
import LineChart from '@/components/charts/LineChart'
import { getDashboardChart } from '@/apis/dashboard.js'
import { currencyMap } from '@/utils/map.js'
import StoreSelect from '@/components/StoreSelect'
// import { formatNumberWithFixed } from '@/utils/number.js'
import moment from 'moment'

// 產生天數
const getDatePeriodRange = dateRange => {
  let days = 7
  if (dateRange === 'week') {
    days = 7
  }
  if (dateRange === 'mouth') {
    days = 30
  }
  if (dateRange === 'quarter') {
    days = 90
  }
  return moment()
    .subtract(days - 1, 'days')
    .format('YYYY-MM-DD')
}

export default {
  name: 'DashboardHeader',
  components: {
    LineChart,
    StoreSelect
  },
  data() {
    return {
      currencyMap: { ...currencyMap },
      dashboardChart: {
        personValue: '0',
        recommenderValue: '0',
        withdrawValue: '0',
        chartSelect: 'all',
        dateRange: 'week',
        currencyType: 1
      },
      chartLoading: false,
      lineChartOptions: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '0%',
          top: '4%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: {
            color: '#ffffff',
            margin: 16,
            fontSize: 14,
            formatter: value => {
              return value
                .split('-')
                .slice(1, 3)
                .join('/')
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#888888'
          }
        },
        series: []
      },
      seriesData: [
        {
          name: '個人返佣數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#05d394',
          data: []
        },
        {
          name: '推薦人返佣數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#e78f0a',
          data: []
        },
        {
          name: '出金數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#eb4664',
          data: []
        }
      ],
      exchangeSelected: 'test123'
    }
  },
  watch: {
    'dashboardChart.chartSelect'(value) {
      this.setChartData(value)
    },
    'dashboardChart.dateRange'() {
      this.getDashboardChart()
    },
    'dashboardChart.currencyType'() {
      this.getDashboardChart()
    }
  },
  async mounted() {
    this.getDashboardChart()
  },
  methods: {
    // 儀錶板圖表ＡＰＩ
    async getDashboardChart() {
      this.chartLoading = true
      try {
        const queryData = {
          currencyType: this.dashboardChart.currencyType,
          startDate: getDatePeriodRange(this.dashboardChart.dateRange),
          endDate: moment().format('YYYY-MM-DD'),
          pageIndex: 0,
          pageSize: 0
        }
        const res = await getDashboardChart(queryData)
        // this.dashboardChart.personValue = formatNumberWithFixed(res.personValue, 8)
        // this.dashboardChart.recommenderValue = formatNumberWithFixed(res.recommenderValue, 8)
        // this.dashboardChart.withdrawValue = formatNumberWithFixed(res.withdrawValue, 8)
        this.dashboardChart.personValue = res.personValue
        this.dashboardChart.recommenderValue = res.recommenderValue
        this.dashboardChart.withdrawValue = res.withdrawValue
        this.lineChartOptions.xAxis.data = res.dates.map(item => item.date)
        this.seriesData[0].data = res.dates.map(item => item.personValue)
        this.seriesData[1].data = res.dates.map(item => item.recommenderValue)
        this.seriesData[2].data = res.dates.map(item => item.withdrawValue)
        this.setChartData(this.dashboardChart.chartSelect)
      } catch (error) {
        console.error(error)
      }
      this.chartLoading = false
    },
    setChartData(mode) {
      switch (mode) {
        case 'all':
          this.lineChartOptions.series = this.seriesData.filter(item => true)
          break
        case 'person':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '個人返佣數量'
          })
          break
        case 'recommender':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '推薦人返佣數量'
          })
          break
        case 'withdraw':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '出金數量'
          })
          break
        default:
          this.lineChartOptions.series = this.seriesData.filter(item => true)
          break
      }
      this.$refs.linechart.$refs.LineChart.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  width: 100%;
  margin-bottom: 50px;
  .header-title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Avenir';
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 500px) {
      font-size: 26px;
    }
  }
  .header-body {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    .chart {
      width: 54%;
      display: flex;
      flex-direction: column;
      background-color: #151923;
      margin-right: 8px;
      padding: 18px;
      @media screen and (max-width: 960px) {
        width: 62%;
        padding: 12px;
      }
      @media screen and (max-width: 700px) {
        width: auto;
        margin-right: 0;
        margin-bottom: 16px;
      }
      &-title {
        display: flex;
        padding: 16px 0;
        border-bottom: 1px #ffffff solid;
        justify-content: space-between;
        @media screen and (max-width: 700px) {
          flex-direction: column;
        }
        .title-item {
          flex: 1;
          @media screen and (max-width: 700px) {
            margin-bottom: 16px;
          }
          .title {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            .icon {
              width: 30px;
              margin-right: 6px;
            }
            .word {
              font-size: 16px;
              @media screen and (max-width: 960px) {
                font-size: 14px;
              }
            }
          }
          .sub {
            font-family: 'Avenir';
            font-weight: bold;
            font-size: 28px;
            &.green {
              color: #05d394;
            }
            &.orange {
              color: #e78f0a;
            }
            &.red {
              color: #eb4664;
            }
          }
        }
      }
      &-filter {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        @media screen and (max-width: 960px) {
          flex-direction: column;
        }
        &-menu {
          @media screen and (max-width: 960px) {
            display: flex;
            overflow: auto;
            margin-bottom: 12px;
            justify-content: space-around;
          }
          @media screen and (max-width: 500px) {
            justify-content: flex-start;
          }
          .filter-item {
            font-size: 16px;
            color: #cccccc;
            margin-right: 16px;
            transition: color 0.4s;
            cursor: pointer;
            @media screen and (max-width: 1346px) {
              font-size: 14px;
              margin-right: 10px;
            }
            @media screen and (max-width: 960px) {
              margin-right: 6px;
            }
            @media screen and (max-width: 700px) {
              flex: 0 0 auto;
              margin-right: 16px;
            }
            &:hover {
              color: #62ffff;
            }
            &.active {
              font-weight: bold;
              color: #62ffff;
            }
          }
        }
        &-select {
          @media screen and (max-width: 960px) {
            text-align: end;
            margin-bottom: 12px;
          }
          .select {
            width: 79px;
            margin-right: 10px;
          }
        }
      }
      &-main {
        height: 200px;
        flex: 1;
        @media screen and (max-width: 700px) {
          flex: 0 0 auto;
        }
        &-container {
          height: 100%;
        }
      }
    }
  }
}
</style>
