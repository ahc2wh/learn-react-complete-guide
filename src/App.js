import './App.css';
import React, { Component } from 'react'; // less nested Component this way, vs extends React.Component
import Person from './Person/Person.js';  // relative path , .js extension not needed but still works

class App extends Component {

  state = {
    persons: [
      { name: 'Sam', age: 11 },
      { name: 'Larry', age: 44 },
      { name: 'Rachel', age: 21 }
    ]
  }
  // using ES6 arrow helps keep from confusing scope of this at App and this in switchNameHandler
  switchNameHandler = () => {
    console.log('Was clicked')
  }
  // if assign function as value, then the property becomes a method.
  // switchNameHandler becomes a property with an executable function within a property

  // <button/>'s onClick is JSX version of javascripts onclick
  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
          <button onClick={this.switchNameHandler()}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> He also has stock options </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
       );
       // by adding parenthesis this.switchNameHandler() executes immediately once React reacts to DOM (vs waiting for you to click)
       // the parenthesis executes the function. we only want to send a reference that holds a function
       // Person has 2 properties + 1 children property
  }
}

export default App;
// ES6 feature - if you import this whole file, you simply import this class becuase its the default export