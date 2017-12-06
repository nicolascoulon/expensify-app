import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import  getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense list</h1>
            { props.expenses.length === 0 ?
            <p>No expenses</p>
            :
            props.expenses.map( (expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);

 
