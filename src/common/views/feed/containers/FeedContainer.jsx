import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteComp from '../../profilePage/components/InfiniteComp';
import getFeed from '../../../redux/feedModule/feedFunctions';

/*
  hasNextPage
  - checks if has more data
  isNextPageLoading
  - check if data is being fetched
  list
  - feed data
  loadNextPage
  - gets more data from server
   
*/

class FeedContainer extends Component {
  loadNextPage = ({ startIndex, stopIndex }) => {
    const { getFeed, login } = this.props;
    const { feed } = this.props.feed;
    const id = feed[startIndex-1].id;
    const url = `/api/feed/older/${login.userName}/${id}`;

    return new Promise(resolve => {
      getFeed(url);
    });
  }
  render() {
    const { feed, hasOldPage, fetchStatus } = this.props.feed; 
    if (feed) {
      return (
        <InfiniteComp 
          hasNextPage = { hasOldPage }
          isNextPageLoading = { fetchStatus }
          list = { feed }
          loadNextPage = { this.loadNextPage }
        />
      )
    } else {
      return <div></div>
    }
  }
}

const mapState = ({ feed, login }) => ({
  feed,
  login,
});

const mapDispatch = {
  getFeed,
}

export default connect(mapState,mapDispatch)(FeedContainer);
