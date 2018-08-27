import React, { Component } from 'react';
import Upload from '../components/Upload';
import { dropImage } from '../../../redux/uploadModule/uploadModule';
import { connect } from 'react-redux';


class UploadContainer extends Component {

  render() {
    return (
      <Upload { ...this.props }/>
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
