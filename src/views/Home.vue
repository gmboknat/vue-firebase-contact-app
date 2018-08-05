<template>
  <div class="home">
    <contact-list/>
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
