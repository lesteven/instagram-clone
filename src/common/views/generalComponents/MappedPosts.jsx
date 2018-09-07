import React, { Component, Fragment } from 'react';
import Post from '../feed/components/Post';
import styles from './css/mappedPosts.css';

class MappedPosts extends Component {
  render() {
  const { data } = this.props;
    return (
      <Fragment>
        { data.map(e => 
            <Post 
              key = { e.username + e.imgname }
              data = { e }
              />)
        }
      </Fragment>
    )
  }
}

export default MappedPosts;
