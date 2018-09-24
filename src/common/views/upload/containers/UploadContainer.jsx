import React, { Component } from 'react';
import Upload from '../components/Upload';
import { dropImage } from '../../../redux/uploadModule/uploadModule';
import { connect } from 'react-redux';
import uploadImage from '../../../redux/uploadModule/uploadFunctions';
import { withRouter } from 'react-router-dom';
import { clearProfilePage } from '../../../redux/profileModule/profileModule';
import { clearUpload } from '../../../redux/uploadModule/uploadModule';

class UploadContainer extends Component {
  uploadImage = () => {
    const { login, upload, uploadImage } = this.props;
    const { accepted } = upload.post;
    console.log(this.props); 
    if (accepted) {
      let formData = new FormData();
      formData.append(accepted[0].name, accepted[0]);
      uploadImage(`/api/upload/${login.userName}`, formData);
    }
  }
  componentDidUpdate(prevProps) {
    const { success, accepted } = this.props.upload;
    const { userName } = this.props.login;
    if (prevProps.upload.success !== success) {
      const { clearProfilePage, clearUpload } = this.props;
      clearProfilePage();
      clearUpload();
      this.props.history.push(`/${userName}`); 
      
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
  clearProfilePage,
  clearUpload,
};

export default withRouter(connect(mapState, mapDispatch)(UploadContainer));
