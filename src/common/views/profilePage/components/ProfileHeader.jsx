
import React, { Component } from 'react';



class ProfileHeader extends Component {

  render() {
  const { profile } = this.props;
    return (
      <header className = 'user-header'>
        <p> hello { profile } !</p> 
      </header>
    )
  }
}

export default ProfileHeader;
