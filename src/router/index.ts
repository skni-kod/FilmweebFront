import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/TheHome.vue'
import store from '@/store';

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
    beforeEnter: (_, _2, next) => {
      if (store.getters.isAuthenticated) { next({ name: 'Home' }); }
      else { next(); }
    },
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
    meta: { requiresAuth: true },
    children: [
      {
        name: 'User',
        path: 'dane',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ProfileInfoForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'user-password',
        path: 'haslo',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ChangePasswordForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'user-reviews',
        path: 'recenzje',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ReviewList.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'user-lists',
        path: 'listy',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/UserLists.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'user-admin',
        path: 'administrator',
        component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/Admin.vue'),
        meta: { requiresAdmin: true },
        children: [
          {
            name: 'admin-add-movie',
            path: 'dodawanie-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/AddMovieForm.vue'),
            meta: { requiresAdmin: true },
          },
          {
            name: 'admin-import-movie',
            path: 'import-filmu',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/ImportMovieForm.vue'),
            meta: { requiresAdmin: true },
          },
          {
            name: 'admin-add-person',
            path: 'dodawanie-osoby',
            component: () => import(/* webpackChunkName: "group-user" */ '../components/profilePage/AddPersonForm.vue'),
            meta: { requiresAdmin: true },
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

router.beforeEach((to, _, next) => {
  if (to.meta?.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.meta?.requiresAdmin && !store.getters.isAdmin) {
    next({ name: 'Home' });
  } else {
    next()
  }
});

export default router
