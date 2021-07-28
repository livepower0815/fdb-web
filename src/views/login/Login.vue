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
          <input v-model="formData.password" :type="passwordType" class="input" placeholder="輸入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="login-main">
          <div class="title flex-center" style="justify-content: flex-start;">
            圖形驗證碼：
            <img v-if="captchaImg" :src="`data:image\/(png|jpg);base64,${captchaImg}`" alt="captchaImg" style="width: 80px;" />
            <i class="el-icon-refresh-right captcha-refresh" @click="init"></i>
          </div>
          <input v-model="formData.captchaCode" type="text" class="input" placeholder="請輸入圖形驗證碼" />
        </div>

        <div class="login-main flex-center">
          <span class="text-link" @click="$router.push('/reset-password')">忘記密碼，請重設密碼</span>
        </div>

        <a href="javascript:void(0)" class="fdb-btn-primary-hover login-main-btn" @click="doLogin">登入</a>
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
import { getCaptchaImage } from '@/apis/user.js'
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
      },
      captchaImg: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      try {
        const res = await getCaptchaImage()
        this.captchaImg = res.img
      } catch (error) {
        console.error(error)
      }
    },
    async doLogin() {
      this.isLoading = true
      try {
        // 驗證相關
        await this.validate()
        const postData = {
          account: this.formData.account,
          password: this.formData.password,
          captchaCode: this.formData.captchaCode
        }
        await this.$store.dispatch('user/login', postData)
        this.$message.success('登入成功')
        this.$router.push({ name: 'Dashboard' }, () => {})
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '登入失敗')
        } else {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    // 驗證相關
    async validate() {
      // 電子郵件：與範例一致 example@mail.com
      if (!/\S+@\S+.\S+/.test(this.formData.account)) {
        return Promise.reject(new Error('電子郵件：格式錯誤'))
      }
      // 密碼：6位數以上，含英數字，不含特殊符號
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.password)) {
        return Promise.reject(new Error('密碼：6位數以上，含英數字，不含特殊符號'))
      }
      // 圖形驗證碼必填
      if (!this.formData.captchaCode) {
        return Promise.reject(new Error('請輸入圖形驗證碼'))
      }
      return 'done'
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
.captcha-refresh {
  font-size: 24px;
  margin-left: 8px;
  cursor: pointer;
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
