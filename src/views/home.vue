<template>
  <sidebar @change-selected-list="selectList"></sidebar>
  <div class="main" v-if="selectedList > 0">
    <todo-list :list_id="selectedList"></todo-list>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
import TodoList from "@/components/TodoList.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TodoList,
    Sidebar,
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push({ name: "Login", query: { redirect: "/login" } });
    }
  },
  data() {
    return {
      selectedList: 0,
    };
  },
  methods: {
    selectList: function(id) {
      this.selectedList = id;
    },
  },
  computed: {
    ...mapGetters("account", ["isLoggedIn"]),
  },
};
</script>

<style scoped></style>
