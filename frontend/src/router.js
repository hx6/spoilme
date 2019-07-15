import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Regiter from './views/Register.vue'
import LogMain from './views/LogMain.vue'
import List from './views/List.vue'
import UserMenu from './views/UserMenu.vue'
import AddList from './views/Addlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LogMain
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Regiter
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      // meta: {requiresAuth: true}
    },
    {
      path: '/addlist',
      name: 'addlist',
      component: AddList
    },
    {
      path: '/usermenu',
      name: 'usermenu',
      component: UserMenu,
      // meta: {requiresAuth: true}
    }
  ]
})
