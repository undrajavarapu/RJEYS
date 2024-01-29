import React, { Component } from "react";
export default class Counter extends Component {
  state = { count:0 };
  handleCLick=()=>{
    this.setState({count:this.state.count+1})
  };
   handleReset=()=>{
    this.setState({count:0})
  };
  handleDec=()=>{
    this.setState({count:this.state.count-1})
  };

  render() {
    
    return (
      
      <>
        <h1>Hello World</h1>
        <label>{this.state.count}</label>
        <button onClick={()=>this.handleCLick()}>Increment</button>
        <button onClick={()=>{this.handleReset()}}>Reset</button>
        <button onClick={()=>{this.handleDec()}}>Decrement</button>
      </>
    )
  }
}
