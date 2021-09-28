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
        <input v-model="memberName" type="text" placeholder="輸入會員名稱關鍵字" @keyup.enter="getRecommender(true)" />
      </div>
      <!-- 管理組別 -->
      <div style="flex: 1; text-align: end">
        <router-link :to="{ name: 'Personal', query: { tab: 'recommend-management' } }" class="btn fdb-btn-default">管理組別</router-link>
      </div>
    </div>

    <!-- 控制器手機版 開始 -->
    <div class="filter-section-m">
      <div class="fdb-btn-info" style="margin-right: 6px;" @click="filterDialog.show = true">篩選</div>
      <div class="fdb-btn-info" style="margin-right: 6px;" @click="sortDialog.show = true">排序</div>
      <router-link :to="{ name: 'Personal', query: { tab: 'recommend-management' } }" style="margin-left: auto;" class="fdb-btn-default">
        管理組別
      </router-link>
    </div>
    <!-- 控制器手機版 結束 -->

    <table class="info-table">
      <thead>
        <tr>
          <th>
            <TableFilter v-model="queryForm.rebateStatus" title="返佣狀態" :items="rebateStatusMap" />
          </th>
          <th @click="sortData('txDate')">
            <Sort title="交易日期" sort="txDate" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th>交易幣別</th>
          <th>會員名稱</th>
          <th>
            <TableFilter
              v-model="queryForm.rgid"
              title="推薦人分組"
              :items="availableGroups.map(item => ({ name: item.name, key: item.rgid, color: item.color }))"
            />
          </th>
          <th @click="sortData('canRebatePoint')">
            <Sort title="可返佣交易量" sort="canRebatePoint" :sort-key="pager.sortKey" :order="pager.order" />
          </th>
          <th @click="sortData('canRebatValue')">
            <Sort title="可返佣數量" sort="canRebatValue" :sort-key="pager.sortKey" :order="pager.order" />
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
            <td>{{ row.memberName }}</td>
            <td>
              <div :class="`group group-color-${(groupMap[row.rgid] && groupMap[row.rgid].color) || 0}`">
                {{ (groupMap[row.rgid] && groupMap[row.rgid].name) || '未分組' }}
              </div>
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

    <!--佣金異動紀錄 手機版開始-->
    <div class="info-table-m">
      <template v-if="tableData.length > 0">
        <div v-for="(row, index) in tableData" :key="index" class="info-card">
          <div class="card-item">
            <div class="label">返佣狀態</div>
            <div class="content">
              <template v-if="row.rebateStatus === 0">
                <div class="status yet"></div>
                未返佣
              </template>
              <template v-if="row.rebateStatus === 1">
                <div class="status already"></div>
                已返佣
              </template>
            </div>
          </div>
          <div class="card-item">
            <div class="label">交易日期</div>
            <div class="content">{{ formatDate(row.txDate) }}</div>
          </div>
          <div class="card-item">
            <div class="label">交易幣別</div>
            <div class="content">{{ currencyMap[row.currency] }}</div>
          </div>
          <div class="card-item">
            <div class="label">會員名稱</div>
            <div class="content">{{ row.memberName }}</div>
          </div>
          <div class="card-item" style="margin: 14px 0">
            <div class="label">推薦人組別</div>
            <div class="content">
              <div :class="`group group-color-${(groupMap[row.rgid] && groupMap[row.rgid].color) || 0}`">
                {{ (groupMap[row.rgid] && groupMap[row.rgid].name) || '未分組' }}
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="label">可返佣交易量</div>
            <div class="content">{{ row.canRebatePoint }}</div>
          </div>
          <div class="card-item">
            <div class="label">可返佣數量</div>
            <div class="content">{{ row.canRebatValue }}</div>
          </div>
        </div>
      </template>
      <div v-else style="margin: 0 auto;" class="empty-container">
        <img src="@/assets/img/common/empty.svg" alt="empty" />
      </div>
    </div>
    <!--佣金異動紀錄 手機版結束-->

    <!--Pages-->
    <Pager v-if="tableData.length > 0" :get-data="getRecommender" :pager="pager" />
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
        <div class="label">會員名稱：</div>
        <div class="content">
          <div class="key-search" style="width: 100%;">
            <img src="@/assets/img/common/icon-search.png" alt="search" />
            <input v-model="memberName" type="text" placeholder="輸入會員名稱關鍵字" @keyup.enter="getRecommender(true)" />
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="label">返佣狀態：</div>
        <div class="content">
          <el-select v-model="queryForm.rebateStatus" class="fdb-select" style="width: 100%;" popper-class="fdb-select">
            <el-option :label="$t('all')" :value="-1" />
            <el-option v-for="item in rebateStatusMap" :key="item.key" :label="item.name" :value="item.key" />
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="label">推薦人分組：</div>
        <div class="content">
          <el-select v-model="queryForm.rgid" class="fdb-select" style="width: 100%;" popper-class="fdb-select">
            <el-option :label="$t('all')" :value="-1" />
            <el-option
              v-for="item in availableGroups.map(item => ({ name: item.name, key: item.rgid, color: item.color }))"
              :key="item.key"
              :label="item.name"
              :value="item.key"
            />
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
            @change="getRecommender(true)"
          >
            <el-option label="交易日期" value="txDate" />
            <el-option label="可返佣交易量" value="canRebatePoint" />
            <el-option label="可返佣數量" value="canRebatValue" />
          </el-select>
        </div>
      </div>
      <div class="form-item">
        <div class="label">排序方式：</div>
        <div class="content">
          <el-select v-model="pager.order" class="fdb-select" style="width: 100%;" popper-class="fdb-select" @change="getRecommender(true)">
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
  <!--推薦人反佣 結束-->
</template>

<script>
import { currencyMap } from '@/utils/map.js'
import { getRecommender } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import moment from 'moment'
import CoinSelector from '@/components/common/CoinSelector'
import Sort from '@/components/common/Sort'
import TableFilter from '@/components/common/TableFilter'

export default {
  name: 'Recommender',
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
        rebateStatus: -1,
        rgid: -1
      },
      memberName: '',
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
      rebateStatusMap: [
        { name: '未返佣', key: 0 },
        { name: '已返佣', key: 1 }
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
    },
    groupList() {
      return this.$store.state.group.groupList
    },
    availableGroups() {
      return this.groupList.filter(item => item.name)
    },
    groupMap() {
      return this.availableGroups.reduce((obj, item) => {
        obj[item.rgid] = item
        return obj
      }, {})
    }
  },
  watch: {
    dateRange() {
      this.getRecommender(true)
    },
    currencyType() {
      this.getRecommender(true)
    },
    queryForm: {
      handler() {
        this.getRecommender(true)
      },
      deep: true
    }
  },
  created() {
    this.$store.dispatch('group/getRecGroup')
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
        const reqBody = {
          currencyType: this.currencyType,
          rebateStatus: this.queryForm.rebateStatus,
          rgid: this.queryForm.rgid,
          memberName: this.memberName,
          startDate: this.dateRange[0],
          endDate: this.dateRange[1],
          pageIndex: this.pager.pageIndex,
          pageSize: this.pager.pageSize,
          sortKey: this.pager.sortKey,
          order: this.pager.order
        }
        const res = await getRecommender(reqBody)
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
