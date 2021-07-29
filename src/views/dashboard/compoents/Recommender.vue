<template>
  <!--推薦人反佣 開始-->
  <div class="detail-section">
    <div class="filter-section">
      <!-- 幣別過濾icons -->
      <CoinSelector v-model="currencyType" />

      <!-- 日期選擇器 -->
      <div class="date-picker">
        <div class="title">篩選時間：</div>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          class="fdb"
          range-separator="至"
          start-placeholder="開始時間"
          end-placeholder="結束時間"
          size="mini"
          value-format="yyyy-MM-dd"
          :clearable="false"
        ></el-date-picker>
      </div>
      <!-- 輸入會員名稱關鍵字 -->
      <div class="key-search">
        <img src="@/assets/img/common/icon-search.png" alt="search" />
        <input type="text" placeholder="輸入會員名稱關鍵字" />
      </div>
      <!-- 管理組別 -->
      <div style="flex: 1; text-align: end">
        <router-link :to="{ name: 'Personal', query: { tab: 'recommend-management' } }" class="btn fdb-btn-default">管理組別</router-link>
      </div>
    </div>
    <table class="info-table">
      <thead>
        <tr>
          <th>返佣狀態</th>
          <th>交易日期</th>
          <th>交易幣別</th>
          <th>會員名稱</th>
          <th>
            <span style="cursor: pointer;">
              推薦人分組
              <img src="@/assets/img/filter/filter.png" alt="filter-grid-solid" style="width: 16px;transform: translateY(2px);" />
            </span>
          </th>
          <th @click="sortData('canRebatePoint')">
            <span style="cursor: pointer;">
              可返佣交易量
              <img src="@/assets/img/sort/sort-arrows.png" alt="sort-arrows" style="width: 12px;transform: translateY(2px);" />
            </span>
          </th>
          <th @click="sortData('canRebatValue')">
            <span style="cursor: pointer;">
              可返佣數量
              <img src="@/assets/img/sort/sort-arrows.png" alt="sort-arrows" style="width: 12px;transform: translateY(2px);" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length > 0">
          <tr v-for="(row, index) in tableData" :key="index">
            <td>
              <template v-if="row.rebateStatus === 0">
                <div class="status yet"></div>
                未返佣
              </template>
              <template v-if="row.rebateStatus === 1">
                <div class="status already"></div>
                已返佣
              </template>
            </td>
            <td>{{ formatDate(row.txDate) }}</td>
            <td>{{ currencyMap[row.currency] }}</td>
            <td>{{ row.name }}</td>
            <td>
              <div :class="`group group-color-${row.groupIndex}`">{{ groupMap[row.groupIndex].name }}</div>
            </td>
            <td>{{ row.canRebatePoint }}</td>
            <td>{{ row.canRebatValue }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="7">
            <div class="empty-container">
              <img src="@/assets/img/common/empty.svg" alt="empty" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!--出金 手機版開始-->
    <!--出金 手機版結束-->
    <!--Pages-->
    <Pager v-if="tableData.length > 0" :get-data="getRecommender" :pager="pager" />
    <!--Pages-->
  </div>
  <!--推薦人反佣 結束-->
</template>

<script>
import { currencyMap } from '@/utils/map.js'
// import { getRecommender } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import moment from 'moment'
import CoinSelector from '@/components/common/CoinSelector'

const groupMap = [
  { name: '高中同學' },
  { name: '家族親戚' },
  { name: '家族親戚' },
  { name: '家族親戚' },
  { name: '高中同學' },
  { name: '高中同學' },
  { name: '高中同學' },
  { name: '高中同學' },
  { name: '高中同學' },
  { name: '大學同學' }
]

const getRecommender = async () => {
  return {
    data: [
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 1,
        name: 'kerry01',
        groupIndex: 0,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 1,
        txDate: '2021-06-05T12:21:40.08',
        currency: 1,
        name: 'kerry02',
        groupIndex: 1,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 2,
        name: 'kerry02',
        groupIndex: 2,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 2,
        name: 'kerry03',
        groupIndex: 3,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 1,
        txDate: '2021-06-05T12:21:40.08',
        currency: 3,
        name: 'kerry03',
        groupIndex: 4,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 1,
        txDate: '2021-06-05T12:21:40.08',
        currency: 3,
        name: 'kerry04',
        groupIndex: 5,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 4,
        name: 'kerry04',
        groupIndex: 6,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 1,
        txDate: '2021-06-05T12:21:40.08',
        currency: 4,
        name: 'kerry01',
        groupIndex: 7,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 5,
        name: 'kerry01',
        groupIndex: 8,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      },
      {
        rebateStatus: 0,
        txDate: '2021-06-05T12:21:40.08',
        currency: 5,
        name: 'kerry01',
        groupIndex: 9,
        canRebatePoint: '100.00345',
        canRebatValue: '0.0034356'
      }
    ],
    totalCount: 10
  }
}

export default {
  name: 'Recommender',
  components: {
    CoinSelector,
    Pager
  },
  props: {
    filterDateRange: {
      type: Array,
      default: () => []
    },
    filterCurrencyType: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currencyMap: { ...currencyMap },
      groupMap: groupMap,
      tableData: [],
      pager: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0,
        sortKey: 'txDate',
        order: 'asc'
      }
    }
  },
  computed: {
    dateRange: {
      get() {
        return this.filterDateRange
      },
      set(val) {
        this.$emit('update:filterDateRange', val)
      }
    },
    currencyType: {
      get() {
        return this.filterCurrencyType
      },
      set(val) {
        this.$emit('update:filterCurrencyType', val)
      }
    },
    isLoading: {
      get() {
        return this.loading
      },
      set(val) {
        this.$emit('update:loading', val)
      }
    }
  },
  watch: {
    dateRange() {
      this.getRecommender(true)
    },
    currencyType() {
      this.getRecommender(true)
    }
  },
  mounted() {
    this.getRecommender(true)
  },
  methods: {
    async getRecommender(resetPager = false) {
      if (resetPager) {
        this.pager.pageIndex = 1
      }
      this.isLoading = true
      try {
        const queryData = {
          currencyType: this.currencyType,
          startDate: this.dateRange[0],
          endDate: this.dateRange[1],
          pageIndex: this.pager.pageIndex,
          pageSize: this.pager.pageSize,
          sortKey: this.pager.sortKey,
          order: this.pager.order
        }
        const res = await getRecommender(queryData)
        this.tableData = res.data
        this.pager.totalCount = res.totalCount
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD HH:mm')
    },
    sortData(sortKey) {
      if (this.pager.sortKey === sortKey) {
        switch (this.pager.order) {
          case 'asc':
            this.pager.order = 'desc'
            break
          case 'desc':
            this.pager.order = 'asc'
            break
          default:
            this.pager.order = 'asc'
            break
        }
      } else {
        this.pager.sortKey = sortKey
        this.pager.order = 'asc'
      }
      this.getRecommender(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  display: inline;
  padding: 4px 20px;
  // background-color: #696969;
  border-radius: 16px;
  color: #151923;
}
</style>
