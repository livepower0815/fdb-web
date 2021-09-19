<template>
  <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" style="float: left;">
    <div class="personal-function-main">
      <div class="title adress">為保障用戶權益和出金安全，修正出金地址須透過email驗證，變動地址需待一周後再次進行</div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="BTC" />
        <div class="title">BTC</div>
        <input v-if="isEdit" v-model="formData.BTC.adress" type="text" class="main" placeholder="請填入 BTC 交易地址" />
        <div v-else class="main" :style="{ opacity: formData.BTC.adress ? '1' : '0.5' }">{{ formData.BTC.adress || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="ETH" />
        <div class="title">ETH</div>
        <input v-if="isEdit" v-model="formData.ETH.adress" type="text" class="main" placeholder="請填入 ETH 交易地址" />
        <div v-else class="main" :style="{ opacity: formData.ETH.adress ? '1' : '0.5' }">{{ formData.ETH.adress || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main" style="margin-bottom: 12px;">
        <CoinIcon class="icon" coin-type="XRP" />
        <div class="title">XRP</div>
        <input v-if="isEdit" v-model="formData.XRP.adress" type="text" class="main" placeholder="請填入 XRP 交易地址" />
        <div v-else class="main" :style="{ opacity: formData.XRP.adress ? '1' : '0.5' }">{{ formData.XRP.adress || '未綁定' }}</div>
      </div>
      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="XRP" style="opacity: 0;" />
        <div class="title">TAG</div>
        <input v-if="isEdit" v-model="formData.XRP.adress2" type="text" class="main" placeholder="請填入 XRP TAG" />
        <div v-else class="main" :style="{ opacity: formData.XRP.adress2 ? '1' : '0.5' }">{{ formData.XRP.adress2 || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main" style="margin-bottom: 8px;">
        <CoinIcon class="icon" coin-type="EOS" />
        <div class="title">EOS</div>
        <input v-if="isEdit" v-model="formData.EOS.adress" type="text" class="main" placeholder="請填入 EOS 交易地址" />
        <div v-else class="main" :style="{ opacity: formData.EOS.adress ? '1' : '0.5' }">{{ formData.EOS.adress || '未綁定' }}</div>
      </div>
      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="EOS" style="opacity: 0;" />
        <div class="title">MEMO</div>
        <input v-if="isEdit" v-model="formData.EOS.adress2" type="text" class="main" placeholder="請填入 EOS MEMO" />
        <div v-else class="main" :style="{ opacity: formData.EOS.adress2 ? '1' : '0.5' }">{{ formData.EOS.adress2 || '未綁定' }}</div>
      </div>

      <div class="personal-take-cash-adress-main">
        <CoinIcon class="icon" coin-type="USDT" />
        <div class="title">USDT</div>
        <input v-if="isEdit" v-model="formData.USDT.adress" type="text" class="main" placeholder="請填入 USDT 交易地址" />
        <div v-else class="main" :style="{ opacity: formData.USDT.adress ? '1' : '0.5' }">{{ formData.USDT.adress || '未綁定' }}</div>
      </div>
    </div>
    <div class="btns-block personal-info">
      <a v-if="!isEdit" href="javascript:void(0)" class="next fdb-btn-primary-hover" @click="isEdit = true">編輯地址</a>
      <a v-if="isEdit" href="javascript:void(0)" class="cancel fdb-btn-default-hover" @click="cancelEdit">取消</a>
      <a v-if="isEdit" href="javascript:void(0)" class="next fdb-btn-primary-hover" @click="saveAdress">儲存並驗證</a>
    </div>

    <!-- 信箱驗證碼彈窗 -->
    <el-dialog
      title="請至返多寶會員郵箱驗證"
      :visible.sync="checkDialog.show"
      :width="deviceWidth > 500 ? '360px' : '300px'"
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
        BTC: { adress: '', adress2: '' },
        XRP: { adress: '', adress2: '' },
        USDT: { adress: '', adress2: '' },
        EOS: { adress: '', adress2: '' },
        ETH: { adress: '', adress2: '' }
      },
      checkDialog: {
        show: false
      },
      isValidLoading: false,
      authCore: ''
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
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
          this.formData[key].adress = item.coinAddress
          this.formData[key].adress2 = item.adress2
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
          postData.push({ cid: currencyIdMap[key], address: this.formData[key].adress, address2: this.formData[key].adress2 })
        }
        await withdrawalDataUpdate(postData)
        this.authCore = ''
        this.checkDialog.show = true
      } catch (error) {
        if (!error.isHttpError) {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    // 欄位內的規則，每次儲存時需要驗證
    validateForm() {
      // BTC : 數字1＆3 開頭，26至37位區間英文大小寫+數字組成
      if (this.formData.BTC.adress && !/^[13](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{25,36}$/.test(this.formData.BTC.adress)) {
        throw new Error('BTC : 數字1＆3 開頭，26至37位區間英文大小寫+數字組成')
      }
      // XRP : r開頭
      if (this.formData.XRP.adress && !/^r.+/.test(this.formData.XRP.adress)) {
        throw new Error('XRP : r開頭')
      }
      if (this.formData.XRP.adress && !this.formData.XRP.adress2) {
        throw new Error('XRP : TAG 未填寫')
      }
      // USDT : 數字1＆3 & 0 開頭
      if (this.formData.USDT.adress && !/^[013].+$/.test(this.formData.USDT.adress)) {
        throw new Error('USDT : 數字1＆3 & 0 開頭')
      }
      // 8/26 EOS 不驗證
      // EOS : 12個字符英文大小寫+數字組成
      // if (this.formData.EOS.adress && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12}$/.test(this.formData.EOS.adress)) {
      //   throw new Error('EOS : 12個字符英文大小寫+數字組成')
      // }
      if (this.formData.EOS.adress && !this.formData.EOS.adress2) {
        throw new Error('EOS : MEMO 未填寫')
      }
      // ETH : 數字0 開頭，42位英文大小寫+數字組成
      if (this.formData.ETH.adress && !/^[0](?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{41}$/.test(this.formData.ETH.adress)) {
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
