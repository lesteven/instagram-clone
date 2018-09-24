import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileImageDrop from '../components/ProfileImageDrop';
import { dropProfile } from '../../../redux/uploadModule/uploadModule';
import uploadImage from '../../../redux/uploadModule/uploadFunctions';


class ProfileImageContainer extends Component {
  componentDidUpdate(prevProps) {
    const { upload, login, uploadImage } = this.props;
    const { accepted } = upload.userimage;
    if (prevProps.upload !== upload && accepted ) {
      console.log('image dropped!');
      let formData = new FormData();
      formData.append(accepted[0].name, accepted[0]);
      uploadImage(`/api/upload/userimage/${login.userName}`, formData);
    }
  }
  render() {
    const { profile, login } = this.props;
    const { userimage } = profile;
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
  uploadImage,
};

export default connect(mapState, mapDispatch)(ProfileImageContainer);
