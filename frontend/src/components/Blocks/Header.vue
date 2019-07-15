<template>
  <div>
    <div class="container section left-align">
      <a href="#" class="sidenav-trigger" data-target="menu-side">
        <i class="material-icons">menu</i>
      </a>
      <ul class="sidenav" id="menu-side">
        <div class="user-view">
          <router-link v-for="item in headerMenu" :key="item.id" :to="item.url" tag="li">
            <a href="#">{{item.name}}</a>
          </router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { auth } from "../../firebase";

export default {
  data() {
    return {
      headerMenu: [
        { id: 1, url: "/usermenu", name: "Dashboard" },
        { id: 3, url: "/register", name: "Register" },
        { id: 4, url: "/list", name: "List" },
        { id: 5, url: "logout()", name: "Log out"}
      ]
    };
  },
  methods: {
    logOut() {
      auth.signOut().then(() => this.$router.replace("/login"));
    }
  },
  mounted() {
    
  }
};
</script>


