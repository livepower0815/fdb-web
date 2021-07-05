<template>
  <!--Header開始-->
  <div class="header-block">
    <router-link to="/" class="logo">
      <img src="@/assets/img/nav/logo.png" alt="nav-icon" />
    </router-link>
    <div class="menu-block head">
      <router-link to="/">FDB首頁</router-link>
      <router-link to="/about">關於FDB</router-link>
      <router-link to="/partner">合作夥伴</router-link>
      <router-link to="/news">最新消息</router-link>
    </div>

    <div class="header-sub-block">
      <router-link to="/personal">登入</router-link>
      <router-link to="/register" class="register">註冊</router-link>
      <div></div>
      <router-link to="/dashboard">ZH</router-link>
    </div>

    <!--手機版 menu icon 開始-->
    <div class="mobile-ham" @click="toggleMobileMenu">
      <img src="@/assets/img/nav/menu.png" alt="menu" />
      <!-- <img src="@/assets/img/nav/mdi_web.png" alt="globel" /> -->
    </div>
    <!--手機版menu icon 結束-->

    <!--手機版drop開始-->
    <div class="mobile-drop" @click="toggleMobileMenu">
      <div>
        <router-link to="/">FDB首頁</router-link>
        <router-link to="/about">關於FDB</router-link>
        <router-link to="/partner">合作夥伴</router-link>
        <router-link to="/news">最新消息</router-link>
      </div>
    </div>
    <!--手機版drop結束-->
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      mobileDrop: null
    }
  },
  mounted() {
    // this.mobileDrop
  },
  methods: {
    toggleMobileMenu() {
      window.$('.mobile-drop').slideToggle()
    }
  }
}
</script>

<style scoped></style>
