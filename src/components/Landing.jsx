import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {

  render() {
    return (
      <div id="landing">
        <h1 className="title">AthletX</h1>
        <Link to={ '/login' }>Login</Link>
        <Link to={ '/register' }>Register</Link>
      </div>
    );
  }

}

export default Landing;
