import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

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
    <li>
    <Card className="expenses">
      <ExpensesFilter 
        onFilterYearSelected={onFilterYearSelectedHandler} 
        selected={filteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
  );
}

export default Expenses;
