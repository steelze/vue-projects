import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ './pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ './pages/About.vue')
  },
  {
    path: '/cocktail/:id',
    name: 'cocktail',
    component: () => import(/* webpackChunkName: 'cocktail' */ './pages/SingleCocktail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import(/* webpackChunkName: 'error' */ './pages/Error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
