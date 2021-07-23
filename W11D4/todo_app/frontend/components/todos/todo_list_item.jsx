import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleShowDetails = this.handleShowDetails.bind(this);
    }

    toggleDone(todo) {
        let newTodo = Object.assign({}, todo);
        if (newTodo.done) {
            newTodo.done = false;
        } else {
            newTodo.done = true;
        }
        return newTodo;
    }

    handleDelete(event) {
        this.props.removeTodo(this.props.todo);
    }

    handleStatusChange(event) {
        const newTodo = this.toggleDone(this.props.todo);
        this.props.receiveTodo(newTodo);
    }

    handleShowDetails(event) {
        this.setState({ detail: (this.state.detail ? false : true) });
    }

    render() {
        return (
            <div>
                <li><span onClick={this.handleShowDetails}>{this.props.todo.title}</span> - done: {this.props.todo.done ? "yes" : "no"}</li>
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleStatusChange}>Done</button>
                {(this.state.detail) ? <TodoDetailViewContainer todo={this.props.todo} /> : null }
            </div>
        );
    }
}

export default TodoListItem;