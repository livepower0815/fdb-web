<template>
  <div id="app" class="outline">
    <Nav />
    <router-view />
    <Footer />
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
  }
}
</script>

<style lang="scss"></style>
