import React, { Component } from 'react';
import Upload from '../components/Upload';
import { dropImage } from '../../../redux/uploadModule/uploadModule';
import { connect } from 'react-redux';
import uploadImage from '../../../redux/uploadModule/uploadFunctions';

class UploadContainer extends Component {
  uploadImage = () => {
    const { login, upload, uploadImage } = this.props;
    const { accepted } = upload;
    console.log(this.props); 
    if (accepted) {
      let formData = new FormData();
      formData.append(accepted[0].name, accepted[0]);
      uploadImage(`/api/upload/${login.userName}`, formData);
    }
  }
  render() {
    return (
      <Upload 
        { ...this.props }
        uploadImage = { this.uploadImage }
      />
    )
  }
}

const mapState = ({ login, upload }) => ({
  login,
  upload,
});

const mapDispatch = {
  dropImage,
  uploadImage,
};

export default connect(mapState, mapDispatch)(UploadContainer);
