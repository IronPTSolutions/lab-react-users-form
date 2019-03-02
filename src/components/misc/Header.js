import React from 'react';
import { NavLink} from 'react-router-dom';

export default () => (
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink className="navbar-item has-text-weight-bold" to="/">
        Iron Users
      </NavLink>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink exact to="/users" activeClassName="is-active" className="navbar-item">
          Users
        </NavLink>

        <NavLink to="/users/new" activeClassName="is-active" className="navbar-item">
          Add User
        </NavLink>
      </div>
    </div>
  </nav>
);