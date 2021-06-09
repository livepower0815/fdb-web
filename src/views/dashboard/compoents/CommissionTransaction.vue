<template>
  <!--佣金異動紀錄 開始-->
  <div class="outline">
    <div class="refund-detail-filter-block">
      <!-- 幣別過濾icons -->
      <div class="refund-detail-filter-main">
        <a href="" class="icon" :class="{ active: currencyType === 0 }" @click.prevent="currencyType = 0">
          <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.336 0.32H6.288L10.608 11.68H8.336L7.28 8.848H3.312L2.272 11.68H0L4.336 0.32ZM6.88 7.296L5.312 2.832L3.68 7.296H6.88Z"
              fill="#ffffff"
            />
            <path
              d="M11.63 0H13.774V8.992C13.774 9.30133 13.8487 9.54133 13.998 9.712C14.1473 9.88267 14.3607 9.968 14.638 9.968C14.766 9.968 14.9047 9.94667 15.054 9.904C15.214 9.86133 15.3633 9.808 15.502 9.744L15.79 11.376C15.502 11.5147 15.166 11.6213 14.782 11.696C14.398 11.7707 14.0513 11.808 13.742 11.808C13.07 11.808 12.5473 11.632 12.174 11.28C11.8113 10.9173 11.63 10.4053 11.63 9.744V0Z"
              fill="#ffffff"
            />
            <path
              d="M16.7081 0H18.8521V8.992C18.8521 9.30133 18.9268 9.54133 19.0761 9.712C19.2255 9.88267 19.4388 9.968 19.7161 9.968C19.8441 9.968 19.9828 9.94667 20.1321 9.904C20.2921 9.86133 20.4415 9.808 20.5801 9.744L20.8681 11.376C20.5801 11.5147 20.2441 11.6213 19.8601 11.696C19.4761 11.7707 19.1295 11.808 18.8201 11.808C18.1481 11.808 17.6255 11.632 17.2521 11.28C16.8895 10.9173 16.7081 10.4053 16.7081 9.744V0Z"
              fill="#ffffff"
            />
          </svg>
        </a>
        <a href="" class="icon" :class="{ active: currencyType === 1 }" @click.prevent="currencyType = 1">
          <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3779 11.06C12.9327 10.4707 12.2609 10.0659 11.3626 9.84594C12.5066 9.24861 13.0093 8.23481 12.8713 6.80436C12.8251 6.28564 12.6851 5.83609 12.4508 5.45504C12.2164 5.0739 11.9 4.76749 11.5006 4.5357C11.1014 4.30361 10.6673 4.12694 10.1992 4.00514C9.73103 3.88333 9.1935 3.79489 8.58699 3.73994V0.769287H6.81374V3.6574C6.50667 3.6574 6.03839 3.66525 5.40893 3.68098V0.769287H3.63544V3.73994C3.38202 3.74782 3.00973 3.75183 2.51842 3.75183L0.0771484 3.73994V5.67325H1.3553C1.93878 5.67325 2.28041 5.94051 2.38019 6.47483V9.85812C2.45707 9.85812 2.51842 9.86217 2.56452 9.87001H2.38019V14.6087C2.31885 15.0094 2.09624 15.2099 1.71234 15.2099H0.434268L0.0772291 17.3672H2.3804C2.52629 17.3672 2.73727 17.3692 3.01377 17.3728C3.2901 17.3767 3.49729 17.3787 3.63552 17.3787V20.3847H5.4093V17.4141C5.73165 17.4221 6.19993 17.426 6.8141 17.426V20.3847H8.58739V17.3787C9.21705 17.3473 9.77552 17.2887 10.2628 17.202C10.7503 17.1152 11.2168 16.9799 11.662 16.7951C12.1071 16.6105 12.4794 16.3805 12.7788 16.1054C13.0783 15.8306 13.3257 15.4807 13.5218 15.0563C13.7172 14.6318 13.8421 14.1406 13.8957 13.5825C13.9959 12.4904 13.8231 11.6495 13.3779 11.06ZM5.44342 5.80256C5.49719 5.80256 5.6488 5.80058 5.89831 5.79662C6.14794 5.79257 6.35514 5.78869 6.52018 5.78473C6.68527 5.78085 6.90792 5.79067 7.18824 5.81425C7.46844 5.83782 7.70448 5.86933 7.89635 5.90855C8.08822 5.94778 8.29953 6.01264 8.52964 6.10302C8.76015 6.19332 8.94427 6.3034 9.0823 6.43304C9.2206 6.56269 9.33765 6.72781 9.43345 6.92822C9.52952 7.1286 9.57752 7.35845 9.57752 7.61775C9.57752 7.83782 9.54304 8.03827 9.47402 8.21912C9.40513 8.39984 9.30123 8.55116 9.16321 8.67297C9.02514 8.79481 8.88284 8.901 8.73695 8.9913C8.59123 9.0816 8.40488 9.15435 8.17849 9.20931C7.95213 9.26435 7.75445 9.30758 7.58565 9.33895C7.41673 9.37042 7.20567 9.39209 6.95229 9.40382C6.69886 9.41555 6.50687 9.42356 6.37643 9.42744C6.24587 9.43132 6.06743 9.43132 5.84087 9.42744C5.61428 9.42356 5.48202 9.42149 5.44354 9.42149V5.80252H5.44342V5.80256ZM10.286 13.8302C10.2128 14.0111 10.1189 14.1683 10.0039 14.302C9.88858 14.4354 9.73688 14.5534 9.54888 14.6554C9.36093 14.7577 9.17841 14.8401 9.00199 14.903C8.82533 14.9661 8.6122 15.0208 8.36294 15.0682C8.1131 15.1153 7.89445 15.1485 7.70617 15.1683C7.51817 15.188 7.29371 15.2037 7.03259 15.2156C6.77167 15.2271 6.5681 15.2331 6.42229 15.2331C6.2764 15.2331 6.09212 15.231 5.86947 15.2271C5.64671 15.2234 5.50481 15.2215 5.44334 15.2215V11.2369C5.50469 11.2369 5.68704 11.233 5.99035 11.225C6.29371 11.2171 6.54116 11.2134 6.73311 11.2134C6.92502 11.2134 7.18997 11.225 7.5279 11.2488C7.86549 11.2722 8.14957 11.3074 8.38008 11.3546C8.6103 11.4018 8.86155 11.4744 9.13429 11.5727C9.40675 11.6709 9.62758 11.7907 9.79654 11.9322C9.96546 12.0739 10.1074 12.2544 10.2225 12.4745C10.3379 12.6945 10.3955 12.946 10.3955 13.229C10.3954 13.4493 10.359 13.6493 10.286 13.8302Z"
              fill="#C4C4C4"
            />
          </svg>
        </a>
        <a href="" class="icon" :class="{ active: currencyType === 2 }" @click.prevent="currencyType = 2">
          <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.55509 6.62067L7.59657 20L1.59961 16.0388M3.55509 6.62067L1.59961 16.0388M3.55509 6.62067L7.59657 0.800049V4.88252L1.59961 16.0388M1.59961 16.0388H13.5996M13.5996 16.0388L7.60264 4.88252V0.800049L11.6441 6.62067M13.5996 16.0388L11.6441 6.62067M13.5996 16.0388L7.60264 20L11.6441 6.62067"
              stroke="#C4C4C4"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href="" class="icon" :class="{ active: currencyType === 3 }" @click.prevent="currencyType = 3">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.457 7.13447C5.50488 7.13447 3.69102 5.38719 0.714015 2.21523C0.324573 1.80024 0.351166 1.15354 0.773411 0.770825C1.19572 0.388047 1.85374 0.414186 2.24318 0.829186C4.65126 3.39501 6.4162 5.09015 7.457 5.09015C8.4978 5.09015 10.2627 3.39501 12.6708 0.829186C13.0603 0.414251 13.7183 0.388047 14.1406 0.770825C14.5628 1.1536 14.5894 1.80024 14.2 2.21523C11.223 5.38719 9.40912 7.13447 7.457 7.13447Z"
              fill="#C4C4C4"
            />
            <path
              d="M13.2607 15.8705C12.9804 15.8706 12.8749 15.7599 12.6699 15.5414C10.2618 12.9756 8.49683 11.2804 7.45604 11.2804C6.41524 11.2804 4.65036 12.9755 2.24221 15.5414C1.85277 15.9563 1.19475 15.9825 0.772435 15.5997C0.350189 15.217 0.323596 14.5703 0.713039 14.1553C3.69005 10.9834 5.50391 9.23608 7.45604 9.23608C9.40816 9.23608 11.222 10.9834 14.199 14.1553C14.8891 14.9048 14.2019 15.9466 13.2607 15.8705Z"
              fill="#C4C4C4"
            />
          </svg>
        </a>
        <a href="" class="icon" :class="{ active: currencyType === 4 }" @click.prevent="currencyType = 4">
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.0513 12.6211C15.1435 12.2832 15.1049 11.9161 14.9291 11.5987L9.23405 1.31363C8.99326 0.878983 8.53573 0.609131 8.03883 0.609131C7.54467 0.609131 7.08897 0.876007 6.84727 1.30676L1.07602 11.5909C0.811208 12.0628 0.850118 12.6469 1.17513 13.0798L6.82896 20.6102C7.08691 20.954 7.4918 21.1563 7.92141 21.1563H8.15579C8.5886 21.1563 8.99601 20.9512 9.25373 20.6033L10.2915 19.23C10.5579 18.8705 10.4787 18.3626 10.1157 18.101C9.75956 17.8444 9.26311 17.9215 9.00173 18.2745L8.03814 19.5473L4.04462 14.2281L7.73922 15.5993C7.83787 15.6359 7.94155 15.6544 8.04501 15.6544C8.14869 15.6544 8.2526 15.6359 8.35125 15.5993L11.8756 14.2899L11.1287 15.2608C10.8548 15.6306 10.9472 16.1546 11.3313 16.4084C11.6872 16.6432 12.1646 16.559 12.4185 16.2164L14.7863 13.1331C14.9298 12.9969 15.0231 12.8156 15.0513 12.6211ZM7.16244 13.5105L4.09795 12.373L7.16244 11.2357V13.5105ZM8.92025 11.2334L11.987 12.373L8.92025 13.5126V11.2334ZM12.6137 10.7307L8.92025 9.35837V4.06067L12.6137 10.7307ZM7.16244 4.02519V9.36066L3.38063 10.7642L7.16244 4.02519Z"
              fill="#C4C4C4"
            />
          </svg>
        </a>
        <a href="" class="icon" :class="{ active: currencyType === 5 }" @click.prevent="currencyType = 5">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8436 17.162V10.5455C16.0314 10.323 19.1823 9.35648 19.1825 8.19843C19.1825 7.04064 16.0314 6.07427 11.8439 5.85149L11.8436 4.00633H17.0721V0.16626H2.77552V4.00633H8.00343V5.86036C3.89256 6.09861 0.817383 7.05466 0.817383 8.19843C0.817383 9.34246 3.89256 10.2986 8.00343 10.5365V17.162H11.8436Z"
              fill="#C4C4C4"
            />
            <path
              d="M11.8444 6.27222V8.51834C11.2539 8.54797 10.6362 8.56425 10.0003 8.56425C9.30936 8.56425 8.64064 8.54533 8.00447 8.50987V6.71657H8.00407V6.2791C4.47487 6.44895 1.8623 7.0592 1.8623 7.78613C1.8623 8.64481 5.5058 9.34038 10.0004 9.34038C14.4948 9.34038 18.1386 8.64481 18.1386 7.78613C18.1384 7.04849 15.4503 6.43162 11.8444 6.27222Z"
              fill="#F2F2F2"
            />
          </svg>
        </a>
      </div>

      <!-- 日期選擇器 -->
      <div class="refund-detail-filter-date">
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
    <div id="refund-detail-web">
      <table class="refund-detail-info-block" cellpadding="0" Border="0" id="refund-detail-info-1">
        <thead class="refund-detail-info-title">
          <tr>
            <th @click="sortData('txDate')">交易日期</th>
            <th @click="sortData('currency')">交易幣別</th>
            <th @click="sortData('changeType')">異動類別</th>
            <th @click="sortData('changeNum')">異動數量</th>
            <th @click="sortData('restNum')">剩餘數量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index" class="refund-detail-info-main">
            <td>{{ formatDate(row.txDate) }}</td>
            <td>{{ currencyMap[row.currency] }}</td>
            <td>{{ formatChangeType(row.changeType) }}</td>
            <td>{{ row.changeNum }}</td>
            <td>{{ row.restNum }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--佣金異動紀錄 手機版開始-->
    <div class="outline" id="refund-detail-mobile">
      <div class="outblock">
        <div class="mobile-refund-detail-info-block">
          <div class="outline">
            <button href="javascript:void(0)" class="mobile-refund-btn">篩選</button>
            <button href="javascript:void(0)" class="mobile-refund-btn">排序</button>
          </div>

          <div class="outline">
            <div v-for="(row, index) in tableData" :key="index" class="mobile-refund-main-block">
              <div class="block">
                <span class="left">交易日期</span>
                <span class="right">{{ formatDate(row.txDate) }}</span>
              </div>
              <div class="block">
                <span class="left">交易幣別</span>
                <span class="right">{{ currencyMap[row.currency] }}</span>
              </div>
              <div class="block">
                <span class="left">異動類別</span>
                <span class="right">{{ formatChangeType(row.changeType) }}</span>
              </div>
              <div class="block">
                <span class="left">異動數量</span>
                <span class="right red">{{ row.changeNum }}</span>
              </div>
              <div class="block">
                <span class="left">剩餘數量</span>
                <span class="right">{{ row.restNum }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--佣金異動紀錄 手機版結束-->
    <!--Pages-->
    <Pager :get-data="getCommissionTransaction" :pager="pager" />
    <!--Pages-->
  </div>
  <!--佣金異動紀錄 結束-->
</template>

<script>
import { getCommissionTransaction } from '@/apis/dashboard.js'
import Pager from '@/components/common/Pager'
import { currencyMap } from '@/utils/map.js'
import moment from 'moment'

const changeTypeMap = ['個人', '推薦人', '出金']

export default {
  name: 'CommissionTransaction',
  components: {
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

<style scoped></style>
