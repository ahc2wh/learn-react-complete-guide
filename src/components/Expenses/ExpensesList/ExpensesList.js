import React from 'react'
import ExpenseItem from '../ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {

    // separate JSX returns for each condtional case, this component helps make Expenses.js cleaner, 
    // since we're using unordered list styling for each ExpenseItem, let's make
    if (props.items.length === 0) {
        // show nothing
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    
    return (<ul className="expenses-list"> 
        {
            props.items.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />)
        )
        }
    </ul>)

};

export default ExpensesList;