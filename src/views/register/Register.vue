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
          <input type="checkbox" class="check" />
          <div class="check-title">我已閱讀並同意FDB的服務與隱私條款</div>
        </div>

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
        invitCode: ''
      }
    }
  },
  methods: {
    async doRegister() {
      this.isLoading = true
      try {
        const postData = {
          name: this.formData.name,
          email: this.formData.email,
          areaCore: this.formData.areaCore,
          phone: this.formData.phone,
          password: this.formData.password,
          invitCode: this.formData.invitCode
        }
        const res = await register(postData)
        console.log(res)
        this.$message.success('成功請信箱收信')
      } catch (error) {
        console.error(error)
        this.$message.error('註冊失敗')
      }
      this.isLoading = false
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
