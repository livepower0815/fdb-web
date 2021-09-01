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
            <div v-else v-loading="true" style="height: 35px; width: 80px;" element-loading-background="rgba(0, 0, 0, 0.5)"></div>
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

    <el-dialog title="登入失敗" :visible.sync="validateEmail.show" width="310px" :show-close="false" custom-class="fbd-dialog">
      <div v-if="!validateEmail.hasSent">
        <div style="color: #eb4664; margin-bottom: 12px; text-align: center;">帳號未確認</div>
        <div style="text-align: center;">請至信箱收取認證信件或重新發送認證信，如仍有異常請聯繫客服團隊</div>
      </div>
      <div v-else style="text-align: center;">認證信已重新發送</div>
      <span slot="footer">
        <template v-if="!validateEmail.hasSent">
          <div
            v-loading="validateEmail.loading"
            element-loading-background="rgba(0, 0, 0, 0.5)"
            class="fdb-btn-primary"
            style="padding: 0 12px; margin-right: 8px;"
            @click="reSentEmail"
          >
            重新寄發認證信
          </div>
          <div class="fdb-btn-default" style="padding: 0 12px;" @click="validateEmail.show = false">取消</div>
        </template>
        <div v-else class="fdb-btn-default" @click="validateEmail.show = false">關閉</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCaptchaImage, reSendCheckMail } from '@/apis/user.js'
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
        captchaCode: '',
        uuid: ''
      },
      captchaImg: '',
      validateEmail: {
        show: false,
        loading: false,
        hasSent: false
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      try {
        this.formData.captchaCode = ''
        this.formData.uuid = ''
        this.captchaImg = ''
        const res = await getCaptchaImage()
        this.captchaImg = res.img
        this.formData.uuid = res.uuid
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
          captchaCode: this.formData.captchaCode,
          uuid: this.formData.uuid
        }
        // result = 1 的時候是登入成功
        const res = await this.$store.dispatch('user/login', postData)
        this.$store.commit('user/SET_TOKEN', res.data)
        this.$message.success('登入成功')
        this.$router.push({ name: 'Dashboard' }, () => {})
      } catch (error) {
        if (!error.isHttpError) {
          this.$message.error(error.message)
        } else if (error.response?.data?.result === 2) {
          // result = 2 信箱未驗證
          this.validateEmail.show = true
          this.validateEmail.hasSent = false
        }
        console.error(error)
      }
      this.isLoading = false
    },
    // 驗證相關
    async validate() {
      // 電子郵件：與範例一致 example@mail.com
      if (!/\S+@\S+.\S+/.test(this.formData.account)) {
        return Promise.reject(new Error('電子郵件：請輸入正確電子郵件'))
      }
      // 密碼：6位數以上，含英數字，不含特殊符號
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.password)) {
        return Promise.reject(new Error('密碼：請輸入6位數以上英數字'))
      }
      // 圖形驗證碼必填
      if (!this.formData.captchaCode) {
        return Promise.reject(new Error('請輸入圖形驗證碼'))
      }
      return 'done'
    },
    // 重新寄發驗證信
    async reSentEmail() {
      this.validateEmail.loading = true
      try {
        const reqBody = {
          email: this.formData.account,
          password: this.formData.password
        }
        await reSendCheckMail(reqBody)
        this.validateEmail.hasSent = true
      } catch (e) {
        console.error(e)
      }
      this.validateEmail.loading = false
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
