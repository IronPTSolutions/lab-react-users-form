import React from 'react';
import { languageName } from '../helpers/AppHelper';

export default (props) => (
  <div className="UsersList tile is-ancestor is-vertical">
    {props.users.map((user, i) => (
      <div className="tile is-child is-12" key={i}>
        <p className="title">{user.name}</p>
        <p className="subtitle">{user.email}</p>
        <div className="content">
          <p>{languageName(user.language)}</p>

          {user.admin && (
            <i className="fas fa-unlock"></i>
          )}
        </div>
      </div>
    ))}
  </div>
);