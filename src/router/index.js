import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index.vue'),
      meta: {
        title: '首页'
      }
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
    }, {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat/index.vue'),
      meta: {
        title: '聊天'
      }
    }, {
      path: '/learnRoom',
      name: 'learnRoom',
      component: () => import('@/views/learnRoom/index.vue'),
      meta: {
        title: '学堂'
      }
    }
  ]
})
