import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'


import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

import axios from "axios"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$http = axios.create({
  // baseURL: "http://localhost:1080"
  baseURL: "http://pfstudio.ayang818.top:1080"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
