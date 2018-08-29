import React, { Component } from 'react'
import { auth } from '../firebase'

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
        <h2>Register for AthletX</h2>
        <form className="registration" onSubmit={ this.handleSubmit }>
          <input type="text" name="username" placeholder="Username" onChange={ this.handleChange } value={ this.state.username } />
          <input type="text" name="email" placeholder="Email Address" onChange={ this.handleChange } value={ this.state.email } />
          <input type="password" name="password" placeholder="Password" onChange={ this.handleChange } value={ this.state.password } />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }

}

export default Register;
