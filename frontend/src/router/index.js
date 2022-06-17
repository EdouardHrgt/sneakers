import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import('../views/Collections.vue')
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/Men.vue'),
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/Women.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
