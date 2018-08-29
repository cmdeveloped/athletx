import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Splash extends Component {

  render() {
    return (
      <div id="splash">
        <h1>AthletX</h1>
        <Link to={ '/login' }>Login</Link>
        <Link to={ '/register' }>Register</Link>
      </div>
    );
  }

}

export default Splash;
