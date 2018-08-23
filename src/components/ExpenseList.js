import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selector/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>This is expenselist</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense}/>
      })}
  </div>
);

const mapStateToProps = ({ expenses, filters }) => ({ expenses: getVisibleExpenses(expenses, filters) });

export default connect(mapStateToProps)(ExpenseList);