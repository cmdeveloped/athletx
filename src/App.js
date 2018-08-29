import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';

// styles
import './styles/all.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={ '/' } render={() => (
          <Splash />
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
