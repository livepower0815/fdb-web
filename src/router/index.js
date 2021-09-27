import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  // 首頁
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  // 開始返佣
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About.vue')
  },
  // 合作幣商
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('@/views/partner/Partner.vue')
  },
  // 最新消息
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/News.vue')
  },
  // 免責聲明
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: () => import('@/views/disclaimer/Disclaimer.vue')
  },
  // 隱私條款
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('@/views/privacy-policy/PrivacyPolicy.vue')
  },
  // 個人帳號
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/personal/Personal.vue')
  },
  // 註冊
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/Register.vue'),
    meta: {
      // 隱藏導航欄及頁尾
      hideNavFooter: true
    }
  },
  // 登入
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      // 隱藏導航欄及頁尾
      hideNavFooter: true
    }
  },
  // 重置密碼
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/views/reset-password/ResetPassword.vue'),
    meta: {
      // 隱藏導航欄及頁尾
      hideNavFooter: true
    }
  },
  // 建立新密碼
  {
    path: '/new-password',
    name: 'NewPassword',
    component: () => import('@/views/new-password/NewPassword.vue'),
    meta: {
      // 隱藏導航欄及頁尾
      hideNavFooter: true
    }
  },
  // 後台儀錶板
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    async beforeEnter(to, from, next) {
      store.commit('app/SET_G_LOADING', true)
      // 沒有綁定交易所 不要讓她到 dashboard 讓它到 綁定交易所頁面並提示 (在提供綁定交易所提示文案)
      try {
        const stores = await store.dispatch('user/getBindStores')
        // 沒有綁定清單或是清單內沒有驗證完成的交易所
        if (stores.length === 0 || !stores.find(item => item.status === 1)) {
          next({ name: 'Personal' })
          Message({
            type: 'warning',
            duration: 10 * 1000,
            message: '交易所尚未綁定，無法查看交易總覽。'
          })
          store.commit('app/SET_G_LOADING', false)
          return
        }
      } catch (error) {
        console.error(error)
        next({ name: 'Personal' })
        store.commit('app/SET_G_LOADING', false)
        return
      }
      store.commit('app/SET_G_LOADING', false)
      next()
    }
  },
  // 出金申請
  {
    path: '/take-cash',
    name: 'TakeCash',
    component: () => import('@/views/take-cash/TakeCash.vue')
  },
  // 信箱 mail HTML
  {
    path: '/mail-1',
    name: 'MailContent1',
    component: () => import('@/views/mail/MailContent1.vue')
  },
  {
    path: '/mail-2',
    name: 'MailContent2',
    component: () => import('@/views/mail/MailContent2.vue')
  },
  {
    path: '/mail-3',
    name: 'MailContent3',
    component: () => import('@/views/mail/MailContent3.vue')
  },
  {
    path: '/mail-4',
    name: 'MailContent4',
    component: () => import('@/views/mail/MailContent4.vue')
  },
  {
    path: '/mail-5',
    name: 'MailContent5',
    component: () => import('@/views/mail/MailContent5.vue')
  },
  {
    path: '/mail-6',
    name: 'MailContent6',
    component: () => import('@/views/mail/MailContent6.vue')
  },
  {
    path: '/mail-7',
    name: 'MailContent7',
    component: () => import('@/views/mail/MailContent7.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === from.name) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
