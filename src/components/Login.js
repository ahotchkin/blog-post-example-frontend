import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/currentUser';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.login(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <h1>Log In Here!</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />

          <br />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />

          <br />

          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(Login);
