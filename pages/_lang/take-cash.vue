<template>
  <div class="take-cash">
    <div class="page-title">{{ $t('member_withdraw_application') }}</div>
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
          <span v-if="step === 1 && canTrade">{{ $t('fill_withdrawal_account_information') }}</span>
          <router-link
            v-if="step === 1 && !canTrade"
            :to="{ name: 'lang-personal', query: { tab: 'take-cash-adress' }, params: { lang: $route.params.lang } }"
          >
            <span class="text-red" style="text-decoration: underline">
              {{ $t('no_tradable_currency') }}<br />{{ $t('go_to_withdrawal_application_address') }}
            </span>
          </router-link>
          <span v-if="step === 2">{{ $t('reconfirm_withdrawal_information_amount') }}</span>
          <span v-if="step === 3">{{ $t('operation_success') }}</span>
        </div>

        <!-- 第一步 -->
        <div v-if="step === 1" class="step-body">
          <div class="form">
            <div class="form-item">
              <div class="title">{{ $t('select_withdraw_coin_type') }}</div>
              <div class="value">
                <CommonCoinIcon
                  v-for="(coin, index) in storeData"
                  :key="index"
                  class="coin-icon"
                  :class="{ active: form.currencySelect === coin.currencyType }"
                  :coin-type="$map.currencyMap[coin.currencyType]"
                  @click="selectCoin(coin)"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdraw_adress') }}</div>
              <div v-if="adressData[$map.currencyMap[form.currencySelect]]" class="value">
                {{ adressData[$map.currencyMap[form.currencySelect]] }}
              </div>
              <div v-else class="value" style="opacity: 0.3">{{ $t('not_yet_selected_unbound') }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('amount_can_be_withdrawn') }}</div>
              <div v-if="selectedCoin.coinCount" class="value">{{ selectedCoin.coinCount }}</div>
              <div v-else class="value" style="opacity: 0.3">{{ $t('not_yet_selected') }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('min_withdraw') }}</div>
              <div v-if="selectedCoin.coinminiAmount" class="value">
                {{ selectedCoin.coinminiAmount }}
              </div>
              <div v-else class="value" style="opacity: 0.3">{{ $t('not_yet_selected') }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('handling_fee') }}</div>
              <div v-if="selectedCoin.coinfeeAmount" class="value">
                {{ selectedCoin.coinfeeAmount }}
              </div>
              <div v-else class="value" style="opacity: 0.3">{{ $t('not_yet_selected') }}</div>
            </div>
            <div class="form-item" :class="{ 'click-disabled': !form.currencySelect }">
              <div class="title">{{ $t('withdrawal_quantity_2') }}</div>
              <div class="value">
                <input v-model="form.withdrawAmount" class="input" type="number" :placeholder="$t('please_enter_withdrawal_amount')" />
              </div>
            </div>
          </div>
          <div class="operation">
            <div
              class="fdb-btn-default"
              style="margin-right: 12px; line-height: 30px"
              @click="$router.push({ name: 'lang-dashboard', params: { lang: $route.params.lang } })"
            >
              {{ $t('cancel_withdraw') }}
            </div>
            <div
              class="fdb-btn-primary"
              :class="{
                disabled:
                  !form.currencySelect ||
                  selectedCoin.bindStatus === 0 ||
                  !(Number(selectedCoin.coinCount) > Number(selectedCoin.coinminiAmount))
              }"
              @click="toStep2"
            >
              {{ $t('next_step') }}
            </div>
          </div>
        </div>

        <!-- 第二步 -->
        <div v-if="step === 2" class="step-body">
          <div class="form">
            <div class="form-item">
              <div class="title">{{ $t('select_withdraw_coin_type') }}</div>
              <div class="value">
                <CommonCoinIcon :coin-type="$map.currencyMap[form.currencySelect]" class="coin-icon active" />
              </div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('amount_can_be_withdrawn') }}</div>
              <div class="value">{{ selectedCoin.coinCount }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdraw_adress') }}</div>
              <div class="value">{{ adressData[$map.currencyMap[form.currencySelect]] }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdrawal_quantity_2') }}</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('handling_fee') }}</div>
              <div class="value">{{ selectedCoin.coinfeeAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('actual_quantity') }}</div>
              <div class="value" style="color: #62ffff">{{ form.withdrawAmount - selectedCoin.coinfeeAmount }}</div>
            </div>
          </div>
          <div class="red-text">{{ $t('submit_withdrawal_application') }}</div>
          <div class="operation">
            <div class="fdb-btn-default" style="margin-right: 12px" @click="step = 1">{{ $t('previous') }}</div>
            <div class="fdb-btn-primary" @click="submit">{{ $t('submit_application') }}</div>
          </div>
        </div>

        <!-- 第三步 -->
        <div v-if="step === 3" class="step-body">
          <div class="info-text">{{ $t('expected_complete_withdrawal') }}<br />{{ $t('if_any_problem') }}</div>
          <div class="operation finish">
            <div
              class="fdb-btn-default"
              style="margin-right: 12px"
              @click="$router.push({ name: 'lang-dashboard', params: { lang: $route.params.lang } })"
            >
              {{ $t('back_to_list') }}
            </div>
            <div class="fdb-btn-primary" @click="tryAgain">{{ $t('application_again') }}</div>
          </div>
          <div class="form block">
            <div class="form-item">
              <div class="title">{{ $t('application_number') }}</div>
              <div class="value">{{ orderNumber }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdraw_coin_type') }}</div>
              <div class="value">{{ selectedCoinName }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdraw_adress') }}</div>
              <div class="value">{{ adressData[$map.currencyMap[form.currencySelect]] }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('withdrawal_quantity_2') }}</div>
              <div class="value">{{ form.withdrawAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('handling_fee') }}</div>
              <div class="value">{{ selectedCoin.coinfeeAmount }}</div>
            </div>
            <div class="form-item">
              <div class="title">{{ $t('actual_quantity') }}</div>
              <div class="value" style="color: #62ffff">{{ form.withdrawAmount - selectedCoin.coinfeeAmount }}</div>
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
export default {
  name: 'TakeCash',
  data() {
    return {
      isLoading: false,
      step: 1,
      exchangeLoading: false,
      form: {
        currencySelect: '',
        withdrawAmount: ''
      },
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
      return this.$map.currencyMap[this.form.currencySelect]
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
        const res = await this.$api.user.getAllWithdrawalAddress()
        for (const item of res.data) {
          const key = this.$map.currencyMap[item.cid]
          this.adressData[key] = item.coinAddress + (item.coinAddress2 ? ` | ${item.coinAddress2}` : '')
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
        this.$message.error(this.$t('enter_withdraw_coin_type'))
        return false
      }
      if (!this.form.withdrawAmount) {
        this.$message.error(this.$t('enter_withdraw_amount'))
        return false
      }
      if (!(Number(this.form.withdrawAmount) > 0)) {
        this.$message.error(this.$t('enter_withdraw_amount'))
        return false
      }
      if (Number(this.form.withdrawAmount) > Number(this.selectedCoin.coinCount)) {
        this.$message.error(this.$t('exceeds_amount_withdrawn'))
        return false
      }
      // 的提示為
      // 低於BTC最低出金數量 0.0005
      // ....依據幣種不同呈現不同數量跟說明
      if (Number(this.form.withdrawAmount) < Number(this.selectedCoin.coinminiAmount)) {
        this.$message.error(
          this.$t('less_min_withdraw', { selectedCoinName: this.selectedCoinName, coinminiAmount: this.selectedCoin.coinminiAmount })
        )
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
        const res = await this.$api.dashboard.withdrawalOrder(postData)
        this.orderNumber = res.data.bwoOrderID
        this.$message.success(this.$t('application_success'))
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

<style lang="scss" scoped></style>
