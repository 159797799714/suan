import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index'
    },
    {
      path: '/index',
      component: Layout,
      children: [{
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页'
        }
      }]
    },
    {
      path: '/chat',
      component: Layout,
      children: [{
        path: '/',
        name: 'chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          title: '聊天'
        }
      }]
    },
    {
      path: '/learnRoom',
      component: Layout,
      children: [{
        path: '/',
        name: 'learnRoom',
        component: () => import('@/views/learnRoom/index.vue'),
        meta: {
          title: '学堂'
        }
      }]
    },
    {
      path: '/mine',
      component: Layout,
      children: [{
        path: '/',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
        meta: {
          title: '我的'
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register.vue'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/views/login/forget.vue'),
      meta: {
        title: '忘记密码'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  const whiteList = ['login', 'register', 'forget']
  if (whiteList.indexOf(to.name) === -1) {
    console.log(to)
    next({ name: 'login' })
  }
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  // next()
})

export default router

// {
//   path: '/login',
//   children: [{
//     path: '/',
//     name: 'login',
//     component: () => import('@/views/login/login.vue'),
//     meta: {
//       title: '登录'
//     }
//   }]
// },
// {
//   path: '/register',
//   children: [{
//     path: '/',
//     name: 'register',
//     component: () => import('@/views/login/register.vue'),
//     meta: {
//       title: '注册'
//     }
//   }]
// },
// {
//   path: '/forget',
//   children: [{
//     path: '/',
//     name: 'forget',
//     component: () => import('@/views/login/forget.vue'),
//     meta: {
//       title: '忘记密码'
//     }
//   }]
// }
