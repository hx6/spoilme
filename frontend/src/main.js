import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore' 
import Firebase from 'firebase'
import {auth} from './firebase' 
import {db} from './firebase' 
import './assets/style/input.scss'

Vue.use(VueFirestore)

Vue.config.productionTip = false

router.beforeEach((to,from,next) => { 
  let currentUser = auth.currentUser;
  console.log(currentUser)
  let isLogin = to.matched.some( record => record.name === "login");
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  }else if(currentUser && isLogin){
    next("usermenu");
  }else{
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}) 
