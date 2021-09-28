import Vue from 'vue'
import VueI18n from 'vue-i18n'

import TW from '@/locales/TW.json'
import US from '@/locales/US.json'
import CN from '@/locales/CN.json'
import JP from '@/locales/JP.json'
import KR from '@/locales/KR.json'

// ElementUI 国际化
// import element_locale from 'element-ui/lib/locale'
// import element_zh_CN from 'element-ui/lib/locale/lang/zh-CN'
// import element_zh_TW from 'element-ui/lib/locale/lang/zh-TW'
// import element_en_US from 'element-ui/lib/locale/lang/en'

Vue.use(VueI18n)

// const messages = {
//   TW: Object.assign(zh_cn, element_zh_CN),
//   US: Object.assign(zh_tw, element_zh_TW),
//   CN: Object.assign(en, element_en_US)
// }

const i18n = new VueI18n({
  // set locale
  locale: localStorage.getItem('FDB-lang') || 'TW',
  // set locale messages
  messages: { TW, US, CN, JP, KR },
  fallbackLocale: 'TW'
})

// 为了实现element插件的多语言切换
// element_locale.i18n((key, value) => i18n.t(key, value))

export default i18n
