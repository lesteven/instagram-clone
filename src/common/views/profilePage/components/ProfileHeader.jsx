import React, { Component } from 'react';
import style from '../css/profileHeader.css';
import HeaderSection from './HeaderSection';
import HeaderContainer from '../containers/HeaderContainer';
import ProfileImageContainer from '../containers/ProfileImageContainer';

class ProfileHeader extends Component {

  render() {
    return (
      <header className = 'profile-header'>
        <ProfileImageContainer />
        <HeaderContainer />
      </header>
    )
  }
}

export default ProfileHeader;
