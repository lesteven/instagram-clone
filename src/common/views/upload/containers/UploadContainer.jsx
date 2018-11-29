import React, { Fragment, Component } from 'react';
import Upload from '../components/Upload';
import { dropImage } from '../../../redux/uploadModule/uploadModule';
import { connect } from 'react-redux';
import uploadImage from '../../../redux/uploadModule/uploadFunctions';
import { withRouter } from 'react-router-dom';
import { clearProfilePage } from '../../../redux/profileModule/profileModule';
import { clearUpload } from '../../../redux/uploadModule/uploadModule';
import FlashMsg from '../../generalComponents/FlashMsg';

const api = '/api/upload/post';

class UploadContainer extends Component {
  uploadImage = () => {
    const { login, upload, uploadImage } = this.props;
    const { accepted } = upload.post;
    const url = `${api}/${login.userName}`;
    if (accepted) {
      let formData = new FormData();
      formData.append(accepted[0].name, accepted[0]);
      uploadImage(url, formData);
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
    const { login, error } = this.props;
    const url = `${api}/${login.userName}`;
    const err = error[url];
    return (
      <Fragment>
        <h2>Only upload images that are 1MB or less</h2>
        { err? <FlashMsg className = 'fail'
                msg = 'image size is over 1MB!' /> 
          : null }
        <Upload 
          { ...this.props }
          uploadImage = { this.uploadImage }
        />
      </Fragment>
    )
  }
}

const mapState = ({ login, upload, error}) => ({
  login,
  upload,
  error,
});

const mapDispatch = {
  dropImage,
  uploadImage,
  clearProfilePage,
  clearUpload,
};

export default withRouter(connect(mapState, mapDispatch)(UploadContainer));
