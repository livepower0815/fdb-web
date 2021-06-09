<template>
  <div id="app" class="outline">
    <Nav v-if="!hideNavFooter" />
    <router-view />
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
    }
  }
}
</script>

<style lang="scss"></style>
