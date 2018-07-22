<template>
  <div class="home">
    <signup-form msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'home',
  components: {
    SignupForm
  }
}
</script>
