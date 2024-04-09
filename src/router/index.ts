import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/comp',
    name: 'component',
    component: () => import('../views/Component/index.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;