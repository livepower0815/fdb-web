<template>
  <!--佣金異動紀錄 開始-->
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
          <th @click="sortData('txDate')">
            <Sort title="交易日期" sort="txDate" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th>交易幣別</th>
          <th>
            <TableFilter
              v-model="queryForm.changeType"
              title="異動類別"
              :items="[
                { name: '個人', key: 0 },
                { name: '推薦人', key: 1 },
                { name: '出金', key: 2 }
              ]"
            />
          </th>
          <th @click="sortData('changeNum')">
            <Sort title="異動數量" sort="changeNum" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th @click="sortData('restNum')">
            <Sort title="剩餘數量" sort="restNum" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length > 0">
          <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ formatDate(row.txDate) }}</td>
            <td>{{ row.currency }}</td>
            <td>{{ formatChangeType(row.changeType) }}</td>
            <td>
              <span :class="`${setNumColor(row.changeNum)}`">{{ row.changeNum > 0 ? '+' : '-' }}{{ row.changeNum }}</span>
            </td>
            <td>{{ row.restNum }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="5">
            <div class="empty-container">
              <img src="@/assets/img/common/empty.svg" alt="empty" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!--佣金異動紀錄 手機版開始-->
    <!--佣金異動紀錄 手機版結束-->
    <!--Pages-->
    <Pager v-if="tableData.length > 0" :get-data="getCommissionTransaction" :pager="pager" />
    <!--Pages-->
  </div>
  <!--佣金異動紀錄 結束-->
</template>

<script>
import { getCommissionTransaction } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import { currencyMap } from '@/utils/map.js'
import CoinSelector from '@/components/common/CoinSelector'
import moment from 'moment'
import Sort from '@/components/common/Sort'
import TableFilter from '@/components/common/TableFilter'

const changeTypeMap = ['個人', '推薦人', '出金']

export default {
  name: 'CommissionTransaction',
  components: {
    CoinSelector,
    Pager,
    Sort,
    TableFilter
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
      queryForm: {
        changeType: -1
      },
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
      this.getCommissionTransaction(true)
    },
    currencyType() {
      this.getCommissionTransaction(true)
    },
    queryForm: {
      handler() {
        this.getCommissionTransaction(true)
      },
      deep: true
    }
  },
  mounted() {
    this.getCommissionTransaction(true)
  },
  methods: {
    async getCommissionTransaction(resetPager = false) {
      if (resetPager) {
        this.pager.pageIndex = 1
      }
      this.isLoading = true
      try {
        const queryData = {
          currencyType: this.currencyType,
          changeType: this.queryForm.changeType,
          startDate: this.dateRange[0],
          endDate: this.dateRange[1],
          pageIndex: this.pager.pageIndex,
          pageSize: this.pager.pageSize,
          sortKey: this.pager.sortKey,
          order: this.pager.order
        }
        const res = await getCommissionTransaction(queryData)
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
      this.getCommissionTransaction(true)
    },
    formatChangeType(changeCode) {
      return changeTypeMap[changeCode]
    },
    setNumColor(num) {
      return num > 0 ? 'text-green' : 'text-red'
    }
  }
}
</script>

<style lang="scss" scoped></style>
