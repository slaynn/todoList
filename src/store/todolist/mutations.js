export function setTodolists(state, val) {
    state.todoLists = val
}
export function setTodos(state, todolist_id, val) {
    let list = state.todoLists.find((todoList) => todoList.id === todolist_id);
    list.todos = val
}
export function addTodolist(state, val) {
    state.todoLists.push(val)
}

export function addTodo(state, val){
    console.log(val)
    let list = state.todoLists.find((todoList) => todoList.id === val.todolist_id);
    let todos = list.todos
    todos.push(val)
}

export function changeTodoStatus(state, val){
    console.log(state)
    console.log(val)
    console.log('ok')
}
