// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Welcome from './components/Welcome';

import { getCurrentUser } from './actions/currentUser';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render ={ props => !!this.props.currentUser ? <Home currentUser={this.props.currentUser} /> : <Welcome /> } />
          <Route exact path="/signup" render={ props => !!this.props.currentUser ? <Redirect to="/" /> : <SignUp /> } />
          <Route exact path="/login" render={ props => !!this.props.currentUser ? <Redirect to="/" /> : <Login /> } />
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
