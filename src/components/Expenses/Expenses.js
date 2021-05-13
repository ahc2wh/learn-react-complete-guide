import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [selectedFilterYear, setSelectedFilterYear] = useState('2021')

  // from child ExpensesFilter.js 
  const onFilterYearSelectedHandler = (filterYear) => {
    setSelectedFilterYear((prevState) => {
      return { ...prevState, selectedFilterYear: filterYear };
    });
  }

  return (
    // TODO: use loop for expenseItems, add conditionals to filter which expenseItems visible based
    // on selectedFilterYear
    <Card className="expenses">
      <ExpensesFilter onFilterYearSelected={onFilterYearSelectedHandler} selected={selectedFilterYear} />
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
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
