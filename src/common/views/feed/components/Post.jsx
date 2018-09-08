import React, { Component } from 'react';
import styles from '../css/post.css';


class Post extends Component {

  render() {
    const { userimage, username, imgname, created_at} = this.props.data;
    return (
      <div className = 'post-wrapper'>
        <div className = 'post-user'>
          <img src = { userimage } />
          <p> <strong>{ username }</strong></p>
        </div>
        <img src = { imgname } /> 
        <div className = 'post-data'>
          <p className = 'date'> 
            { new Date(created_at).toDateString() } 
          </p>
        </div>
      </div>
    )
  }
}

export default Post; 
