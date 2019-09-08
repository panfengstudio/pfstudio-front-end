import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Comments from './views/Comments.vue'
import GithubCallback from './views/GithubCallback.vue'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments,
    },
    {
      path: '/githubcallback',
      name: 'GithubCallback',
      component: GithubCallback,
    }
  ]
})
