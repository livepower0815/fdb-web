<template>
  <div v-loading="isBindLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="personal-function-main exchange-site">
    <div class="title">綁定交易所</div>
    <div class="sub">為保護帳號安全，交易所綁定後將無法編輯或刪除（*未綁定將無法查看您的返佣資訊）</div>
    <div class="exchange-block">
      <div class="main">
        <div>
          <div class="title">*選擇交易所</div>
          <el-select v-model="formData.csgid" class="fdb-select input select-M" popper-class="fdb-select" style="padding-left: 0px;">
            <el-option v-for="(csg, index) in csgList" :key="index" :label="csg.csgName" :value="csg.csgid" />
          </el-select>
        </div>
        <div>
          <div class="title">*交易所UID</div>
          <input v-model="formData.fdB_UID" type="text" class="input" placeholder="請輸入該交易所UID" />
        </div>
      </div>
      <div class="main">
        <div>
          <div class="title">行動電話</div>
          <div class="split-input">
            <el-select
              v-model="formData.areaCode"
              class="fdb-select input select-M"
              popper-class="fdb-select"
              style="width: 80px; margin-right: 8px;"
            >
              <el-option v-for="(phoneArea, index) in phoneAreaCode" :key="index" :label="phoneArea.code" :value="phoneArea.code">
                <span style="float: left; color: #cccccc; margin-right: 26px;">{{ phoneArea.country }}</span>
                <span style="float: right;">{{ phoneArea.code }}</span>
              </el-option>
            </el-select>
            <input v-model="formData.phone" type="text" class="input" style="flex: 1" placeholder="請輸入行動電話" autocomplete="off" />
          </div>
        </div>
        <div>
          <div class="title">電子郵件</div>
          <input v-model="formData.email" type="text" class="input" placeholder="請輸入該交易所會員郵件" />
        </div>
      </div>
    </div>
    <div class="btns-block personal">
      <a href="javascript:void(0)" class="cancel fdb-btn-default-hover" @click="resetForm">清空</a>
      <a href="javascript:void(0)" class="next fdb-btn-primary-hover" @click="validate">綁定</a>
    </div>

    <div class="personal-function-line"></div>
    <div class="personal-function-tips">交易所驗證時間需1-3日工作天，無論驗證成功與否都將由系統寄出“驗證通知書”郵件通知會員</div>
    <div v-for="(bind, index) in bindList" :key="index" class="personal-function-exchange-block">
      <div class="title">{{ index + 1 }}</div>
      <div>
        <img v-if="csgMap[bind.csgid]" :src="csgMap[bind.csgid].imageUrl" alt="bind-store-img" style="width: 60px;" />
        <span v-else>無效圖檔</span>
      </div>
      <div :class="`status ${['red', 'green'][bind.status]}`">{{ ['驗證中', '驗證完畢'][bind.status] }}</div>
    </div>

    <!-- 再次確認彈窗 -->
    <el-dialog
      title="再次確認交易所綁定資訊"
      :visible.sync="checkDialog.show"
      :width="deviceWidth > 500 ? '500px' : '300px'"
      :show-close="false"
      custom-class="fbd-dialog exchange-site-dialog"
    >
      <div class="check-tip">為保障各位交易安全，交易所若綁定三次都失敗，將會鎖定該交易所綁定之權限，因此請確定資料正確性</div>
      <div class="check-content">
        <div class="check-content-item">
          <div class="title">綁定交易所</div>
          <div class="value">{{ csgMap[formData.csgid] && csgMap[formData.csgid].csgName }}</div>
        </div>
        <div class="check-content-item">
          <div class="title">交易所UID</div>
          <div class="value">{{ formData.fdB_UID }}</div>
        </div>
        <div class="check-content-item">
          <div class="title">行動電話</div>
          <div v-if="formData.phone" class="value">{{ formData.areaCode }} {{ formData.phone }}</div>
          <div v-else class="value" style="opacity: 0.6;">未填寫</div>
        </div>
        <div class="check-content-item">
          <div class="title">電子郵件</div>
          <div v-if="formData.email" class="value">{{ formData.email }}</div>
          <div v-else class="value" style="opacity: 0.6;">未填寫</div>
        </div>
      </div>
      <span v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" slot="footer">
        <div class="fdb-btn-default" style="margin-right: 12px;" @click="checkDialog.show = false">返回</div>
        <div class="fdb-btn-primary" @click="bindCSG">綁定</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { bindCoinStoreData } from '@/apis/user.js'
import { phoneAreaCode } from '@/utils/map.js'

export default {
  name: 'ExchangeControl',
  data() {
    return {
      phoneAreaCode,
      isLoading: false,
      isBindLoading: false,
      formData: {
        csgid: '',
        areaCode: '886',
        phone: '',
        fdB_UID: '',
        email: ''
      },
      checkDialog: {
        show: false
      }
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    csgList() {
      return this.$store.state.app.csgList
    },
    csgMap() {
      return this.$store.state.app.csgMap
    },
    bindList() {
      return this.$store.state.user.bindStores
    }
  },
  mounted() {
    this.getBindStores()
  },
  methods: {
    resetForm() {
      this.formData = {
        csgid: '',
        areaCode: '886',
        phone: '',
        fdB_UID: '',
        email: ''
      }
    },
    // 綁定規則
    // 一個交易所僅限綁定三次，若三次驗證皆失敗，將鎖定綁定該交易所權限，並通知由客服進行解鎖
    // 左側會呈現該交易所是否驗證成功，無論成功或失敗，後台都會寄出一份驗證通知書
    validate() {
      // 欄位內的規則
      // 選擇交易所：只顯示與fdb合作的交易所，文字即可
      if (!this.formData.csgid) {
        return this.$message.error('請選擇交易所')
      }
      // 交易所 ID ：英文＋數字十位數以內(bybit) ，不含特殊符號
      // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,10}$/.test(this.formData.fdB_UID)) {
      //   return this.$message.error('交易所 ID ：英文＋數字十位數以內(bybit) ，不含特殊符號')
      // }
      if (!this.formData.fdB_UID) {
        return this.$message.error('請輸入交易所ID')
      }

      // 行動電話：僅限數字不含特殊符號
      if (this.formData.phone && !/^\d+$/.test(this.formData.phone)) {
        return this.$message.error('行動電話：請輸入數字')
      }
      // 電子郵件：與範例一致 example@mail.com
      if (this.formData.email && !/\S+@\S+.\S+/.test(this.formData.email)) {
        return this.$message.error('電子郵件：請輸入正確電子郵件')
      }
      // 再次確認
      // 為了提升資訊填寫的正確性，點擊綁定後，在呈現一次自己所寫的資訊，做再次確認
      this.checkDialog.show = true
    },
    async bindCSG() {
      this.isLoading = true
      try {
        const postData = {
          csgid: this.formData.csgid,
          areaCode: this.formData.phone ? this.formData.areaCode : '',
          phone: this.formData.phone,
          fdB_UID: this.formData.fdB_UID,
          email: this.formData.email
        }
        await bindCoinStoreData(postData)
        this.checkDialog.show = false
        this.resetForm()
        this.getBindStores()
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    // 取得已綁定交易所清單(需登入)
    async getBindStores() {
      this.isBindLoading = true
      try {
        await this.$store.dispatch('user/getBindStores')
      } catch (error) {
        console.error(error)
      }
      this.isBindLoading = false
    }
  }
}
</script>

<style lang="scss">
.exchange-site {
  .split-input {
    float: left;
    display: flex;
    width: calc(100% - 10px);
    .input {
      height: 38px;
      float: left;
      font-size: 14px;
      color: #c4c4c4;
      border: none;
      background: #252c3d;
      box-sizing: border-box;
      border-radius: 8px;
      &:last-child {
        padding-left: 10px;
      }
    }
  }

  /* < 1300  */
  @media screen and (max-width: 1300px) {
    .split-input {
      width: calc(100% - 10px);
    }
  }
}

.exchange-site-dialog {
  .check-tip {
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: #eb4664;
    margin-bottom: 20px;
  }
  .check-content {
    padding: 20px;
    background: #050608;
    &-item {
      color: #e5e5e5;
      display: flex;
      width: 100%;
      height: 36px;
      .title {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        line-height: 36px;
      }
      .value {
        margin-left: 20px;
        flex: 1;
        line-height: 36px;
      }
    }
  }
}
</style>
