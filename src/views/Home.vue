<template>
  <div class="home">
    <contact-list/>
    <h1>sample</h1>
  </div>

</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList.vue';

export default {
  name: 'home',
  components: {
    ContactList
  }
}
</script>
