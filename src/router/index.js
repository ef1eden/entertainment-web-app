import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import TVSeriesView from '../views/TVSeriesView.vue'
import BookmarkedView from '../views/BookmarkedView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MoviesView
  },
  {
    path: '/tv-series',
    name: 'TVSeries',
    component: TVSeriesView
  },
  {
    path: '/bookmarked',
    name: 'Bookmarked',
    component: BookmarkedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
