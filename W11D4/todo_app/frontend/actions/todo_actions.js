import * as APIUtil from "../util/todo_api_util";
import { receiveErrors } from "./error_actions";


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// returns an obj { type: RECEIVE_TODOS, todos: [todos etc...]}
export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos,
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo,
});

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
    };
};

export const fetchTodos = () => (dispatch, getState) => {
    return APIUtil.fetchTodos()
        .then(todos => dispatch(receiveTodos(todos)))
}

// export const createTodo = (todo) => (dispatch, getState) => {
//     return APIUtil.createTodo(todo)
//         .then(todo => dispatch(receiveTodo(todo)))
// }

export const createTodo = todo => {
    return dispatch => {
      return APIUtil.createTodo(todo)
        .then(
          todo => dispatch(receiveTodo(todo)),
          err => dispatch(receiveErrors(err.responseJSON))
        )
    }
  };

window.fetchTodos = fetchTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;