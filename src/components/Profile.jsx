import React, { Component } from 'react';
import { UserConsumer } from './Context'

class Profile extends Component {

  render() {
    return (
      <UserConsumer>
        {user =>
          <div id="profile">
            { user.displayName }
          </div>
        }
      </UserConsumer>
    );
  }
}

export default Profile;
