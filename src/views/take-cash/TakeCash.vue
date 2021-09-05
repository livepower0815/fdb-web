<template>
  <div class="take-cash">
    <div class="page-title">會員出金申請</div>
    <div class="page-main">
      <!-- 流程開始 -->
      <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="step">
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
          <span v-if="step === 1 && canTrade">
            填寫出金帳戶資訊
          </span>
          <router-link v-if="step === 1 && !canTrade" :to="{ name: 'Personal', query: { tab: 'take-cash-adress' } }">
            <span class="text-red" style="text-decoration: underline;">尚無可交易之幣種<br />請至出金申請地址進行設定</span>
          </router-link>
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
                  v-for="(coin, index) in storeData"
                  :key="index"
                  class="coin-icon"
                  :class="{ active: form.currencySelect === coin.currencyType }"
                  :coin-type="currencyMap[coin.currencyType]"
                  :disabled="coin.bindStatus === 0 || !(Number(coin.coinCount) > Number(coin.coinminiAmount))"
                  @click="selectCoin(coin)"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="title">手續費</div>
              <div v-if="selectedCoin.coinfeeAmount" class="value">
                {{ selectedCoin.coinfeeAmount }}
              </div>
              <div v-else class="value" style="opacity: 0.3;">尚未選擇</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div v-if="adressData[currencyMap[form.currencySelect]]" class="value">
                {{ adressData[currencyMap[form.currencySelect]] }}
              </div>
              <div v-else class="value" style="opacity: 0.3;">尚未選擇</div>
            </div>
            <div class="form-item">
              <div class="title">可出金數量</div>
              <div v-if="selectedCoin.coinCount" class="value">{{ selectedCoin.coinCount }}</div>
              <div v-else class="value" style="opacity: 0.3;">尚未選擇</div>
            </div>
            <div class="form-item">
              <div class="title">最低出金限制</div>
              <div v-if="selectedCoin.coinminiAmount" class="value">
                {{ selectedCoin.coinminiAmount }}
              </div>
              <div v-else class="value" style="opacity: 0.3;">尚未選擇</div>
            </div>
            <div class="form-item" :class="{ 'click-disabled': !form.currencySelect }">
              <div class="title">出金數量</div>
              <div class="value">
                <input v-model="form.withdrawAmount" class="input" type="number" placeholder="請輸入出金金額" />
              </div>
            </div>
          </div>
          <div class="operation">
            <div class="fdb-btn-default" style="margin-right: 12px;line-height: 30px;" @click="$router.push({ name: 'Dashboard' })">
              取消出金
            </div>
            <div class="fdb-btn-primary" :class="{ disabled: !form.currencySelect }" @click="toStep2">下一步</div>
          </div>
        </div>

        <!-- 第二步 -->
        <div v-if="step === 2" class="step-body">
          <div class="form">
            <div class="form-item">
              <div class="title">選擇出金幣別</div>
              <div class="value">
                <CoinIcon :coin-type="currencyMap[form.currencySelect]" class="coin-icon active" />
              </div>
            </div>
            <div class="form-item">
              <div class="title">可出金數量</div>
              <div class="value">{{ selectedCoin.coinCount }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div class="value">{{ adressData[currencyMap[form.currencySelect]] }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金數量</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">手續費</div>
              <div class="value">{{ selectedCoin.coinfeeAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">實拿數量</div>
              <div class="value" style="color: #62ffff;">{{ form.withdrawAmount - selectedCoin.coinfeeAmount }}</div>
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
          <div class="info-text">預計48 小時內完成出金<br />若有任何問題請聯繫返多寶客服中心</div>
          <div class="operation finish">
            <div class="fdb-btn-default" style="margin-right: 12px;" @click="$router.push({ name: 'Dashboard' })">
              回到列表
            </div>
            <div class="fdb-btn-primary" @click="tryAgain">再申請一筆</div>
          </div>
          <div class="form block">
            <div class="form-item">
              <div class="title">申請單號</div>
              <div class="value">{{ orderNumber }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金幣別</div>
              <div class="value">{{ selectedCoinName }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金地址</div>
              <div class="value">{{ adressData[currencyMap[form.currencySelect]] }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金數量</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">出金手續費</div>
              <div class="value">{{ selectedCoin.coinfeeAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">實拿數量</div>
              <div class="value" style="color: #62ffff;">{{ form.withdrawAmount - selectedCoin.coinfeeAmount }}</div>
            </div>
          </div>
        </div>
        <!-- 流程結束 -->
      </div>

      <!-- 交易所開始 -->
      <StoreSelect ref="storeRef" :hide-info="deviceWidth < 600" @getStoreInfo="getStoreInfo" />
      <!-- 交易所結束 -->
    </div>
  </div>
</template>

<script>
import { currencyMap } from '@/utils/map.js'
import StoreSelect from '@/components/StoreSelect'
import CoinIcon from '@/components/common/CoinIcon'
import { getAllWithdrawalAddress } from '@/apis/user.js'
import { withdrawalOrder } from '@/apis/dashboard.js'

export default {
  name: 'TakeCash',
  components: {
    StoreSelect,
    CoinIcon
  },
  data() {
    return {
      isLoading: false,
      step: 1,
      exchangeLoading: false,
      form: {
        currencySelect: '',
        withdrawAmount: ''
      },
      currencyMap: currencyMap,
      storeData: [],
      adressData: {},
      orderNumber: ''
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    canTrade() {
      return this.storeData.some(coin => coin.bindStatus > 0)
    },
    selectedCoin() {
      return this.storeData.find(item => item.currencyType === this.form.currencySelect) || {}
    },
    selectedCoinName() {
      return this.currencyMap[this.form.currencySelect]
    }
  },
  mounted() {
    this.getAllWithdrawalAddress()
  },
  methods: {
    getStoreInfo(storeData) {
      this.storeData = storeData
    },
    // 取得出金地址資訊
    async getAllWithdrawalAddress() {
      this.isLoading = true
      try {
        const res = await getAllWithdrawalAddress()
        for (const item of res.data) {
          const key = currencyMap[item.cid]
          this.adressData[key] = item.coinAddress
        }
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    selectCoin(coinData) {
      this.form.currencySelect = coinData.currencyType
    },
    toStep2() {
      if (!this.form.currencySelect) {
        this.$message.error('請輸入出金幣別')
        return false
      }
      if (!this.form.withdrawAmount) {
        this.$message.error('請輸入出金數量')
        return false
      }
      if (!(Number(this.form.withdrawAmount) > 0)) {
        this.$message.error('請輸入出金數量')
        return false
      }
      if (Number(this.form.withdrawAmount) > Number(this.selectedCoin.coinCount)) {
        this.$message.error('超過可出金數量')
        return false
      }
      // 的提示為
      // 低於BTC最低出金數量 0.0005
      // ....依據幣種不同呈現不同數量跟說明
      if (Number(this.form.withdrawAmount) < Number(this.selectedCoin.coinminiAmount)) {
        this.$message.error(`低於 ${this.selectedCoinName} 最低出金數量 ${this.selectedCoin.coinminiAmount}`)
        return false
      }
      this.step = 2
    },
    resetForm() {
      this.form.currencySelect = ''
      this.form.withdrawAmount = ''
      this.orderNumber = ''
    },
    async submit() {
      this.isLoading = true
      try {
        const postData = {
          storeType: Number(this.form.currencySelect),
          rebatchangevalue: Number(this.form.withdrawAmount)
        }
        const res = await withdrawalOrder(postData)
        this.orderNumber = res.data.bwoOrderID
        this.$message.success('申請成功')
        this.step = 3
        this.$refs.storeRef.getExchangeInfo()
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    tryAgain() {
      this.step = 1
      this.resetForm()
    }
  }
}
</script>

<style lang="scss" scoped>
.red-text {
  color: #eb5757;
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
}
.info-text {
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
}
.take-cash {
  max-width: 1440px;
  padding: 2% 4%;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    padding: 2% 6%;
  }
  .page-title {
    font-size: 30px;
    line-height: 44px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .page-main {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
    }
    .step {
      width: 50%;
      background-color: #151923;
      margin-right: 8px;
      padding: 4% 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 6px;
      @media screen and (max-width: 1370px) {
        width: 52%;
      }
      @media screen and (max-width: 960px) {
        width: 59%;
        padding: 4% 3%;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
        margin-right: 0px;
        box-sizing: border-box;
        margin-bottom: 16px;
      }
      &-bar {
        position: relative;
        width: 80%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 2% 0;
        @media screen and (max-width: 500px) {
          width: 100%;
        }
        .line {
          position: absolute;
          width: 100%;
          height: 4px;
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
          @media screen and (max-width: 500px) {
            width: 30px;
            height: 30px;
            font-size: 16px;
            line-height: 24px;
          }
          &.finish {
            background-image: linear-gradient(180deg, #62ffff, #3ea9cc);
            color: #ffffff;
          }
        }
        .correct {
          width: 22px;
          @media screen and (max-width: 500px) {
            width: 16px;
          }
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
        @media screen and (max-width: 960px) {
          font-size: 20px;
        }
      }
      &-body {
        width: 100%;
        .form {
          &.block {
            background-color: #050608;
            padding: 1px 0;
            margin-bottom: 60px;
            @media screen and (max-width: 500px) {
              padding: 1px 12px;
              .form-item {
                margin: 16px 0;
              }
            }
          }
          .form-item {
            display: flex;
            align-items: center;
            margin: 40px 0;
            @media screen and (max-width: 1370px) {
              margin: 34px 0;
            }
            @media screen and (max-width: 960px) {
              margin: 30px 0;
            }
            @media screen and (max-width: 500px) {
              flex-direction: column;
              align-items: flex-start;
            }
            .title {
              width: 24%;
              text-align: end;
              font-size: 18px;
              line-height: 27px;
              @media screen and (max-width: 1370px) {
                font-size: 16px;
              }
              @media screen and (max-width: 960px) {
                font-size: 14px;
              }
              @media screen and (max-width: 500px) {
                width: 50%;
                text-align: start;
                padding-bottom: 12px;
              }
            }
            .value {
              flex: 1;
              margin-left: 20px;
              font-size: 18px;
              @media screen and (max-width: 1370px) {
                font-size: 16px;
              }
              @media screen and (max-width: 960px) {
                font-size: 14px;
              }
              @media screen and (max-width: 500px) {
                width: 100%;
                margin-left: 0px;
              }
              .coin-icon {
                width: 34px;
                margin-right: 16px;
                border-radius: 4px;
                cursor: pointer;
                @media screen and (max-width: 960px) {
                  width: 30px;
                }
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
                @media screen and (max-width: 1370px) {
                  height: 42px;
                  font-size: 16px;
                }
                @media screen and (max-width: 960px) {
                  height: 34px;
                  font-size: 14px;
                }
                @media screen and (max-width: 500px) {
                  width: 100%;
                }
              }
            }
          }
        }
        .operation {
          text-align: center;
          margin: 60px 0;
          @media screen and (max-width: 1370px) {
            margin: 45px 0;
          }
          @media screen and (max-width: 960px) {
            margin: 30px 0;
          }
          @media screen and (max-width: 500px) {
            margin: 60px 0;
          }
          &.finish {
            @media screen and (max-width: 500px) {
              margin: 30px 0;
            }
          }
        }
      }
    }
  }
}
</style>
