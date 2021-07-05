<template>
  <!--Header開始-->
  <div class="navbar" :style="`padding: ${deviceWidth >= 1024 ? '0 55px' : '0 2.5%'}`">
    <router-link to="/" class="navbar-logo">
      <img src="@/assets/img/nav/logo.png" alt="nav-icon" />
    </router-link>
    <div v-if="deviceWidth >= 1024" class="navbar-menu">
      <router-link to="/">FDB首頁</router-link>
      <router-link to="/about">關於FDB</router-link>
      <router-link to="/partner">合作夥伴</router-link>
      <router-link to="/news">最新消息</router-link>
    </div>

    <div class="navbar-setting" :class="{ 'is-mobile': deviceWidth < 768 }">
      <template v-if="deviceWidth < 1024">
        <img src="@/assets/img/nav/menu.png" alt="menu" />
        <img src="@/assets/img/nav/mdi_web.png" alt="globel" />
      </template>
      <!-- <el-avatar size="small" :src="require('@/assets/img/nav/user_proflie.png')"></el-avatar> -->
      <router-link v-if="deviceWidth >= 768" to="/personal" style="margin-left: 20px">登入</router-link>
      <router-link to="/register" class="register" :style="{ 'margin-right': deviceWidth >= 768 ? '20px' : '0' }">註冊</router-link>
      <template v-if="deviceWidth >= 768">
        <div style="width: 0.5px;height: 20px;background-color: #fff;margin-right: 20px;"></div>
        <router-link to="/dashboard" style="margin: 0;">ZH</router-link>
      </template>
    </div>

    <!--手機版 menu icon 開始-->
    <!-- <div class="mobile-ham" @click="toggleMobileMenu">
      <img src="@/assets/img/nav/menu.png" alt="menu" />
      <img src="@/assets/img/nav/mdi_web.png" alt="globel" />
    </div> -->
    <!--手機版menu icon 結束-->

    <!--手機版drop開始-->
    <!-- <div class="mobile-drop" @click="toggleMobileMenu">
      <div>
        <router-link to="/">FDB首頁</router-link>
        <router-link to="/about">關於FDB</router-link>
        <router-link to="/partner">合作夥伴</router-link>
        <router-link to="/news">最新消息</router-link>
      </div>
    </div> -->
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
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  },
  mounted() {},
  methods: {
    // toggleMobileMenu() {
    //   window.$('.mobile-drop').slideToggle()
    // }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: black;
  &-logo {
    flex: 1;
    img {
      width: auto;
    }
  }
  &-menu {
    flex: 2;
    display: flex;
    justify-content: center;
    a {
      margin-right: 45px;
      color: #ccc;
      &:hover {
        color: #fff;
      }
    }
  }
  &-setting {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: auto;
    }
    &.is-mobile {
      img {
        margin-right: 8px;
        color: #ccc;
      }
      a {
        margin-right: 8px;
        color: #ccc;
      }
    }
    a {
      margin-right: 25px;
      color: #ccc;
      &.register {
        line-height: 30px;
        margin-right: 25px;
        border: 1px solid;
        border-image: linear-gradient(180deg, #62ffff 0%, #3ea9cc 100%) 1;
        padding: 0px 22px;
        border-radius: 6px;
        background-color: black;
        clip-path: inset(0 round 7px);
      }
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
