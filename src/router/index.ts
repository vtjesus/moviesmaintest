import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // home
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    //login
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    // movie
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieView.vue')
    },

    // movie lists : nowplaying, popular
    {
      path: '/movies/:movieList',
      name: 'movie-list',
      component: () => import('../views/MovieListView.vue')
    },
    {
      path: '/movies/:movieList/:id',
      name: 'movie-list__movie',
      component: () => import('../views/MovieView.vue')
    }
  ]
})

export default router
