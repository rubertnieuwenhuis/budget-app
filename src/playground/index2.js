import store from '/store/configureStore';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses); 
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 400, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Computer' }));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(-30000));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


