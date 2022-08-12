import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
