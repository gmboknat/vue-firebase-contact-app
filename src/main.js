import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css';
import 'mdbvue/build/css/mdb.css';

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAABoAqN41-P6WZuutFipiNuM8GThMWhgE",
  authDomain: "contact-management-syste-b9738.firebaseapp.com",
  databaseURL: "https://contact-management-syste-b9738.firebaseio.com",
  projectId: "contact-management-syste-b9738",
  storageBucket: "",
  messagingSenderId: "961633278155"
};
firebase.initializeApp(config);

// eslint-disable-next-line
firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})
