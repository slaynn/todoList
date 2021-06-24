<template>
    <aside class="aside">
        <nav class="navigation" role="navigation">
        <ul class="navigation-list">
            <li class="navigation-item" v-for="todolist in getTodoLists" v-bind:key="todolist.id" >
                <SidebarItem :todolist="todolist" v-on:click="selectList(todolist.id)"/>
            </li>
        </ul>
        </nav>
  </aside>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import SidebarItem from './sidebarItem'

export default {
  components: { SidebarItem },
  name: 'Sidebar',
  created() {
    this.fetchTodolists()
  },
  methods: {
     ...mapActions('todolist' ,['fetchTodolists', 'createTodolist']),
    selectList(id){
        this.$emit('change-selected-list', id)
    }
  },
  computed: {
    ...mapGetters('todolist', ['getTodoLists']),
  }
  
 
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