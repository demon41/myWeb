import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import('@/views/Choose.vue')
  },
  {
    path: '/fateList',
    name: 'FateList',
    component: () => import('@/views/fate/fate_list.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
