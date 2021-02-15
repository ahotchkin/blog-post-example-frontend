import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Table from './Table.js';

import { logout } from '../actions/currentUser';

const Home = props => {

  const handleOnSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
    <div>
      <h1>Welcome to your Home Page, {props.currentUser.attributes.username}!</h1>
      <Table />
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
