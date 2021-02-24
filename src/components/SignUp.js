import React from 'react';
import { connect } from 'react-redux';

import UserInfoForm from './UserInfoForm'
import { signUp } from '../actions/currentUser';

const SignUp = props => {
  return (
    <div>
      <h1>Sign Up Here!</h1>
      <UserInfoForm buttonText="Sign Up" onFormSubmit={props.signUp} />
    </div>
  )
}

export default connect(null, { signUp })(SignUp);
