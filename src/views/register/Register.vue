<template>
  <div class="register-bg">
    <div class="register-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">創建帳戶</div>
        <div class="register-main">
          <div class="title">*使用者名稱</div>
          <input type="text" class="input" />
        </div>

        <div class="register-main">
          <div class="title">*電子郵箱</div>
          <input type="text" class="input" placeholder="example@mail.com" />
        </div>

        <div class="register-main">
          <div class="title">行動電話</div>
          <input type="text" class="input" placeholder="0912-345-678" autocomplete="off" />
        </div>

        <div class="register-main">
          <div class="title">*密碼</div>
          <input :type="passwordType" class="input" placeholder="數入6位數以上，含英數字" autocomplete="off" />
          <PasswordIcon :pwd-type.sync="passwordType" />
        </div>

        <div class="register-main">
          <div class="title">邀請碼</div>
          <input type="text" class="input" />
        </div>

        <div class="register-main">
          <input type="checkbox" class="check" />
          <div class="check-title">我已閱讀並同意FDB的服務與隱私條款</div>
        </div>

        <a href="javascript:void(0)" class="register-main-btn">註冊</a>
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

export default {
  name: 'Register',
  components: {
    PasswordIcon
  },
  data() {
    return {
      passwordType: 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
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
