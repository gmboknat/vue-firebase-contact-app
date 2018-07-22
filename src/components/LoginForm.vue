<template>
  <div class="form">
    <!-- <h1>{{ msg }}</h1> -->

    <!-- <form>
      <p class="h4 text-center mb-4">Sign In</p>
      <div class="grey-text">
        <md-input label="Your email" icon="envelope" type="email" v-model="email"/>
        <md-input label="Your password" icon="lock" type="password" v-model="password"/>
      </div>
      <div class="text-center">
        <btn color="primary" @click.native.stop="signIn" type="button">Login</btn>
      </div>
    </form> -->


    <card>
      <card-body>
        <form>
          <p class="h4 text-center py-4">Login</p>
          <div class="grey-text">
            <md-input label="Your email" icon="envelope" type="email" v-model="email"/>
            <md-input label="Your password" icon="lock" type="password" v-model="password"/>
          </div>
          <div class="text-center py-4 mt-3">
            <btn color="primary" @click.native.stop="signIn" type="button">Login</btn>
            <btn color="blue-grey" type="button" @click.native="goSignup"> Signup</btn>
          </div>
        </form>
      </card-body>
    </card>
  </div>
</template>

<script>
import {MdInput, Btn, Card, CardBody} from 'mdbvue';

import firebase from "firebase";

export default {
  name: 'login-form',
  components: {
    MdInput,
    Btn,
    Card,
    CardBody
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
        this.$router.replace('/');
      }).catch((err) => {
        console.log('err: ', err.message);
      })
    },
    goSignup() {
      this.$router.replace('/signup');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .form {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
</style>
