import React, { Component } from 'react';
class Input extends Component {
    state = { name:'' } 
    handleComment = (e) => {
        this.setState({ name: e.target.value });
    }
    render() { 
        return (
            <div>
                <input onChange={this.handleComment}>
            </input>
            <h1>
            Hello +91{this.state.name} 
            </h1>
            </div>
        );
    }
}
 
export default Input;

//ssh-keygen -t ed25519 -C "undrajavarapu@gmail.com"