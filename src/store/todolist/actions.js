import httpClient from '@/api/api'


export function fetchTodolists({ commit }) {
    console.log('fetchTodolists')
    httpClient.get('todolists').then(function (response) {
        console.log('fetchTodolists ok avant commit' + JSON.stringify(response.data))
        commit("setTodolists", response.data)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function createTodolist({ commit }, name) {
    httpClient.post('todolist', { name }).then(function (response) {
        commit("addTodolist", response)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function getTodosForList({ commit }, todolist_id) {
    httpClient.get('todos', { todolist_id }).then(function (response) {
        let token = response.data.token
        commit("setTodos", todolist_id, token)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function createTodo({ commit }, payload) {
    let name = payload.name
    let completed = payload.completed
    let todolist_id = payload.todolist_id
    httpClient.post('todo', { name, completed, todolist_id }).then(function (response) {
        commit("addTodo", response.data)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function toggleCompleteTodo({ commit },payload) {
    console.log(payload)
    let id = payload.id
    let completed = payload.completed
    httpClient.post('completeTodo/' + id, { completed }).then(function (response) {
        commit("changeTodoStatus", response.data)
    })
    .catch(function (error) {
        console.log(error)
    });
}
