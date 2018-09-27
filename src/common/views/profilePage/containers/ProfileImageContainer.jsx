import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileImageDrop from '../components/ProfileImageDrop';
import {
  clearUpload,
  dropProfile
} from '../../../redux/uploadModule/uploadModule';
import { uploadProfile } from '../../../redux/uploadModule/uploadFunctions';


class ProfileImageContainer extends Component {
  componentDidUpdate(prevProps) {
    const { upload, login, uploadProfile, clearUpload } = this.props;
    const { accepted } = upload.userimage;
    if (prevProps.upload !== upload && accepted ) {
      console.log('image dropped!');
      let formData = new FormData();
      formData.append(accepted[0].name, accepted[0]);
      uploadProfile(`/api/upload/userimage/${login.userName}`, formData);
      clearUpload();
    }
  }
  render() {
    const { profile, login } = this.props;
    const { userimage } = profile;
    const image = `/${userimage}`;
    return (
      <div className = 'profile-image'>
        { login.userName !== profile.profile?
          <img src = { userimage }/>
          : <ProfileImageDrop 
            { ...this.props } 
            />
        }
      </div>
    )
  }
}

const mapState = ({ profile, login, upload }) => ({
  profile,
  login,
  upload,
});

const mapDispatch = {
  dropProfile,
  uploadProfile,
  clearUpload,
};

export default connect(mapState, mapDispatch)(ProfileImageContainer);
