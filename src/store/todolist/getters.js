export const remainingTodosByList = (state) => (id) => {
  if (state.todoLists.length > 0) {
    let list = state.todoLists.find((todoList) => todoList.id === id);
    if (list) {
      if ("todos" in list) {
        if (list.todos.length > 0) {
          return state.todoLists
            .find((todoList) => todoList.id === id)
            .todos.filter((todo) => !todo.completed).length;
        }
      }
    }
    return "";
  }
};
export function remainingTodos(state) {
  var i = 0;
  if (state.todoLists.length > 0) {
    state.todoLists.forEach((list) => {
      i = i + list.todos.filter((todo) => !todo.completed).length;
    });
  }

  return i;
}
export const getListById = (state) => (id) => {
  return state.todoLists.find((todoList) => todoList.id === id);
};

export function getTodoLists(state) {
  console.log("getter " + state.todoLists);
  return state.todoLists;
}
