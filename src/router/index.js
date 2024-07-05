import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CartView from '../views/CartView.vue'
import MoreView from '../views/MoreView.vue'
import AdminView from '../views/AdminView.vue'
import History from '../views/History.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/productdetail',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetail.vue')
    },
    {
      path: '/cart',
      name: 'CartView',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/more',
      name: 'MoreViewt',
      component: () => import('../views/MoreView.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/History.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
})

export default router
