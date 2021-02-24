import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Table from './Table.js';

import { logout } from '../actions/currentUser';

const Home = props => {

  return (
    <div>
      <h1>Welcome to your Home Page, {props.currentUser.attributes.username}!</h1>
      <Table />
      <Link to="/logout" onClick={props.logout}>
        Log Out
      </Link>

    </div>
  )

}

export default connect(null, { logout })(Home);
