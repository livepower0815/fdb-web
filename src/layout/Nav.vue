<template>
  <!--Header開始-->
  <div class="navbar" :style="{ zIndex: mobileMenu.show ? '3000' : '300' }">
    <router-link to="/" class="navbar-logo">
      <img src="@/assets/img/nav/logo.png" alt="nav-icon" />
    </router-link>
    <div v-if="deviceWidth >= 1024" class="navbar-menu">
      <router-link to="/">{{ $t('fdb_home') }}</router-link>
      <router-link to="/about">開始返佣</router-link>
      <router-link to="/partner">合作幣商</router-link>
      <router-link to="/news">{{ $t('latest_news') }}</router-link>
    </div>

    <div class="navbar-setting" :class="{ 'is-mobile': deviceWidth < 768 }">
      <template v-if="deviceWidth < 1024">
        <img class="navbar-m-menu" src="@/assets/img/nav/menu.png" alt="menu" @click="mobileMenu.show = true" />
        <el-dropdown v-if="deviceWidth < 768" key="navbar-m-lang" trigger="click" @command="handleLang">
          <img class="navbar-m-lang" src="@/assets/img/nav/mdi_web.png" alt="globel" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="TW">TW</el-dropdown-item>
            <el-dropdown-item command="EN">EN</el-dropdown-item>
            <el-dropdown-item command="CN">CN</el-dropdown-item>
            <el-dropdown-item command="JP">JP</el-dropdown-item>
            <el-dropdown-item command="KR">KR</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>

      <!-- 個人大頭貼工作區 -->
      <el-dropdown v-if="hasInfo" trigger="click" @command="handleCommand">
        <el-avatar
          size="small"
          :icon="userInfo.imageUrl ? '' : 'el-icon-user-solid'"
          :src="userInfo.imageUrl || ''"
          style="margin-right: 20px; cursor: pointer;"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">{{ $t('personal_information') }}</el-dropdown-item>
          <el-dropdown-item command="dashboard">{{ $t('overview_rebate') }}</el-dropdown-item>
          <el-dropdown-item command="logout">{{ $t('logout') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <template v-if="!hasInfo">
        <router-link to="/login" :style="{ 'margin-right': deviceWidth >= 768 ? '20px' : '10px' }">{{ $t('login') }}</router-link>
        <router-link to="/register" class="register" :style="{ 'margin-right': deviceWidth >= 768 ? '20px' : '0' }">
          {{ $t('register') }}
        </router-link>
      </template>
      <template v-if="deviceWidth >= 768">
        <div style="width: 0.5px;height: 20px;background-color: #fff;margin-right: 20px;"></div>
        <el-dropdown key="navbar-lang" trigger="click" @command="handleLang">
          <span style="margin: 0;font-family: 'Noto Sans CJK TC'; color: #fff; cursor: pointer;">{{ lang }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="TW">TW</el-dropdown-item>
            <el-dropdown-item command="EN">EN</el-dropdown-item>
            <el-dropdown-item command="CN">CN</el-dropdown-item>
            <el-dropdown-item command="JP">JP</el-dropdown-item>
            <el-dropdown-item command="KR">KR</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </div>

    <!--手機版menu開始-->
    <el-drawer :visible.sync="mobileMenu.show" direction="ttb" :with-header="false">
      <div class="drawer-menu">
        <router-link to="/" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('fdb_home') }}
          </div>
        </router-link>
        <router-link to="/about" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            開始返佣
          </div>
        </router-link>
        <router-link to="/partner" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            合作幣商
          </div>
        </router-link>
        <router-link to="/news" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('latest_news') }}
          </div>
        </router-link>
      </div>
    </el-drawer>
    <!--手機版menu結束-->
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'

export default {
  name: 'Nav',
  data() {
    return {
      lang: localStorage.getItem('FDB-lang') || 'TW',
      mobileMenu: {
        show: false
      }
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    },
    hasInfo() {
      return this.$store.getters.hasInfo
    },
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  watch: {
    $route() {
      this.mobileMenu.show = false
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'personal':
          this.$router.push({ name: 'Personal' })
          break
        case 'dashboard':
          this.$router.push({ name: 'Dashboard' })
          break
        case 'logout':
          this.$store.dispatch('user/logout')
          if (this.$route.name !== 'Home') {
            this.$router.push({ name: 'Home' })
          }
          break
      }
    },
    handleLang(lang) {
      localStorage.setItem('FDB-lang', lang)
      i18n.locale = lang
      this.lang = lang
      // location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #000000d6;
  padding: 0 3%;
  @media screen and (max-width: 1370px) {
    padding: 0 4%;
  }
  @media screen and (max-width: 960px) {
    padding: 0 6%;
  }
  &-logo {
    flex: 1;
    width: 70px;
    img {
      width: 70px;
    }
    @media screen and (min-width: 300px) and (max-width: 499px) {
      flex: 0 1 auto;
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
    .navbar-m-menu {
      margin-right: 12px;
    }
    .navbar-m-lang {
      margin-right: 12px;
    }
    img {
      width: auto;
    }
    &.is-mobile {
      a {
        margin-right: 8px;
        color: #ccc;
      }
    }
    a {
      margin-right: 25px;
      color: #ccc;
      &.register {
        font-family: 'Noto Sans CJK TC';
        line-height: 30px;
        margin-right: 25px;
        border: 1px solid;
        border-color: #62ffff;
        padding: 0px 22px;
        border-radius: 6px;
        background-color: black;
      }
      &:hover {
        color: #fff;
      }
    }
  }
}
.navbar {
  ::v-deep .el-drawer {
    background-color: unset;
  }
  ::v-deep .el-drawer__body {
    background-color: #050608cc;
  }
  .drawer-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    .menu-link {
      margin: 2px;
      font-size: 20px;
      letter-spacing: 0.05em;
    }
  }
}
</style>
