<template>
  <div class="newpwd-bg">
    <div class="newpwd-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">建立新的密碼</div>
        <div class="newpwd-sub">輸入新的密碼，完成後須以新密碼登入</div>

        <div class="newpwd-main">
          <div class="title">密碼</div>
          <input :type="passwordType" class="input" placeholder="數入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="newpwd-main" style="margin-bottom: 60px;">
          <div class="title">再次確認</div>
          <input :type="checkPasswordType" class="input" placeholder="數入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="checkPasswordType" />
        </div>

        <a href="javascript:void(0)" class="newpwd-main-btn">儲存密碼</a>
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

export default {
  name: 'NewPassword',
  components: {
    PasswordIcon
  },
  data() {
    return {
      passwordType: 'password',
      checkPasswordType: 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.newpwd-sub {
  margin-bottom: 40px;
}
</style>
