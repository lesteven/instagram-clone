import React, { Component, Fragment } from 'react';
import ProfileHeader from './ProfileHeader';


class Profile extends Component {

  render() {
  const { user } = this.props.login;
  const { profile } = this.props.match.params;
    return (
      <Fragment>
        <ProfileHeader profile = { profile } />
      </Fragment>
    )
  }
}

export default Profile;
