<template>
  <aside class="aside">
    <nav class="navigation" role="navigation">
      <input
        type="text"
        v-model="newList"
        placeholder="ajouter liste"
        @keyup.enter.prevent="addList()"
      />
      <ul class="navigation-list">
        <li
          class="navigation-item"
          v-for="todolist in getTodoLists"
          v-bind:key="todolist.id"
        >
          <SidebarItem
            :todolist="todolist"
            v-on:click="selectList(todolist.id)"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SidebarItem from "./sidebarItem";

export default {
  components: { SidebarItem },
  name: "Sidebar",
  created() {
    this.fetchTodolists();
  },
  data() {
    return {
      newList: "",
    };
  },
  methods: {
    ...mapActions("todolist", ["fetchTodolists", "createTodolist"]),
    selectList(id) {
      this.$emit("change-selected-list", id);
    },
    addList() {
      if (this.newList == "") {
        alert("veuillez saisir un nom pour la liste");
      } else {
        this.createTodolist(this.newList);
        this.newList = "";
      }
    },
  },
  computed: {
    ...mapGetters("todolist", ["getTodoLists"]),
  },
};
</script>

<style scoped>
.navigation-list {
  display: grid;
  gap: 0.5rem;
}

.navigation-list li {
  cursor: pointer;
}
</style>
