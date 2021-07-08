<template>
  <div class="login-bg">
    <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="login-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">會員登入</div>
        <div class="login-main">
          <div class="title">電子郵箱</div>
          <input v-model="formData.account" type="text" class="input" placeholder="example@mail.com" autocomplete="off" />
        </div>

        <div class="login-main">
          <div class="title">密碼</div>
          <input v-model="formData.password" :type="passwordType" class="input" placeholder="數入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="login-main">
          <div class="title">圖形驗證碼</div>
          <input v-model="formData.captchaCode" type="text" class="input" />
        </div>

        <div class="login-main flex-center">
          <span class="text-link" @click="$router.push('/reset-password')">忘記密碼，請重設密碼</span>
        </div>

        <a href="javascript:void(0)" class="login-main-btn" @click="doLogin">登入</a>
        <div class="login-main-tips">還沒創建過帳戶？請 <span class="text-link" @click="$router.push('/register')">註冊</span></div>
      </div>
    </div>

    <div class="login-kv-block">
      <router-link to="/" class="logo">
        <img src="@/assets/img/nav/logo.png" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { login } from '@/apis/user.js'
import PasswordIcon from '@/components/common/PasswordIcon'

export default {
  name: 'Login',
  components: {
    PasswordIcon
  },
  data() {
    return {
      isLoading: false,
      passwordType: 'password',
      formData: {
        account: '',
        password: '',
        captchaCode: ''
      }
    }
  },
  methods: {
    async doLogin() {
      this.isLoading = true
      try {
        const postData = {
          account: this.formData.account,
          password: this.formData.password,
          captchaCode: this.formData.captchaCode
        }
        const res = await login(postData)
        console.log(res)
        this.$message.success('登入成功')
        this.$router.push('/')
      } catch (error) {
        console.error(error)
        this.$message.error('登入失敗')
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
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
