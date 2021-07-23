export const fetchTodos = () => {
    return ($.ajax({
        method: 'get', 
        url: 'api/todos'
    }));
}

export const createTodo = (todo) => {
    return ($.ajax({
        method: 'post',
        url: 'api/todos',
        data: { todo }
    }));
}

export const updateTodo = (todo) => {
    return ($.ajax({
        method: 'patch',
        url: `api/todos/${todo.id}`
    }));
}