import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('@/views/partner/Partner.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/News.vue')
  },
  {
    path: '/news-info',
    name: 'NewsInfo',
    component: () => import('@/views/news-info/NewsInfo.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/personal/Personal.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/Register.vue'),
    meta: {
      hideNavFooter: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
