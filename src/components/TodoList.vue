<template>
  <section class="todoapp">
    <h2>{{ todolist.name }}</h2>
    <div class="">
      <input
        type="text"
        class="new-todo"
        placeholder="Ajouter une tache"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
    </div>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone" />
      <ul class="todo-list">
        <li
          class="todo"
          v-for="todo in filteredTodos"
          v-bind:key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editing }"
        >
          <div class="view">
            <input
              type="checkbox"
              v-model="todo.completed"
              class="toggle"
              v-on:change="changeTodoStatus(todo)"
            />
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input
            type="text"
            class="edit"
            v-model="todo.name"
            @keyup.enter="doneEditing()"
            @blur="doneEditing()"
            @keyup.esc="cancelEditing()"
            v-focus="todo == editing"
          />
        </li>
      </ul>
      <ul class="todo-list">
        Encours
        <li
          class="todo"
          v-for="todo in notdoneTodos"
          v-bind:key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editing }"
        >
          <div class="view">
            <input
              type="checkbox"
              v-model="todo.completed"
              class="toggle"
              v-on:change="changeTodoStatus(todo)"
            />
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input
            type="text"
            class="edit"
            v-model="todo.name"
            @keyup.enter="doneEditing()"
            @blur="doneEditing()"
            @keyup.esc="cancelEditing()"
            v-focus="todo == editing"
          />
        </li>
      </ul>
      <ul class="todo-list">
        Finies
        <li
          class="todo"
          v-for="todo in doneTodos"
          v-bind:key="todo.id"
          :class="{ completed: todo.completed, editing: todo == editing }"
        >
          <div class="view">
            <input
              type="checkbox"
              v-model="todo.completed"
              class="toggle"
              v-on:change="changeTodoStatus(todo)"
            />
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input
            type="text"
            class="edit"
            v-model="todo.name"
            @keyup.enter="doneEditing()"
            @blur="doneEditing()"
            @keyup.esc="cancelEditing()"
            v-focus="todo == editing"
          />
        </li>
      </ul>
    </div>

    <footer class="footer pb-10" v-show="hasTodos">
      <span class="todo-count"
        ><strong>{{ remaining }}</strong> tâches à faire</span
      >
      <ul class="filters">
        <li>
          <a
            href="#"
            :class="{ selected: filter === 'all' }"
            @click.prevent="filter = 'all'"
            >Toutes</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ selected: filter === 'todo' }"
            @click.prevent="filter = 'todo'"
            >A faire</a
          >
        </li>
        <li>
          <a
            href="#"
            :class="{ selected: filter === 'done' }"
            @click.prevent="filter = 'done'"
            >Faites</a
          >
        </li>
      </ul>
      <button
        class="clear-completed"
        v-show="completed"
        @click.prevent="deleteCompleted"
      >
        Supprimer les tâches finies
      </button>
    </footer>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      filter: "all",
      editing: null,
      oldTodo: "",
      editedTodo: "",
    };
  },
  props: {
    list_id: { type: Number, default: 1 },
  },
  methods: {
    ...mapActions("todolist", [
      "getTodosForList",
      "createTodo",
      "toggleCompleteTodo",
    ]),
    addTodo() {
      this.createTodo({
        name: this.newTodo,
        completed: false,
        todolist_id: this.list_id,
      });
      this.newTodo = "";
    },
    changeTodoStatus(todo) {
      this.toggleCompleteTodo({
        id: todo.id,
        completed: todo.completed,
      });
    },
    editTodo(todo) {
      this.oldTodo = todo.name;
      this.editing = todo;
    },
    doneEditing() {
      this.editing = null;
    },
    cancelEditing() {
      this.editing.name = this.oldTodo;
      this.doneEditing();
    },
    deleteTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
  },
  computed: {
    ...mapGetters("todolist", ["getListById"]),
    todolist() {
      return this.getListById(this.list_id);
    },
    todos() {
      return this.todolist.todos;
    },
    remaining() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      }).length;
    },
    hasTodos() {
      return this.todos.length > 0;
    },
    filteredTodos() {
      if (this.filter === "todo") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    doneTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    notdoneTodos() {
      return this.todos.filter((todo) => !todo.completed);
    },
  },
  directives: {
    focus(el, value) {
      if (value) {
        el.focus();
      }
    },
  },
};
</script>

<style src="./app.css"></style>
