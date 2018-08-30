import React, { Component } from 'react';
import { UserConsumer } from './Context'

import Header from './Header'

class Profile extends Component {

  render() {
    return (
      <UserConsumer>
        {user =>
          <div id="profile">
            <Header />
          </div>
        }
      </UserConsumer>
    );
  }
}

export default Profile;
