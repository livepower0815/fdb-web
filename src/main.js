import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/plugins/i18n'

// plugin
import '@/plugins/echarts'

// css
import '@/assets/css/common.css'
import '@/assets/css/others.css'
import '@/assets/css/rwd-set.css'

// Element UI
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'

import '@/style/index.scss'

// route gateway
import '@/permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
