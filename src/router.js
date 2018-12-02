import Vue from 'vue'
import Router from 'vue-router'
import Createclient from './views/createclient.vue'
import Login from './views/login.vue'
import Logged from './views/logged.vue'
import Signup from './views/signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/createclient',
      name: 'createclient',
      component: Createclient
    },
    {
    path: '/login',
    name: 'login',
    component: Login
	},
   {
    path: '/logged',
    name: 'logged',
    component: Logged
  },
   {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
  ]
})
