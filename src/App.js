import './App.css';
import React, { Component } from 'react'; // less nested Component this way, vs extends React.Component
import Person from './Person/Person.js';  // relative path , .js extension not needed but still works

class App extends Component {
  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
          <Person />
        </div>
        //  react identifies <Person> as a custom component
        // since nothing is nested in between Person, it can be a single < / >
       );
  }
}
export default App;
// ES6 feature - if you import this whole file, you simply import this class becuase its the default export