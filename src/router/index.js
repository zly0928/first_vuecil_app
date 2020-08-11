import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: () => import('@/views/menu.vue')
  },
  {
    path: '/capitalReportAbroad',
    name: 'capitalReportAbroad',
    component: () => import('@/views/bas/capital-report-abroad.vue')
  }
]

const router = new VueRouter({
  // bas:'/aoxinwechat/',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
