<template>
  <!--佣金異動紀錄 開始-->
  <div class="detail-section">
    <!-- 控制器電腦版 -->
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
    <!-- 控制器電腦版 -->

    <!-- 控制器手機版 開始 -->
    <div class="filter-section-m">
      <div class="fdb-btn-info btn" @click="filterDialog.show = true">篩選</div>
      <div class="fdb-btn-info btn" @click="sortDialog.show = true">排序</div>
    </div>
    <!-- 控制器手機版 結束 -->

    <!-- 電腦版清單 開始 -->
    <table class="info-table">
      <thead>
        <tr>
          <th @click="sortData('txDate')">
            <Sort title="交易日期" sort="txDate" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th>交易幣別</th>
          <th>
            <TableFilter v-model="queryForm.changeType" title="異動類別" :items="changeTypeMap" />
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
              <span :class="`${setNumColor(row.changeNum)}`">{{ row.changeNum > 0 ? '+' : '' }}{{ row.changeNum }}</span>
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
    <!-- 電腦版清單 結束 -->

    <!--佣金異動紀錄 手機版開始-->
    <div class="info-table-m">
      <template v-if="tableData.length > 0">
        <div v-for="(row, index) in tableData" :key="index" class="info-card">
          <div class="card-item">
            <div class="label">交易日期</div>
            <div class="content">{{ formatDate(row.txDate) }}</div>
          </div>
          <div class="card-item">
            <div class="label">交易幣別</div>
            <div class="content">{{ row.currency }}</div>
          </div>
          <div class="card-item">
            <div class="label">異動類別</div>
            <div class="content">{{ formatChangeType(row.changeType) }}</div>
          </div>
          <div class="card-item">
            <div class="label">異動數量</div>
            <div class="content">
              <span :class="`${setNumColor(row.changeNum)}`">{{ row.changeNum > 0 ? '+' : '' }}{{ row.changeNum }}</span>
            </div>
          </div>
          <div class="card-item">
            <div class="label">剩餘數量</div>
            <div class="content">{{ row.restNum }}</div>
          </div>
        </div>
      </template>
      <div v-else style="margin: 0 auto;" class="empty-container">
        <img src="@/assets/img/common/empty.svg" alt="empty" />
      </div>
    </div>
    <!--佣金異動紀錄 手機版結束-->

    <!--Pages-->
    <Pager v-if="tableData.length > 0" :get-data="getCommissionTransaction" :pager="pager" />
    <!--Pages-->

    <!-- 篩選彈窗 -->
    <el-dialog title="篩選" :visible.sync="filterDialog.show" width="300px" :show-close="false" custom-class="fbd-dialog controller-dialog">
      <div class="form-item">
        <div class="label">幣別：</div>
        <div class="content"><CoinSelector v-model="currencyType" /></div>
      </div>
      <div class="form-item">
        <div class="label">開始時間：</div>
        <div class="content">
          <el-date-picker
            v-model="dateRange[0]"
            type="date"
            class="fdb"
            value-format="yyyy-MM-dd"
            placeholder="開始日期"
            :clearable="false"
          ></el-date-picker>
        </div>
      </div>
      <div class="form-item">
        <div class="label">結束時間：</div>
        <div class="content">
          <el-date-picker
            v-model="dateRange[1]"
            type="date"
            class="fdb"
            value-format="yyyy-MM-dd"
            placeholder="結束日期"
            :clearable="false"
          ></el-date-picker>
        </div>
      </div>
      <div class="form-item">
        <div class="label">異動類別：</div>
        <div class="content">
          <el-select v-model="queryForm.changeType" class="fdb-select" style="width: 100%;" popper-class="fdb-select">
            <el-option label="全部" :value="-1" />
            <el-option v-for="item in changeTypeMap" :key="item.key" :label="item.name" :value="item.key" />
          </el-select>
        </div>
      </div>
      <div slot="footer" style="width: 100%;">
        <div class="fdb-btn-default" @click="filterDialog.show = false">關閉</div>
      </div>
    </el-dialog>

    <!-- 排序彈窗 -->
    <el-dialog title="排序" :visible.sync="sortDialog.show" width="300px" :show-close="false" custom-class="fbd-dialog controller-dialog">
      <div class="form-item">
        <div class="label">排序欄位：</div>
        <div class="content">
          <el-select
            v-model="pager.sortKey"
            class="fdb-select"
            style="width: 100%;"
            popper-class="fdb-select"
            @change="getCommissionTransaction(true)"
          >
            <el-option label="交易日期" value="txDate" />
            <el-option label="異動數量" value="changeNum" />
            <el-option label="剩餘數量" value="restNum" />
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="label">排序方式：</div>
        <div class="content">
          <el-select
            v-model="pager.order"
            class="fdb-select"
            style="width: 100%;"
            popper-class="fdb-select"
            @change="getCommissionTransaction(true)"
          >
            <el-option label="正序" value="asc" />
            <el-option label="倒序" value="desc" />
          </el-select>
        </div>
      </div>
      <div slot="footer" style="width: 100%;">
        <div class="fdb-btn-default" @click="sortDialog.show = false">關閉</div>
      </div>
    </el-dialog>
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
        order: 'desc'
      },
      filterDialog: {
        show: false
      },
      sortDialog: {
        show: false
      },
      changeTypeMap: [
        { name: '個人', key: 0 },
        { name: '推薦人', key: 1 },
        { name: '出金', key: 2 },
        { name: '活動異動', key: 3 }
      ]
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
      const findItem = this.changeTypeMap.find(item => item.key === changeCode)
      return findItem ? findItem.name : '未定義'
    },
    setNumColor(num) {
      return num > 0 ? 'text-green' : 'text-red'
    }
  }
}
</script>

<style lang="scss" scoped></style>
