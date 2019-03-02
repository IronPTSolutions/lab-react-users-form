import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from './components/misc/Header';
import UserForm from './components/UserForm';
import Users from './components/Users';

class App extends Component {
  state = {
    users: [],
    redirectToUsersList: false
  }

  addUser = (user, cb) => {
    this.setState({ users: [...this.state.users, user], redirectToUsersList: true }, cb);
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/users" component={() => <Users users={this.state.users} />} />
              <Route exact path="/users/new" component={() => <UserForm onAddUser={this.addUser}/>}/>
              <Redirect to='/users'/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
