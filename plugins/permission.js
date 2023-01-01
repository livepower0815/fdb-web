import { getToken } from '@/utils/auth' // get token from cookie

export default ({ store }) => {
  // 會員可造訪名单
  const memberPermissionList = ['lang-personal', 'lang-dashboard', 'lang-take-cash']

  window.onNuxtReady(() => {
    // nuxt 好的時候不會觸發 beforeEach 要先做一些處理
    const hasToken = getToken()
    if (hasToken && Object.keys(store.state.user.userInfo).length === 0) {
      store.dispatch('user/getUserInfo')
    }

    // 路由守衛
    store.$router.beforeEach(async (to, from, next) => {
      const hasToken = getToken()
      // 沒有登入不能造訪會員權限頁面
      if (!hasToken && memberPermissionList.indexOf(to.name) !== -1) {
        next({ name: 'lang-home', params: { lang: to.params.lang } })
        return
      }

      // 判断登入状态
      if (hasToken) {
        // 確認 user info 是否存在
        const hasGetUserInfo = Object.keys(store.state.user.userInfo).length === 0
        if (hasGetUserInfo) {
          try {
            await store.dispatch('user/getUserInfo')
            next()
          } catch (error) {
            // remove token and go to login page to re-login
            await store.dispatch('user/resetToken')
            next({ name: 'lang-login', params: { lang: to.params.lang } })
          }
          return
        }
      }

      next()
    })
  })
}
