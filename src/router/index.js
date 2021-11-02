import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../cart_home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart_home',
    name: 'cart',
    component: cart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
     {
      path: '',
      name: 'xtsy',
      component: () => import('../views/xtsy/index.vue'),
     },
     {
      path: 'jbxx',
      name: 'jbxx',
      component: () => import('../views/jbxx/index.vue'),
     },
     {
      path: 'kcgl',
      name: 'kcgl',
      component: () => import('../views/kcgl/index.vue'),
     },
     {
      path: 'wdpc',
      name: 'wdpc',
      component: () => import('../views/pc/wdpc.vue'),
     }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
