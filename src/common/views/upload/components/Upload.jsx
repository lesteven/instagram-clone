import React, { Component, Fragment } from 'react';
import DropZone from 'react-dropzone';


class Upload extends Component {
  render() {
    const { dropImage, upload, uploadImage } = this.props;
    const { accepted, preview } = upload.post;
    console.log(accepted);
    accepted? console.log('preview',accepted) : null;
    return (
      <Fragment>
        <DropZone className = 'dropzone'
          accept = 'image/*'
          multiple = { false }
          onDrop = { dropImage }
          >
          { accepted? 
              <img src = { preview[0] } />
              : <p> Drag and drop or click! </p>
          }
        </DropZone>
        <button onClick = { uploadImage }> Upload! </button>
      </Fragment>
    )
  }
}

export default Upload;
