import React from "react";
import StepListContainer from "../steps/step_list_container";

const TodoDetailView = (props) => { // props has todo
    return (
        <div>
            <p>{props.todo.body}</p>
            <StepListContainer todo_id={props.todo.id} />
        </div>
    );
};

export default TodoDetailView;