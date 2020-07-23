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
    path: '/index4',
    name: 'index4',
    component: () => import(/* webpackChunkName: "about" */ '../components/index4.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
