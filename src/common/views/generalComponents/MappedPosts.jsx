import React, { Component, Fragment } from 'react';
import Post from '../feed/components/Post';
import styles from './css/mappedPosts.css';

class MappedPosts extends Component {
  render() {
  const { data } = this.props;
    return (
      <div className = 'all-posts'>
        { data.map(e => 
            <Post 
              key = { e.username + e.imgname }
              userimage = { e.userimage } 
              username = { e.username }
              imgname = { e.imgname }
              created_at = { e.created_at }
              />)
        }
      </div>
    )
  }
}

export default MappedPosts;
