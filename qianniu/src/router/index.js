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
      component: Index //首页
    },
    {
      path: '/login',
      name: 'login',
      component: Login //登录
    },
    {
      path: 'goods',
      name: 'goods',
      component: Goods //商品
    },
    {
      path: 'trade',
      name: 'trade',
      component: Trade //交易
    },
    {
      path: 'content',
      name: 'content',
      component: Content //内容
    },
    {
      path: 'shopstore',
      name: 'shopstore',
      component: Shopstore //店铺
    },
    {
      path: 'marketing',
      name: 'marketing',
      component: Marketing //营销
    },
    {
      path: 'promotion',
      name: 'promotion',
      component: Promotion //推广
    },
    {
      path: 'user',
      name: 'user',
      component: User //用户
    },
    {
      path: 'customeservice',
      name: 'customeservice',
      component: Customeservice //客服
    },
    {
      path: 'accounting',
      name: 'accounting',
      component: Accounting //财务
    },
    {
      path: 'statistics',
      name: 'statistics',
      component: Statistics //数据
    },
    {
      path: 'service',
      name: 'service',
      component: Service //服务
    },
    {
      path: 'application',
      name: 'application',
      component: Application //应用
    },
    {
      path:'/:pathMatch(.*)*', 
      redirect:'/'
    }
  ]
})

export default router
