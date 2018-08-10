import React, { Component } from 'react';
import style from '../css/profileHeader.css';
import HeaderSection from './HeaderSection';


class ProfileHeader extends Component {

  render() {
  const { profile } = this.props;
    return (
      <header className = 'profile-header'>
        <div className = 'profile-image'>
          <img src = '/profile.svg' />
        </div>
        <HeaderSection
          profile = { profile }
        />
      </header>
    )
  }
}

export default ProfileHeader;
