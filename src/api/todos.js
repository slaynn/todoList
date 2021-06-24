import httpClient from './api';

const apiGetTodolists = () => httpClient.get('todolists');
const apiCreateTodolist = (name) => httpClient.post('todolist', { name});

const apiGetTodos = (todolist_id) => httpClient.get('todos', { todolist_id });
const apiCreateTodo = (name, completed, todolist_id) => httpClient.post('todo', { name, completed, todolist_id });

export {
    apiGetTodolists,
    apiCreateTodolist,
    apiGetTodos,
    apiCreateTodo
}