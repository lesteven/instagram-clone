import React, { Component, Fragment } from 'react';
import DropZone from 'react-dropzone';


class Upload extends Component {
  render() {
    const { dropImage, upload, uploadImage } = this.props;
    const { accepted, preview } = upload.post;
    return (
      <Fragment>
        <DropZone className = 'dropzone'
          accept = 'image/*'
          multiple = { false }
          onDrop = { dropImage }
          >
          { accepted? 
              <img src = { preview[0] } />
              : <h2> Drag and drop or click! </h2>
          }
        </DropZone>
          { accepted?
            <button className = 'upload-button' 
              onClick = { uploadImage }> Upload! </button>
            : null }
      </Fragment>
    )
  }
}

export default Upload;
