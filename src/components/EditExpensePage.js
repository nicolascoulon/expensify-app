import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expensesActions';


export class EditExpensePage extends React.Component {
onSubmit = (expense) => {
 return (
    this.props.editExpense(expense),
    this.props.history.push('/') 
    // redirect vers la page '/' 
    )
};
onRemove = () => {
  
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
    
};


  render () {
  return (
    <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit} />
      <button onClick={this.onRemove}>Remove</button>
    </div>
  )
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)) ,
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  };
};


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


//props.match.params.id} => /edit/id de l 'objet