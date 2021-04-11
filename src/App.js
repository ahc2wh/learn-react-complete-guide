import './App.css';
import React, { useState } from 'react'; // less nested Component this way, vs extends React.Component
import Person from './Person/Person.js';  // relative path , .js extension not needed but still works

// hooks react 16.8+
const App = props => {
  // useState returns an array with 2 elements
  // 1st element in stateArray is always current state
  // 2nd element in stateArray is a function that is used to update the state
  // modern javascript feature; array destructuring
  // const [ ] = ARRAY Here  // allows pulling elements out of array from right side/ array
  // personsState gives us current state's data
  // setPersonsState allows us to set data in new state
  const [ personsState, setPersonsState]  = useState({
    persons: [
      { name: 'Sam', age: 11 },
      { name: 'Larry', age: 44 },
      { name: 'Rachel', age: 21 }
    ],
    otherState: 'some other value'
  });

  // NOTE: to keep old otherState, don't use setOtherState
  const [ otherState, setOtherState ] = useState('some other value')

  //NOTE: if using REACT hooks, the setState of class based components does not merges new onto old state
  // instead it replaces old state with new state. you have to manually include the old state you want to keep
  // open browser's console to see console.log
  console.log(personsState, otherState)
  // personState changes onClick -> switchNameHandler -> setPersonsState
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Samuel', age: 11 },
        { name: 'Larry the Cable Guy', age: 44 },
        { name: 'Rachelllll', age: 21 }
      ]
    });
  }
  
  return (
  <div className="App">
    <h1>Hi, I'm a React App!!!</h1>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> He also has stock options </Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
  </div>
  );
}

export default App;