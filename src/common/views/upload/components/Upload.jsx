import React, { Component } from 'react';
import DropZone from 'react-dropzone';


class Upload extends Component {
  render() {
    const { dropImage, upload, uploadImage } = this.props;
    const { accepted } = upload;
    return (
      <div className = 'top-pad upload-wrapper'>
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
      </div>
    )
  }
}

export default Upload;
