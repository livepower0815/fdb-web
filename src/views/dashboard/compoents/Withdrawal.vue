<template>
  <!--出金 開始-->
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
          <th>申請狀態</th>
          <th>申請單號</th>
          <th>申請出金時間</th>
          <th>申請幣別</th>
          <th @click="sortData('orderValue')">
            <span style="cursor: pointer;">
              申請數量
              <img src="@/assets/img/common/sort-arrows.png" alt="sort-arrows" style="width: 14px;transform: translateY(1px);" />
            </span>
          </th>
          <th @click="sortData('finishDate')">
            <span style="cursor: pointer;">
              完成出金日期
              <img src="@/assets/img/common/sort-arrows.png" alt="sort-arrows" style="width: 14px;transform: translateY(1px);" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length > 0">
          <tr v-for="(row, index) in tableData" :key="index">
            <td>
              <template v-if="row.rebatStatus === 0">
                <div class="status yet"></div>
                申請中
              </template>
              <template v-if="row.rebatStatus === 1">
                <div class="status progress"></div>
                出金中
              </template>
              <template v-if="row.rebatStatus === 2">
                <div class="status already"></div>
                已完成
              </template>
            </td>
            <td>{{ row.orderNum }}</td>
            <td>{{ formatDate(row.orderDate) }}</td>
            <td>{{ currencyMap[row.currency] }}</td>
            <td>{{ row.orderValue }}</td>
            <td>{{ formatDate(row.finishDate) }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="6">
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
    <Pager v-if="tableData.length > 0" :get-data="getWithdrawal" :pager="pager" />
    <!--Pages-->
  </div>
  <!--出金 結束-->
</template>

<script>
import { currencyMap } from '@/utils/map.js'
import { getWithdrawal } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import moment from 'moment'
import CoinSelector from '@/components/common/CoinSelector'

export default {
  name: 'Withdrawal',
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
        sortKey: 'orderDate',
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
      this.getWithdrawal(true)
    },
    currencyType() {
      this.getWithdrawal(true)
    }
  },
  mounted() {
    this.getWithdrawal(true)
  },
  methods: {
    async getWithdrawal(resetPager = false) {
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
        const res = await getWithdrawal(queryData)
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
      this.getWithdrawal(true)
    }
  }
}
</script>

<style scoped></style>
