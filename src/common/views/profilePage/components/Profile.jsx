import React, { Component, Fragment } from 'react';
import ProfileHeader from './ProfileHeader';


class Profile extends Component {

  render() {
  const { user } = this.props.login;
  const { profile } = this.props.match.params;
    return (
      <div className = 'top-pad'>
        <ProfileHeader profile = { profile } />
      </div>
    )
  }
}

export default Profile;
