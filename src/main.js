import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/icon/iconfont.css'
import '@/assets/style/common.scss'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
