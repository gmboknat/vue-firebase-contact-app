<template>
    <div>
      <list-group>
          <list-group-item v-for="(item, index) in contacts" v-bind:item="item" v-bind:index="index" v-bind:key="item.key"> {{item.name + ' - ' + item.number}}</list-group-item>
      </list-group>
      <div>
          <form>
          <p class="h4 text-center mb-4">Sign in</p>
          <div class="grey-text">
              <label for="name">Name</label>
              <input class="form-control" label="Your Name" icon="user" v-model="name"/>
              <label for="number">Number</label>
              <input class="form-control" label="Your Number" icon="phone" v-model="number"/>
          </div>
          <div class="text-center">
              <btn type="button" @click.native="addContact()">Add</btn>
          </div>
          </form>
      </div>
    </div>
</template>

<script>
import { ListGroup, ListGroupItem, Btn, MdInput } from "mdbvue";
import db from "@/db";
var contactsRef = db.ref("contact-list");

export default {
  name: "contact-list",
  components: {
    ListGroup,
    ListGroupItem,
    Btn,
    MdInput
  },
  data() {
    return {
      contacts: [],
      name: '',
      number: ''
    };
  },
  methods: {
    addContact: function() {
      var user = {
        name: this.name,
        number: this.number
      }
      if (this.name && this.number) {
        contactsRef.push(user).then((success) => {
        console.log('suc', success)
        this.name = this.number = ''

        
        console.log('123', this.name, this.number)
      })
      .catch(function(err) {
        console.log('err: ', err)
      })
    }
      }
  },
  firebase: {
    contacts: contactsRef
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
