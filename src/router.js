import Vue from 'vue'
import Router from 'vue-router'
import Createclient from './views/createclient.vue'
import Login from './views/login.vue'
import Logged from './views/logged.vue'
import Signup from './views/signup.vue'
import Chooseskill from './views/chooseskill.vue'
import Csstest from './views/csstest.vue'

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
  },
   {
    path: '/chooseskill',
    name: 'chooseskill',
    component: Chooseskill
  },
  {
    path:'/csstest',
    name:'csstest',
    component: Csstest 
  }
  ]
})
