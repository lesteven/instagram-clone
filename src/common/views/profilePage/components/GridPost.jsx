import React, { Component } from 'react';
import styles from '../css/gridPost.css';


class GridPost extends Component {

  render() {
    const { data } = this.props;
    return (
      <div className = 'grid-img-wrapper' key = { data.id }>
        <img src = { data.imgname } />
      </div>
    )
  }
}


export default GridPost;
