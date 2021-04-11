import './App.css';
import React, { Component } from 'react'; // less nested Component this way, vs extends React.Component
import Person from './Person/Person.js';  // relative path , .js extension not needed but still works

class App extends Component {
  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
          <Person name="Sam" age="11" />
          <Person name="Larry" age="44"> He also has stock options </Person>
          <Person name="Rachel" age="21" />
        </div>
        //  react identifies <Person> as a custom component
        // since nothing is nested in between Person, it can be a single < / >
        // Sam and Rachel's 2nd <p> is empty within them, 
        // while Larry's has prop.children (the body text) in that 2nd <p>
       );
  }
}
export default App;
// ES6 feature - if you import this whole file, you simply import this class becuase its the default export