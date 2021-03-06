import React from "react";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlInput(type) {
        return (
            (e) => {
                this.setState({ [type]: e.target.value });
            }
        );
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push("./chirps"));
    }
    
    render() {
        return (
            <div className="session-form">
                <h3>Sign Up</h3>
                <form action="">
                    <label htmlFor="">Username</label>
                    <input type="text" 
                        value={this.state.username} 
                        onChange={this.handleInput("username")}
                    />
                    <label htmlFor="">Email</label>
                    <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleInput("email")}
                    />
                    <label htmlFor="">Password</label>
                    <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleInput("password")}
                    />
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }

}

export default Signup;