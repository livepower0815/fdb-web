import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import '@/style/common.css'
import '@/style/flickity.css'
import '@/style/others.css'
import '@/style/rwd-set.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
