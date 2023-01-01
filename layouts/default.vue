<template>
  <div class="fdb-layout" v-loading="globalLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
    <Nav v-if="!hideNavFooter" />
    <Nuxt />
    <Footer v-if="!hideNavFooter" />
    <CommonConnect v-if="!hideNavFooter" />
    <transition name="fade-transform" mode="out-in">
      <InitMask v-if="initLoading" />
    </transition>
  </div>
</template>

<script>
import { debounce } from '@/utils/debounce.js'

export default {
  name: 'App',
  computed: {
    hideNavFooter() {
      return this.$route.meta.hideNavFooter
    },
    initLoading() {
      return this.$store.state.app.initLoading
    },
    globalLoading() {
      return this.$store.state.app.globalLoading
    }
  },
  mounted() {
    // 打印版本訊息
    console.log(
      `%cFDB:%c${process.env.NUXT_ENV_CURRENT_GIT_SHA}`,
      'font-weight:bold; background:black;padding:3px 7px; border-radius:3px 0 0 3px;color:#fff;',
      'background:#35495e;padding:3px 7px; border-radius:0 3px 3px 0;color: #fff;'
    )

    // 結束初始化遮罩
    this.finishInitLoading()

    // 監聽裝置寬度
    this.$store.commit('app/SET_DEVICE_WIDTH', window.innerWidth)
    const debounceWidth = debounce(() => {
      this.$store.commit('app/SET_DEVICE_WIDTH', window.innerWidth)
    }, 100)
    window.addEventListener('resize', debounceWidth)

    // 滾動距離底部距離
    const debounceScroll = debounce(this.scorllBottomCheck, 20)
    window.addEventListener('scroll', debounceScroll)
  },
  methods: {
    scorllBottomCheck() {
      this.$store.commit(
        'app/SET_SCROLL_BOTTOM',
        document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop
      )
    },
    finishInitLoading() {
      window.setTimeout(() => {
        this.$store.commit('app/SET_INIT_LAODING', false)
      }, 2500)
    }
  }
}
</script>

<style lang="scss">
.fdb-layout {
  position: relative;
}
</style>
