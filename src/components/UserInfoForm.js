import React, { Component } from 'react';

class UserInfoForm extends Component {

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
    this.props.onFormSubmit(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
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

          <input type="submit" value={this.props.buttonText} />
        </form>
      </div>
    )
  }

}

export default UserInfoForm;
