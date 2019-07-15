<template>
  <div class="container col-lg-6">
    <div class="box">
      <h1>Login</h1>
      <div class="img-logo">
        <p>- Login with Facebook-</p>
        <!--logo rrss-->
        <img src="../../public/logo-fb.png" alt="facebook logo" class="logo">
        <!--method registro fb  @click="fbregister()" -->
        <p>- or by your email account -</p>
        <br>
      </div>
      <form @submit.prevent="login">
        <div class="input-group mb-2">
          <input
            type="email"
            placeholder="Your email"
            class="form-control"
            required
            v-model="email"
          >
        </div>
        <div class="input-group">
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            required
            v-model="password"
          >
        </div>
        <div class>
          <input type="submit" class="waves-effect waves-light btn-large" value="Login">
        </div>
      </form>
      <p>
        If you don't have an account, you can sign up
        <a href="/register">Here</a>
      </p>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      auth
        .setPersistence("local")
        .then(() => {
          return auth.signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("User connected");
          this.$router.replace("/usermenu");
        })
         })
        .catch(() => {
          alert("Your email and password do not match! Try again");
        });
    }
  }
};
</script>