<template>
  <div class="container box ">
    <div class="row">
      <form class="col s12" id="addForm">
        <div class="row">
          <div class="input-field col s6">
            <input name="newName" type="text" class="validate" id="inputName" />
            <label>Product Name</label>
          </div>
          <div class="input-field col s6">
            <input name="newPrice" type="text" class="validate" id="inputPrice" />
            <label>Price</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input name="newStore" type="text" class="validate" id="inputStore" />
            <label >Store</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input name="newDescription" type="text" class="validate" id="inputDescription" />
            <label>Description</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" @click.prevent="addItem">
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { firebase } from "../firebase";

export default {
  data() {
    return {
      articleServer: "https://presents123.herokuapp.com/api/v1/list",
      // currentUserUid: "",
      // mongoUserId: ""
    };
  },
  methods: {
    // getUserUid() {
    //   let userUid = "";
    //   if (firebase.auth().currentUser !== null) {
    //     userUid = firebase.auth().currentUser.uid;
    //   }
    //   this.currentUserUid = userUid;
    //   console.log(currentUserUid)
    // },
    addItem() {
      let name = document.getElementById("inputName").value;
      let price = document.getElementById("inputPrice").value;
      let store = document.getElementById("inputStore").value;
      let description = document.getElementById("inputDescription").value;

      fetch(this.articleServer, {
        method: "POST",
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         },
        body: JSON.stringify({
          name: name,
          price: price,
          store: store,
          description: description,
          reserved: false
          // createdBy: currentUserUid,
        })      
      })
        .then(res => 
           res.json()
        )
        .then(data => {
          this.$router.replace('/list')
          console.log('Commited!!')})
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getUserUid();
    // this.getUserId();
  }
};
</script>
