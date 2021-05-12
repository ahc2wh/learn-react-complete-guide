import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

  /*
    Layout:

    App - NewExpense
          - ExpenseForm

        - Expenses
          - Card (React material ui component)
            - ExpenseItem
              - Card
                -ExpenseDate
  */

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // old syntax, jsx style much easier, looks like native DOM
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );



  
  const addExpenseHandler = expense => {
    console.log('addExpenseHandler in App.js')
    console.log(expense)
    //TODO 
    // - make expenses array a state (for easier passing around to other components)
    // - update the expenses array to include added NewExpense
  }

  return (
    <div>
      {/* grand parent to ExpenseForm, Parent of NewExpense */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* TODO pass updated expenses into Expenses from App.js */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
