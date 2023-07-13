import { createRouter, createWebHistory } from 'vue-router'
import { info } from '../api/users' //引入接口，获取用户信息，为了在请求头中携带token，进行接口的校验，如果没有token，就不让访问接口，直接跳转到登录页面，进行登录，获取token，再进行接口的访问 ，这样就可以保证接口的安全性，防止接口被恶意访问。

const Index = () => import('@/views/Index/index.vue')
const Login = () => import('@/views/Login/index.vue')
const Goods = () => import('@/views/Goods/index.vue')
const Trade = () => import('@/views/Trade/index.vue')
const Content = () => import('@/views/Content/index.vue')
const Shopstore = () => import('@/views/Shopstore/index.vue')
const Marketing = () => import('@/views/Marketing/index.vue')
const Promotion = () => import('@/views/Promotion/index.vue')
const User = () => import('@/views/User/index.vue')
const Customeservice = () => import('@/views/Customeservice/index.vue')
const Accounting = () => import('@/views/Accounting/index.vue')
const Statistics = () => import('@/views/Statistics/index.vue')
const Service = () => import('@/views/Service/index.vue')
const Application = () => import('@/views/Application/index.vue')



const Mygoods = () => import('@/views/Goods/mygoods.vue')
const Publishgoods = () => import('@/views/Goods/publishgoods.vue')
const Completed_orders = () => import('@/views/Trade/completed_orders.vue')
const Uncompleted_orders = () => import('@/views/trade/uncompleted_orders.vue')
const All_orders = () => import('@/views/Trade/all_orders.vue')



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,//首页
      // redirect: '/goods',
      meta: {
        auth: true  // 需要权限，meta中的数据是可以继承给children //全局守卫的权限，可以继承给子
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,//登录
      meta: {
        auth: false  // 不给权限
      }

    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,//商品
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
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// 全局路由守卫 //
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {//判断是否需要权限
    // 调用info操作的时候，自动在请求头中携带token
    info().then(res => {
      if (res.data.meta.status === 200) {
        console.log('已登录')
        next()
      }
      else {
        next('/login')
        console.log('未登录')
      }
    })

  } else { //不需要权限
    next()
  }
})//全局前置守卫

export default router
