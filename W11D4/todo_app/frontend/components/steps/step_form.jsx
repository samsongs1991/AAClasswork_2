import React from "react";

class StepForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: new Date().getTime(), 
        title: "", 
        done: false,
        todo_id: props.todo_id
      };
      this.updateTitle = this.updateTitle.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateTitle(event) {
      this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.receiveStep(this.state);
        this.setState({
            id: new Date().getTime(), 
            title: "", 
            done: false, 
            todo_id: this.props.todo_id        
        });
    }
  
    render() {
      return (

        <form onSubmit={this.handleSubmit}>
        <h1>Add a Step!</h1>

        <label>Title 
          <input 
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </label>

        <input type="submit" value="Add Step" />
      </form>
      );
    }
  }

export default StepForm;