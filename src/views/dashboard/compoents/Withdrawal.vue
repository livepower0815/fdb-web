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

    <!-- 控制器手機版 開始 -->
    <div class="filter-section-m">
      <div class="fdb-btn-info btn" @click="filterDialog.show = true">篩選</div>
      <div class="fdb-btn-info btn" @click="sortDialog.show = true">排序</div>
    </div>
    <!-- 控制器手機版 結束 -->

    <table class="info-table">
      <thead>
        <tr>
          <th>
            <TableFilter v-model="queryForm.rebateStatus" title="申請狀態" :items="rebateStatusMap" />
          </th>
          <th>申請單號</th>
          <th @click="sortData('orderDate')">
            <Sort title="申請出金時間" sort="orderDate" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th>申請幣別</th>
          <th @click="sortData('orderValue')">
            <Sort title="申請數量" sort="orderValue" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th @click="sortData('finishDate')">
            <Sort title="完成出金日期" sort="finishDate" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableData.length > 0">
          <tr v-for="(row, index) in tableData" :key="index">
            <td>
              <template v-if="row.rebateStatus === 0">
                <div class="status yet"></div>
                申請中
              </template>
              <template v-if="row.rebateStatus === 1">
                <div class="status progress"></div>
                出金中
              </template>
              <template v-if="row.rebateStatus === 2">
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
    <div class="info-table-m">
      <template v-if="tableData.length > 0">
        <div v-for="(row, index) in tableData" :key="index" class="info-card">
          <div class="card-item">
            <div class="label">返佣狀態</div>
            <div class="content">
              <template v-if="row.rebateStatus === 0">
                <div class="status yet"></div>
                申請中
              </template>
              <template v-if="row.rebateStatus === 1">
                <div class="status progress"></div>
                出金中
              </template>
              <template v-if="row.rebateStatus === 2">
                <div class="status already"></div>
                已完成
              </template>
            </div>
          </div>
          <div class="card-item">
            <div class="label">申請單號</div>
            <div class="content">{{ row.orderNum }}</div>
          </div>
          <div class="card-item">
            <div class="label">交易日期</div>
            <div class="content">{{ formatDate(row.orderDate) }}</div>
          </div>
          <div class="card-item">
            <div class="label">交易幣別</div>
            <div class="content">{{ currencyMap[row.currency] }}</div>
          </div>
          <div class="card-item">
            <div class="label">申請數量</div>
            <div class="content">{{ row.orderValue }}</div>
          </div>
          <div class="card-item">
            <div class="label">完成出金日期</div>
            <div class="content">{{ formatDate(row.finishDate) }}</div>
          </div>
        </div>
      </template>
      <div v-else style="margin: 0 auto;" class="empty-container">
        <img src="@/assets/img/common/empty.svg" alt="empty" />
      </div>
    </div>
    <!--出金 手機版結束-->

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
        <div class="label">申請狀態：</div>
        <div class="content">
          <el-select v-model="queryForm.rebateStatus" class="fdb-select" style="width: 100%;" popper-class="fdb-select">
            <el-option label="全部" :value="-1" />
            <el-option v-for="item in rebateStatusMap" :key="item.key" :label="item.name" :value="item.key" />
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
            @change="getWithdrawal(true)"
          >
            <el-option label="申請出金時間" value="orderDate" />
            <el-option label="申請數量" value="orderValue" />
            <el-option label="完成出金日期" value="finishDate" />
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="label">排序方式：</div>
        <div class="content">
          <el-select v-model="pager.order" class="fdb-select" style="width: 100%;" popper-class="fdb-select" @change="getWithdrawal(true)">
            <el-option label="正序" value="asc" />
            <el-option label="倒序" value="desc" />
          </el-select>
        </div>
      </div>
      <div slot="footer" style="width: 100%;">
        <div class="fdb-btn-default" @click="sortDialog.show = false">關閉</div>
      </div>
    </el-dialog>

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
import Sort from '@/components/common/Sort'
import TableFilter from '@/components/common/TableFilter'

export default {
  name: 'Withdrawal',
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
      tableData: [],
      queryForm: {
        rebateStatus: -1
      },
      pager: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0,
        sortKey: 'orderDate',
        order: 'desc'
      },
      filterDialog: {
        show: false
      },
      sortDialog: {
        show: false
      },
      rebateStatusMap: [
        { name: '申請中', key: 0 },
        { name: '出金中', key: 1 },
        { name: '已完成', key: 2 }
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
      this.getWithdrawal(true)
    },
    currencyType() {
      this.getWithdrawal(true)
    },
    queryForm: {
      handler() {
        this.getWithdrawal(true)
      },
      deep: true
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
          rebateStatus: this.queryForm.rebateStatus,
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
      return date ? moment(date).format('YYYY-MM-DD HH:mm') : '-'
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
