<template>
  <!--佣金異動紀錄 開始-->
  <div class="commission">
    <div class="filter-section">
      <!-- 幣別過濾icons -->
      <div class="coin-select">
        <div class="icon icon-container" :class="{ active: currencyType === 0 }" @click.prevent="currencyType = 0">
          <img src="@/assets/img/dashboard/all.png" alt="all" class="all-icon" />
        </div>
        <CoinIcon class="icon" coin-type="BTC" :class="{ active: currencyType === 1 }" @click.prevent="currencyType = 1" />
        <CoinIcon class="icon" coin-type="ETH" :class="{ active: currencyType === 2 }" @click.prevent="currencyType = 2" />
        <CoinIcon class="icon" coin-type="XRP" :class="{ active: currencyType === 3 }" @click.prevent="currencyType = 3" />
        <CoinIcon class="icon" coin-type="EOS" :class="{ active: currencyType === 4 }" @click.prevent="currencyType = 4" />
        <CoinIcon class="icon" coin-type="USDT" :class="{ active: currencyType === 5 }" @click.prevent="currencyType = 5" />
      </div>

      <!-- 日期選擇器 -->
      <div class="date-picker">
        <div class="title">篩選時間：</div>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
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
          <th @click="sortData('txDate')">交易日期</th>
          <th @click="sortData('currency')">交易幣別</th>
          <th @click="sortData('changeType')">異動類別</th>
          <th @click="sortData('changeNum')">異動數量</th>
          <th @click="sortData('restNum')">剩餘數量</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length > 0">
          <tr v-for="(row, index) in tableData" :key="index">
            <td>{{ formatDate(row.txDate) }}</td>
            <td>{{ row.currency }}</td>
            <td>{{ formatChangeType(row.changeType) }}</td>
            <td>{{ row.changeNum }}</td>
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
import moment from 'moment'
import CoinIcon from '@/components/common/CoinIcon.vue'

const changeTypeMap = ['個人', '推薦人', '出金']

export default {
  name: 'CommissionTransaction',
  components: {
    Pager,
    CoinIcon
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
      this.getCommissionTransaction(true)
    },
    currencyType() {
      this.getCommissionTransaction(true)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.commission {
  .filter-section {
    display: flex;
    margin-bottom: 16px;
    .coin-select {
      display: flex;
      padding: 0 12px;
      .icon {
        width: 30px;
        margin-right: 12px;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 4px;
        transition: border 0.4s;
        &:hover {
          border: 1px solid #62ffff;
        }
        &.active {
          border: 1px solid #62ffff;
        }
      }
    }
    .date-picker {
      display: flex;
      align-items: center;
      font-size: 14px;
      .title {
        margin-right: 12px;
      }
    }
  }
  .info-table {
    width: 100%;
    margin-bottom: 36px;
    border-spacing: 0;
    thead {
      font-size: 16px;
      font-weight: bold;
      color: #e5e5e5;
      line-height: 45px;
      margin-bottom: 5px;
      text-align: left;
      tr {
        th {
          border-bottom: 1px solid #e5e5e5;
          &:first-child {
            padding-left: 16px;
          }
        }
      }
    }
    tbody {
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      color: #e5e5e5;
      tr {
        td {
          .empty-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
            img {
              width: 120px;
            }
          }
          &:first-child {
            padding-left: 16px;
            &[colspan] {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
}
.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1e2533;
  .all-icon {
    width: 75%;
  }
}
</style>
