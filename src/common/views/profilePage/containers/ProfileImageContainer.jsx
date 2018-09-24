import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileImageDrop from '../components/ProfileImageDrop';
import { dropProfile } from '../../../redux/uploadModule/uploadModule';

class ProfileImageContainer extends Component {

  render() {
    const { profile, login } = this.props;
    const { userimage } = profile;
    return (
      <div className = 'profile-image'>
        { login.userName !== profile.profile?
          <img src = { userimage }/>
          : <ProfileImageDrop { ...this.props } />
        }
      </div>
    )
  }
}

const mapState = ({ profile, login }) => ({
  profile,
  login,
});

const mapDispatch = {
  dropProfile,
};

export default connect(mapState, mapDispatch)(ProfileImageContainer);
