import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

  //passing in parent pointer of function addExpenseHandler to props onAddExpense
const NewExpense = (props) => {

  //this function expects to get a parameter called enteredExpenseData (user defined name)
  const saveExpenseDataHandler = (enteredExpenseData) => {
      // parent got the expenseData field  from ExpenseForm's subitHandler
      // make new expenseData object with data values copied over from ExpenseForm
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      //prints what was passed up from child ExpenseForm
      console.log(expenseData)

      // sending expenseData to parent App.js
      props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      {/* onSaveExpenseData prop, used to pass expenseDate (in ExpenseForm)
      to NewExpense-parent
      by convention on_____ makes it clear the value of onSaveExpenseData should
      be a function - a function that will be triggered when something happens
      inside the ExpenseForm component (that trigger is a form submit)
      
      saveExpenseDataHandler a pointer to a function, passed as a value
       to onSaveExpenseData prop  of ExpenseForm

      */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
