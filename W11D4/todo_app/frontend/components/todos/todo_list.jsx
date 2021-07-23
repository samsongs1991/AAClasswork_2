import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchTodos();
    }
    
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ul>
                    {
                        this.props.todos.map((todo, idx) => <TodoListItem todo={todo} key={idx} 
                                                            removeTodo={this.props.removeTodo} 
                                                            receiveTodo={this.props.receiveTodo} 
                                                        />)
                    }
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo} errors={this.props.errors} clearErrors={this.props.clearErrors}/>
            </div>
        );
    }
}

export default TodoList;