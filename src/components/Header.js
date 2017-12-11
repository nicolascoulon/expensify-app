import React from 'react';
import { NavLink} from 'react-router-dom';
import { startLogout } from '../actions/authActions';
import { connect } from 'react-redux';


export const Header = ( {startLogout} ) => {
  return (
      <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active" /*exact={true}*/>Dashboard</NavLink>
       <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
       <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>
        <button onClick={startLogout}>Logout</button>
      </header>
  )
};


const mapDispatchToProp = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);

