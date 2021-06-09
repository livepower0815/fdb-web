import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首頁
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  // 關於ＦＤＢ
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About.vue')
  },
  // 合作夥伴
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
  // 消息資訊
  {
    path: '/news-info',
    name: 'NewsInfo',
    component: () => import('@/views/news-info/NewsInfo.vue')
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
  // 後台儀錶板
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue')
  },
  // 出金申請
  {
    path: '/take-cash',
    name: 'TakeCash',
    component: () => import('@/views/take-cash/TakeCash.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
