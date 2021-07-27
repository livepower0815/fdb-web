<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="recommend">
    <div class="recommend-body">
      <div class="controller">
        <div class="controller-store">
          <div class="label">選擇交易所：</div>
          <select v-model="storeSelect">
            <option value="bybit">bybit</option>
          </select>
        </div>
        <div class="controller-btns">
          <div class="fdb-btn-info btn" style="margin-right: 8px;">編輯組別</div>
          <div class="fdb-btn-primary btn">管理組別</div>
        </div>
      </div>
      <div class="list">
        <table class="list-table" cellspacing="0" cellpadding="0" border="0">
          <thead>
            <tr>
              <th><input type="checkbox" class="check" /></th>
              <th>會員名稱</th>
              <th>聯絡資訊</th>
              <th>交易幣別</th>
              <th>反佣交易量</th>
              <th>所在組別</th>
              <th>加入日期</th>
              <th>最後交易日</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(row, index) in tableData">
              <tr :key="`tr-1-${index}`">
                <td><input type="checkbox" class="check" /></td>
                <td>{{ row.name }}</td>
                <td>聯絡資訊</td>
                <td>交易幣別</td>
                <td>
                  <span class="text-link" style="font-family: 'Avenir';" @click="row.showInfo = !row.showInfo">檢視資訊</span>
                </td>
                <td>高中同學</td>
                <td>2021-02-02 14:00</td>
                <td>2021-02-02 14:00</td>
              </tr>
              <tr v-if="row.showInfo" :key="`tr-2-${index}`" class="detail">
                <td colspan="8">
                  <div class="detail-content">
                    regmagmrealgmrealkgmelkgmrke這邊是內容<br />
                    regmagmrealgmrealkgmelkgmrke這邊是內容<br />
                    regmagmrealgmrealkgmelkgmrke這邊是內容<br />
                    regmagmrealgmrealkgmelkgmrke這邊是內容
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pager">
      <Pager :get-data="getRecommend" :pager="pager" />
    </div>
  </div>
</template>

<script>
import Pager from '@/components/common/Pager'

const getRecData = async () => {
  return [
    { name: 'kerry', rgid: 0, showInfo: false },
    { name: 'mark', rgid: 2, showInfo: false },
    { name: 'cat', rgid: 1, showInfo: false },
    { name: 'dog', rgid: 0, showInfo: false },
    { name: 'rrrr', rgid: 2, showInfo: false }
  ]
}

export default {
  name: 'Recommend',
  components: {
    Pager
  },
  data() {
    return {
      isLoading: false,
      storeSelect: 'bybit',
      tableData: [],
      pager: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 57,
        sortKey: 'txDate',
        order: 'asc'
      }
    }
  },
  created() {
    this.getRecommend()
  },
  methods: {
    async getRecommend() {
      this.isLoading = true
      try {
        const res = await getRecData()
        this.tableData = res
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  float: left;
  width: 100%;
  &-body {
    display: flex;
    flex-direction: column;
    height: auto;
    background: #151923;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
    border-radius: 6px;
    padding: 20px 0px;
    margin-bottom: 26px;
    .controller {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      box-sizing: border-box;
      &-store {
        display: flex;
        align-items: center;
        .label {
          font-family: 'Avenir';
          color: #62ffff;
          font-size: 14px;
        }
        select {
          height: 30px;
          width: 176px;
          font-size: 16px;
          color: #c4c4c4;
          border: none;
          background: #252c3d;
          box-sizing: border-box;
          border-radius: 5px;
          padding-left: 10px;
        }
      }
      &-btns {
        display: flex;
        .btn {
          padding: 0px 26px;
          font-size: 14px;
        }
      }
    }
    .list {
      &-table {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 10px;
        tr {
          height: 50px;
          th {
            text-align: start;
            &:first-child {
              width: 36px;
              text-align: center;
            }
          }
        }
        tbody {
          tr {
            min-height: 50px;
            background-color: #252c3d66;
            &.detail {
              background-color: #05060866;
              td {
                background-color: #05060866;
                .detail-content {
                  text-align: start;
                }
              }
            }
            td {
              padding: 0;
              margin: 0;
              text-align: start;
              background-color: #252c3d66;
              &:first-child {
                width: 36px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  // &-pager {

  // }
}
</style>
