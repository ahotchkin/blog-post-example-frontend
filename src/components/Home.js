import React from 'react';
import { logout } from '../actions/currentUser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props => {

  const handleOnSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
    <div>
      <h1>Welcome to your Home Page, {props.currentUser.username}!</h1>
      {/*
      <form onSubmit={handleOnSubmit}>
        <input type="submit" value="Log Out" />
      </form>
      */}
      <Link to="/logout" onClick={props.logout}>
        Log Out
      </Link>

    </div>
  )

}

export default connect(null, { logout })(Home);
