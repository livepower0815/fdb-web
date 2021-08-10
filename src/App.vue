<template>
  <div id="app" v-loading="globalLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
    <Nav v-if="!hideNavFooter" />
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="!hideNavFooter" />
    <Connect v-if="!hideNavFooter && scrollBottom > 100" />
  </div>
</template>

<script>
import Nav from '@/layout/Nav'
import Footer from '@/layout/Footer'
import Connect from '@/components/common/Connect'
import { debounce } from '@/utils/debounce.js'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    Connect
  },
  computed: {
    hideNavFooter() {
      return this.$route.meta.hideNavFooter
    },
    globalLoading() {
      return this.$store.state.app.globalLoading
    },
    scrollBottom() {
      return this.$store.state.app.scrollBottom
    }
  },
  created() {
    // 取得交易所清單
    this.$store.dispatch('app/getCoinStoreGroup')
  },
  mounted() {
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
    }
  }
}
</script>

<style lang="scss"></style>
