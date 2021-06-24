
import {createStore} from 'vuex'

const state = {
    count: 1,
    todoLists:[
        {
            id:1,
            name: 'liste 1',
            todos: [
                {
                    id: 1,
                    name : 'tache 1',
                    completed : false 
                },
                {
                    id: 2,
                    name : 'tache 2',
                    completed: true
                }
            ]
        },
        {
            id:2,
            name: 'liste 2',
            todos: [
                {
                    id: 3,
                    name : 'tache 3',
                    completed : false 
                },
                {
                    id: 4,
                    name : 'tache 4',
                    completed: true
                }
            ]
        }
    ],
    token:''
}
const getters = {
    remainingTodosByList: (state) => (id) => {
        return state.todoLists.find((todoList) => todoList.id === id).todos.filter(todo => !todo.completed).length
    },
    remainingTodos: (state) => {
        var i = 0
        state.todoLists.forEach(list => {
            console.log(list.name)
            i = i + list.todos.filter(todo => !todo.completed).length
        });
        return i
        
    },
    getListById: (state) => (id) => {
        return state.todoLists.find((todoList) => todoList.id === id);
    }
}



export const store = createStore({
    state,
    getters
  })
