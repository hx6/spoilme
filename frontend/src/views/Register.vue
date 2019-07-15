<template>
  <div class="container col-lg-6">
    <div class="box">
      <h1>Register</h1>
      <div class="img-logo">
        <p>- You can login with Facebook-</p>
        <!--rrss logo-->
        <img src="../../public/logo-fb.png" alt="facebook logo" class="logo" @click="fbregister()" />
        <!--log con fb-->
        <p>- or register with your email -</p>
        <br />
      </div>
      <form @submit.prevent="register" method="POST">
        <div class="input-group mb-2">
          <input
            type="email"
            placeholder="Your email"
            class="form-control"
            id="userMail"
            v-model="email"
            required
          />
        </div>
        <div class="input-group">
          <input type="text" placeholder="Your name" class="form-control" />
          <!--BD MONGO-->
          <input
            type="password"
            placeholder="Set password"
            class="form-control"
            id="userPass"
            v-model="password"
            required
          />
        </div>
        <div class>
          <button class="waves-effect waves-light btn-large">Register</button>
        </div>
        <p>
          or
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      userServer: "https://presents123.herokuapp.com/api/v1/user"
    };
  },
  methods: {
    register() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          extendUserInfo => {
            
          }
          
        // dentro de promise de fetch this.$router.replace("/usermenu");


          // extendUserInfo => {
          //   // let userInfo = []; probemos con el map que crea array nuevo
          //   fetch(this.userServer)
          //     .then(res => {
          //       return res.json();
          //     })
          //     .then (data.forEach(userData => {
          //         let newUserData = data.results;
          //         let extendedData = newUserData.map((newUserData) => {
          //           firebaseId: auth.currentUser
          //           name: newUserData.name
                    
          //         })
          //       }));
          // };
          //llamada con axios a la api con mongo, implementar post de user, recibe indentificador firebas
        })
        .catch(error => {
          console.error(error);
        });
    },
    fbregister() {
      //redireccionar a registro por fb
    }
  }
};
</script>
