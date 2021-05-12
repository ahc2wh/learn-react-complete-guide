import React, { useState } from 'react';

import './ExpenseForm.css';
// props includes pointer to send data to parent NewExpense.js
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

    // having a singe state group (userInput) instead of multi state
    /*
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
   */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // set entered titled, DON'T UPDATE enteredAmount, enterDate
    //...[spread operator] takes obj pulls all k,v pairs and puts them into a new obj
    // copy everything in userInput now, THEN override enteredTitle to retain values of other values not being changed
    /*
    setUserInput({
       ...userInput,
       enteredTitle: event.target.value,
     });
     */

     //cleaner solution, pass a function to this anon function
     //changes aren't done instantly, so the first approach can be outdated
     // this solution guarentees you're operatiing on the latest state snapshot
     //if your state update depends on the previous state, use an anonymous function
     
     /*
     setUserInput((prevState) => {
       return { ...prevState, enteredTitle: event.target.value };
     });
     */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*
    setUserInput({
       ...userInput,
       enteredAmount: event.target.value,
     });
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*
    setUserInput({
       ...userInput,
       enteredDate: event.target.value,
     });
    */
  };

  const submitHandler = (event) => {
      event.preventDefault();
      // expenseData gets passed up to its parent component (NewExpense.js)
      const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
      }

    
      props.onSaveExpenseData(expenseData); // can execute this function now to send to parent NewExpense
      //clear state values by setting empty string after submit
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* comment inside render like this */}
          {/* value field makes it two way binding */}
          <input 
            type='text' 
            value={enteredTitle} 
            onChange={titleChangeHandler} 
        />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} 
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
