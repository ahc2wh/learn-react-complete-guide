
## Section 4. Assignment 2
- add a new component, a filter component that has a drop down with different years (ExpensesFilter)
- listen to changes on the dropdown selected and forward that event to </Expenses>
- save that forwarded year in a state
- bonus: set default filterYear in <ExpenseFilter/> to add two-way binding
- 12minutes to complete* took me 50 mins...
- Files: 
    - extra-files/ExpensesFilter.js
    - extra-files/ExpensesFilter.css

- Solution: see code/08-assignment-solution

## Section 5.

### Assignment 3
- get filteredYear dropdown to actually filter the expenses list to only show those of that selecte filteredYear
- Hint: check out using javascript Array function .filter()
- do not actually remove items from expenses
- Approximate Time: 7min
- My time:2:43-3:05, syntax issue
#### Problems
- The correct form (... used to represent code in middle not needed for explanation)
```
  return (
      ...
        { filteredExpenses.map((expense) => ( 
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
```
- My incorrect form (used { } around the anonymous function instead of parenthesis)
```
        { filteredExpenses.map((expense) => { 
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })}
```
- This made <ExpenseItem> NOT render on the DOM ever...
#### Explanation
- TLDR The JSX Parser is treating the object <ExpenseItem> with {} around it as a code block. Use parenthesis
- https://stackoverflow.com/questions/39629962/arrow-function-without-curly-braces
- https://stackoverflow.com/questions/52562134/why-can-i-omit-the-return-statement-with-parenthesis-in-react

### Assignment 4
#### Description 
- Adding the conditions for hiding button, form, cancel
    - Show a button (Add New Expense) that when clicked, you see the add expense form inputs. The ExpenseForm will not be displayed by default
        - the Add New Expense button disappears when form shows up
        - clicking the Add Expense button makes the form disappears and the (Add New Expense) is shown again.
    - Add a (cancel) button to the form that also makes the form disappear BUT it does not submit or add a new expense
- Estimated Time to Complete: 8 min
- Actual Completion time: 48 min
#### Takeaway and solution difeferences
- Max added an isEditting state within the `NewExpense.js`. I kept all code within `ExpenseForm.js`. Which means mine always has a form, BUT that form can be the `Add New Expense` Closed, or the ExpenseForm is open. Max's solution at `NewExpense.js` level keeps
the close state different from the ExpenseForm state while my implementation changes the innards of ExpenseForm but there's always an ExpenseForm in mine.

#### Max's JSX:
using && conditional in the JSX at a level higher than mine
`NewExpense.js`
```
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
```

#### My JSX:
`ExpenseForm.js`
I'm using the variable `expenseForm` and doing conditional logic 
```
    expenseForm
```
Mine abstracts too much out from the return render and puts too much of the render inside the logic component of `Expenses.js` 