import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ './pages/Home.vue'),
  },
  {
    path: '/movies/:id',
    name: 'movies',
    component: () => import(/* webpackChunkName: 'movies' */ './pages/Movie.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
