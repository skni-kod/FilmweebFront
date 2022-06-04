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
    component: () => import(/* webpackChunkName: "group-user" */ '../views/UserProfile.vue'),
    children: [
      {
        name: 'User',
        path: 'dane',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ProfileInfoForm.vue')
      },
      {
        path: 'haslo',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ChangePasswordForm.vue')
      },
      {
        path: 'recenzje',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ReviewList.vue')
      },
      {
        path: 'listy',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/UserLists.vue')
      },
      {
        path: 'administrator',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/Admin.vue'),
        children: [
          {
            path: 'dodawanie-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/AddMovieForm.vue'),
          },
          {
            path: 'import-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ImportMovieForm.vue'),
          },          
          {
            path: 'dodawanie-osoby',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/AddPersonForm.vue'),
          }
        ]
      },
    ]
  },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
