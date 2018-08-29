import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import UploadContainer from './containers/UploadContainer';
import syles from './upload.css';


class UploadPage extends Component {

  render() {
    return (
      <MainTemplate>
        <UploadContainer />
      </MainTemplate>
    )
  }
}


export default UploadPage
