import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { auth } from '../firebase'
import { UserConsumer } from './Context'

import { Button } from '@material-ui/core'

class Header extends Component {
  constructor() {
    super()
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    auth.signOut()
      .then(() => {
        this.props.history.push('/')
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  render() {
    return (
      <UserConsumer>
        {user =>
          <header id="header">
            <div className="left">
              Links Here
            </div>
            <div className="right">
              { user !== null ?
                <div className="user">
                  <p>Welcome, { user.displayName }</p>
                  <Button onClick={ this.handleLogout }>Logout</Button>
                </div>
                  :
                <Link to="/login">Login</Link> }
            </div>
          </header>
        }
      </UserConsumer>
    );
  }

}

export default withRouter( Header )
