import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store/index.js'
import fastclick from 'fastclick'

Vue.config.productionTip = false
// 解决移动端300ms点击事件延迟
fastclick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
