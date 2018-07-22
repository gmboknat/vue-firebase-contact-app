import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueFire  from 'vuefire'

import 'bootstrap/dist/css/bootstrap.css';
import 'mdbvue/build/css/mdb.css';

Vue.config.productionTip = false

Vue.use(VueFire)

// eslint-disable-next-line
firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})
