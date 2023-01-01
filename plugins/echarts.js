import Vue from 'vue'
import ECharts from 'vue-echarts'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'

// ECharts component
const component = {
  install: function(Vue) {
    Vue.component('v-chart', ECharts)
  }
}

Vue.use(component)
