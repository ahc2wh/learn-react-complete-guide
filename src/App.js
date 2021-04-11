import './App.css';
import React from 'react';
// only have one App uncommented at a time to see the difference
// this within App is not html but JSX (react self made term), can parse {{expressions}}
// none of this is actually HTML, React library made react versions of a div and converts them to html's div
// it gets COMPILED to JSX.
// because JSX is not javascript ACTUALLY but runs in a .js file, JSX and javascript are in the same space
// class is reserved for javascript, so JSX decided to use 'className' 
// 'className' is an attribute that translates to class on render

/*function App() {
  //default App
  return(
   <h1>Hi I'm a react app, removing some boiler plate</h1>
  );

}
*/

/*
class App extends React.Component {
  // component version of App
  // return with parenthesis, return (); allows nice formatting across multiple lines
  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
        </div>
       );
  }
}
*/

/*
class App extends React.Component {
  render() {
        // createElement arguments:
        //1 type element to render to the DOM, can be any other component you import (just not this one we're in)
        //2 props configuration for this: javascript object
        //3 ...childrens: whats nested inside this div
        //          can have multiple separated by comma
    return React.createElement(
      'div',
      {style: { color: "red" }},
        '<h1>', 'Hi, I\'m a React App!!!', '</h1>'
     );
    // <h1> default behavior is to not allow rendering an element inside the div
  }
}
*/

/*
class App extends React.Component {
  // have another React.createElement inside as a children parameter it to add more elements <h1>
  render() {
    return React.createElement(
      'div',
      {style: { color: "red" }},
        React.createElement('h1',null,'Hi, I\'m a React App!!!')
     );

  }
}
*/

/*
class App extends React.Component {
  //  replacing inline styling with className added as {{JS expression}}
  // this applies the .App styling found in App.css (styling applied to the h1 element)
  render() {
    return React.createElement(
      'div',
      {},
        React.createElement('h1',{className: 'App'},'Hi, I\'m a React App!!!')
     );
      // equivalent to
      // return {
      //  <div className="App">
      //    <h1>Hi, I'm a React App!!!</h1>
      //  </div>
      // }
  }
}
*/

// can only return one element (children elements within are fine, can't have 2 top level sibling)
class App extends React.Component {
  render() {
       return (
        <div className="App">
          <h1>Hi, I'm a React App!!!</h1>
        </div>
        // JSX complains if uncomment <div> below: must have one parent element
        //<div></div>
       );
  }
}

export default App;
// ES6 feature - if you import this whole file, you simply import this class becuase its the default export