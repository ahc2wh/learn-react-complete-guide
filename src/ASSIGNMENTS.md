
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

## Section 5. Assignment 3
- get filteredYear dropdown to actually filter the expenses list to only show those of that selecte filteredYear
- Hint: check out using javascript Array function .filter()
- do not actually remove items from expenses
- Approximate Time: 7min
- My time:2:43-3:05, syntax issue
### Problem
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
### Explanation
- TLDR The JSX Parser is treating the object <ExpenseItem> with {} around it as a code block. Use parenthesis
- https://stackoverflow.com/questions/39629962/arrow-function-without-curly-braces
- https://stackoverflow.com/questions/52562134/why-can-i-omit-the-return-statement-with-parenthesis-in-react

