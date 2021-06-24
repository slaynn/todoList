<template>
  <div id="app" class="website">
    <header class="header" role="banner">
      <h1>TodoList ({{remainingTodos}})</h1> 
      <div id="nav">
        <router-link to="/" >Home</router-link> |
        <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
        <router-link to="/login" v-if="isLoggedIn" v-on:click="logout">Logout</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "App",
  components: {
    
  },
  computed: {
     ...mapGetters("account", ["user", "token", 'isLoggedIn']),
    ...mapGetters("todolist", ["remainingTodos"])
  },
  methods: {
    ...mapActions( "account", ['logout'])
  }
  
};

</script>

<style scoped>
@media (min-width: 540px) {
  .website {
    display: grid;
    grid-template-columns: 20% 1fr;
  }
}  
.header {
  grid-column: 1 / -1;
}

 .website {max-width: 800px; margin: 0 auto;}
</style>

