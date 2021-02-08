import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../actions/currentUser';

class SignUp extends Component {
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
    this.props.signUp(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <h1>Sign Up Here!</h1>
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

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp);
