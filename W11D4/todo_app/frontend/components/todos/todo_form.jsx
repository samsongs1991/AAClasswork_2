import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "", 
        body: "", 
        done: false
      };
      this.updateTitle = this.updateTitle.bind(this);
      this.updateBody = this.updateBody.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateTitle(event) {
      this.setState({ title: event.target.value });
    }

    updateBody(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createTodo(this.state)
          .then(
            this.setState({
                title: "", 
                body: "", 
                done: false        
            }))
          .then(
            this.props.clearErrors()
          );
    }
  
    render() {
      return (

        <form onSubmit={this.handleSubmit}>
        <h1>Add a To Do!</h1>

        <label>Title 
          <input 
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </label>

        <label>Body 
          <input 
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.updateBody}
          />
        </label>

        <input type="submit" value="Add To Do" />

        {this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>
        })}

      </form>
      );
    }
  }

export default TodoForm;