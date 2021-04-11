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
  // { } a javascript object
  //use state property for managing internal data

  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> He also has stock options </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>

       );
       // {this} refers to the class App
       // not an arrow function :-/
  }
}
export default App;
// ES6 feature - if you import this whole file, you simply import this class becuase its the default export