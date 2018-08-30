import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../firebase'

import { Button, TextField } from '@material-ui/core'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
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
    const email = this.state.email
    const password = this.state.password
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.setState({
          email: '',
          password: '',
        })
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  render() {
    return (
      <div id="login">
        <h2>Login</h2>
        <form className="login" onSubmit={ this.handleSubmit }>
          <TextField type="text" name="email" label="Email Address" onChange={ this.handleChange } value={ this.state.email } />
          <TextField type="password" name="password" label="Password" onChange={ this.handleChange } value={ this.state.password } />
          <Button type="submit" value="Login">Login</Button>
        </form>
      </div>
    );
  }

}

export default withRouter(Login);
