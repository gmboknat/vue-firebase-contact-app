<template>
  <div class="form">
    <card>
      <card-body>
        <form>
          <p class="h4 text-center py-4">Sign up</p>
          <div class="grey-text">
            <md-input label="Your email" icon="envelope" type="email" v-model="email"/>
            <md-input label="Your password" icon="lock" type="password" v-model="password"/>
          </div>
          <div class="text-center py-4 mt-3">
            <btn color="primary" @click.native.stop="signUp" type="button">Register</btn>
            <btn color="blue-grey" @click.native="goLogin"><fa icon="arrow-left" class="mr-1"/> Back</btn>

          </div>
        </form>
      </card-body>
    </card>
  </div>
</template>

<script>
import {MdInput, Btn, Card, CardBody, Fa} from 'mdbvue';

import firebase from "firebase";

export default {
  name: 'signup-form',
  components: {
    MdInput,
    Btn,
    Card,
    CardBody,
    Fa
  },
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('/');
      }).catch((err) => {
        console.log('error: ', err.message)
      })
    },
    goLogin() {
      this.$router.replace('/login');
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
  }
</style>
