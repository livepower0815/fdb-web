<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="recommend">
    <div class="recommend-body">
      <div class="controller">
        <div class="controller-store">
          <div class="label">選擇交易所：</div>
          <select v-model="storeSelect">
            <option :value="''" disabled>請選擇交易所</option>
            <option value="bybit">bybit</option>
          </select>
        </div>
        <div class="controller-btns">
          <div class="fdb-btn-info btn" style="margin-right: 8px;" @click="setGroupDialog.show = true">編輯組別</div>
          <div class="fdb-btn-primary btn">管理組別</div>
        </div>
      </div>
      <div class="list">
        <table class="list-table" cellspacing="0" cellpadding="0" border="0">
          <thead>
            <tr>
              <th><input type="checkbox" class="check" /></th>
              <th>會員名稱</th>
              <th style="text-align: center;">聯絡資訊</th>
              <th style="width: 156px;">交易幣別</th>
              <th style="text-align: center;">反佣交易量</th>
              <th style="text-align: center;">
                <span style="cursor: pointer;">
                  所在組別
                  <img src="@/assets/img/filter/filter.png" alt="filter-grid-solid" style="width: 16px;transform: translateY(2px);" />
                </span>
              </th>
              <th>
                <span style="cursor: pointer;">
                  加入日期
                  <img src="@/assets/img/sort/sort-arrows.png" alt="sort-arrows" style="width: 12px;transform: translateY(2px);" />
                </span>
              </th>
              <th>
                <span style="cursor: pointer;">
                  最後交易日
                  <img src="@/assets/img/sort/sort-arrows.png" alt="sort-arrows" style="width: 12px;transform: translateY(2px);" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(row, index) in tableData">
              <tr :key="`tr-1-${index}`">
                <td><input type="checkbox" class="check" /></td>
                <td>{{ row.name }}</td>
                <td style="text-align: center;">
                  <el-tooltip effect="dark" :content="row.email" placement="top">
                    <img class="connect-icon" src="@/assets/img/personal/email.png" alt="email" />
                  </el-tooltip>
                  <el-tooltip effect="dark" :content="`${row.areaCode} ${row.phone}`" placement="top">
                    <img class="connect-icon" src="@/assets/img/personal/phone.png" alt="phone" />
                  </el-tooltip>
                </td>
                <td>
                  <CoinIcon v-for="(coin, coinIndex) in row.coins" :key="coinIndex" class="coin" :coin-type="currencyMap[coin.type]" />
                </td>
                <td style="text-align: center;">
                  <span class="text-link" style="font-family: 'Avenir';" @click="row.showInfo = !row.showInfo">檢視資訊</span>
                </td>
                <td style="text-align: center;">
                  <div :class="`group group-color-${row.rgid}`">高中同學</div>
                </td>
                <td>2021-02-02 14:00</td>
                <td>2021-02-02 14:00</td>
              </tr>
              <tr v-if="row.showInfo" :key="`tr-2-${index}`" class="detail">
                <td colspan="8">
                  <div class="detail-content">
                    <div v-for="(coin, coinIndex) in row.coins" :key="coinIndex" class="coin-info">
                      <CoinIcon class="coin" :coin-type="currencyMap[coin.type]" />
                      <span>{{ currencyMap[coin.type] }} - {{ coin.value }}</span>
                    </div>
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

    <!-- 編輯推薦人組別彈窗 -->
    <el-dialog
      title="編輯推薦人組別"
      :visible.sync="setGroupDialog.show"
      width="488px"
      :show-close="false"
      custom-class="fbd-dialog set-group-dialog"
    >
      <div class="dialog-body">
        <div class="group-select">
          <div class="label">選擇組別</div>
          <select v-model="setGroupDialog.groupSelect">
            <option :value="''" disabled>請選擇現有組別</option>
            <option :value="0">組別1</option>
            <option :value="1">組別2</option>
            <option :value="2">組別3</option>
            <option :value="3">組別4</option>
          </select>
        </div>
        <div class="line">or</div>
        <div class="new-group">
          <div class="item">
            <div class="label">建立新組別</div>
            <input v-model="setGroupDialog.newGroupName" type="text" placeholder="輸入新組別名稱" />
          </div>
          <div class="item">
            <div class="label">選擇顏色</div>
            <div class="color-picker">
              <div
                v-for="(item, index) in 10"
                :key="index"
                :class="`color-item group-color-${index} ${setGroupDialog.activeColor === index ? 'active' : ''}`"
                @click="setGroupDialog.activeColor = index"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <span v-loading="setGroupDialog.isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" slot="footer">
        <div class="fdb-btn-default" style="margin-right: 12px;" @click="setGroupDialog.show = false">取消</div>
        <div class="fdb-btn-primary">綁定</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pager from '@/components/common/Pager'
import { currencyMap } from '@/utils/map.js'
import CoinIcon from '@/components/common/CoinIcon'

const getRecData = async () => {
  return [
    {
      name: 'kerry',
      rgid: 0,
      showInfo: false,
      coins: [
        { type: 1, value: '0.12345678' },
        { type: 2, value: '0.12345678' },
        { type: 3, value: '0.12345678' },
        { type: 4, value: '0.12345678' },
        { type: 5, value: '0.12345678' }
      ],
      email: 'markweiwebdesign@gmail.com',
      areaCode: '886',
      phone: '987654321'
    },
    {
      name: 'mark',
      rgid: 2,
      showInfo: false,
      coins: [
        { type: 1, value: '0.12345678' },
        { type: 2, value: '0.12345678' },
        { type: 5, value: '0.12345678' }
      ],
      email: 'markweiwebdesign@gmail.com',
      areaCode: '886',
      phone: '987654321'
    },
    {
      name: 'cat',
      rgid: 1,
      showInfo: false,
      coins: [
        { type: 2, value: '0.12345678' },
        { type: 3, value: '0.12345678' },
        { type: 4, value: '0.12345678' },
        { type: 5, value: '0.12345678' }
      ],
      email: 'markweiwebdesign@gmail.com',
      areaCode: '886',
      phone: '987654321'
    },
    {
      name: 'dog',
      rgid: 6,
      showInfo: false,
      coins: [
        { type: 1, value: '0.12345678' },
        { type: 3, value: '0.12345678' },
        { type: 5, value: '0.12345678' }
      ],
      email: 'markweiwebdesign@gmail.com',
      areaCode: '886',
      phone: '987654321'
    },
    {
      name: 'rrrr',
      rgid: 8,
      showInfo: false,
      coins: [
        { type: 1, value: '0.12345678' },
        { type: 2, value: '0.12345678' }
      ],
      email: 'markweiwebdesign@gmail.com',
      areaCode: '886',
      phone: '987654321'
    }
  ]
}

export default {
  name: 'Recommend',
  components: {
    Pager,
    CoinIcon
  },
  data() {
    return {
      isLoading: false,
      storeSelect: '',
      tableData: [],
      pager: {
        pageIndex: 1,
        pageSize: 10,
        totalCount: 57,
        sortKey: 'txDate',
        order: 'asc'
      },
      currencyMap,
      setGroupDialog: {
        show: false,
        isLoading: false,
        groupSelect: '',
        newGroupName: '',
        activeColor: null
      }
    }
  },
  watch: {
    'setGroupDialog.show'(value) {
      if (value) {
        this.setGroupDialog.groupSelect = ''
        this.setGroupDialog.newGroupName = ''
        this.setGroupDialog.activeColor = null
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
.set-group-dialog {
  .dialog-body {
    padding: 0 20px;
    .group-select {
      display: flex;
      align-items: center;
      .label {
        font-size: 18px;
        padding-right: 20px;
      }
      select {
        flex: 1;
        height: 42px;
        font-size: 16px;
        color: #c4c4c4;
        border: none;
        background: #252c3d;
        box-sizing: border-box;
        border-radius: 8px;
        padding-left: 14px;
      }
    }
    .line {
      position: relative;
      text-align: center;
      font-size: 16px;
      width: 100%;
      line-height: 70px;
      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        content: '';
        height: 1px;
        width: 43%;
        background-color: #ffffff;
      }
      &::after {
        position: absolute;
        right: 0;
        top: 50%;
        content: '';
        height: 1px;
        width: 43%;
        background-color: #ffffff;
      }
    }
    .new-group {
      .item {
        display: flex;
        margin-bottom: 30px;
        align-items: center;
        &:last-child {
          margin-bottom: 0px;
        }
        .label {
          width: 100px;
          text-align: end;
          font-size: 18px;
          padding-right: 20px;
        }
        input {
          flex: 1;
          height: 42px;
          border: none;
          box-sizing: border-box;
          border-radius: 8px;
          color: #c4c4c4;
          padding-left: 10px;
          background-color: #252c3d;
          font-size: 16px;
        }
        .color-picker {
          flex: 1;
          display: flex;
          justify-content: space-around;
          .color-item {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.2s;
            &:hover,
            &.active {
              transform: scale(1.4);
            }
          }
        }
      }
    }
  }
}

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
          font-size: 13px;
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
            td {
              padding: 0;
              margin: 0;
              text-align: start;
              background-color: #252c3d66;
              &:first-child {
                width: 36px;
                text-align: center;
              }
              .coin {
                width: 25px;
                margin-right: 6px;
              }
              .connect-icon {
                width: 20px;
                cursor: pointer;
                &:first-child {
                  margin-right: 6px;
                }
              }
              .group {
                text-align: center;
                color: #151923;
                border-radius: 12px;
                padding: 0px 8px;
                margin: 0 8px;
              }
            }
            &.detail {
              background-color: #05060866;
              td {
                background-color: #05060866;
                .detail-content {
                  display: flex;
                  .coin-info {
                    font-family: 'Avenir';
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    line-height: 14px;
                    margin: 0 13px;
                    .coin {
                      width: 20px;
                    }
                  }
                }
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
