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

Vue.prototype.$store = store
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
