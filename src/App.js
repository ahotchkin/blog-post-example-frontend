// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import { getCurrentUser } from './actions/currentUser';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        { !!this.props.currentUser ? <Home currentUser={this.props.currentUser} /> : <Login /> }
        <Switch>
          <Route exact path="/logout" render={ () => <Redirect to="/" /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = {
  getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
