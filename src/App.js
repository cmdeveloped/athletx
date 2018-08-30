import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { auth } from './firebase'

// components
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import { UserProvider } from './components/Context'

// styles
import './styles/all.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user })
      } else {
        this.setState({ currentUser: null })
      }
      console.log(this.state)
    })
  }

  render() {
    return (
      <UserProvider value={this.state.currentUser}>
        <div className="App">
          <Route exact path={ '/' } render={() => (
            this.state.currentUser !== null ? <Profile /> : <Landing />
          )}/>
          <Route path={ '/login' } render={() => (
            <Login />
          )}/>
          <Route path={ '/register' } render={() => (
            <Register />
          )}/>
        </div>
      </UserProvider>
    );
  }
}

export default App;
