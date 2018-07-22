import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue'
import firebase from "firebase";

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
      beforeEnter: (to, from, next) => {
        let currentUser = firebase.auth().currentUser;
        if (currentUser) next('/')
        else next()
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupForm,
      beforeEnter: (to, from, next) => {
        let currentUser = firebase.auth().currentUser;
        if (currentUser) next('/')
        else next()
      }
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login')
  else next()

})

export default router;

