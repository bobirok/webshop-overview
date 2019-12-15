<template>
<nav>
  <div class="navigation-main-div nav-wrapper">
    <a class="white-text logo left"><img src="../assets/weblogo.png" id="logo"></a>
    <ul class="navigator right">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Products</router-link></li>
      <li>Contact</li>
      <li v-if="!isLoggedIn"><router-link to="/login"><i class="material-icons">account_circle</i></router-link></li>
      <li v-if="isLoggedIn"><router-link to="/me"><i class="material-icons">account_circle</i></router-link></li>
      <li class="logOut" v-if="isLoggedIn" @click="logOut"><i class="material-icons">exit_to_app</i></li>
    </ul>
  </div>
</nav>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    logOut() {
      let auth = 'Bearer ' + localStorage.getItem('token');
      axios.post('http://localhost:3000/logout', {}, { headers: { 'Authorization': auth }})
      .then(() => {
        this.isLoggedIn = false;
        this.unsetItemsInStorage();
        this.$store.logged = false;
        console.log(this.$store.logged)
        this.$router.push('/')
      })
    },

    unsetItemsInStorage() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },
  mounted() {
    if(localStorage.getItem('token')) {
      this.$store.logged = true;
    } else {
      this.$store.logged = false;
    }
    this.isLoggedIn = this.$store.logged;
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

#logo {
  width: 50px;
  height: 75px;
  position: fixed;
  top: 0;
  left: 15px;
  z-index: 1;
}

.navigation-main-div {
  background: $blueColor;
}

nav {
  width: 100%;
}

.navigator {
  font-size: 18px;
}

nav div .navigator li {
  padding-right: 10px;
}

nav div .navigator li .router-link-exact-active {
  text-decoration: underline;
}

.logo {
  padding-left: 10px;
  font-size: 32px;
}

.logOut {
  cursor: pointer;
}
</style>