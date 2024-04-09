import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/Menus/index.vue'),
    redirect: {name: 'Buttons'},
    children: [
      {
        path: '/component/buttons',
        name: 'Buttons',
        component: () => import('../views/Menus/Buttons/index.vue'),
      },
      {
        path: '/component/customNoticeBar',
        name: 'CustomNoticeBar',
        component: () => import('../views/Menus/CustomNoticeBar/index.vue'),
      },
      {
        path: '/component/customTitle',
        name: 'CustomTitle',
        component: () => import('../views/Menus/CustomTitle/index.vue'),
      },
      {
        path: '/component/formCard',
        name: 'FormCard',
        component: () => import('../views/Menus/FormCard/index.vue'),
      },
      {
        path: '/component/starEvaluate',
        name: 'StarEvaluate',
        component: () => import('../views/Menus/StarEvaluate/index.vue'),
      },
      {
        path: '/component/vehicleNumber',
        name: 'VehicleNumber',
        component: () => import('../views/Menus/VehicleNumber/index.vue'),
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;