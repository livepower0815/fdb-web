import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css
import '@/style/common.css'
import '@/style/flickity.css'
import '@/style/others.css'
import '@/style/rwd-set.css'

// Element UI
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-TW' // lang i18n

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
