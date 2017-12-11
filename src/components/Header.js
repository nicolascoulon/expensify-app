import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/authActions';
import { connect } from 'react-redux';


export const Header = ({ startLogout }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
};


const mapDispatchToProp = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);



 // <NavLink to="/dashboard" activeClassName="is-active" /*exact={true}*/>Dashboard</NavLink>
 //<NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
//<NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>

