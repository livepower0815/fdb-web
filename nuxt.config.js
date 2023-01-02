module.exports = {
  target: 'static',
  ssr: false,
  router: {
    base: '/fdb-web/',
    mode: 'hash'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FUNDOBIT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '「Fundobit」the world’s largest CryptoCurrency rebate platform.' },
      // FB Line
      { hid: 'og:title', property: 'og:title', content: 'FUNDOBIT' },
      { hid: 'og:description', property: 'og:description', content: '「Fundobit」the world’s largest CryptoCurrency rebate platform.' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fdb-web-api.azurewebsites.net/Upload/UserImage/202111282001344329/F20211128200134.png'
      },
      // Twitter
      { hid: 'twitter:title', property: 'twitter:title', content: 'FUNDOBIT' },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: '「Fundobit」the world’s largest CryptoCurrency rebate platform.'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://fdb-web-api.azurewebsites.net/Upload/UserImage/202111282001344329/F20211128200134.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/fdb-web/logo.png' }],
    // Google OAuth2 使用
    script: [{ src: 'https://accounts.google.com/gsi/client', async: true, defer: true }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // css
    '@/assets/css/common.css',
    '@/assets/css/others.css',
    '@/assets/css/rwd-set.css',
    '@/style/variables/element-variables.scss',
    '@/style/main.scss'
  ],

  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000 // default: 3000
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/element-ui.js', mode: 'client' },
    { src: '~/plugins/i18n.js', mode: 'client' },
    { src: '~/plugins/date-helper.js', mode: 'client' },
    { src: '~/plugins/axios', mode: 'client' },
    { src: '~/plugins/api-plugin.js', mode: 'client' },
    { src: '~/plugins/enum-map.js', mode: 'client' },
    { src: '~/plugins/echarts.js', mode: 'client' },
    { src: '~/plugins/vuex-init.js', mode: 'client' },
    { src: '~/plugins/permission.js', mode: 'client' },
    { src: '~/plugins/gtm.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [['@nuxtjs/dotenv', { filename: process.env.BASE ? `.env.${process.env.BASE}` : '.env' }]],

  // // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   // Doc: https://github.com/nuxt-community/dotenv-module
  //   '@nuxtjs/dotenv'
  // ],

  pageTransition: {
    name: 'fade-transform',
    mode: 'out-in'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: null
  }
}
