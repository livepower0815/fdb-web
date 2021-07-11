<template>
  <div>
    <div class="personal-function-main">
      <div class="title adress">為保障用戶權益和出金安全，修正出金地址須透過email驗證，變動地址需待一周後再次進行</div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/BTC.png" alt="BTC" style="width: 20px;" />
        </div>
        <div class="title">BTC</div>
        <div class="main">1LmjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/XRP.png" alt="XRP" style="width: 24px;" />
        </div>
        <div class="title">XRP</div>
        <input type="text" class="main" placeholder="請填入 xrp 交易地址" />
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/USDT.png" alt="USDT" style="width: 32px;" />
        </div>
        <div class="title">USDT</div>
        <input type="text" class="main" placeholder="請請填入 usdt 交易地址" />
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/EOS.png" alt="EOS" style="width: 22px;" />
        </div>
        <div class="title">EOS</div>
        <div class="main">01tcjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb1Lmjb1Lmjb</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/ETH.png" alt="ETH" style="width: 24px;" />
        </div>
        <div class="title">ETH</div>
        <div class="main">01tcjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb1Lmjb1Lmjb</div>
      </div>
    </div>
    <div class="take-cash-step-btn-block personal-info">
      <a v-if="!isEdit" href="javascript:void(0)" class="next" @click="isEdit = true">編輯地址</a>
      <a v-if="isEdit" href="javascript:void(0)" class="cancel" @click="isEdit = false">取消</a>
      <a v-if="isEdit" href="javascript:void(0)" class="next" @click="saveAdress">儲存並驗證</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TakeCashAdress',
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    saveAdress() {
      this.isEdit = false
    }
  }
}
</script>

<style scoped></style>
