<template>
  
    <div></div>
    <div class="main">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email">
        </div>
        <div>
            <label for="password" >Password</label>
            <input type="password" name="password" v-model="password">
        </div>
        <br/>
        <div>
            <input type="submit" value="Sign in" v-on:click='login({email, password})'>
            &nbsp;
            <input type="submit" value="Register" v-on:click='register({name, email, password})'>
        </div>
    </div>
    
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
   
  },
  data(){
    return{
      name: '',
      email: '',
      password: ''
    }
    
  },
  methods: {
    ...mapActions("account",  ['login', 'register']),

  },
  computed:{
    
  }
};

</script>

<style scoped>
    .main{
        display: block;
    }
    .main div > *{
         display: block;
    }
    .main div > input{
         display: inline-block ;
    }
</style>

