import React from "react";

// props = steps, todo_id
export default class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleDone(step) {
        let newStep = Object.assign({}, step);
        if (newStep.done) {
            newStep.done = false;
        } else {
            newStep.done = true;
        }
        return newStep;
    }

    handleStatusChange(event) {
        const newStep = this.toggleDone(this.props.step);
        this.props.receiveStep(newStep);
    }

    handleDelete(event) {
        this.props.removeStep(this.props.step);
    }

    render () {
        return (
            <div>
                <p>{this.props.step.title}</p>
                <p>Done: {this.props.step.done ? "yes" : "no"}</p>
                <button onClick={this.handleStatusChange}>Done</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}