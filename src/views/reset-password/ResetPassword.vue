<template>
  <div class="reset-bg">
    <div v-loading="isLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="reset-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">重置您的密碼</div>
        <div class="reset-sub">請輸入註冊時電子郵件，進行密碼重置</div>
        <div class="reset-main" style="margin-bottom: 64px;">
          <div class="title">*電子郵箱</div>
          <input v-model="email" type="text" class="input" placeholder="example@mail.com" autocomplete="off" />
        </div>

        <a href="javascript:void(0)" class="reset-main-btn" @click="submitReq">發送密碼重置連結</a>
        <div class="reset-main-tips"><span class="text-link" @click="$router.push('/login')">回到登入畫面</span></div>
      </div>
    </div>

    <div class="reset-kv-block">
      <router-link to="/" class="logo">
        <img src="@/assets/img/nav/logo.png" alt="logo" />
      </router-link>
    </div>

    <!-- 提示訊息彈窗 -->
    <el-dialog title="電子郵箱通知" :visible.sync="dialogVisible" width="300px" :show-close="false" custom-class="fbd-dialog">
      <div style="text-align: center;">
        <span>請去電子郵箱收取連結信件。</span>
      </div>
      <span slot="footer">
        <div class="fdb-btn-primary" @click="dialogVisible = false">關閉</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { resetPassword } from '@/apis/user.js'
export default {
  name: 'ResetPassword',
  data() {
    return {
      isLoading: false,
      email: '',
      dialogVisible: false
    }
  },
  methods: {
    async submitReq() {
      this.isLoading = true
      try {
        await this.validate()
        await resetPassword({ email: this.email })
        this.dialogVisible = true
      } catch (error) {
        if (error.isHttpError) {
          this.$message.error(error.response?.data?.resultMsg || '重置失敗')
        } else {
          this.$message.error(error.message)
        }
        console.error(error)
      }
      this.isLoading = false
    },
    async validate() {
      // 電子郵件：與範例一致 example@mail.com
      if (!/\S+@\S+.\S+/.test(this.email)) {
        return Promise.reject(new Error('電子郵件：格式錯誤'))
      }
      return 'done'
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-sub {
  margin-bottom: 40px;
}
.text-link {
  color: #62ffff;
  cursor: pointer;
}
</style>
