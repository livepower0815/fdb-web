import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie

// 會員可造訪名单
const memberPermissionList = ['Personal', 'Dashboard', 'TakeCash']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  // 沒有登入不能造訪會員權限頁面
  if (!hasToken && memberPermissionList.indexOf(to.name) !== -1) {
    next({ name: 'Home' })
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
        next({ name: 'Login' })
      }
      return
    }
  }

  next()
})

router.afterEach(to => {
  // 覆盖网页的title
  document.title = to.meta?.title || '返多寶'
})
