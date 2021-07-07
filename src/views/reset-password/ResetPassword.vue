<template>
  <div class="reset-bg">
    <div class="reset-main-block">
      <div class="main">
        <input v-show="false" type="text" name="username" />
        <input v-show="false" type="password" name="password" />
        <div class="title">重置您的密碼</div>
        <div class="reset-sub">請輸入註冊時電子郵件，進行密碼重置</div>
        <div class="reset-main" style="margin-bottom: 64px;">
          <div class="title">*電子郵箱</div>
          <input type="text" class="input" placeholder="example@mail.com" autocomplete="off" />
        </div>

        <a href="javascript:void(0)" class="reset-main-btn">發送密碼重置連結</a>
        <div class="reset-main-tips"><span class="text-link" @click="$router.push('/login')">回到登入畫面</span></div>
      </div>
    </div>

    <div class="reset-kv-block">
      <router-link to="/" class="logo">
        <img src="@/assets/img/nav/logo.png" alt="logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword'
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
