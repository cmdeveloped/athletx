import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../firebase'

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
    console.log(this.state)
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
          <input type="text" name="email" placeholder="Email Address" onChange={ this.handleChange } value={ this.state.email } />
          <input type="password" name="password" placeholder="Password" onChange={ this.handleChange } value={ this.state.password } />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }

}

export default withRouter(Login);
