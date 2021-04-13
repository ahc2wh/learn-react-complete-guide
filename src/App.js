import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
class App extends Component {
  //javascript/json form
  state = {
    username: 'username'
  }

  changeUsername = (input_event) => {
    this.setState({    
      username: input_event.target.value
    }
    )
  }
  //NOTE: render() is not an arrow function, so this within its function is referring to the App (excluding bind stuff)
  render(){
    return (
      <div>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput changeEvent={this.changeUsername.bind(this.event)} username={this.state.username}></UserInput>
        <UserOutput userInput_username={this.state.username}/>
        <UserOutput userInput_username={this.state.username}/>
        <UserOutput userInput_username="Hard Coded Name"/>
      </div>

    );
  }

}

export default App;

/*
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    // event handler automatically based by React
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };


  // toggle Max's name variations by clicking Switch Name button and I'm Manu div
  // arrow function  and bind used
  // events are always passed even when not specified
  // changed={this.nameChangeHandler.bind(this)} == changed={this.nameChangeHandler}
  render() {
    // javascript style
    const style_variable = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style_variable}
          onClick={ () => this.switchNameHandler('Maximillian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler.bind(this.event)}
        > 
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );




  }
  // bind on button click and on clicking Manu's text to update persons[0] name value
  /*
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  */


//export default App;
