import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import ProfileContainer from './containers/ProfileContainer';

class ProfilePage extends Component {
  render() {
    return (
      <MainTemplate>
        <ProfileContainer />
      </MainTemplate>
    )
  }
}

export default ProfilePage;
