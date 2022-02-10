import React from 'react';
import { Hello } from './Hello.jsx';
import { Timer } from './Timer.jsx';
import { Greeting } from './Greeting.jsx';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello>
          <Greeting name="Joe" />  
          <Greeting name="Jack" />
          <Greeting name="Jobson" />  
        </Hello>
        <Timer />
      </div>
    );
  }
}
