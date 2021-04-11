import '../App.css'; //step back one directory back to src
import React from 'react'; // component not needed, making a function

// ES6 usage - const, a better, newer version of function
// to run javascript code NOT as text for JSX, wrap that in single { }
// can only execute one line expression, no className functionality in function
/*
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)}!</p>
}
*/


// one object is given by react by default - argument props
// this gives us access to the properties in a Person person like name, age
// children is a reserved word; it's any elements between the opening + closing of the component
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person; //exports this const person with a person function 
