import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const filterYearHandler = (event) => {
    let yearSelected = event.target.options[event.target.options.selectedIndex].innerText;
    console.log("Expenses Filter: "+yearSelected)
    // send up to parent's function
    props.onFilterYearSelected(yearSelected)

  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterYearHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
