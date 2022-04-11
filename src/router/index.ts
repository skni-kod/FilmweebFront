import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/TheHome.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "film" */ '../views/TheMovie.vue'),
  },
  {
    path: '/wyszukiwanie',
    name: 'Search',
    component: () => import(/* webpackChunkName: "film" */ '../views/TheSearch.vue'),
  },
  {
    path: '/uzytkownik',
    name: 'User',
    component: () => import(/* webpackChunkName: "film" */ '../views/UserProfile.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
