<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" v-bind:key="todo.id"  :class="{completed: todo.completed, editing: todo == editedTodo}">
          <div class="view">
             <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </div>
    
    <footer class="footer" v-show="hasTodos">
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
      <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer les tâches finies</button>
    </footer>
    
  </section>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todos: [
        {
          id: 1,
          name : 'premiere tache',
          completed : false
        },
        {
          id : 2,
          name : 'seconde tache',
          completed : true
        }

      ],
      newTodo: '',
      filter: 'all',
      editing: null,
      oldTodo: '',
      editedTodo
    }
  },
  methods: {
    addTodo(){
      this.todos.push({
        id : this.todos.length + 1,
        completed:false,
        name : this.newTodo
      })
      this.newTodo = '' 
    },
    editTodo(todo){
      this.todos.indexOf(todo).name = todo.name
    },
    deleteTodo(todo){
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  },
  computed: {
    remaining () { 
      //return this.todos.filter(todo => !todo.completed).length 
      return this.todos.filter(function (todo){
        return !todo.completed
      }).length
    },
    hasTodos () {
      return this.todos.length > 0
    },
    filteredTodos () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  }
}
</script>


<style src="./app.css"></style>
