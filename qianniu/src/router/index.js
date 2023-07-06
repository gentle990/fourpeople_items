import { createRouter, createWebHistory } from 'vue-router'
component: () => import('../views/Login/index.vue')
component: () => import('../views/Index/index.vue')
component: () => import('../views/Goods/index.vue')
component: () => import('../views/Trade/index.vue')
component: () => import('../views/Content/index.vue')
component: () => import('../views/Shopstore/index.vue')
component: () => import('../views/Marketing/index.vue')
component: () => import('../views/Promotion/index.vue')
component: () => import('../views/User/index.vue')
component: () => import('../views/Customeservice/index.vue')
component: () => import('../views/Accounting/index.vue')
component: () => import('../views/Statistics/index.vue')
component: () => import('../views/Service/index.vue')
component: () => import('../views/Application/index.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: 'goods',
      name: 'goods',
      component: Goods
    },
    {
      path: 'trade',
      name: 'trade',
      component: Trade
    },
    {
      path: 'content',
      name: 'content',
      component: Content
    },
    {
      path: 'shopstore',
      name: 'shopstore',
      component: Shopstore
    },
    {
      path: 'marketing',
      name: 'marketing',
      component: Marketing
    },
    {
      path: 'promotion',
      name: 'promotion',
      component: Promotion
    },
    {
      path: 'user',
      name: 'user',
      component: User
    },
    {
      path: 'customeservice',
      name: 'customeservice',
      component: Customeservice
    },
    {
      path: 'accounting',
      name: 'accounting',
      component: Accounting
    },
    {
      path: 'statistics',
      name: 'statistics',
      component: Statistics
    },
    {
      path: 'service',
      name: 'service',
      component: Service
    },
    {
      path: 'application',
      name: 'application',
      component: Application
    },
    {
      path:'/:pathMatch(.*)*', 
      redirect:'/'
    }
  ]
})

export default router
