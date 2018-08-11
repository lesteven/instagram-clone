import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import Profile from './components/Profile';


class ProfilePage extends Component {
  render() {
    return (
      <MainTemplate>
        <Profile />
      </MainTemplate>
    )
  }
}

export default ProfilePage;
