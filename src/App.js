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
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { theme } from './styles/material-ui/MuiTheme'
import './styles/all.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user })
      } else {
        this.setState({ currentUser: null })
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <UserProvider value={this.state.currentUser}>
          <div id="app" style={{ backgroundColor: theme.palette.grey[100] }}>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
