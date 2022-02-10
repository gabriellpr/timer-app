import React, { useState } from 'react';
import { Greeting } from './Greeting.jsx';

export class Hello extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { text: 'OFF' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.text === 'OFF' ? this.setState({text: 'ON'}) :
    this.setState({text: 'OFF'})
  }
  
  render() {
  return (
    <div>
      <h1>Hello {this.props.children}</h1>
      <button type='button' onClick={this.handleClick}>{this.state.text}</button>
    </div>
    )
  }
};
