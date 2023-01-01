<template>
  <!--Header開始-->
  <div class="navbar" :style="{ zIndex: mobileMenu.show ? '3000' : '300' }">
    <NuxtLink :to="{ name: 'lang-home', params: { lang } }" class="navbar-logo">
      <img v-if="deviceWidth > 545" src="@/assets/img/nav/logo.png" alt="nav-icon" />
      <img v-else src="@/assets/img/nav/logo-m.png" alt="nav-icon" />
    </NuxtLink>
    <div v-if="deviceWidth >= 1024" class="navbar-menu">
      <NuxtLink :to="{ name: 'lang-partner', params: { lang } }">{{ $t('exchange_platform') }}</NuxtLink>
      <NuxtLink :to="{ name: 'lang-live', params: { lang } }">{{ $t('live_learning') }}</NuxtLink>
      <NuxtLink :to="{ name: 'lang-news', params: { lang } }">{{ $t('info_center') }}</NuxtLink>
      <NuxtLink :to="{ name: 'lang-help', params: { lang } }">{{ $t('help_center') }}</NuxtLink>
    </div>

    <div class="navbar-setting" :class="{ 'is-mobile': deviceWidth < 768 }">
      <template v-if="deviceWidth < 1024">
        <img class="navbar-m-menu" src="@/assets/img/nav/menu.png" alt="menu" @click="mobileMenu.show = true" />
      </template>

      <!-- 個人大頭貼工作區 -->
      <el-dropdown v-if="hasInfo" trigger="click" @command="handleCommand">
        <el-avatar
          size="small"
          :icon="userInfo.imageUrl ? '' : 'el-icon-user-solid'"
          :src="userInfo.imageUrl || ''"
          style="cursor: pointer"
          :style="{ marginRight: deviceWidth >= 768 ? '20px' : '0px' }"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">{{ $t('personal_information') }}</el-dropdown-item>
          <el-dropdown-item command="dashboard">{{ $t('overview_rebate') }}</el-dropdown-item>
          <el-dropdown-item command="logout">{{ $t('logout') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <template v-if="!hasInfo">
        <NuxtLink :to="{ name: 'lang-login', params: { lang } }" :style="{ 'margin-right': deviceWidth >= 768 ? '20px' : '10px' }">
          {{ $t('login') }}
        </NuxtLink>
        <NuxtLink
          :to="{ name: 'lang-register', params: { lang } }"
          class="register"
          :style="{ 'margin-right': deviceWidth >= 768 ? '20px' : '0' }"
        >
          {{ $t('register') }}
        </NuxtLink>
      </template>
      <template v-if="deviceWidth >= 768">
        <div style="width: 0.5px; height: 20px; margin-right: 20px; background-color: #fff"></div>
        <el-dropdown key="navbar-lang" trigger="click" @command="handleLang">
          <span style="margin: 0; font-family: 'Noto Sans CJK TC'; color: #fff; cursor: pointer">{{ lang }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="TW">TW</el-dropdown-item>
            <el-dropdown-item command="EN">EN</el-dropdown-item>
            <el-dropdown-item command="CN">CN</el-dropdown-item>
            <el-dropdown-item command="JP">JP</el-dropdown-item>
            <el-dropdown-item command="KR">KR</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <el-dropdown v-else style="display: flex" key="navbar-m-lang" trigger="click" @command="handleLang">
        <img class="navbar-m-lang" src="@/assets/img/nav/mdi_web.png" alt="globel" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="TW">TW</el-dropdown-item>
          <el-dropdown-item command="EN">EN</el-dropdown-item>
          <el-dropdown-item command="CN">CN</el-dropdown-item>
          <el-dropdown-item command="JP">JP</el-dropdown-item>
          <el-dropdown-item command="KR">KR</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!--手機版menu開始-->
    <el-drawer :visible.sync="mobileMenu.show" direction="ttb" :with-header="false">
      <div class="drawer-menu">
        <NuxtLink :to="{ name: 'lang-partner', params: { lang } }" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('exchange_platform') }}
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'lang-live', params: { lang } }" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('live_learning') }}
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'lang-news', params: { lang } }" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('info_center') }}
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'lang-help', params: { lang } }" v-slot="{ navigate }" custom>
          <div class="menu-link" @click="navigate">
            {{ $t('help_center') }}
          </div>
        </NuxtLink>
      </div>
    </el-drawer>
    <!--手機版menu結束-->
  </div>
</template>

<script>
export default {
  name: 'FDBNav',
  data() {
    return {
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
    },
    lang() {
      return this.$route.params.lang || 'TW'
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
          this.$router.push({ name: 'lang-personal', params: { lang: this.lang } })
          break
        case 'dashboard':
          this.$router.push({ name: 'lang-dashboard', params: { lang: this.lang } })
          break
        case 'logout':
          this.$store.dispatch('user/logout')
          if (this.$route.name !== 'lang-home') {
            this.$router.push({ name: 'lang-home', params: { lang: this.lang } })
          }
          break
      }
    },
    handleLang(lang) {
      if (this.lang === lang) return
      this.$store.commit('app/SET_G_LOADING', true)
      this.$router.push({
        name: this.$route.name,
        query: { ...this.$route.query },
        params: { ...this.$route.params, lang }
      })

      // 這邊會受到頁面 asyncData 的影響要等他們異步資料切換
      window.setTimeout(() => {
        window.location.reload()
        this.$store.commit('app/SET_G_LOADING', false)
      }, 1500)
      // // // 本地環境切換語言不重新載入
      // if (process.env.NODE_ENV === 'production') {
      //   window.location.reload()
      // }
    }
  }
}
</script>
