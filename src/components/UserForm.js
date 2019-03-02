import React, { Component } from 'react';
import FormField from './FormField';
import FormCheckbox from './FormCheckbox';
import FormSelect from './FormSelect';
import { Redirect } from 'react-router-dom';

const languageOptions = [
  { title: 'English', value: 'en' },
  { title: 'Spanish', value: 'es' },
  { title: 'French', value: 'fr' },
];

const validators = {
  name:     v => v.length > 0,
  email:    v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
  password: v => v.length > 8 && v.toLowerCase() !== v && v.toUpperCase() !== v,
  language: v => languageOptions.map(opt => opt.value).includes(v),
  admin:    v => [true, false].includes(v)
}

export default class UserForm extends Component {
  state = {
    user: {
      name: '',
      email: '',
      password: '',
      language: 'en',
      admin: false
    },
    errors: {
      name: true,
      email: true,
      password: true
    },
    touch: {},
    toUsers: false
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target

    const error = {
      [name]: !validators[e.target.name](type == 'checkbox' ? checked : value)
    }

    this.setState({
      user: {
        ...this.state.user,
        [name]: type == 'checkbox' ? checked : value
      },
      errors: {
        ...this.state.errors,
        ...error
      }
    });
  }

  handleBlur = (e) => {
    this.setState({
      touch: {
        ...this.state.touch,
        [e.target.name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ toUsers: true }, () => this.props.onAddUser({ ...this.state.user }));
  };

  render = () => {
    if (this.state.toUsers) {
      return <Redirect exact to="/users"/>
    }

    const isError = Object.values(this.state.errors).some(error => error);

    return (
      <div className="UserForm">
        <form onSubmit={this.handleSubmit}>
          <FormField title="Name" name="name" value={this.state.user.name}
            onChange={this.handleChange} icon="fas fa-user" error={this.state.errors.name}
            onBlur={this.handleBlur} touch={this.state.touch.name}/>

          <FormField title="Email" name="email" value={this.state.user.email}
            onChange={this.handleChange} icon="fas fa-at" type="email"
            error={this.state.errors.email} onBlur={this.handleBlur} touch={this.state.touch.email} />

          <FormField title="Password" name="password" value={this.state.user.password}
            onChange={this.handleChange} icon="fas fa-key" type="password"
            error={this.state.errors.password} onBlur={this.handleBlur} touch={this.state.touch.password} />

          <FormCheckbox title="Admin" name="admin" value={this.state.user.admin}
            onChange={this.handleChange} error={this.state.errors.admin} onBlur={this.handleBlur}
            touch={this.state.touch.admin} />

          <FormSelect title="Language" name="language" value={this.state.user.language}
            onChange={this.handleChange} options={languageOptions}
            error={this.state.errors.language} onBlur={this.handleBlur} touch={this.state.touch.language} />

          <div className="control">
            <button className="button is-info" disabled={isError}>
              <span className="icon is-small">
                <i className="fas fa-check"></i>
              </span>
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}