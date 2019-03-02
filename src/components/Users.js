import React, { Component } from 'react';
import UsersList from './UsersList';
import UsersSearch from './UsersSearch';

export default class Users extends Component {
  state = {
    search: ''
  }

  onSearch = (search) => this.setState({ search });

  render = () => {
    const users = this.props.users.filter(user => (
      user.name.toLowerCase().includes(this.state.search.toLowerCase())
    ))

    return (
      <div className="Users">
        <UsersSearch search={this.state.search} onSearch={this.onSearch}/>
        <UsersList users={users}/>
      </div>
    );
  }
}
