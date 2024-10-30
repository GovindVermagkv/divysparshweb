<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" ><img src="https://bttechsoft.in/wp-content/uploads/2024/01/Business-Thrust-Logo-Image-1.png" alt="" height="50px" width="100px"></router-link>
      <!-- <router-link class="navbar-brand" to="/" >T <span class="text-primary"> B</span> T</router-link> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/home" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about" exact>About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/login" exact>Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/cart" exact>Cart <sup class="text-danger">{{ cartCount }}</sup></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        name: 'govind'
      };
    },
    computed: {
    ...mapGetters(['cartCount']), // Getting cartCount from Vuex store
  },
    mounted() {
      console.log(this.name);
    }
  }
  </script>
  
  <style scoped>
 @import url('../assets/css/header.css');
  </style>
  