<template>
  <div class="register-bg">
    <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="register-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">創建帳戶</div>
        <div class="register-main">
          <div class="title">*使用者名稱</div>
          <input v-model="formData.name" type="text" class="input" placeholder="請輸入使用者名稱" />
        </div>

        <div class="register-main">
          <div class="title">*電子郵箱</div>
          <input v-model="formData.email" type="text" class="input" placeholder="example@mail.com" />
        </div>

        <div class="register-main">
          <div class="title">行動電話</div>
          <div class="split-input">
            <select v-model="formData.areaCore" class="input" style="width: 80px; margin-right: 8px;">
              <option value="886">+886</option>
              <option value="885">+885</option>
              <option value="884">+884</option>
            </select>
            <input v-model="formData.phone" type="text" class="input" style="flex: 1" placeholder="912345678" autocomplete="off" />
          </div>
        </div>

        <div class="register-main">
          <div class="title">*密碼</div>
          <input v-model="formData.password" :type="passwordType" class="input" placeholder="數入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="register-main">
          <div class="title">邀請碼</div>
          <input v-model="formData.invitCode" type="text" class="input" />
        </div>

        <div class="register-main">
          <input v-model="formData.checkContract" type="checkbox" class="check" />
          <div class="check-title">我已閱讀並同意FDB的服務與隱私條款</div>
        </div>

        <!-- 註冊按鈕
        預設為disable狀態，填選完也勾選隱私條款後，
        才會顯示可點擊狀態

        點擊註冊後，（同時寄出信箱驗證連結）顯示彈跳式窗，請使用者立即驗證信箱，若尚未驗證完成這個帳號就不算註冊成功

        點擊信箱url請導入登入畫面 -->
        <a href="javascript:void(0)" class="register-main-btn" @click="doRegister">註冊</a>
        <div class="register-main-tips">已經有帳號？請 <span class="text-link" @click="$router.push('/login')">登入</span></div>
      </div>
    </div>

    <div class="register-kv-block">
      <router-link to="/" class="logo">
        <img src="@/assets/img/nav/logo.png" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
import PasswordIcon from '@/components/common/PasswordIcon'
import { register } from '@/apis/user.js'

export default {
  name: 'Register',
  components: {
    PasswordIcon
  },
  data() {
    return {
      passwordType: 'password',
      isLoading: false,
      formData: {
        name: '',
        email: '',
        areaCore: '886',
        phone: '',
        password: '',
        invitCode: '',
        checkContract: false
      }
    }
  },
  methods: {
    async doRegister() {
      this.isLoading = true
      try {
        // 驗證相關
        await this.validate()
        const postData = {
          name: this.formData.name,
          email: this.formData.email,
          areaCore: this.formData.areaCore,
          phone: this.formData.phone,
          password: this.formData.password,
          invitCode: this.formData.invitCode
        }
        await register(postData)
        this.$message.success('成功請信箱收信')
      } catch (error) {
        console.error(error.message)
        this.$message.error(error.message)
      }
      this.isLoading = false
    },
    // 驗證相關
    async validate() {
      // 使用者名稱：僅限英文15字串以內，名稱不可重複（需檢查）
      if (!/^[a-zA-Z]{1,15}$/.test(this.formData.name)) {
        return Promise.reject(new Error('使用者名稱：僅限英文15字串以內'))
      }
      // 電子郵件：與範例一致 example@mail.com
      if (!/\S+@\S+.\S+/.test(this.formData.email)) {
        return Promise.reject(new Error('電子郵件：格式錯誤'))
      }
      // 行動電話 ：僅能9開頭，九位數不含特殊符號
      if (!/^9\d{8}$/.test(this.formData.phone)) {
        return Promise.reject(new Error('行動電話：僅能9開頭，九位數不含特殊符號'))
      }
      // 密碼：6位數以上，含英數字，不含特殊符號
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.password)) {
        return Promise.reject(new Error('密碼：6位數以上，含英數字，不含特殊符號'))
      }
      // 邀請碼：8位數，含英數字，不含特殊符號
      if (this.formData.invitCode && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(this.formData.invitCode)) {
        return Promise.reject(new Error('邀請碼：8位數，含英數字，不含特殊符號'))
      }
      // 隱私條件需勾選，才可以點擊註冊
      if (!this.formData.checkContract) {
        return Promise.reject(new Error('隱私條件需勾選，才可以點擊註冊'))
      }
      return 'done'
    }
  }
}
</script>

<style lang="scss" scoped>
.split-input {
  float: left;
  display: flex;
  width: 100%;
  .input {
    height: 42px;
    float: left;
    font-size: 16px;
    color: #c4c4c4;
    border: none;
    background: #252c3d;
    box-sizing: border-box;
    border-radius: 8px;
    padding-left: 10px;
  }
}

.text-link {
  color: #62ffff;
  cursor: pointer;
}
/* Change the white to any color ;) */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  caret-color: #fff;
  box-shadow: 0 0 0 30px #252c3d inset !important;
  -webkit-box-shadow: 0 0 0 30px #252c3d inset !important;
  -webkit-text-fill-color: #c4c4c4 !important;
}
</style>
