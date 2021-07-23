import TodoList from "./todo_list";
import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo, fetchTodos, createTodo } from "../../actions/todo_actions";
import { clearErrors } from "../../actions/error_actions";

const mapStateToProps = (state) => {
    return ({
        todos: allTodos(state),
        errors: state.errors
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        fetchTodos: () => dispatch(fetchTodos()),
        createTodo: (todo) => dispatch(createTodo(todo)),
        clearErrors: () => dispatch(clearErrors())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);