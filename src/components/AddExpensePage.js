import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expensesActions';


export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    return (
    this.props.addExpense(expense),
    this.props.history.push('/') 
    // redirect vers la page '/' 
    )
  };
  render() {
    return (
      <div>
        <h1>Add expense</h1>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  addExpense: (expense) => { dispatch(addExpense(expense)) }
}};


export default connect(undefined, mapDispatchToProps)(AddExpensePage);