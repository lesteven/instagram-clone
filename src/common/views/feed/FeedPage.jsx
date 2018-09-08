import React, { Component, Fragment } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import FeedContainer from './containers/FeedContainer';
import styles from './css/feed.css';

class FeedPage extends Component {

  render() {
    return (
      <MainTemplate>
        <FeedContainer />
      </MainTemplate>
    )
  }
}

export default FeedPage;
