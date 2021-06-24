<template>
    
    <p class="navigation-link">{{ todolist.name }} ( {{remainingTodosByList(todolist.id)}} )</p>
     
</template>

<script>
import { mapGetters } from 'vuex'



export default {
  name: 'SidebarItem',
  props: ['todolist'],

  computed :{
    ...mapGetters('todolist', ['remainingTodosByList'])
  },
  
  
}

</script>

<style scoped>

.navigation-list {
  display: grid;
  gap: .5rem;
}

.navigation-list li{
    cursor: pointer;
}
</style>