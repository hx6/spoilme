<template>
  <div class="container">
    <div class="row">
      <h2 class="header">My presents list</h2>
      <div class="col m4" v-for="present in createdArticles" :key="present.id">
        <div class="card horizontal small">
          <div class="card-image">
            <img
              class="responsive-img"
              src="https://images.unsplash.com/photo-1528029320621-f02197f47774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
            />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <span class="card-title">{{present.name}}</span>
              <h6>Price: {{present.price}}€</h6>
            </div>
            <div class="card-action">          
              <div v-if="present.reserved == true"> 
                
                <h6 class="blue-grey-text hidden">Someone else reserved me!</h6>
              </div>
              <div v-if="present.reserved == false">
                <a href="#" class="blue-grey-text">Reserve me!</a>
              </div>

              <span class="card-title activator grey-text text-darken-4">
                <i class="material-icons right">more_vert</i>
              </span>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              {{present.name}}
              <i class="material-icons right">close</i>
            </span>

            <p>{{present.description}}</p>
            <h6>Store: {{present.store}}</h6>
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="redirAdd" class="fixed-action-btn btn-floating btn-large scale-transition">
      <i class="material-icons">add</i>
    </button>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { firebase } from "../firebase";

export default {
  data() {
    return {
      articleServer: "https://presents123.herokuapp.com/api/v1/list",
      createdArticles: [],
      // currentUserId: ""
      images: [
        
      ]
    };
  },
  methods: {
    // getUserUid(){
    //   let userUid = ""
    //   if (firebase.auth().currentUser !== null) {
    //    userUid = firebase.auth().currentUser.uid;  
    //   }
    //   this.currentUserId = userUid;
    // },
    //get the list items from database
    fetchArticles() {
      fetch(this.articleServer)
        .then(res => 
           res.json()
        )
        .then(data => {
          let allArticles = data.map(article => {
            let itemData = {
              name: article.name,
              price: article.price,
              store: article.store,
              description: article.description,
              reserved: false,
              thumbnailUrl: "",
              createdBy: article.createdBy
            };
            return itemData;
          });
          this.createdArticles = allArticles;
        })
        .catch(function(err) {
          console.error(err);
        });
    },
    redirAdd(){
      this.$router.replace('/addlist')
    }
  },
  mounted() {
    this.fetchArticles();
    // this.getUserUid();
  }
};
</script>
