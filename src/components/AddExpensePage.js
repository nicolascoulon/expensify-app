import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expensesActions';


export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    return (
      this.props.startAddExpense(expense),
      this.props.history.push('/')
      // redirect vers la page '/' 
    )
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => { dispatch(startAddExpense(expense)) }
  }
};


export default connect(undefined, mapDispatchToProps)(AddExpensePage);