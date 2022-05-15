import { createRouter, createWebHistory } from 'vue-router';

const PageHome = () => import('@/components/PageHome');
const PageThreadShow = () => import('@/components/PageThreadShow');
const PageNotFound = () => import('@/components/PageNotFound');

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  {
    path: '/thread/show/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
