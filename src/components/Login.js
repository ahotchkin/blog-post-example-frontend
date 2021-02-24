import React from 'react';
import { connect } from 'react-redux';

import UserInfoForm from './UserInfoForm'
import { login } from '../actions/currentUser';

const Login = props => {
  return (
    <div>
      <h1>Log In Here!</h1>
      <UserInfoForm buttonText="Log In" onFormSubmit={props.login} />
    </div>
  )
}

export default connect(null, { login })(Login);
