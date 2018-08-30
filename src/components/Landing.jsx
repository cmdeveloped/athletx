import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// styles
import { theme } from '../styles/material-ui/MuiTheme'
import { Button } from '@material-ui/core'

class Landing extends Component {

  render() {
    return (
      <div id="landing">
        <main>
          <h1 className="app-logo" style={{ color: theme.palette.primary[800]}}>ATHLETx</h1>
          <Link to={ '/login' }>
            <Button color="secondary" variant="raised" size="large">Login</Button>
          </Link>
          <Link to={ '/register' }>
            <Button color="primary" variant="flat" size="large">Register</Button>
          </Link>
        </main>
      </div>
    );
  }

}

export default Landing;
