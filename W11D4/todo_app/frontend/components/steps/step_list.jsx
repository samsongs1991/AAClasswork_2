import React from "react";
import StepListItemContainer from "./step_list_item_container";
import StepForm from "./step_form";

const StepList = (props) => {
    return (
        <div>
            <h1>Step List</h1>
            <ul>
                {
                    props.steps.map((step, idx) => 
                                <StepListItemContainer 
                                    step={step}
                                    key={idx}
                                    removeStep={props.removeStep} 
                                    receiveStep={props.receiveStep}
                                />)
                }
            </ul>
            <StepForm receiveStep={props.receiveStep} todo_id={props.todo_id} />
        </div>
    );
}

export default StepList;