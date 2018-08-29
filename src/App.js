import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { auth } from './firebase'

// components
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

// styles
import './styles/all.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path={ '/' } render={() => (
          auth.currentUser !== null ? <Profile /> : <Landing />
        )}/>
        <Route path={ '/login' } render={() => (
          <Login />
        )}/>
        <Route path={ '/register' } render={() => (
          <Register />
        )}/>
      </div>
    );
  }
}

export default App;
