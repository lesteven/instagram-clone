import React, { Component } from 'react';
import DropZone from 'react-dropzone';


class Upload extends Component {
  render() {
    const { dropImage } = this.props;
    console.log(this.props);
    return (
      <div className = 'top-pad upload-wrapper'>
        <DropZone className = 'dropzone'
          accept = 'image/*'
          multiple = { false }
          onDrop = { dropImage }
          >
          <p> Drag and drop or click! </p>
        </DropZone>
      </div>
    )
  }
}

export default Upload;
