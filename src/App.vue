<template>
  <div id="app">
    <navbar class="indigo" name="Vue Firebase CRUD" href="#/">
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#/" v-bind:class="{'active': $route.name == 'login'}" v-if="!isAuthenticated">Sign In</navbar-item>
          <navbar-item href="#/signup" v-bind:class="{'active': $route.name == 'signup'}" v-if="!isAuthenticated">Sign Up</navbar-item>
          <navbar-item href="#/about" v-bind:class="{'active': $route.name == 'about'}" v-if="isAuthenticated">About</navbar-item>
        </navbar-nav>
        <btn color="primary" @click.native="logout" v-if="isAuthenticated">Logout</btn>
      </navbar-collapse>
    </navbar>
    <router-view class="container router-view"/>
  </div>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Btn } from "mdbvue";

import firebase from 'firebase';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn
    
  },
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser')
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('signin')
      }).catch(function(error) {
        console.log('error: ', error);
      });
    }
  },
  
  computed: {
    isAuthenticated() {
      return this.$store.state.user
    }
  },

  created() {
    this.setUser() 
  }
};

</script>

<style lang="scss" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  a, span {
    color: white;
  }
  .router-view {
    margin-top: 20px;
  }
  
}

</style>
