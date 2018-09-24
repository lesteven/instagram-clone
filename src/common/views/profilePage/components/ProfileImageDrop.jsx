import React, { Component, Fragment } from 'react';
import DropZone from 'react-dropzone';


class ProfileImageDrop extends Component {
  render() {
    const { dropProfile, profile } = this.props;
    const { userimage } = profile;
    return (
      <Fragment>
        <DropZone className = 'drop-profile'
          accept = 'image/*'
          multiple = { false }
          onDrop = { dropProfile}
          >
      
          <img src = { userimage }/>
        </DropZone>
      </Fragment>
    )
  }
}

export default ProfileImageDrop;
