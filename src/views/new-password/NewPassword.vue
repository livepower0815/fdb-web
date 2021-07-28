<template>
  <div class="newpwd-bg">
    <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="newpwd-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">建立新的密碼</div>
        <div class="newpwd-sub">輸入新的密碼，完成後須以新密碼登入</div>

        <div class="newpwd-main">
          <div class="title">密碼</div>
          <input
            v-model="formData.newPassword"
            :type="passwordType"
            class="input"
            placeholder="輸入6位數以上，含英數字"
            autocomplete="off"
          />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="newpwd-main" style="margin-bottom: 60px;">
          <div class="title">再次確認</div>
          <input
            v-model="formData.doubleCheck"
            :type="checkPasswordType"
            class="input"
            placeholder="輸入6位數以上，含英數字"
            autocomplete="off"
          />
          <PasswordIcon :pwd-type.sync="checkPasswordType" />
        </div>

        <a href="javascript:void(0)" class="fdb-btn-primary-hover newpwd-main-btn" @click="resetPassword">儲存密碼</a>
      </div>
    </div>

    <div class="newpwd-kv-block">
      <router-link to="/" class="logo">
        <img src="@/assets/img/nav/logo.png" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
import PasswordIcon from '@/components/common/PasswordIcon'
import { setNewPassword } from '@/apis/user.js'

export default {
  name: 'NewPassword',
  components: {
    PasswordIcon
  },
  data() {
    return {
      isLoading: false,
      passwordType: 'password',
      checkPasswordType: 'password',
      formData: {
        newPassword: '',
        doubleCheck: ''
      }
    }
  },
  mounted() {
    if (!this.$route.query.AuthCore) {
      this.$message.error('無效頁面，倒轉回到首頁')
      this.$router.push({ name: 'Home' })
    }
  },
  methods: {
    async resetPassword() {
      this.isLoading = true
      try {
        await this.validate()
        await setNewPassword({ core: this.$route.query.AuthCore, newPassword: this.formData.newPassword })
        this.$message.success('設定成功')
        this.$router.push({ name: 'Login' })
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '建立失敗')
        } else {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    async validate() {
      // 新密碼：6位數以上，含英數字，不含特殊符號
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.formData.newPassword)) {
        return Promise.reject(new Error('密碼：6位數以上，含英數字，不含特殊符號'))
      }
      // 確認密碼：密碼要與新密碼一致
      if (this.formData.newPassword !== this.formData.doubleCheck) {
        return Promise.reject(new Error('確認密碼：密碼要與新密碼一致'))
      }
      return 'done'
    }
  }
}
</script>

<style lang="scss" scoped>
.newpwd-sub {
  margin-bottom: 40px;
}
</style>
