import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  // triggered from child ExpensesFilter.js 
  const onFilterYearSelectedHandler = (selectedFilteredYear) => {
    setFilteredYear(selectedFilteredYear);
  }

  // only expenses matching selectedFilterYear in filteredExpenses
  //if conditional is true, add element to new result obj
  const filteredExpenses = props.items.filter((expense) => {
    let filterMatch = expense.date.getFullYear().toString() === filteredYear;
    return filterMatch;
  });

  console.log(filteredExpenses)
  console.log(filteredExpenses.length+" items from year "+filteredYear)

  //if too much logic in the render jsx spot store it here as variables for JSX to call in return () render,
  // can use if/else out here
  let expensesContent = <p> No Expenses found.</p>
  
  if (filteredExpenses.length > 0) {  
    // overrides the No expensesContent
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)
    );
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
        onFilterYearSelected={onFilterYearSelectedHandler} 
        selected={filteredYear} />

        {/* old hard coded non-dynamic way
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
        */}
  

        {/*
          ----------
          from parent App.js <Expenses items={expenses} />
          dynamically render Expenses!
          .map takes a function as argument,that function is used on every element in the array of items
          ----------
        */}

        {/* Ternary conditionals for dynamic rendering allowed in return render (if/elese not allowed)
        { filteredExpenses.length === 0 ? 
          (<p>No expenses found.</p>):
          (filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)
        ))}
        */}


        {/* instead of ternary which can be a single huge if else with DOMs, try using && and splitting conditional.
            basically 2 if logics, not relying on an else
            using the && operator will return the result/value after the && if first condition is met
            and it breaks that ternary logic into multiple smaller pieces.
       */}

       {/*
        { filteredExpenses.length === 0 && <p> No Expenses found.</p>}
        { filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)
          )}
        */}

      {/* Even cleaner! Logic has been moved out to the component function instead of the JSX return render */}
      {expensesContent}
    </Card>
    </div>
  );
}

export default Expenses;
