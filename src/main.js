import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import '@/plugins/echarts'

// css
import '@/assets/css/common.css'
import '@/assets/css/others.css'
import '@/assets/css/rwd-set.css'

// Element UI
import ElementUI from 'element-ui'
import '@/style/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-TW' // lang i18n

import '@/style/common.scss'

// route gateway
import '@/permission'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
