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
    path: '/logowanie',
    name: 'Login',
    component: () => import(/* webpackChunkName: "film" */ '../views/TheLogin.vue'),
  },
  {
    path: '/film/:id',
    name: 'MoviePerID',
    component: () => import(/* webpackChunkName: "film" */ '../views/TheMovie.vue'),
  },
  {
    path: '/aktor/:id',
    name: 'ActorPerID',
    component: () => import(/* webpackChunkName: "aktor" */ '../views/TheActor.vue'),
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
        name: 'user-password',
        path: 'haslo',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ChangePasswordForm.vue')
      },
      {
        name: 'user-reviews',
        path: 'recenzje',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ReviewList.vue')
      },
      {
        name: 'user-lists',
        path: 'listy',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/UserLists.vue')
      },
      {
        name: 'user-admin',
        path: 'administrator',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/Admin.vue'),
        children: [
          {
            name: 'admin-add-movie',
            path: 'dodawanie-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/AddMovieForm.vue'),
          },
          {
            name: 'admin-import-movie',
            path: 'import-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ImportMovieForm.vue'),
          },
          {
            name: 'admin-add-person',
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
