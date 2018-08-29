import React, { Component } from 'react'

class Register extends Component {

  render() {
    return (
      <div id="register">
        <h2>Register for AthletX</h2>
        <input placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register"/>
      </div>
    );
  }

}

export default Register;
