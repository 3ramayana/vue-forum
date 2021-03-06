import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';

const PageHome = () => import('@/components/PageHome');
const PageThreadShow = () => import('@/components/PageThreadShow');
const PageNotFound = () => import('@/components/PageNotFound');

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );

      if (threadExists) {
        return next();
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
