import React, { Component } from 'react'
import { auth } from '../firebase'

import { Button, TextField } from '@material-ui/core'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = null
    const username = this.state.username
    const email = this.state.email
    const password = this.state.password
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        user = auth.currentUser
        user.sendEmailVerification()
      })
      .then(() => {
        user.updateProfile({ displayName: username })
        this.setState({
          username: '',
          email: '',
          password: ''
        })
        console.log(user)
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  render() {
    return (
      <div id="register">
        <h2 className="title">Register for <span className="app-logo">ATHLETx</span></h2>
        <form className="registration" onSubmit={ this.handleSubmit }>
          <TextField type="text" name="username" label="Username" onChange={ this.handleChange } value={ this.state.username } />
          <TextField type="text" name="email" label="Email Address" onChange={ this.handleChange } value={ this.state.email } />
          <TextField type="password" name="password" label="Password" onChange={ this.handleChange } value={ this.state.password } />
          <Button type="submit" value="Register">Register</Button>
        </form>
      </div>
    );
  }

}

export default Register;
