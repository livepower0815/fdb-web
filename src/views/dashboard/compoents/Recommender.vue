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
    </div>
    <table class="info-table">
      <thead>
        <tr>
          <th>返佣狀態</th>
          <th>交易日期</th>
          <th>交易幣別</th>
          <th>會員名稱</th>
          <th @click="sortData('rgName')">
            <span style="cursor: pointer;">
              推薦人分組
              <img src="@/assets/img/common/sort-arrows.png" alt="sort-arrows" style="width: 14px;transform: translateY(1px);" />
            </span>
          </th>
          <th @click="sortData('canRebatePoint')">
            <span style="cursor: pointer;">
              可返佣交易量
              <img src="@/assets/img/common/sort-arrows.png" alt="sort-arrows" style="width: 14px;transform: translateY(1px);" />
            </span>
          </th>
          <th @click="sortData('canRebatValue')">
            <span style="cursor: pointer;">
              可返佣數量
              <img src="@/assets/img/common/sort-arrows.png" alt="sort-arrows" style="width: 14px;transform: translateY(1px);" />
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
              <div class="group green">{{ row.rgName }}</div>
            </td>
            <td>{{ row.canRebatePoint }}</td>
            <td>{{ row.canRebatValue }}</td>

            <!-- <td><div class="group green">高中同學</div></td>
            <td><div class="group bluegreen">高中同學</div></td>
            <td><div class="group fair">高中同學</div></td>
            <td><div class="group orange">高中同學</div></td>
            <td><div class="group lightpurple">高中同學</div></td>
            <td><div class="group purple">高中同學</div></td>
            <td><div class="group redpurple">高中同學</div></td> -->
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

    <!-- <table class="refund-detail-info-block" cellpadding="0" Border="0">
    <thead class="refund-detail-info-title">
      <tr>
        <th @click="sortData('rebateStatus')">返佣狀態</th>
        <th @click="sortData('txDate')">交易日期</th>
        <th @click="sortData('currency')">交易幣別</th>
        <th @click="sortData('name')">會員名稱</th>
        <th @click="sortData('rgName')">推薦人分組</th>
        <th @click="sortData('canRebatePoint')">可返佣交易量</th>
        <th @click="sortData('canRebatValue')">可返佣數量</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tableData" :key="index" class="refund-detail-info-main">
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
          <div class="group green">{{ row.rgName }}</div>
        </td>
        <td>{{ row.canRebatePoint }}</td>
        <td>{{ row.canRebatValue }}</td>
      </tr>
      <td><div class="group green">高中同學</div></td>
      <td><div class="group bluegreen">高中同學</div></td>
      <td><div class="group fair">高中同學</div></td>
      <td><div class="group orange">高中同學</div></td>
      <td><div class="group lightpurple">高中同學</div></td>
      <td><div class="group purple">高中同學</div></td>
      <td><div class="group redpurple">高中同學</div></td>
    </tbody>
  </table> -->

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
import { getRecommender } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import moment from 'moment'
import CoinSelector from '@/components/common/CoinSelector'

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

<style scoped></style>
