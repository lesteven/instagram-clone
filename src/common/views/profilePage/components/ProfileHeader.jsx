import React, { Component } from 'react';
import style from '../css/profileHeader.css';
import HeaderSection from './HeaderSection';
import HeaderContainer from '../containers/HeaderContainer';


class ProfileHeader extends Component {

  render() {
    return (
      <header className = 'profile-header'>
        <div className = 'profile-image'>
          <img src = '/profile.svg' />
        </div>
        <HeaderContainer />
      </header>
    )
  }
}

export default ProfileHeader;
