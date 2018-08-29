import React, { Component } from 'react';
import styles from '../css/post.css';


class Post extends Component {

  render() {
    const { userimage, username, postimage } = this.props;
    return (
      <div className = 'post-wrapper'>
        <div className = 'post-user'>
          <img src = { userimage } />
          <p> <strong>{ username }</strong></p>
        </div>
        <img src = { postimage } /> 
        <div className = 'post-data'>
        </div>
      </div>
    )
  }
}

export default Post; 
