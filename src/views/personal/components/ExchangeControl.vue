<template>
  <div class="personal-function-main exchange-site">
    <div class="title">綁定交易所</div>
    <div class="sub">為保障各位的交易安全，交易所若綁定之後，無法進行編輯與刪除</div>
    <div class="exchange-block">
      <div class="main">
        <div>
          <div class="title">*選擇交易所</div>
          <select v-model="formData.wasid" class="input">
            <option value="">請選擇交易所</option>
            <option value="was01">交易所1</option>
            <option value="was02">交易所2</option>
            <option value="was03">交易所3</option>
          </select>
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
            <select v-model="formData.areaCode" class="input" style="width: 80px; margin-right: 8px;">
              <option value="886">+886</option>
              <option value="885">+885</option>
              <option value="884">+884</option>
            </select>
            <input v-model="formData.phone" type="text" class="input" style="flex: 1" placeholder="請輸入行動電話" autocomplete="off" />
          </div>
        </div>
        <div>
          <div class="title">電子郵件</div>
          <input v-model="formData.email" type="text" class="input" placeholder="請輸入該交易所會員郵件" />
        </div>
      </div>
    </div>
    <div class="take-cash-step-btn-block personal">
      <a href="javascript:void(0)" class="cancel" @click="resetForm">清空</a>
      <a href="javascript:void(0)" class="next" @click="validate">綁定</a>
    </div>

    <div class="personal-function-line"></div>
    <div class="personal-function-tips">交易所驗證時間需1-3日工作天，無論驗證成功與否都將由系統寄出“驗證通知書”郵件通知會員</div>
    <div class="personal-function-exchange-block">
      <div class="title">1</div>
      <div>
        <img src="@/assets/img/footer/bybit.png" alt="bybit" style="width: 60px;" />
      </div>
      <div class="status">驗證中</div>
    </div>

    <!-- 再次確認彈窗 -->
    <el-dialog
      title="再次確認交易所綁定資訊"
      :visible.sync="checkDialog.show"
      width="500px"
      :show-close="false"
      custom-class="fbd-dialog exchange-site-dialog"
    >
      <div class="check-tip">為保障各位交易安全，交易所若綁定三次都失敗，將會鎖定該交易所綁定之權限，因此請確定資料正確性</div>
      <div class="check-content">
        <div class="check-content-item">
          <div class="title">綁定交易所</div>
          <div class="value">Bybit</div>
        </div>
        <div class="check-content-item">
          <div class="title">交易所UID</div>
          <div class="value">jgjik98k</div>
        </div>
        <div class="check-content-item">
          <div class="title">行動電話</div>
          <div class="value">+886 923-123-123</div>
        </div>
        <div class="check-content-item">
          <div class="title">電子郵件</div>
          <div class="value">Rusalba542002@gmail.com</div>
        </div>
      </div>
      <span slot="footer">
        <div class="fdb-btn-default" style="margin-right: 12px;" @click="checkDialog.show = false">返回</div>
        <div class="fdb-btn-primary" @click="checkDialog.show = false">綁定</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ExchangeControl',
  data() {
    return {
      formData: {
        wasid: '',
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
  methods: {
    resetForm() {
      this.formData = {
        wasid: '',
        areaCode: '886',
        phone: '',
        fdB_UID: '',
        email: ''
      }
    },
    // 欄位內的規則
    // 選擇交易所：只顯示與fdb合作的交易所，文字即可
    // 交易所 ID ：英文＋數字十位數以內(bybit) ，不含特酥符號
    // 行動電話 ：僅能9開頭，十位數不含特酥符號
    // 電子郵件：與範例一致 example@mail.com
    // 驗證狀態：驗證中、已驗證

    // 綁定規則
    // 一個交易所僅限綁定三次，若三次驗證皆失敗，將鎖定綁定該交易所權限，並通知由客服進行解鎖
    // 左側會呈現該交易所是否驗證成功，無論成功或失敗，後台都會寄出一份驗證通知書
    validate() {
      // TODO: 做驗證

      // 再次確認
      // 為了提升資訊填寫的正確性，點擊綁定後，在呈現一次自己所寫的資訊，做再次確認
      this.checkDialog.show = true
    }
  }
}
</script>

<style lang="scss">
.exchange-site {
  .split-input {
    float: left;
    display: flex;
    width: calc(100% - 89px);
    .input {
      height: 38px;
      float: left;
      font-size: 14px;
      color: #c4c4c4;
      border: none;
      background: #252c3d;
      box-sizing: border-box;
      border-radius: 8px;
      padding-left: 10px;
    }
  }

  /* 1300-300 */
  @media screen and (min-width: 300px) and (max-width: 1300px) {
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
    padding: 30px;
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
        margin-left: 12px;
        flex: 1;
        line-height: 36px;
      }
    }
  }
}
</style>
