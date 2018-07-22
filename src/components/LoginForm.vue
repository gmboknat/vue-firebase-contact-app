<template>
  <div class="user-form">
    <!-- <h1>{{ msg }}</h1> -->

<form>
  <p class="h4 text-center mb-4">Sign In</p>
  <div class="grey-text">
    <md-input label="Your email" icon="envelope" type="email" v-model="email"/>
    <md-input label="Your password" icon="lock" type="password" v-model="password"/>
  </div>
  <div class="text-center">
    <btn color="primary" @click.native.stop="signIn" type="button">Login</btn>
  </div>
</form>
  </div>
</template>

<script>
import {MdInput, Btn} from 'mdbvue';

import firebase from "firebase";

export default {
  name: 'login-form',
  components: {
    MdInput,
    Btn,
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('about');
      }).catch((err) => {
        console.log('err: ', err.message);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
