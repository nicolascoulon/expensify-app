import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesActions';
import { setTextFilter } from './actions/filtersActions';
import  getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(addExpense({ description: 'water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'surf', createdAt: 1000}));
store.dispatch(addExpense({ description: 'gas bill'}));
store.dispatch(addExpense({ description: 'rent', amount: 12500}));
//store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


console.log(visibleExpenses);

ReactDOM.render( jsx , document.getElementById('app'));
