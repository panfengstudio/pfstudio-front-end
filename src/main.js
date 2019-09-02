import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:1080"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
