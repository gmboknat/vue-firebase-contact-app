<template>
  <div id="app">
    <navbar class="indigo" name="Vue Firebase CRUD" href="#/">
      <navbar-collapse>
        <navbar-nav>
          <navbar-item href="#/" v-bind:class="{'active': $route.name == 'home'}">Home</navbar-item>
          <navbar-item href="#/about" v-bind:class="{'active': $route.name == 'about'}">About</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from 'mdbvue/src/components/Navbar.vue';
import NavbarItem from 'mdbvue/src/components/NavbarItem.vue';
import NavbarNav from 'mdbvue/src/components/NavbarNav.vue';
import NavbarCollapse from 'mdbvue/src/components/NavbarCollapse.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse
  }
};

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  a, span {
    color: white;
  }

  .router-link-active {
    color: red;
    background-color: green;
  }
}

</style>
