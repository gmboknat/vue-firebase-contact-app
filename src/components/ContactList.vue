<template>
    <row>
      <column>
          <form>
        <p class="h4 text-center mb-4">{{editMode? 'Update Contact' : 'Add New Contact'}}</p>
          <div class="grey-text">
              <label for="name">Name</label>
              <input class="form-control" label="Your Name" icon="user" v-model="name"/>
              <label for="number">Number</label>
              <input class="form-control" label="Your Number" icon="phone" v-model="number" type="number"/>
          </div>
          <div class="text-center">
              <btn type="button" @click.native="editMode ? updateContact() : addContact()">{{editMode ? 'Update' : 'Add'}}</btn>
          </div>
          </form>
      </column>
      <column> 
        <!-- <list-group>
          <list-group-item v-for="(item, index) in contacts" v-bind:item="item" v-bind:index="index" v-bind:key="item.key"> {{item.name + ' - ' + item.number}}</list-group-item>
        </list-group> -->
        <p class="h4 text-center mb-4">List of Contacts</p>

        <tbl hover>
          <tbl-head>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th class="text-center">Action</th>
            </tr>
          </tbl-head>
          <tbl-body>
            <tr v-for="(item, index) in contacts" v-bind:item="item" v-bind:index="index" v-bind:key="item.key">
              <th scope="row">{{index + 1}}</th>
              <td>{{item.name}}</td>
              <td>{{item.number}}</td>
              <td class="text-center actions">
                <span>
                  <i class="fa fa-edit" aria-hidden="true" @click="toUpdateContact(item)"></i>
                </span>
                <span>
                  <i class="fa fa-remove" aria-hidden="true" @click="removeContact(item['.key'])"></i>
                </span>
                
              </td>
            </tr>
          </tbl-body>
        </tbl>
      </column>
      
    </row>
</template>

<script>
import { ListGroup, ListGroupItem, Btn, MdInput, Row, Column, Tbl, TblHead, TblBody } from "mdbvue";
import db from "@/db";

export default {
  name: "contact-list",
  components: {
    ListGroup,
    ListGroupItem,
    Btn,
    MdInput,
    Row,
    Column,
    Tbl, 
    TblHead, 
    TblBody
  },
  data() {
    return {
      contacts: [],
      key: "",
      name: "",
      number: "",
      editMode: false,
      contactsRef: db.ref("contact-list/" + this.$store.state.user.uid)
    };
  },
  methods: {
    addContact: function() {
      var user = {
        name: this.name,
        number: this.number
      };
      if (this.name && this.number) {
        this.contactsRef
          .push(user)
          .then(() => {
            this.name = this.number = "";
          })
      }
    },
    toUpdateContact: function (contact) {
      this.editMode = true;
      this.key = contact['.key']
      this.name = contact.name
      this.number = contact.number
    },
    updateContact: function() {
      this.contactsRef.child(this.key).set({
        name: this.name,
        number: this.number
      }).then(() => {
        this.editMode = this.key = this.name = this.number = "";
      })
      


    },
    removeContact: function(id) {
      this.contactsRef.child(id).remove()
    }
  },
  firebase() {
    return {
      contacts: db.ref("contact-list/" + this.$store.state.user.uid)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .actions > span{
    margin-left: 3px;
    margin-right: 3px;
  }
  .fa-remove { 
    color: #ff4444;
  }
  .fa-edit {
    color: #00C851;
  }
</style>
