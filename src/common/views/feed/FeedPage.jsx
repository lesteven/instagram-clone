import React, { Component, Fragment } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import FContainer from './containers/FContainer';
import FeedContainer from './containers/FeedContainer';
import styles from './css/feed.css';


const api = '/api/feed/';

class FeedPage extends Component {
  render() {
    return (
      <MainTemplate>
        <FContainer />
      </MainTemplate>
    )
  }
}


export default FeedPage;
