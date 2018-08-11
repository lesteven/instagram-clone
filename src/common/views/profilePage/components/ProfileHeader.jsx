import React, { Component } from 'react';
import style from '../css/profileHeader.css';
import HeaderSection from './HeaderSection';
import SectionContainer from '../containers/SectionContainer';


class ProfileHeader extends Component {

  render() {
    return (
      <header className = 'profile-header'>
        <div className = 'profile-image'>
          <img src = '/profile.svg' />
        </div>
        <SectionContainer />
      </header>
    )
  }
}

export default ProfileHeader;
