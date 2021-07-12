<template>
  <div>
    <div class="personal-function-main">
      <div class="title adress">為保障用戶權益和出金安全，修正出金地址須透過email驗證，變動地址需待一周後再次進行</div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/BTC.png" alt="BTC" style="width: 20px;" />
        </div>
        <div class="title">BTC</div>
        <input v-if="isEdit" v-model="formData.BTC" type="text" class="main" placeholder="請填入 BTC 交易地址" />
        <div v-else class="main">{{ formData.BTC || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/XRP.png" alt="XRP" style="width: 24px;" />
        </div>
        <div class="title">XRP</div>
        <input v-if="isEdit" v-model="formData.XRP" type="text" class="main" placeholder="請填入 XRP 交易地址" />
        <div v-else class="main">{{ formData.XRP || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/USDT.png" alt="USDT" style="width: 32px;" />
        </div>
        <div class="title">USDT</div>
        <input v-if="isEdit" v-model="formData.USDT" type="text" class="main" placeholder="請填入 USDT 交易地址" />
        <div v-else class="main">{{ formData.USDT || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/EOS.png" alt="EOS" style="width: 22px;" />
        </div>
        <div class="title">EOS</div>
        <input v-if="isEdit" v-model="formData.EOS" type="text" class="main" placeholder="請填入 EOS 交易地址" />
        <div v-else class="main">{{ formData.EOS || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <div class="icon">
          <img src="@/assets/img/currency-icon/ETH.png" alt="ETH" style="width: 24px;" />
        </div>
        <div class="title">ETH</div>
        <input v-if="isEdit" v-model="formData.ETH" type="text" class="main" placeholder="請填入 ETH 交易地址" />
        <div v-else class="main">{{ formData.ETH || '未綁定' }}</div>
      </div>
    </div>
    <div class="take-cash-step-btn-block personal-info">
      <a v-if="!isEdit" href="javascript:void(0)" class="next" @click="isEdit = true">編輯地址</a>
      <a v-if="isEdit" href="javascript:void(0)" class="cancel" @click="isEdit = false">取消</a>
      <a v-if="isEdit" href="javascript:void(0)" class="next" @click="saveAdress">儲存並驗證</a>
    </div>

    <!-- 信箱驗證碼彈窗 -->
    <el-dialog
      title="請至返多寶會員郵箱驗證"
      :visible.sync="checkDialog.show"
      width="360px"
      :show-close="false"
      custom-class="fbd-dialog adress-site-dialog"
      top="30vh"
    >
      <div class="check-tip">請於10分鐘內輸入驗證碼，未如驗證將無法更新此次提交</div>
      <div class="check-content">
        <div class="title">驗證碼</div>
        <input class="input" type="text" placeholder="輸入驗證碼" />
      </div>
      <span slot="footer">
        <div class="fdb-btn-default" style="margin-right: 12px;" @click="checkDialog.show = false">取消</div>
        <div class="fdb-btn-primary" @click="checkDialog.show = false">確認</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TakeCashAdress',
  data() {
    return {
      isEdit: false,
      formData: {
        BTC: '1LmjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb',
        XRP: '',
        USDT: '',
        EOS: '01tcjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb1Lmjb1Lmjb',
        ETH: '01tcjbKTMAbKTMAAbKTAbKT1Lmjb1Lmjb1Lmjb1Lmjb1Lmjb'
      },
      checkDialog: {
        show: false
      }
    }
  },
  methods: {
    saveAdress() {
      this.checkDialog.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.adress-site-dialog {
  .check-tip {
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: #eb4664;
    margin-bottom: 20px;
  }
  .check-content {
    display: flex;
    align-items: center;
    .title {
      width: 100px;
      text-align: end;
      color: #fff;
      font-size: 18px;
      margin-right: 12px;
    }
    .input {
      flex: 1;
      line-height: 36px;
      font-size: 16px;
      color: #c4c4c4;
      margin: 4px 12px 4px 0;
      border: none;
      background: #252c3d;
      box-sizing: border-box;
      border-radius: 8px;
      padding-left: 10px;
    }
  }
}
</style>
