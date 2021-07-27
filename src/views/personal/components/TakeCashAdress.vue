<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" style="float: left;">
    <div class="personal-function-main">
      <div class="title adress">為保障用戶權益和出金安全，修正出金地址須透過email驗證，變動地址需待一周後再次進行</div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="BTC" />
        <div class="title">BTC</div>
        <input v-if="isEdit" v-model="formData.BTC" type="text" class="main" placeholder="請填入 BTC 交易地址" />
        <div v-else class="main">{{ formData.BTC || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="XRP" />
        <div class="title">XRP</div>
        <input v-if="isEdit" v-model="formData.XRP" type="text" class="main" placeholder="請填入 XRP 交易地址" />
        <div v-else class="main">{{ formData.XRP || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="USDT" />
        <div class="title">USDT</div>
        <input v-if="isEdit" v-model="formData.USDT" type="text" class="main" placeholder="請填入 USDT 交易地址" />
        <div v-else class="main">{{ formData.USDT || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="EOS" />
        <div class="title">EOS</div>
        <input v-if="isEdit" v-model="formData.EOS" type="text" class="main" placeholder="請填入 EOS 交易地址" />
        <div v-else class="main">{{ formData.EOS || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="ETH" />
        <div class="title">ETH</div>
        <input v-if="isEdit" v-model="formData.ETH" type="text" class="main" placeholder="請填入 ETH 交易地址" />
        <div v-else class="main">{{ formData.ETH || '未綁定' }}</div>
      </div>
    </div>
    <div class="btns-block personal-info">
      <a v-if="!isEdit" href="javascript:void(0)" class="next" @click="isEdit = true">編輯地址</a>
      <a v-if="isEdit" href="javascript:void(0)" class="cancel" @click="cancelEdit">取消</a>
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
        <input v-model="authCore" class="input" type="text" placeholder="輸入驗證碼" />
      </div>
      <span v-loading="isValidLoading" element-loading-background="rgba(0, 0, 0, 0.5)" slot="footer">
        <div class="fdb-btn-default" style="margin-right: 12px;" @click="checkDialog.show = false">取消</div>
        <div class="fdb-btn-primary" @click="validAdress">確認</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllWithdrawalAddress, withdrawalDataUpdate, validWithdrawalData } from '@/apis/user.js'
import { currencyMap, currencyIdMap } from '@/utils/map.js'
import CoinIcon from '@/components/common/CoinIcon.vue'

export default {
  name: 'TakeCashAdress',
  components: {
    CoinIcon
  },
  data() {
    return {
      isLoading: false,
      isEdit: false,
      formData: {
        BTC: '',
        XRP: '',
        USDT: '',
        EOS: '',
        ETH: ''
      },
      checkDialog: {
        show: false
      },
      isValidLoading: false,
      authCore: ''
    }
  },
  mounted() {
    this.getAllWithdrawalAddress()
  },
  methods: {
    // 取得出金地址資訊
    async getAllWithdrawalAddress() {
      this.isLoading = true
      try {
        const res = await getAllWithdrawalAddress()
        for (const item of res.data) {
          const key = currencyMap[item.cid]
          this.formData[key] = item.coinAddress
        }
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    cancelEdit() {
      this.isEdit = false
      this.getAllWithdrawalAddress()
    },
    // 更新出金地址資訊-發驗證信
    async saveAdress() {
      this.isLoading = true
      try {
        this.validateForm()
        const postData = []
        for (const key of Object.keys(this.formData)) {
          postData.push({ cid: currencyIdMap[key], address: this.formData[key] })
        }
        await withdrawalDataUpdate(postData)
        this.authCore = ''
        this.checkDialog.show = true
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '連線失敗')
        } else {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    // 欄位內的規則，每次儲存時需要驗證
    validateForm() {
      // BTC : 數字1＆3 開頭，26至37位區間英文大小寫+數字組成
      if (this.formData.BTC && !/^[13](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{25,36}$/.test(this.formData.BTC)) {
        throw new Error('BTC : 數字1＆3 開頭，26至37位區間英文大小寫+數字組成')
      }
      // XRP : r開頭
      if (this.formData.XRP && !/^r.+/.test(this.formData.XRP)) {
        throw new Error('XRP : r開頭')
      }
      // USDT : 數字1＆3 & 0 開頭
      if (this.formData.USDT && !/^[013].+$/.test(this.formData.USDT)) {
        throw new Error('USDT : 數字1＆3 & 0 開頭')
      }
      // EOS : 12個字符英文大小寫+數字組成
      if (this.formData.EOS && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12}$/.test(this.formData.EOS)) {
        throw new Error('EOS : 12個字符英文大小寫+數字組成')
      }
      // ETH : 數字0 開頭，42位英文大小寫+數字組成
      if (this.formData.ETH && !/^[0](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{41}$/.test(this.formData.ETH)) {
        throw new Error('ETH : 數字0 開頭，42位英文大小寫+數字組成')
      }
      return 'success'
    },
    // 驗證並且更新出金地址資訊
    async validAdress() {
      this.isValidLoading = true
      try {
        await validWithdrawalData({ authCore: this.authCore })
        this.$message.success('綁定成功')
        this.checkDialog.show = false
        this.cancelEdit()
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '驗證失敗')
        }
        console.log(error)
      }
      this.isValidLoading = false
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
