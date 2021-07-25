<template>
  <div id="app" v-loading="globalLoading" element-loading-background="rgba(0, 0, 0, 0.5)">
    <Nav v-if="!hideNavFooter" />
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
    <Footer v-if="!hideNavFooter" />
  </div>
</template>

<script>
import Nav from '@/layout/Nav'
import Footer from '@/layout/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  computed: {
    hideNavFooter() {
      return this.$route.meta.hideNavFooter
    },
    globalLoading() {
      return this.$store.state.app.globalLoading
    }
  },
  created() {
    // 取得交易所清單
    this.$store.dispatch('app/getCoinStoreGroup')
  },
  mounted() {
    // 監聽裝置寬度
    this.$store.commit('app/SET_DEVICE_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => {
      this.$store.commit('app/SET_DEVICE_WIDTH', window.innerWidth)
    })
  }
}
</script>

<style lang="scss"></style>
