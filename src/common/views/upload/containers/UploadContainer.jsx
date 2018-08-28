import React, { Component } from 'react';
import Upload from '../components/Upload';
import { dropImage } from '../../../redux/uploadModule/uploadModule';
import { connect } from 'react-redux';
import { uploadImage } from '../../../redux/uploadModule/uploadFunctions';

class UploadContainer extends Component {
  uploadImage = () => {
    const { upload } = this.props;
    const { accepted } = upload;
    if (accepted) {
      formData = new FormData();
      formData.appen(accepted[0].name, accepted[0]);
    }
    uploadImage('/api/upload', formData);
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

const mapState = ({ upload }) => ({
  upload,
});

const mapDispatch = {
  dropImage,
};

export default connect(mapState, mapDispatch)(UploadContainer);
