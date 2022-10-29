import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/subfolder/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../components/Index.vue'),
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('../components/Content.vue'),
    },
  ],
});

export default router;
