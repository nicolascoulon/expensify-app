import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensesActions';
import { setTextFilter } from './actions/filtersActions';
import  getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render( <p>loading...</p> , document.getElementById('app'));

store.dispatch(startSetExpenses()).then( () => {
ReactDOM.render( jsx , document.getElementById('app'));
});


