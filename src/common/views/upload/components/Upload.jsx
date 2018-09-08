import React, { Component, Fragment } from 'react';
import DropZone from 'react-dropzone';


class Upload extends Component {
  render() {
    const { dropImage, upload, uploadImage } = this.props;
    const { accepted } = upload;
    return (
      <Fragment>
        <DropZone className = 'dropzone'
          accept = 'image/*'
          multiple = { false }
          onDrop = { dropImage }
          >
          { accepted? 
              <img src = { accepted[0].preview } />
              : <p> Drag and drop or click! </p>
          }
        </DropZone>
        <button onClick = { uploadImage }> Upload! </button>
      </Fragment>
    )
  }
}

export default Upload;
