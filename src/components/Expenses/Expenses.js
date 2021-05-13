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

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
        onFilterYearSelected={onFilterYearSelectedHandler} 
        selected={filteredYear} />
        {/*
          from parent App.js <Expenses items={expenses} />
          dynamically render Expenses!
          .map takes a function as argument,that function is used on every element in the array of items
        */}
        { filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

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
    </Card>
    </div>
  );
}

export default Expenses;
