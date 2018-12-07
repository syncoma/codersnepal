import Vue from 'vue'
import Router from 'vue-router'
import Createclient from './views/createclient.vue'
import Login from './views/login.vue'
import Logged from './views/logged.vue'

import PostVacancy from './views/postvacancy.vue'
import PostProject from './views/postproject.vue'
import Signup from './views/signup.vue'
<<<<<<< HEAD
import createWorker from './views/createworker.vue'


=======
import Chooseskill from './views/chooseskill.vue'
import Csstest from './views/csstest.vue'
>>>>>>> 60a7ed376a2cb995b27bfd6f2727e867c26a334a

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
    path: '/postvacancy',
    name: 'postvacancy',
    component: PostVacancy
  },
  
  {
    path: '/postproject',
    name: 'postproject',
    component: PostProject
  },

   {
    path: '/createworker',
    name: 'createworker',
    component: createWorker
  },

   {
    path: '/signup',
    name: 'signup',
    component: Signup
<<<<<<< HEAD

=======
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
>>>>>>> 60a7ed376a2cb995b27bfd6f2727e867c26a334a
  }
  ]
})
