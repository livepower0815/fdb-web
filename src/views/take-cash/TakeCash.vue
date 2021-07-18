<template>
  <div class="take-cash">
    <div class="page-title">會員出金申請</div>
    <div class="page-main">
      <!-- 流程開始 -->
      <div class="step">
        <div class="step-bar">
          <div class="line"></div>
          <div class="first finish">
            <span v-if="step === 1">1</span>
            <img v-else src="@/assets/img/common/correct.png" alt="correct" class="correct" />
          </div>
          <div class="second" :class="{ finish: step > 1 }">
            <span v-if="step < 3">2</span>
            <img v-else src="@/assets/img/common/correct.png" alt="correct" class="correct" />
          </div>
          <div class="third" :class="{ finish: step > 2 }">3</div>
        </div>
        <div class="step-title">
          <span v-if="step === 1">填寫出金帳戶資訊</span>
          <span v-if="step === 2">再次確認出金資訊與金額</span>
          <span v-if="step === 3">操作成功</span>
        </div>

        <!-- 第一步 -->
        <div v-if="step === 1" class="step-body">
          <div class="form">
            <div class="form-item">
              <div class="title">選擇出金幣別</div>
              <div class="value">
                <CoinIcon
                  class="coin-icon"
                  :class="{ active: form.currencySelect === '1' }"
                  coin-type="BTC"
                  @click="form.currencySelect = currencyIdMap.BTC"
                />
                <CoinIcon
                  class="coin-icon"
                  :class="{ active: form.currencySelect === '5' }"
                  coin-type="USDT"
                  @click="form.currencySelect = currencyIdMap.USDT"
                />
                <CoinIcon
                  class="coin-icon"
                  :class="{ active: form.currencySelect === '2' }"
                  coin-type="ETH"
                  @click="form.currencySelect = currencyIdMap.ETH"
                />
                <CoinIcon
                  class="coin-icon"
                  :class="{ active: form.currencySelect === '3' }"
                  coin-type="XRP"
                  @click="form.currencySelect = currencyIdMap.XRP"
                />
                <CoinIcon
                  class="coin-icon"
                  :class="{ active: form.currencySelect === '4' }"
                  coin-type="EOS"
                  @click="form.currencySelect = currencyIdMap.EOS"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="title">可出金數量</div>
              <div class="value">20.94848890</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div class="value">1LmjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb</div>
            </div>
            <div class="form-item">
              <div class="title">出金數量</div>
              <div class="value">
                <input v-model="form.withdrawAmount" class="input" type="text" placeholder="請輸入出金金額" />
              </div>
            </div>
          </div>
          <div class="operation">
            <div class="fdb-btn-default" style="margin-right: 12px;">取消出金</div>
            <div class="fdb-btn-primary" @click="step = 2">下一步</div>
          </div>
        </div>

        <!-- 第二步 -->
        <div v-if="step === 2" class="step-body">
          <div class="form">
            <div class="form-item">
              <div class="title">選擇出金幣別</div>
              <div class="value">
                <CoinIcon v-if="form.currencySelect === '1'" coin-type="BTC" class="coin-icon active" />
                <CoinIcon v-if="form.currencySelect === '2'" coin-type="ETH" class="coin-icon active" />
                <CoinIcon v-if="form.currencySelect === '3'" coin-type="XRP" class="coin-icon active" />
                <CoinIcon v-if="form.currencySelect === '4'" coin-type="EOS" class="coin-icon active" />
                <CoinIcon v-if="form.currencySelect === '5'" coin-type="USDT" class="coin-icon active" />
              </div>
            </div>
            <div class="form-item">
              <div class="title">可出金數量</div>
              <div class="value">20.94848890</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div class="value">1LmjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb</div>
            </div>
            <div class="form-item">
              <div class="title">出金數量</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
          </div>
          <div class="red-text">
            注意：親愛的會員您好，請再次確認您的交易地址是否正確，若無誤將進行出金申請提交
          </div>
          <div class="operation">
            <div class="fdb-btn-default" style="margin-right: 12px;" @click="step = 1">上一步</div>
            <div class="fdb-btn-primary" @click="submit">提出申請</div>
          </div>
        </div>

        <!-- 第三步 -->
        <div v-if="step === 3" class="step-body">
          <div class="info-text">
            預計48小時內完成出金，若有問題歡迎透過 Wechat 或 QQ進行聯絡
          </div>
          <div class="operation">
            <div class="fdb-btn-default" style="margin-right: 12px;" @click="$router.push({ name: 'Dashboard' })">回到列表</div>
            <div class="fdb-btn-primary" @click="step = 1">再申請一次</div>
          </div>
          <div class="form block">
            <div class="form-item">
              <div class="title">申請單號</div>
              <div class="value">abcd456789</div>
            </div>
            <div class="form-item">
              <div class="title">出金幣別</div>
              <div class="value">{{ currencyMap[form.currencySelect] }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div class="value">1LmjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb</div>
            </div>
            <div class="form-item">
              <div class="title">出金數量</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
          </div>
        </div>
        <!-- 流程結束 -->
      </div>

      <!-- 交易所開始 -->
      <StoreSelect />
      <!-- 交易所結束 -->
    </div>
  </div>
</template>

<script>
import { currencyIdMap, currencyMap } from '@/utils/map.js'
import StoreSelect from '@/components/StoreSelect'
import CoinIcon from '@/components/common/CoinIcon'

export default {
  name: 'TakeCash',
  components: {
    StoreSelect,
    CoinIcon
  },
  data() {
    return {
      step: 1,
      exchangeLoading: false,
      exchangeList: [],
      form: {
        currencySelect: '1',
        withdrawAmount: ''
      },
      currencyIdMap: currencyIdMap,
      currencyMap: currencyMap
    }
  },
  mounted() {
    this.getExchangeInfo()
  },
  methods: {
    async submit() {
      this.step = 3
    },
    // 交易所
    async getExchangeInfo() {
      // this.exchangeLoading = true
      // try {
      //   const queryData = {
      //     // exchangeId: '', // 目前寫死不傳
      //     currencyType: 0,
      //     startDate: '',
      //     endDate: '',
      //     pageIndex: 0,
      //     pageSize: 0,
      //     sortKey: '',
      //     order: ''
      //   }
      //   const res = await getExchangeInfo(queryData)
      //   this.exchangeList = res
      // } catch (error) {
      //   console.error(error)
      // }
      // this.exchangeLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.red-text {
  color: #eb5757;
  text-align: center;
  font-size: 16px;
}
.info-text {
  text-align: center;
  font-size: 16px;
}
.take-cash {
  padding: 2vw 4vw;
  .page-title {
    font-size: 30px;
    line-height: 44px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .page-main {
    display: flex;
    .step {
      width: 46vw;
      background-color: #151923;
      margin-right: 8px;
      padding: 3vw 4vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 6px;
      &-bar {
        position: relative;
        width: 80%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 2% 0;
        .line {
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
        }
        > div:not(.line) {
          width: 40px;
          height: 40px;
          background-color: #ffffff;
          color: #3ea9cc;
          border: 2px solid #f9fafc;
          box-sizing: border-box;
          border-radius: 50%;
          font-size: 24px;
          line-height: 34px;
          text-align: center;
          z-index: 10;
          &.finish {
            background-image: linear-gradient(180deg, #62ffff, #3ea9cc);
            color: #ffffff;
          }
        }
        .correct {
          width: 22px;
        }
      }
      &-title {
        font-size: 22px;
        font-weight: bold;
        line-height: 36px;
        text-align: center;
        margin-top: 6%;
        margin-bottom: 3%;
        letter-spacing: 0.05em;
      }
      &-body {
        width: 100%;
        .form {
          &.block {
            background-color: #050608;
            padding: 1px 0;
            margin-bottom: 60px;
          }
          .form-item {
            display: flex;
            align-items: center;
            margin: 40px 0;
            .title {
              width: 24%;
              text-align: end;
              font-size: 18px;
              line-height: 27px;
            }
            .value {
              flex: 1;
              margin-left: 20px;
              font-size: 18px;
              .coin-icon {
                width: 34px;
                margin-right: 16px;
                border-radius: 4px;
                cursor: pointer;
                &:hover {
                  box-shadow: 0 0 0 1px #62ffff;
                }
                &.active {
                  box-shadow: 0 0 0 1px #62ffff;
                }
              }
              .input {
                width: calc(100% - 89px);
                height: 46px;
                border: none;
                font-size: 18px;
                box-sizing: border-box;
                border-radius: 8px;
                color: #c4c4c4;
                padding-left: 10px;
                background-color: #252c3d;
              }
            }
          }
        }
        .operation {
          text-align: center;
          margin-top: 60px;
          margin-bottom: 60px;
        }
      }
    }
  }
}
</style>
