import React, { Component } from 'react';
import { UserConsumer } from './Context'
import { db, sports, currentUser } from '../firebase'

import Header from './Header'

class Profile extends Component {

  render() {
    return (
      <UserConsumer>
        {user =>
          <div id="profile">
            { allSports }
          </div>
        }
      </UserConsumer>
    );
  }
}

const allSports = []

export default Profile;
