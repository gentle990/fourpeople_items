import { createRouter, createWebHistory } from 'vue-router'
const Index = () => import('../views/Login/index.vue')
const Login = () => import('../views/Index/index.vue')
const Goods = () => import('../views/Goods/index.vue')
const Trade = () => import('../views/Trade/index.vue')
const Content = () => import('../views/Content/index.vue')
const Shopstore = () => import('../views/Shopstore/index.vue')
const Marketing = () => import('../views/Marketing/index.vue')
const Promotion = () => import('../views/Promotion/index.vue')
const User = () => import('../views/User/index.vue')
const Customeservice = () => import('../views/Customeservice/index.vue')
const Accounting = () => import('../views/Accounting/index.vue')
const Statistics = () => import('../views/Statistics/index.vue')
const Service = () => import('../views/Service/index.vue')
const Mygoods = () => import('../views/Goods/mygoods.vue')
const Publishgoods = () => import('../views/Goods/publishgoods/index.vue')
const Completed_orders = () => import('../views/Trade/completed_orders.vue')
const Uncompleted_orders = () => import('../views/trade/uncompleted_orders.vue')
const All_orders = () => import('../views/Trade/all_orders.vue')



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,//首页
      redirect:'/goods',
      meta: {
        auth: true  // 需要权限，meta中的数据是可以继承给children
      },
      children: [
        {
          path: 'mygoods',
          name: 'mygoods',
          component: Mygoods,
          meta: {
            breadcrumbs: ['我的宝贝']
          }
        },
        {
          path: 'publishgoods',
          name: 'publishgoods',
          component: Publishgoods,
          meta: {
            breadcrumbs: ['发布宝贝']
          }
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login //登录
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods //商品
    },
    {
      path: '/trade',
      name: 'trade',
      component: Trade, //交易
      meta: {
        auth: true  // 需要权限，meta中的数据是可以继承给children
      },
      children: [
        {
          path: 'completed_orders',//已完成的订单
          name: 'completed_orders',
          component: Completed_orders,
          meta: {
            breadcrumbs: ['已完成的订单']
          }
        },
        {
          path: 'uncompleted_orders',//未完成的订单
          name: 'uncompleted_orders',
          component: Uncompleted_orders,
          meta: {
            breadcrumbs: ['未完成的订单']
          }
        },
        {
          path: 'all_orders',//所有订单
          name: 'all_orders',
          component: All_orders,
          meta: {
            breadcrumbs: ['All_orders']
          }
        }
      ],
    },
    {
      path: '/content',
      name: 'content',
      component: Content //内容
    },
    {
      path: '/shopstore',
      name: 'shopstore',
      component: Shopstore //店铺
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: Marketing //营销
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: Promotion //推广
    },
    {
      path: '/user',
      name: 'user',
      component: User //用户
    },
    {
      path: '/customeservice',
      name: 'customeservice',
      component: Customeservice //客服
    },
    {
      path: '/accounting',
      name: 'accounting',
      component: Accounting //财务
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics //数据
    },
    {
      path: '/service',
      name: 'service',
      component: Service //服务
    },
    {
      path: '/application',
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
